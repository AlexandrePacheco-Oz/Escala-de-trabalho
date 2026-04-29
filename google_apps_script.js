// CÓDIGO DO BACKEND (GOOGLE APPS SCRIPT)
// 1. Abra um novo Google Sheets em branco.
// 2. Vá em Extensões > Apps Script.
// 3. Apague todo o código que estiver lá e cole este código abaixo.
// 4. Clique em "Implantar" > "Nova implantação".
// 5. Selecione o tipo "App da Web".
// 6. Execute como: "Eu".
// 7. Quem tem acesso: "Qualquer pessoa" (Isso é muito importante).
// 8. Clique em "Implantar", autorize os acessos e copie o "URL do app da Web".

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var monthName = e.parameter.month;
  var action = e.parameter.action;
  var sheet = null;
  
  if (action === 'backup') {
    try {
      var backupUrl = createBackup(ss);
      return ContentService.createTextOutput(JSON.stringify({ success: true, url: backupUrl }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  if (monthName) {
    sheet = ss.getSheetByName(monthName);
    
    // RECUPERAÇÃO AUTOMÁTICA DE DADOS: 
    // Se não achou a aba do mês, OU se achou mas ela está vazia (só cabeçalho), busca a Página1 com seus dados!
    if (!sheet || sheet.getLastRow() <= 1) {
      var oldSheet = ss.getSheetByName("Página1") || ss.getSheetByName("Página 1") || ss.getSheetByName("Sheet1");
      
      // Se a Página1 existe e tem dados reais
      if (oldSheet && oldSheet.getLastRow() > 1) {
        if (sheet) {
          // Deleta a aba nova vazia que foi criada por engano
          ss.deleteSheet(sheet); 
        }
        // Renomeia a aba com seus dados valiosos para o mês atual
        oldSheet.setName(monthName);
        sheet = oldSheet;
      }
    }
  } else {
    // Se nenhum mês for fornecido, tenta usar a ativa (compatibilidade)
    sheet = ss.getActiveSheet();
  }
  
  // Se a planilha não existe (novo mês), retorna um array vazio
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var data = sheet.getDataRange().getDisplayValues();
  
  // Se a planilha estiver vazia, retorna um array vazio
  if (data.length <= 1) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var rows = data.slice(1);
  var teamsMap = {};

  rows.forEach(function(row) {
    var equipe = row[0];
    var id = row[1];
    var nome = row[2];
    var turno = row[3];
    
    // Ignora linhas vazias
    if (!equipe || !nome) return;
    
    if (!teamsMap[equipe]) {
      teamsMap[equipe] = {
        name: equipe,
        members: []
      };
    }
    
    var days = {};
    for (var i = 1; i <= 31; i++) {
      var status = row[i + 3];
      if (status) {
        days[i] = status.toString().trim();
      }
    }
    
    teamsMap[equipe].members.push({
      id: id || new Date().getTime() + Math.random(),
      name: nome,
      shift: turno,
      days: days
    });
  });

  var teamsArray = Object.keys(teamsMap).map(function(key) {
    return teamsMap[key];
  });

  return ContentService.createTextOutput(JSON.stringify(teamsArray))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // O painel agora manda { month: "2026-04", teams: [...] }
    var monthName = payload.month;
    var teams = payload.teams || payload; // fallback para array direto (compatibilidade)
    
    if (!monthName) {
      // Se não vier mês, cria um com a data atual para fallback
      var d = new Date();
      monthName = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2);
    }
    
    var sheet = ss.getSheetByName(monthName);
    
    if (!sheet) {
      sheet = ss.insertSheet(monthName);
    }
    
    // Limpa a planilha atual para sobrescrever com os dados novos
    sheet.clear();
    
    // Prepara os cabeçalhos (Equipe, ID, Nome, Turno, Dias 1 a 31)
    var headers = ["Equipe", "ID", "Colaborador", "Turno"];
    for (var i = 1; i <= 31; i++) {
      headers.push(i.toString());
    }
    
    var rows = [headers];
    
    // Transforma o JSON do aplicativo de volta em formato de tabela
    teams.forEach(function(team) {
      team.members.forEach(function(member) {
        var row = [
          team.name,
          member.id,
          member.name,
          member.shift
        ];
        
        for (var d = 1; d <= 31; d++) {
          row.push(member.days[d] || "");
        }
        
        rows.push(row);
      });
    });
    
    // Escreve os dados na planilha
    sheet.getRange(1, 1, rows.length, headers.length).setValues(rows);
    
    // Formata o cabeçalho para ficar bonito
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f4f6");
    
    // Limpeza automática: Mantém apenas os últimos 4 meses
    cleanupOldSheets(ss);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Função para limpar abas antigas e manter apenas os meses mais recentes.
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} ss O Spreadsheet ativo.
 */
function cleanupOldSheets(ss) {
  var sheets = ss.getSheets();
  var monthSheets = [];
  var monthPattern = /^\d{4}-\d{2}$/;

  // Coleta todas as abas que seguem o padrão AAAA-MM
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName();
    if (monthPattern.test(name)) {
      monthSheets.push({
        name: name,
        sheet: sheets[i]
      });
    }
  }

  // Ordena as abas por nome (AAAA-MM ordena cronologicamente como string)
  monthSheets.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  // Se houver mais de 4 meses, exclui os mais antigos
  var MAX_MONTHS = 4;
  while (monthSheets.length > MAX_MONTHS) {
    var oldest = monthSheets.shift();
    try {
      ss.deleteSheet(oldest.sheet);
      console.log("Aba antiga excluída: " + oldest.name);
    } catch (e) {
      console.error("Erro ao excluir aba " + oldest.name + ": " + e.message);
  }
}

/**
 * Cria uma cópia da planilha inteira como backup.
 */
function createBackup(ss) {
  var date = new Date();
  var timestamp = Utilities.formatDate(date, "GMT-3", "yyyy-MM-dd_HH-mm-ss");
  var name = "BACKUP_Escala_" + timestamp;
  
  // Cria a cópia
  var file = DriveApp.getFileById(ss.getId()).makeCopy(name);
  return file.getUrl();
}
