let TEAMS_DATA = [
    {
        name: "Aço Cearense",
        members: [
            { id: 1, name: "Ramon Lima", shift: "08:00 - 18:00", days: { 1: "HO", 4: "T", 5: "T", 6: "T", 7: "HO", 8: "T", 11: "T", 12: "T", 13: "T", 14: "HO", 15: "T", 18: "T", 19: "T", 20: "T", 21: "HO", 22: "T", 25: "T", 26: "T", 27: "T", 28: "HO", 29: "T" } },
            { id: 2, name: "João Sales", shift: "08:00 - 18:00", days: { 1: "BH", 4: "BH", 5: "T", 6: "HO", 7: "T", 8: "T", 11: "T", 12: "BH", 13: "HO", 14: "T", 15: "T", 18: "T", 19: "T", 20: "HO", 21: "T", 22: "T", 25: "T", 26: "T", 27: "HO", 28: "T", 29: "T" } },
            { id: 3, name: "Brunielle Sanches", shift: "08:00 - 18:00", days: { 1: "F", 4: "T", 5: "T", 6: "HO", 7: "T", 8: "T", 11: "T", 12: "T", 13: "HO", 14: "T", 15: "T", 18: "T", 19: "T", 20: "HO", 21: "T", 22: "T", 25: "T", 26: "T", 27: "HO", 28: "T", 29: "T" } },
            { id: 12, name: "Leonardo Silva", shift: "Turno A (06:00 - 16:00)", days: { 1: "T", 2: "T", 3: "T", 4: "FS", 5: "FS", 6: "T", 7: "T", 8: "T", 9: "T", 10: "T" } },
            { id: 13, name: "Lucas Souza", shift: "Turno A (06:00 - 16:00)", days: { 1: "HO", 2: "HO", 3: "HO", 4: "FS", 5: "FS", 6: "HO", 7: "HO", 8: "HO", 9: "HO", 10: "HO" } },
            { id: 14, name: "Charles Machado", shift: "06:00 - 16:00", days: { 1: "T", 2: "T", 3: "T", 6: "T", 7: "T", 8: "T" } },
            { id: 15, name: "Alexandre Pacheco", shift: "13:00 - 23:00", days: { 1: "HO", 2: "HO", 3: "HO", 6: "HO", 7: "HO" } },
            { id: 16, name: "Eric Pereira", shift: "13:00 - 23:00", days: { 1: "T", 2: "T", 3: "T", 6: "T", 7: "T" } },
            { id: 17, name: "Alexander Santos", shift: "13:00 - 23:00", days: { 1: "T", 2: "T", 3: "T", 6: "T", 7: "T" } }
        ]
    },
    {
        name: "TIM & GDO",
        members: [
            { id: 4, name: "Wellington Torres", shift: "08:00 - 18:00", days: { 1: "T", 2: "T", 3: "T", 4: "FS", 5: "FS", 6: "T", 7: "T", 8: "HO", 9: "HO", 10: "T", 11: "FS", 12: "FS", 13: "T", 14: "T", 15: "T", 16: "T", 17: "T", 18: "FS", 19: "FS", 20: "T", 21: "FR", 22: "T", 23: "T", 24: "T", 25: "FS", 26: "FS", 27: "T", 28: "T", 29: "T", 30: "T" } },
            { id: 5, name: "Claiton Abreu", shift: "08:00 - 18:00", days: { 1: "HO", 2: "HO", 3: "HO", 4: "FS", 5: "FS", 6: "HO", 7: "HO", 8: "T", 9: "T", 10: "HO", 11: "FS", 12: "FS", 13: "HO", 14: "HO", 15: "HO", 16: "HO", 17: "HO", 18: "FS", 19: "FS", 20: "HO", 21: "FR", 22: "HO", 23: "HO", 24: "HO", 25: "FS", 26: "FS", 27: "HO", 28: "HO", 29: "HO", 30: "HO" } }
        ]
    },
    {
        name: "Pague Menos",
        members: [
            { id: 6, name: "Leonardo Silva", shift: "Turno A (06:00 - 16:00)", days: { 1: "T", 2: "T", 3: "T", 4: "FS", 5: "FS", 6: "T", 7: "T", 8: "T", 9: "T", 10: "T", 11: "FS", 12: "FS", 13: "T" } },
            { id: 7, name: "Lucas Souza", shift: "Turno A (06:00 - 16:00)", days: { 1: "HO", 2: "HO", 3: "HO", 4: "FS", 5: "FS", 6: "HO", 7: "HO", 8: "HO", 9: "HO", 10: "HO", 11: "FS", 12: "FS", 13: "HO" } },
            { id: 8, name: "Charles Machado", shift: "06:00 - 16:00", days: { 1: "T", 2: "T", 3: "T", 6: "T", 7: "T", 8: "T" } },
            { id: 9, name: "Alexandre Pacheco", shift: "13:00 - 23:00", days: { 1: "HO", 2: "HO", 3: "HO", 6: "HO", 7: "HO" } },
            { id: 10, name: "Eric Pereira", shift: "13:00 - 23:00", days: { 1: "T", 2: "T", 3: "T", 6: "T", 7: "T" } },
            { id: 11, name: "Alexander Santos", shift: "13:00 - 23:00", days: { 1: "T", 2: "T", 3: "T", 6: "T", 7: "T" } }
        ]
    }
];

const STATUS_OPTIONS = ["T", "HO", "BH", "F", "FR", "FQ", "AT", "OFF", "FS", ""];
const STATUS_LABELS = {
    "T": "Trabalho Presencial",
    "HO": "Home Office",
    "BH": "Banco de Horas",
    "F": "Férias",
    "FR": "Feriado",
    "FQ": "Folga Quebra Escala",
    "AT": "Atestado",
    "OFF": "Day Off",
    "FS": "Final de Semana"
};
let currentTeamIndex = 0;
// Começa no mês que você já tinha preenchido
let currentDate = new Date(); // Inicia com a data atual (2026)

let isDragging = false;
let selectedCells = []; // Array of {memberId, day, element}
let isAdmin = false;
let currentPickerStatus = "";

function syncSharedMembers() {
    const sharedSchedules = {};
    const sharedShifts = {};

    // Pass 1: Combine data from all teams for members with the same name
    TEAMS_DATA.forEach(team => {
        team.members.forEach(member => {
            const name = member.name.trim().toLowerCase();
            if (!sharedSchedules[name]) {
                sharedSchedules[name] = {};
                sharedShifts[name] = member.shift;
            }

            // Merge days (existing non-empty values overwrite)
            Object.keys(member.days).forEach(day => {
                if (member.days[day]) {
                    sharedSchedules[name][day] = member.days[day];
                }
            });

            // Prefer non-empty shifts
            if (member.shift && member.shift.trim() !== "") {
                sharedShifts[name] = member.shift;
            }
        });
    });

    // Pass 2: Reassign the shared reference back to all members
    TEAMS_DATA.forEach(team => {
        team.members.forEach(member => {
            const name = member.name.trim().toLowerCase();
            // By assigning the exact same object reference, editing one edits all instances!
            member.days = sharedSchedules[name];
            if (sharedShifts[name]) {
                member.shift = sharedShifts[name];
            }
        });
    });
}

function init() {
    syncSharedMembers();
    renderTeamList();
    loadTeam(0);
    setupPickerListeners();
    setupHeaderDrag();
}

function setupHeaderDrag() {
    const headerRow = document.getElementById('tableHeader');
    let isDraggingHeader = false;
    let startY = 0;
    let startOffset = 0;

    headerRow.addEventListener('mousedown', (e) => {
        if (e.target.tagName !== 'TH' && !e.target.closest('th')) return;
        e.preventDefault();
        isDraggingHeader = true;
        startY = e.clientY;

        const rootStyles = getComputedStyle(document.documentElement);
        let currentOffset = rootStyles.getPropertyValue('--header-offset').trim();
        startOffset = parseInt(currentOffset.replace('px', '')) || 0;

        document.body.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDraggingHeader) return;
        const deltaY = e.clientY - startY;
        let newOffset = startOffset + deltaY;
        if (newOffset < 0) newOffset = 0;
        document.documentElement.style.setProperty('--header-offset', `${newOffset}px`);
    });

    document.addEventListener('mouseup', () => {
        if (isDraggingHeader) {
            isDraggingHeader = false;
            document.body.style.cursor = '';
        }
    });
}

function renderTeamList() {
    const list = document.getElementById('teamList');
    if (!list) return;
    list.innerHTML = TEAMS_DATA.map((team, index) => `
        <li class="team-item ${index === currentTeamIndex ? 'active' : ''}" onclick="loadTeam(${index})">
            <i class="fas fa-users"></i>
            <span>${team.name}</span>
        </li>
    `).join('');
}

function loadTeam(index) {
    currentTeamIndex = index;
    clearSelection(); // Limpa seleções ao trocar de equipe para evitar bugs
    const team = TEAMS_DATA[index];
    if (!team) return;

    // Fecha a sidebar no mobile após selecionar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    }

    document.getElementById('currentTeamName').textContent = team.name;
    const items = document.getElementById('teamList').querySelectorAll('.team-item');
    items.forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    renderRoster(team);
    updateStats(team);
}

function setupPickerListeners() {
    const picker = document.getElementById('statusPicker');
    const items = picker.querySelectorAll('.picker-item');

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const clickedStatus = e.currentTarget.getAttribute('data-status');
            const note = document.getElementById('statusNoteInput').value.trim();
            const finalValue = note ? `${clickedStatus}|${note}` : clickedStatus;

            applyStatusToSelection(finalValue);
            hideStatusPicker();
        });
    });

    // Hide picker when clicking outside
    document.addEventListener('mousedown', (e) => {
        if (!picker.contains(e.target) && !e.target.closest('.day-cell')) {
            hideStatusPicker();
            clearSelection();
        }
    });
}

function saveNoteOnly() {
    const note = document.getElementById('statusNoteInput').value.trim();
    const finalValue = note ? `${currentPickerStatus}|${note}` : currentPickerStatus;
    applyStatusToSelection(finalValue);
    hideStatusPicker();
}

let searchFilter = "";

function handleSearch(value) {
    // Normaliza para ignorar acentos e espaços extras
    searchFilter = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    
    if (TEAMS_DATA && TEAMS_DATA[currentTeamIndex]) {
        renderRoster(TEAMS_DATA[currentTeamIndex]);
    }
}

function renderRoster(team) {
    const headerRow = document.getElementById('tableHeader');
    const body = document.getElementById('rosterBody');
    if (!team) return;

    // Use dynamic currentDate instead of new Date()
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    document.getElementById('currentMonthYear').textContent = `${monthNames[month]} ${year}`;

    const today = new Date();
    const isCurrentMonth = (year === today.getFullYear() && month === today.getMonth());

    // Render Header
    let headerHtml = `<th>Colaborador</th><th>Turno</th>`;
    const dayNames = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDate = new Date(year, month, i);
        const dayName = dayNames[dayDate.getDay()];
        const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;
        const isToday = isCurrentMonth && i === today.getDate();

        headerHtml += `
            <th class="day-cell ${isWeekend ? 'weekend-header' : ''} ${isToday ? 'today-cell' : ''}">
                <div class="day-num">${i.toString().padStart(2, '0')}</div>
                <div class="day-name">${dayName}</div>
            </th>`;
    }
    headerRow.innerHTML = headerHtml;

    // Filter members based on search (com suporte a acentos)
    const filteredMembers = team.members.filter(m => {
        const normalizedName = m.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalizedName.includes(searchFilter);
    });

    // Render Rows
    body.innerHTML = filteredMembers.map(member => {
        const originalIndex = team.members.indexOf(member);
        return `
        <tr data-member-index="${originalIndex}" class="roster-row">
            <td>
                <div class="collab-info">
                    <span class="collab-name">${member.name}</span>
                </div>
            </td>
            <td><span class="collab-shift">${member.shift}</span></td>
            ${Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const dayDate = new Date(year, month, day, 12, 0, 0);
            const dayOfWeek = dayDate.getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

            // Lógica de Status: Rodízio tem prioridade sobre FS salvo, mas respeita outros status manuais (T, HO, F, etc)
            let status = "";
            const savedStatus = member.days[day] !== undefined ? String(member.days[day]) : "";

            if (member.rotation && member.rotation.enabled) {
                const currentTotalMonths = (year - 2026) * 12 + month;

                // Tenta deduzir o grupo se ele for 0 (padrão) olhando o mês passado
                let effectiveGroup = parseInt(member.rotation.group || 0);

                // Se o mês atual está vindo "limpo" (sem dados salvos), tentamos buscar a base no mês anterior
                // Isso permite que o sistema 'siga' o que foi feito manualmente no mês passado
                // [Lógica de dedução automática simplificada via relógio global]

                const rotationIndex = (currentTotalMonths + effectiveGroup) % 3;

                let isRotationOff = false;
                if (rotationIndex === 0) isRotationOff = (dayOfWeek === 5 || dayOfWeek === 6);
                else if (rotationIndex === 1) isRotationOff = (dayOfWeek === 6 || dayOfWeek === 0);
                else if (rotationIndex === 2) isRotationOff = (dayOfWeek === 0 || dayOfWeek === 1);

                if (isRotationOff) {
                    status = "FS";
                } else {
                    // Se não é dia de folga pelo rodízio, verifica se tem algo manual (exceto FS antigo)
                    if (savedStatus && savedStatus !== "FS" && savedStatus !== "") {
                        status = savedStatus;
                    } else {
                        status = "HO";
                    }
                }
            } else {
                // Sem rodízio: usa o que está salvo ou padrão HO/FS
                if (savedStatus !== "") {
                    status = savedStatus;
                } else {
                    status = isWeekend ? "FS" : "HO";
                }
            }

            let note = "";
            if (status.includes('|')) {
                const parts = status.split('|');
                status = parts[0];
                note = parts[1] || "";
            }

            const lembreteText = status ? `${status} - ${STATUS_LABELS[status] || 'Status'}` : '';
            const tooltip = note ? `${lembreteText}\n📝 Lembrete: ${note}` : lembreteText;
            const noteHtml = note ? `<div class="note-indicator"></div>` : '';

            const weekendClass = dayOfWeek === 6 ? 'weekend-sat' : (dayOfWeek === 0 ? 'weekend-sun' : '');

            const isToday = isCurrentMonth && day === today.getDate();

            return `
                    <td class="day-cell ${isWeekend ? 'weekend-cell' : ''} ${isToday ? 'today-cell' : ''}" data-day="${day}" 
                        onclick="toggleCellSelection(${originalIndex}, ${day}, this)"
                        onmousedown="startSelection(event, ${originalIndex}, ${day})"
                        onmouseenter="updateSelection(event, ${originalIndex}, ${day})"
                        onmouseup="endSelection(event)"
                        ondblclick="selectWholeWeek(event, ${originalIndex}, ${day})">
                        <div class="status-badge status-${status.toLowerCase() || 'empty'}" title="${tooltip}">
                            ${status}
                            ${noteHtml}
                        </div>
                    </td>
                `;
        }).join('')}
        </tr>
        `;
    }).join('');
}

function selectWholeWeek(e, memberIndex, day) {
    if (!isAdmin) {
        alert("Apenas administradores podem modificar a escala. Clique no Cadeado para acessar.");
        return;
    }
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

    // Find the Monday of that week
    const diff = targetDate.getDate() - targetDate.getDay() + (targetDate.getDay() === 0 ? -6 : 1);
    const monday = new Date(targetDate.setDate(diff)).getDate();

    clearSelection();

    const row = document.querySelector(`tr[data-member-index="${memberIndex}"]`);
    for (let i = 0; i < 7; i++) {
        const d = monday + i;
        const cell = row.querySelector(`.day-cell[data-day="${d}"]`);
        if (cell) {
            addCellToSelection(cell, memberIndex, d);
        }
    }

    showStatusPicker(e.pageX, e.pageY);
}

function startSelection(e, memberIndex, day) {
    if (!isAdmin) return;
    
    // Se clicar com o botão direito ou se já estiver em um picker, não inicia
    if (e.button !== 0) return;

    isDragging = true;
    if (!e.ctrlKey && !e.shiftKey) {
        clearSelection();
    }
    
    const cell = e.currentTarget;
    toggleCellSelection(memberIndex, day, cell);
    
    // Impede seleção de texto enquanto arrasta
    e.preventDefault();
}

function updateSelection(e, memberIndex, day) {
    if (isDragging && isAdmin) {
        const cell = e.currentTarget;
        const cellId = `${memberIndex}-${day}`;
        // Só adiciona se ainda não estiver selecionado neste arraste
        if (!selectedCells.some(c => c.id === cellId)) {
            selectedCells.push({ id: cellId, memberIndex, day, element: cell });
            cell.classList.add('cell-selected');
            updateBulkActionBar();
        }
    }
}

function endSelection(e) {
    isDragging = false;
}

function addCellToSelection(el, memberIndex, day) {
    // Check if already selected
    if (!selectedCells.some(c => c.memberIndex === memberIndex && c.day === day)) {
        el.classList.add('selected');
        selectedCells.push({ memberIndex, day, element: el });
    }
}

function clearSelection() {
    selectedCells.forEach(c => c.element.classList.remove('selected'));
    selectedCells = [];
}

function showStatusPicker(x, y) {
    const picker = document.getElementById('statusPicker');

    // Calcula o valor atual para preencher o input de nota
    currentPickerStatus = "";
    document.getElementById('statusNoteInput').value = "";

    if (selectedCells.length > 0) {
        const firstCell = selectedCells[0];
        const team = TEAMS_DATA[currentTeamIndex];
        const member = team.members[firstCell.memberIndex];
        if (member) {
            const raw = member.days[firstCell.day] !== undefined ? String(member.days[firstCell.day]) : "";
            if (raw.includes('|')) {
                const parts = raw.split('|');
                currentPickerStatus = parts[0];
                document.getElementById('statusNoteInput').value = parts[1] || "";
            } else {
                currentPickerStatus = raw;
            }
        }
    }

    picker.style.display = 'block';

    // Position picker near mouse but keep within viewport
    const pickerWidth = picker.offsetWidth;
    const pickerHeight = picker.offsetHeight;

    let left = x + 10;
    let top = y + 10;

    if (left + pickerWidth > window.innerWidth) left = x - pickerWidth - 10;
    if (top + pickerHeight > window.innerHeight) top = y - pickerHeight - 10;

    picker.style.left = `${left}px`;
    picker.style.top = `${top}px`;
}

function hideStatusPicker() {
    document.getElementById('statusPicker').style.display = 'none';
}

function applyStatusToSelection(status) {
    const team = TEAMS_DATA[currentTeamIndex];

    selectedCells.forEach(selection => {
        const member = team.members[selection.memberIndex];
        if (member) {
            member.days[selection.day] = status;
        }
    });

    renderRoster(team);
    updateStats(team);
    clearSelection();

    // Salva automaticamente em segundo plano
    saveToCloud(true);
}

function updateStats(team) {
    let totalPresencial = 0;
    let totalHomeOffice = 0;

    // Today is roughly Apr 27 according to system context
    const today = 27;

    team.members.forEach(member => {
        const status = member.days[today];
        if (status === "T") totalPresencial++;
        if (status === "HO") totalHomeOffice++;
    });

    document.getElementById('totalPresencial').textContent = totalPresencial;
    document.getElementById('totalHomeOffice').textContent = totalHomeOffice;

    // Animate values
    animateValue('totalPresencial', 0, totalPresencial, 500);
    animateValue('totalHomeOffice', 0, totalHomeOffice, 500);
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Excel/CSV Import Logic
function handleExcelImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    showLoading("Processando arquivo Excel...");

    const reader = new FileReader();
    reader.onload = (e) => {
        // Small timeout to allow UI to render the loading overlay
        setTimeout(() => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];

                // Convert to JSON with formatted strings (raw: false) to handle Excel times/dates
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });

                processExcelData(jsonData);
            } catch (error) {
                console.error("Erro ao importar:", error);
                alert("Erro ao ler o arquivo Excel.");
            } finally {
                hideLoading();
            }
        }, 50);
    };
    reader.readAsArrayBuffer(file);
}

function processExcelData(data) {
    let currentTeamName = "Importado";
    let teamsFound = [];
    let currentTeamMembers = [];
    let headers = null;
    let collabIndex = -1;
    let shiftIndex = -1;

    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (!row || row.length === 0) continue;

        const rowStr = row.join(" ").toUpperCase();

        // Detect Team Name (Rows containing "ESCALA")
        if (rowStr.includes("ESCALA")) {
            // Save previous team if exists
            if (currentTeamMembers.length > 0) {
                teamsFound.push({ name: currentTeamName, members: currentTeamMembers });
            }

            // Extract team name: e.g., "ESCALA DE TRABALHO - AÇO CEARENSE" -> "Aço Cearense"
            currentTeamName = row.find(c => String(c).toUpperCase().includes("ESCALA")) || "Importado";
            currentTeamName = currentTeamName.split("-").pop().replace(/ESCALA DE TRABALHO/i, "").trim();

            // Reset for new team
            currentTeamMembers = [];
            headers = null;
            continue;
        }

        // Detect Header Row
        const rowLower = row.map(c => String(c || "").trim().toLowerCase());
        if (rowLower.includes("colaborador") || rowLower.includes("nome")) {
            headers = row.map(h => String(h || "").trim());
            collabIndex = headers.findIndex(h => h.toLowerCase() === 'colaborador' || h.toLowerCase() === 'nome');
            shiftIndex = headers.findIndex(h => h.toLowerCase().includes('jornada') || h.toLowerCase().includes('turno') || h.toLowerCase().includes('horário'));
            continue;
        }

        // Parse Member Data
        if (headers && row[collabIndex]) {
            const member = {
                id: Date.now() + Math.random(),
                name: String(row[collabIndex]).trim(),
                shift: row[shiftIndex] || "08:00 - 18:00",
                days: {}
            };

            headers.forEach((header, idx) => {
                const match = header.match(/^(\d+)/);
                if (match) {
                    const dayNum = parseInt(match[1]);
                    if (dayNum >= 1 && dayNum <= 31) {
                        const status = String(row[idx] || "").trim().toUpperCase();
                        if (status) member.days[dayNum] = status;
                    }
                }
            });

            currentTeamMembers.push(member);
        }
    }

    // Save last team
    if (currentTeamMembers.length > 0) {
        teamsFound.push({ name: currentTeamName, members: currentTeamMembers });
    }

    if (teamsFound.length > 0) {
        teamsFound.forEach(newTeam => {
            // Try to find existing team to merge/overwrite
            const existingTeamIndex = TEAMS_DATA.findIndex(t =>
                t.name.toLowerCase().includes(newTeam.name.toLowerCase()) ||
                newTeam.name.toLowerCase().includes(t.name.toLowerCase())
            );

            if (existingTeamIndex !== -1) {
                TEAMS_DATA[existingTeamIndex].members = newTeam.members;
            } else {
                TEAMS_DATA.push(newTeam);
            }
        });

        renderTeamList();
        loadTeam(0);
        alert(`Sucesso! ${teamsFound.length} equipes processadas.`);
    } else {
        alert("Nenhum dado válido encontrado na planilha.");
    }
}

function exportToCSV() {
    const team = TEAMS_DATA[currentTeamIndex];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Create Headers
    let csvContent = "Colaborador,Turno,";
    for (let i = 1; i <= daysInMonth; i++) {
        csvContent += `${i.toString().padStart(2, '0')}${i === daysInMonth ? "" : ","}`;
    }
    csvContent += "\n";

    // Create Rows
    team.members.forEach(member => {
        let row = `"${member.name}","${member.shift}",`;
        for (let i = 1; i <= daysInMonth; i++) {
            row += `"${member.days[i] || ""}"${i === daysInMonth ? "" : ","}`;
        }
        csvContent += row + "\n";
    });

    // Trigger Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Escala_${team.name.replace(/\s+/g, '_')}_${month + 1}_${year}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Settings Modal Logic
function toggleSettingsModal() {
    const modal = document.getElementById('settingsModal');
    const isVisible = modal.style.display === 'flex';

    if (!isVisible) {
        renderShiftSettings();
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }
}

function renderShiftSettings() {
    const team = TEAMS_DATA[currentTeamIndex];
    const list = document.getElementById('shiftSettingsList');

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalMonths = (year - 2026) * 12 + month;

    // Função auxiliar para saber o que cada grupo significa NESTE mês
    const getGroupLabel = (g) => {
        const idx = (totalMonths + g) % 3;
        if (idx === 0) return "Sexta e Sábado";
        if (idx === 1) return "Sábado e Domingo";
        return "Domingo e Segunda";
    };

    list.innerHTML = team.members.map((member, index) => `
        <div class="shift-editor-item" draggable="true" 
             ondragstart="dragStart(event, ${index})"
             ondragover="dragOver(event)"
             ondragleave="dragLeave(event)"
             ondrop="drop(event, ${index})"
             ondragend="dragEnd(event)">
            <i class="fas fa-grip-vertical" style="color: var(--text-muted); cursor: grab; padding: 0.5rem;"></i>
            <label>${member.name}</label>
            <div class="shift-editor-controls">
                <input type="text" data-member-id="${member.id}" value="${member.shift}" placeholder="Horário">
                <div class="rotation-container ${member.rotation?.enabled ? 'enabled' : ''}">
                    <label class="rotation-toggle" title="Ativar Rodízio">
                        <input type="checkbox" data-rotation-id="${member.id}" ${member.rotation?.enabled ? 'checked' : ''} onchange="toggleRotationUI('${member.id}')">
                        <i class="fas fa-sync-alt"></i>
                    </label>
                    <select data-rotation-group-id="${member.id}" class="rotation-select" 
                            style="display: ${member.rotation?.enabled ? 'block' : 'none'} !important"
                            onchange="updateRotationGroup('${member.id}', this.value)">
                        <option value="0" ${member.rotation?.group == 0 ? 'selected' : ''}>Está em: ${getGroupLabel(0)}</option>
                        <option value="1" ${member.rotation?.group == 1 ? 'selected' : ''}>Está em: ${getGroupLabel(1)}</option>
                        <option value="2" ${member.rotation?.group == 2 ? 'selected' : ''}>Está em: ${getGroupLabel(2)}</option>
                    </select>
                </div>
            </div>
            <button class="delete-member-btn" onclick="deleteMember(${index})" title="Excluir">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// --- Drag and Drop Logic ---
let draggedMemberIndex = null;

function dragStart(e, index) {
    draggedMemberIndex = index;
    e.currentTarget.style.opacity = '0.5';
    e.dataTransfer.effectAllowed = 'move';
}

function dragOver(e) {
    e.preventDefault(); // Necessary to allow dropping
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.style.borderTop = '2px solid var(--accent)';
}

function dragLeave(e) {
    e.currentTarget.style.borderTop = 'none';
}

function dragEnd(e) {
    e.currentTarget.style.opacity = '1';
    document.querySelectorAll('.shift-editor-item').forEach(el => {
        el.style.borderTop = 'none';
    });
}

function drop(e, targetIndex) {
    e.preventDefault();
    document.querySelectorAll('.shift-editor-item').forEach(el => {
        el.style.borderTop = 'none';
    });

    if (draggedMemberIndex === null || draggedMemberIndex === targetIndex) return;

    const team = TEAMS_DATA[currentTeamIndex];

    // Save current inputs before modifying array so we don't lose typed text
    const inputs = document.querySelectorAll('#shiftSettingsList input');
    inputs.forEach(input => {
        const id = input.getAttribute('data-member-id');
        const m = team.members.find(x => String(x.id) === String(id));
        if (m) m.shift = input.value;
    });

    if (draggedMemberIndex < 0 || targetIndex < 0 || draggedMemberIndex >= team.members.length || targetIndex >= team.members.length) return;

    // Move item
    const draggedItem = team.members.splice(draggedMemberIndex, 1)[0];
    team.members.splice(targetIndex, 0, draggedItem);

    renderShiftSettings();
    draggedMemberIndex = null;
}

// --- Main Panel Drag and Drop ---
let draggedRowIndex = null;

function dragRowStart(e, index) {
    draggedRowIndex = index;
    e.currentTarget.style.opacity = '0.5';
    e.dataTransfer.effectAllowed = 'move';
}

function dragRowOver(e) {
    e.preventDefault();
    e.currentTarget.style.borderTop = '2px solid var(--accent)';
}

function dragRowLeave(e) {
    e.currentTarget.style.borderTop = 'none';
}

function dragRowDrop(e, targetIndex) {
    e.preventDefault();
    document.querySelectorAll('.roster-row').forEach(el => {
        el.style.borderTop = 'none';
    });
    e.currentTarget.removeAttribute('draggable');

    if (draggedRowIndex === null || draggedRowIndex === targetIndex) return;

    const team = TEAMS_DATA[currentTeamIndex];
    if (draggedRowIndex < 0 || targetIndex < 0 || draggedRowIndex >= team.members.length || targetIndex >= team.members.length) return;

    const draggedItem = team.members.splice(draggedRowIndex, 1)[0];
    team.members.splice(targetIndex, 0, draggedItem);

    renderRoster(team);
    saveToCloud(true);
    draggedRowIndex = null;
}

function dragRowEnd(e) {
    e.currentTarget.style.opacity = '1';
    e.currentTarget.removeAttribute('draggable');
    document.querySelectorAll('.roster-row').forEach(el => {
        el.style.borderTop = 'none';
    });
}

function saveShiftChanges() {
    const team = TEAMS_DATA[currentTeamIndex];
    const inputs = document.querySelectorAll('#shiftSettingsList input[data-member-id]');

    inputs.forEach(input => {
        const memberId = input.getAttribute('data-member-id');
        const newShift = input.value;
        const member = team.members.find(m => String(m.id) === String(memberId));
        if (member) {
            member.shift = newShift;

            // Salva as configurações de rodízio
            const rotCheckbox = document.querySelector(`input[data-rotation-id="${memberId}"]`);
            const rotGroup = document.querySelector(`select[data-rotation-group-id="${memberId}"]`);

            if (rotCheckbox && rotGroup) {
                member.rotation = {
                    enabled: rotCheckbox.checked,
                    group: parseInt(rotGroup.value)
                };

                // Se o rodízio estiver ativo, preenche o mês atual
                if (rotCheckbox.checked) {
                    applyMemberRotation(member, currentDate.getFullYear(), currentDate.getMonth());
                }
            }
        }
    });

    renderRoster(team);
    toggleSettingsModal();
    saveToCloud(true);
    alert('Alterações salvas com sucesso!');
}

// Global Loading Helpers
function showLoading(text = "Carregando...") {
    const overlay = document.getElementById('loadingOverlay');
    const textEl = document.getElementById('loadingText');
    if (overlay && textEl) {
        textEl.textContent = text;
        overlay.style.display = 'flex';
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// --- CROSS-TEAM SYNC LOGIC ---
function syncSharedMembers() {
    // Map to store the shared 'days' object for each unique name
    const sharedDaysMap = {};

    TEAMS_DATA.forEach(team => {
        team.members.forEach(member => {
            const normalizedName = member.name.trim().toLowerCase();

            if (!sharedDaysMap[normalizedName]) {
                // First time seeing this name, register its days object
                sharedDaysMap[normalizedName] = member.days;
            } else {
                // We've seen this name in another team!
                const existingDays = sharedDaysMap[normalizedName];

                // Merge any data this member has into the shared object
                for (let i = 1; i <= 31; i++) {
                    if (member.days[i] && !existingDays[i]) {
                        existingDays[i] = member.days[i];
                    }
                }

                // Point this member's days to the shared object in memory
                // So any future edits will automatically affect all copies of this person!
                member.days = existingDays;
            }
        });
    });
}

// Cloud Sync Logic
// URL protegida (Base64) - Decodificada apenas em tempo de execução
const _u = "aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6MFMxd2xWcnhQWUc1aTVIZGRkTVlxNWE1eXF6eTV1YUpxSi1XOEFhNVJIbURnZTJHTElHVkluRGF4WDAxLWhzaVJRdy9leGVj";
const API_URL = atob(_u);

async function loadFromCloud() {
    const btn = document.getElementById('btnLoadCloud');
    if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Baixando...</span>';
    showLoading("Sincronizando com a nuvem...");

    try {
        const monthString = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2);
        const url = API_URL + "?month=" + monthString;

        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0) {
            TEAMS_DATA = data;

            // Garantir IDs únicos e estrutura de rotação
            let deducedAny = false;
            TEAMS_DATA.forEach(team => {
                team.members.forEach(member => {
                    if (!member.id || typeof member.id === 'number') {
                        member.id = 'id_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
                    }
                    if (!member.rotation) member.rotation = { enabled: false, group: 0 };
                    if (!member.days) member.days = {};

                    // AUTODETECÇÃO
                    if (member.rotation.enabled && member.rotation.group === 0) {
                        const year = currentDate.getFullYear();
                        const month = currentDate.getMonth();
                        const totalMonths = (year - 2026) * 12 + month;

                        for (let d = 1; d <= 7; d++) {
                            const date = new Date(year, month, d, 12, 0, 0);
                            if (date.getDay() === 0 && member.days[d] === "FS") {
                                const isMonOff = member.days[d + 1] === "FS";
                                const deducedIndex = isMonOff ? 2 : 1;
                                const newGroup = (deducedIndex - (totalMonths % 3) + 3) % 3;
                                if (newGroup !== 0) {
                                    member.rotation.group = newGroup;
                                    deducedAny = true;
                                }
                                break;
                            } else if (date.getDay() === 6 && member.days[d] === "FS" && member.days[d - 1] === "FS") {
                                const newGroup = (0 - (totalMonths % 3) + 3) % 3;
                                if (newGroup !== 0) {
                                    member.rotation.group = newGroup;
                                    deducedAny = true;
                                }
                                break;
                            }
                        }
                    }
                });
            });

            if (deducedAny) {
                console.log("Novos grupos deduzidos e salvos.");
                saveToCloud(false); // Salva silenciosamente
            }

            syncSharedMembers();
            renderTeamList();
            loadTeam(currentTeamIndex);
        } else {
            console.log("Mês novo não encontrado na nuvem.");
            if (TEAMS_DATA && TEAMS_DATA.length > 0) {
                // Usuário navegou para um mês novo: Clona a equipe atual e inicializa com HO + Rodízio
                const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
                const currYear = currentDate.getFullYear();
                const currMonth = currentDate.getMonth();

                TEAMS_DATA.forEach(team => {
                    team.members.forEach(member => {
                        // Reinicializa os dias para o novo mês
                        member.days = {};

                        // O rodízio agora é automático: o renderer inteligente já usa o 'group' atual
                        // para projetar o próximo mês baseado no total de meses desde 2026.
                        // Como a conta é (totalMeses + grupo) % 3, a sequência 
                        // Sab/Dom -> Dom/Seg -> Sex/Sab já acontece sozinha!
                    });
                });
                syncSharedMembers();
                renderTeamList();
                loadTeam(currentTeamIndex);
                saveToCloud(true);
            }
        }
    } catch (error) {
        console.error("Erro ao baixar:", error);
    } finally {
        if (btn) btn.innerHTML = '<i class="fas fa-cloud-download-alt"></i><span>Baixar Dados</span>';
        hideLoading();
    }
}

async function makeBackup() {
    showLoading("Criando cópia de segurança na nuvem...");
    try {
        const url = API_URL + "?action=backup";
        const response = await fetch(url);
        const result = await response.json();

        if (result.success) {
            alert("Backup realizado com sucesso! Uma cópia da planilha foi salva no seu Drive.");
            console.log("Link do backup:", result.url);
        } else {
            alert("Erro ao criar backup: " + result.error);
        }
    } catch (error) {
        console.error("Erro ao solicitar backup:", error);
        alert("Erro na conexão com a nuvem ao tentar fazer o backup.");
    } finally {
        hideLoading();
    }
}

async function changeMonth(delta) {
    // Se quiser, pode salvar auto antes de mudar
    saveToCloud(true);

    currentDate.setMonth(currentDate.getMonth() + delta);

    // Atualiza a tela imediatamente para mostrar o novo nome do mês com loading
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    document.getElementById('currentMonthYear').textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    await loadFromCloud();
}

async function saveToCloud(silent = false) {
    const btn = document.getElementById('btnSaveCloud');
    if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Salvando...</span>';

    if (!silent) showLoading("Salvando dados na nuvem...");

    try {
        const monthString = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2);
        const payload = {
            month: monthString,
            teams: TEAMS_DATA
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            }
        });

        const result = await response.json();

        if (!silent) {
            if (result.success) {
                alert("Escala salva na nuvem com sucesso!");
            } else {
                alert("Erro retornado pela nuvem: " + result.error);
            }
        }
    } catch (error) {
        console.error("Erro ao salvar:", error);
        if (!silent) alert("Erro ao enviar dados para a nuvem.");
    } finally {
        if (btn) btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i><span>Salvar Nuvem</span>';
        // Se houver uma mensagem de carregamento ativa, vamos fechá-la após um tempo
        if (!silent) {
            hideLoading();
        } else {
            // Garante que o loading de feedback do bulk update suma
            setTimeout(() => hideLoading(), 2000);
        }
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

function toggleAdminMode() {
    const headerBtn = document.getElementById('btnAdminToggleHeader');
    if (!isAdmin) {
        document.getElementById('adminPasswordInput').value = '';
        document.getElementById('passwordError').style.display = 'none';
        document.getElementById('passwordModal').style.display = 'flex';
        setTimeout(() => document.getElementById('adminPasswordInput').focus(), 100);
    } else {
        isAdmin = false;
        if (headerBtn) {
            headerBtn.classList.remove('unlocked');
            headerBtn.innerHTML = '<i class="fas fa-lock"></i>';
        }
        document.getElementById('adminToggleText').textContent = "Modo Leitura";
        document.getElementById('btnAdminToggle').style.color = "var(--text-muted)";
        
        document.querySelectorAll('.restricted-admin').forEach(el => {
            el.classList.remove('is-active');
            // Prioridade máxima de sumiço
            el.style.setProperty('display', 'none', 'important');
        });
        document.getElementById('settingsModal').style.display = 'none';
    }
}

function checkPassword() {
    const pwd = document.getElementById('adminPasswordInput').value;
    const headerBtn = document.getElementById('btnAdminToggleHeader');
    
    if (btoa(pwd) === "YWRtaW4xMjM=") {
        isAdmin = true;
        closePasswordModal();
        
        if (headerBtn) {
            headerBtn.classList.add('unlocked');
            headerBtn.innerHTML = '<i class="fas fa-lock-open"></i>';
        }
        
        document.getElementById('adminToggleText').textContent = "Modo Edição";
        document.getElementById('btnAdminToggle').style.color = "var(--success)";
        
        document.querySelectorAll('.restricted-admin').forEach(el => {
            el.style.setProperty('display', 'flex', 'important');
            el.classList.add('is-active');
        });
        
        showLoading("Acesso Liberado!");
        setTimeout(() => hideLoading(), 1000);
    } else {
        document.getElementById('passwordError').style.display = 'block';
    }
}





function toggleCellSelection(memberIndex, day, element) {
    if (!isAdmin) return;
    
    // Captura o evento global para pegar a posição do clique
    const e = window.event || {};
    const x = e.pageX || 100;
    const y = e.pageY || 100;

    // Limpa seleções anteriores para não misturar
    clearSelection();
    
    // Adiciona a célula atual à seleção
    addCellToSelection(element, memberIndex, day);
    
    // Mostra o seletor na posição do clique
    showStatusPicker(x, y);
}

function setupHorizontalDrag() {
    const container = document.querySelector('.roster-container');
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        // Só ativa se clicar na área vazia ou na tabela, não em botões/badges
        if (e.target.closest('.status-badge') || e.target.closest('.member-name-cell')) return;
        
        isDown = true;
        container.classList.add('dragging');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('dragging');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('dragging');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Velocidade do arraste
        container.scrollLeft = scrollLeft - walk;
    });
}

// Inicializa a navegação horizontal quando o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    setupHorizontalDrag();
});


function closePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
}

function addNewMember() {
    if (!isAdmin) return;
    document.getElementById('newMemberName').value = '';
    document.getElementById('newMemberShift').value = '';
    document.getElementById('addMemberModal').style.display = 'flex';
    setTimeout(() => document.getElementById('newMemberName').focus(), 100);
}

function closeAddMemberModal() {
    document.getElementById('addMemberModal').style.display = 'none';
}

function confirmAddMember() {
    const team = TEAMS_DATA[currentTeamIndex];
    if (!team) return;

    const name = document.getElementById('newMemberName').value;
    if (!name || name.trim() === "") {
        alert("O nome do colaborador é obrigatório!");
        return;
    }

    const shift = document.getElementById('newMemberShift').value || "";
    const rotationEnabled = document.getElementById('newMemberRotation').checked;
    const rotationGroup = document.getElementById('newMemberRotationGroup').value;

    const newMember = {
        id: 'id_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
        name: name.trim(),
        shift: shift.trim(),
        days: {},
        rotation: {
            enabled: rotationEnabled,
            group: parseInt(rotationGroup)
        }
    };

    // Se o rodízio estiver ativo, já preenche o mês atual
    if (rotationEnabled) {
        applyMemberRotation(newMember, currentDate.getFullYear(), currentDate.getMonth());
    }

    team.members.push(newMember);

    closeAddMemberModal();
    syncSharedMembers();

    renderRoster(team);
    renderShiftSettings();
    updateStats(team);
    saveToCloud(true);
}

function deleteMember(memberIndex) {
    if (!isAdmin) return;

    const team = TEAMS_DATA[currentTeamIndex];
    if (!team) return;

    if (memberIndex === undefined || memberIndex < 0 || memberIndex >= team.members.length) return;

    const memberName = team.members[memberIndex].name;

    if (confirm(`Tem certeza que deseja EXCLUIR o colaborador(a) ${memberName}? Essa ação não pode ser desfeita.`)) {
        team.members.splice(memberIndex, 1);

        // Refresh screens
        renderRoster(team);
        renderShiftSettings();
        updateStats(team);

        // Auto-save
        saveToCloud(true);
    }
}

window.onload = () => {
    init();
    loadFromCloud();
};

function applyMemberRotation(member, year, month, force = false) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const group = parseInt(member.rotation?.group || 0);

    const totalMonths = (year - 2026) * 12 + month;
    const rotationIndex = (totalMonths + group) % 3;

    for (let d = 1; d <= daysInMonth; d++) {
        // Criar data ao meio-dia para evitar problemas de fuso horário
        const date = new Date(year, month, d, 12, 0, 0);
        const dayOfWeek = date.getDay(); // 0=Dom, 1=Seg, ... 6=Sáb

        let isOff = false;
        if (rotationIndex === 0) { // Grupo 1: Sexta e Sábado
            if (dayOfWeek === 5 || dayOfWeek === 6) isOff = true;
        } else if (rotationIndex === 1) { // Grupo 2: Sábado e Domingo
            if (dayOfWeek === 6 || dayOfWeek === 0) isOff = true;
        } else if (rotationIndex === 2) { // Grupo 3: Domingo e Segunda
            if (dayOfWeek === 0 || dayOfWeek === 1) isOff = true;
        }

        if (isOff) {
            member.days[d] = "FS";
        } else {
            // Se for 'forçar' ou se não houver nada ou se for um FS antigo, vira HO
            if (force || !member.days[d] || member.days[d] === "" || member.days[d] === "FS") {
                member.days[d] = "HO";
            }
        }
    }
}

function toggleRotationUI(memberId) {
    const escapedId = CSS.escape(memberId);
    const checkbox = document.querySelector(`input[data-rotation-id="${escapedId}"]`);
    const select = document.querySelector(`select[data-rotation-group-id="${escapedId}"]`);
    const container = checkbox?.closest('.rotation-container');

    if (checkbox && select) {
        const isEnabled = checkbox.checked;
        select.style.display = isEnabled ? 'block' : 'none';
        if (container) container.classList.toggle('enabled', isEnabled);

        TEAMS_DATA.forEach(team => {
            team.members.forEach(m => {
                if (m.id === memberId) {
                    if (!m.rotation) m.rotation = { enabled: false, group: 0 };
                    m.rotation.enabled = isEnabled;
                    if (isEnabled) m.days = {};
                }
            });
        });
        renderRoster(TEAMS_DATA[currentTeamIndex]);
    }
}

function updateRotationGroup(memberId, groupValue) {
    TEAMS_DATA.forEach(team => {
        team.members.forEach(m => {
            if (m.id === memberId) {
                if (!m.rotation) m.rotation = { enabled: true, group: 0 };
                m.rotation.group = parseInt(groupValue);
                m.days = {};
            }
        });
    });
    renderRoster(TEAMS_DATA[currentTeamIndex]);
}

function openVacationModal() {
    if (!isAdmin) {
        alert("Apenas administradores podem marcar férias.");
        return;
    }
    const select = document.getElementById('vacationMemberSelect');
    const team = TEAMS_DATA[currentTeamIndex];
    if (!team) return;

    select.innerHTML = team.members.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
    document.getElementById('vacationModal').style.display = 'flex';
}

function closeVacationModal() {
    document.getElementById('vacationModal').style.display = 'none';
}

async function confirmVacation() {
    const memberId = document.getElementById('vacationMemberSelect').value;
    const startDateVal = document.getElementById('vacationStartDate').value;
    const endDateVal = document.getElementById('vacationEndDate').value;

    if (!startDateVal || !endDateVal) {
        alert("Selecione as datas de início e fim.");
        return;
    }

    const start = new Date(startDateVal + "T00:00:00");
    const end = new Date(endDateVal + "T00:00:00");

    if (end < start) {
        alert("A data de fim não pode ser anterior à data de início.");
        return;
    }

    showLoading("Aplicando férias...");

    const team = TEAMS_DATA[currentTeamIndex];
    const member = team.members.find(m => String(m.id) === String(memberId));

    if (member) {
        // Aplica no mês atual carregado
        const currYear = currentDate.getFullYear();
        const currMonth = currentDate.getMonth();

        let changed = false;
        let d = new Date(start);
        while (d <= end) {
            if (d.getFullYear() === currYear && d.getMonth() === currMonth) {
                member.days[d.getDate()] = "F";
                changed = true;
            }
            d.setDate(d.getDate() + 1);
        }

        if (changed) {
            renderRoster(team);
            updateStats(team);
            await saveToCloud(true);
            alert("Férias marcadas para o mês atual. Se o período abranger outros meses, navegue até eles para que o sistema aplique a escala preditiva ou repita o processo.");
        } else {
            alert("O período selecionado não está dentro do mês exibido atualmente. Navegue até o mês desejado e repita a operação.");
        }
    }

    hideLoading();
    closeVacationModal();
}

// Listener para o checkbox de rodízio no modal de ADICIONAR
document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'newMemberRotation') {
        const div = document.getElementById('newMemberRotationGroupDiv');
        if (div) div.style.display = e.target.checked ? 'block' : 'none';
    }
});
