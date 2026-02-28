// ===== СЛОВАРЬ (i18n) =====
// Скрипт проверяет переменную LANG на странице. Если 'en' - использует английский.
const isEn = (typeof LANG !== 'undefined' && LANG === 'en');
const t = {
    fwci: "Field-Weighted Citation Impact",
    pub: isEn ? "Publications" : "Публикации",
    cit: isEn ? "Citations" : "Цитирования",
    sdg: isEn ? "SDG" : "ЦУР",
    pct: isEn ? "Percentile" : "Процентиль",
    pubWorld: isEn ? "Publications (World/RU)" : "Публикации (Мир / РФ)",
    fwciWorld: isEn ? "FWCI (World/RU)" : "FWCI (Мир / РФ)",
    share: isEn ? "RU Share" : "Доля РФ",
    subject: isEn ? "Subject Area" : "Предметная область",
    worldAvg: isEn ? "World Average" : "Среднемировой уровень",
    ridNo: isEn ? "Patent/Cert. No." : "№ патента, свидетельства",
    ridType: isEn ? "Type" : "Тип объекта",
    ridTitle: isEn ? "Title" : "Название РИД",
    ridAuth: isEn ? "Authors / Dept" : "Авторы / Подразделение",
    ridYear: isEn ? "Year" : "Год"
};

// ===== ТЁМНАЯ ТЕМА =====
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('icon-sun').style.display = isDark ? 'block' : 'none';
  document.getElementById('icon-moon').style.display = isDark ? 'none' : 'block';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  if (window.plotlyDone) {
    setTimeout(() => {
      const isDarkNow = document.body.classList.contains('dark');
      Plotly.relayout('combo-chart-container', {
        'font.color': isDarkNow ? '#9ca3af' : '#64748B',
        'yaxis.gridcolor': isDarkNow ? 'rgba(255,255,255,0.06)' : '#E2E8F0',
        'paper_bgcolor': 'rgba(0,0,0,0)',
        'plot_bgcolor': 'rgba(0,0,0,0)',
      });
    }, 50);
  }
}

(function(){
  const saved = localStorage.getItem('theme');
  document.addEventListener('DOMContentLoaded', () => {
      if (saved === 'dark') {
        document.body.classList.add('dark');
        const sun = document.getElementById('icon-sun');
        const moon = document.getElementById('icon-moon');
        if(sun) sun.style.display = 'block';
        if(moon) moon.style.display = 'none';
      }
  });
})();

// ===== СОСТОЯНИЯ =====
window.plotlyDone = false;
window.sdgChartDone = false;
window.tzChartDone = false;

// ===== ВКЛАДКИ И СКРОЛЛ =====
function switchTab(id, btn) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => { t.classList.remove('active'); });
  
  const targetSection = document.getElementById('tab-' + id);
  targetSection.classList.add('active');
  btn.classList.add('active');
  
  btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
  
  setTimeout(() => {
    const navHeight = document.querySelector('.nav-wrap').offsetHeight || 70;
    const targetY = targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 15;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }, 50);

  setTimeout(() => {
    if (id === 'sdg' && !window.sdgChartDone && typeof sdgData !== 'undefined') { renderSDGChart(); window.sdgChartDone = true; }
    if (id === 'subjects' && typeof subjectData !== 'undefined') {
      if (!window.plotlyDone) { renderPlotly(); window.plotlyDone = true; }
      else { Plotly.Plots.resize('combo-chart-container'); }
    }
    if (id === 'tanzania' && !window.tzChartDone) { renderTanzaniaChart(); window.tzChartDone = true; }
  }, 100);
}

// ===== ЦУР =====
function updateDetails(data) {
  document.getElementById('details-title').style.color = data.color;
  document.getElementById('details-title').innerText = data.name;
  document.getElementById('details-content').innerHTML = `
    <div class="metric-block"><div class="metric-lbl">${t.fwci}</div><div class="metric-val" style="color:${data.color}">${data.fwci.toFixed(2)}</div></div>
    <div class="metric-block"><div class="metric-lbl">${t.pub}</div><div class="metric-val">${data.out.toLocaleString(isEn?'en-US':'ru-RU')}</div></div>
    <div class="metric-block"><div class="metric-lbl">${t.cit}</div><div class="metric-val">${data.cit.toLocaleString(isEn?'en-US':'ru-RU')}</div></div>`;
}

function renderSDGTable() {
  if (typeof sdgData === 'undefined') return;
  const tb = document.getElementById('sdg-tbody'); 
  if(!tb) return;
  tb.innerHTML = '';
  sdgData.forEach(d => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td data-label="${t.sdg}" style="font-weight:600;color:var(--text)">${d.name}</td>
      <td data-label="FWCI" style="font-weight:700;color:${d.color};text-align:right">${d.fwci.toFixed(2)}</td>
      <td data-label="${t.pub}" style="color:var(--muted);font-weight:500;text-align:right">${d.out.toLocaleString(isEn?'en-US':'ru-RU')}</td>
      <td data-label="${t.cit}" style="color:var(--muted);font-weight:500;text-align:right">${d.cit.toLocaleString(isEn?'en-US':'ru-RU')}</td>`;
    tb.appendChild(tr);
  });
}

let sdgChart = null;
function renderSDGChart() {
  if (typeof sdgData === 'undefined') return;
  const canvas = document.getElementById('sdgChart');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  if (sdgChart) sdgChart.destroy();
  const isDark = document.body.classList.contains('dark');
  sdgChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: sdgData.map(d => d.id),
      datasets: [{
        data: sdgData.map(d => d.fwci),
        backgroundColor: sdgData.map(d => d.color + 'B3'),
        borderColor: sdgData.map(d => d.color),
        borderWidth: 1.5,
        hoverBackgroundColor: sdgData.map(d => d.color)
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { r: {
        grid: { color: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', circular: true },
        ticks: { display: false },
        pointLabels: { display: true, centerPointLabels: true, font: { size: 11, family:"'Montserrat',sans-serif" }, color: isDark ? '#6b7280' : '#64748B' }
      }},
      plugins: { legend: { display: false }, tooltip: { backgroundColor: isDark ? '#1f2937' : '#0F172A', padding: 12, callbacks: { title: c => sdgData[c[0].dataIndex].name, label: c => ' FWCI: ' + c.raw } }},
      onClick: (e, els) => { if (els.length > 0) updateDetails(sdgData[els[0].index]); }
    }
  });
  updateDetails(sdgData[12]);
}

// ===== ФРОНТИРЫ =====
function renderFrontiers() {
  if (typeof frontiersData === 'undefined') return;
  const tb = document.getElementById('frontiers-tbody'); 
  if(!tb) return;
  tb.innerHTML = '';
  frontiersData.forEach(f => {
    const barW = Math.min(parseFloat(f.share) * 10, 100).toFixed(1);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="td-block"><div class="topic-wrapper">
        <div class="topic-header">
          <div><div class="topic-name">${f.name}</div><div class="topic-id">${f.id}</div></div>
          <button class="info-toggle-btn" type="button">i</button>
        </div>
        <div class="topic-description">${f.desc}</div>
      </div></td>
      <td data-label="${t.pct}" style="text-align:center"><span class="badge-pct">${f.pct}</span></td>
      <td data-label="${t.pubWorld}" class="metric-group"><span class="text-world">${Number(f.wPub).toLocaleString(isEn?'en-US':'ru-RU')}</span> / <span class="text-russia">${Number(f.rPub).toLocaleString(isEn?'en-US':'ru-RU')}</span></td>
      <td data-label="${t.fwciWorld}" class="metric-group"><span class="text-world">${f.wFwci}</span> / <span class="text-russia">${f.rFwci}</span></td>
      <td data-label="${t.share}"><div class="bar-wrapper"><div class="bar-bg"><div class="bar-fill" style="width:${barW}%"></div></div><span class="percent-label">${parseFloat(f.share).toFixed(2)}%</span></div></td>`;
    tb.appendChild(tr);
  });
  tb.querySelectorAll('.info-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const desc = this.closest('.topic-wrapper').querySelector('.topic-description');
      desc.classList.toggle('show');
      this.classList.toggle('active');
      this.innerHTML = this.classList.contains('active') ? '&times;' : 'i';
    });
  });
}

// ===== THE PLOTLY =====
function renderPlotly() {
  if (typeof subjectData === 'undefined') return;
  const container = document.getElementById('combo-chart-container');
  if(!container) return;
  
  const isDark = document.body.classList.contains('dark');
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : '#E2E8F0';
  const fontColor = isDark ? '#9ca3af' : '#64748B';
  const traceBars = {
    x: subjectData.categories, y: subjectData.output, name: t.pub, type: 'bar',
    marker: { color: 'rgba(59,130,246,0.8)', line: { color: '#2563EB', width: 1 } },
    customdata: subjectData.citations,
    hovertemplate: "<b>%{x}</b><br>" + t.pub + ": %{y}<br>" + t.cit + ": %{customdata}<extra></extra>"
  };
  const traceLine = {
    x: subjectData.categories, y: subjectData.fwci, name: 'FWCI', type: 'scatter', mode: 'lines+markers', yaxis: 'y2',
    line: { color: '#10B981', width: 3, shape: 'spline' },
    marker: { size: 10, color: isDark ? '#171921' : '#ffffff', line: { color: '#10B981', width: 2 } },
    hovertemplate: "<b>%{x}</b><br>FWCI: <b>%{y:.2f}</b><extra></extra>"
  };
  const layout = {
    margin: { t: 20, l: 35, r: 35, b: 120 }, showlegend: false,
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    font: { family: 'Montserrat, sans-serif', color: fontColor }, autosize: true,
    yaxis: { title: { text: t.pub, font: { color: '#3B82F6', size: 11 } }, tickfont: { color: '#3B82F6' }, gridcolor: gridColor, zeroline: false },
    yaxis2: { title: { text: 'FWCI', font: { color: '#10B981', size: 11 } }, tickfont: { color: '#10B981' }, overlaying: 'y', side: 'right', zeroline: true, zerolinecolor: '#10B981', zerolinewidth: 1, range: [0, 1.3] },
    xaxis: { tickangle: -45, automargin: true, gridcolor: 'transparent' },
    shapes: [{ type: 'line', xref: 'paper', x0: 0, x1: 1, yref: 'y2', y0: 1.0, y1: 1.0, line: { color: '#10B981', width: 1, dash: 'dot' } }],
    annotations: [{ xref: 'paper', x: 0.99, yref: 'y2', y: 1.05, text: t.worldAvg, showarrow: false, font: { color: '#10B981', size: 10 }, xanchor: 'right' }]
  };
  Plotly.newPlot('combo-chart-container', [traceBars, traceLine], layout, { responsive: true, displayModeBar: false });
}

function renderSubjectsTable() {
  if (typeof subjectData === 'undefined') return;
  const tb = document.getElementById('subjects-tbody');
  if(!tb) return;
  tb.innerHTML = '';
  subjectData.categories.forEach((cat, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td data-label="${t.subject}" style="font-weight:600;color:var(--text)">${cat}</td>
      <td data-label="${t.pub}" style="color:var(--muted);font-weight:500;text-align:center">${subjectData.output[i].toLocaleString(isEn?'en-US':'ru-RU')}</td>
      <td data-label="FWCI" style="font-weight:700;color:${subjectData.fwci[i] >= 1 ? 'var(--accent2)' : 'var(--muted)'};text-align:center">${subjectData.fwci[i].toFixed(2)}</td>
      <td data-label="${t.cit}" style="color:var(--muted);font-weight:500;text-align:center">${subjectData.citations[i].toLocaleString(isEn?'en-US':'ru-RU')}</td>`;
    tb.appendChild(tr);
  });
}

// ===== ТАНЗАНИЯ =====
function renderTanzaniaChart() {
  const canvas = document.getElementById('directionsChart');
  if(!canvas) return;
  const isDark = document.body.classList.contains('dark');
  const lbls = isEn ? ['Ecology (37%)', 'Resources (17%)', 'Tourism (1%)', 'Other (45%)'] : ['Экология (37%)', 'Природные ресурсы (17%)', 'Туризм (1%)', 'Прочее (45%)'];
  new Chart(canvas.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: lbls,
      datasets: [{ data: [37, 17, 1, 45], backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0'], borderWidth: 2, borderColor: isDark ? '#171921' : '#ffffff', hoverOffset: 4 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { font: { family: "'Montserrat',sans-serif", size: 11 }, color: isDark ? '#9ca3af' : '#64748B', usePointStyle: true, padding: 15 } }, tooltip: { callbacks: { label: c => ' ' + c.label } } },
      cutout: '65%'
    }
  });
}

function showTzTab(id, btn) {
  document.querySelectorAll('.tz-tab-content').forEach(t => { t.classList.remove('active'); t.style.display = 'none'; });
  document.querySelectorAll('.tz-tab-btn').forEach(b => { b.classList.remove('active'); });
  const target = document.getElementById('tz-' + id);
  if(target) { target.classList.add('active'); target.style.display = 'grid'; }
  btn.classList.add('active');
}

// ===== РИД =====
function renderRidTable() {
    if (typeof ridData === 'undefined') return;
    const tb = document.getElementById('rid-tbody');
    if(!tb) return;
    tb.innerHTML = '';
    ridData.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td data-label="${t.ridNo}" style="font-weight:700; color:var(--muted);">${item.id}</td>
            <td data-label="${t.ridType}"><span class="rid-type-text" style="font-size:0.8rem; font-weight:700; color:var(--accent);">${item.type}</span></td>
            <td data-label="${t.ridTitle}" style="font-weight:600; color:var(--text);">${item.title}</td>
            <td data-label="${t.ridAuth}" style="font-size:0.75rem; color:var(--muted);">${item.authors}</td>
            <td data-label="${t.ridYear}" style="white-space:nowrap;">${item.date}</td>
        `;
        tb.appendChild(tr);
    });
}

function filterRidTable() {
    const searchEl = document.getElementById('ridSearch');
    const typeEl = document.getElementById('ridTypeFilter');
    if(!searchEl || !typeEl) return;
    
    const query = searchEl.value.toLowerCase();
    const type = typeEl.value;
    const rows = document.querySelectorAll('#rid-tbody tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        const typeSpan = row.querySelector('.rid-type-text');
        const rowType = typeSpan ? typeSpan.innerText : '';
        const matchesSearch = text.includes(query);
        const matchesType = type === "" || rowType === type;
        row.style.display = (matchesSearch && matchesType) ? "" : "none";
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
  renderSDGTable();
  renderFrontiers();
  renderSubjectsTable();
  renderRidTable();
  
  const tzBtn = document.querySelector('.tz-tab-btn');
  if (tzBtn) tzBtn.style.color = 'var(--accent)';
  const tzFirst = document.getElementById('tz-ecology');
  if (tzFirst) tzFirst.style.display = 'grid';

  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) { scrollBtn.classList.add('show'); } 
      else { scrollBtn.classList.remove('show'); }
    });
    scrollBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }
});