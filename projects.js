// projects.js
 function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}
const projects = [
    /*Excel*/
    {
  id: generateId(),
  category: 'excel',
  title: 'Healthcare Dashboard Analysis',
  shortDesc: 'Excel-Based Root Cause Analysis of Health System Inefficiencies and Chronic Disease Impact.',
  longDesc: 'Hired by a regional healthcare organization, this project investigates patterns behind rising healthcare costs and patient health outcomes using real-world patient data. Leveraging Excel tools like Power Query, PivotTables, and advanced formulas, it answers key questions around cost drivers, disease prevalence, demographic trends, and hospital performance.',
  highlights: [
    'Root-cause analysis of healthcare costs using PivotTables',
    'Power Query for cleaning and transforming raw patient records',
    'Comparative breakdown by hospital tier, diabetes status, and region',
    'Age and weekday correlation analysis for treatment frequency',
    'Interactive dashboards using charts, slicers, and conditional formatting',
  ],
  link: 'https://github.com/prathimay2k/Healthcare',
  image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'Excel Health Care Analysis'
},
 /*PowerBI*/
{
  id: generateId(),
  category: 'powerbi',
  title: 'Sales KPI Dashboard – Performance Overview',
  shortDesc: 'Interactive Power BI dashboard showcasing key sales metrics and trends.',
  longDesc: `This project delivers an interactive Sales KPI Dashboard built using Power BI to track and analyze overall sales performance. It provides insights into total revenue, profit margin, top-selling products, customer segments, and delivery trends. The dashboard allows users to filter data by category, country, and year to enable dynamic business analysis and support strategic sales decisions.`,
  highlights: [
    'Built dynamic visuals to track KPIs like total sales and profit margin',
    'Used Power Query to clean and transform sales data',
    'Created visuals for segment-wise profit distribution and product performance',
    'Included order priority analysis to understand delivery time vs. order value',
    'Top 5 product performance breakdown',
    'Annual sales trends across months',
    'Segment-wise profit contribution using donut charts',
    'Interactive filters by category, country, and year'
  ],
  tools: ['Power BI Desktop', 'DAX', 'Power Query', 'GitHub'],
  link: 'https://github.com/prathimay2k/Sales_analysis_Dashboard',
  image: 'https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000', // Replace with actual base64 of your Sales Dashboard image
  alt: 'Sales KPI Dashboard'
}
];

const projectsWrapper = document.getElementById('projectsWrapper');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupList = document.getElementById('popupList');
const popupLink = document.getElementById('popupLink');

function loadProjects(category) {
  projectsWrapper.innerHTML = ''; 

  const filtered = projects.filter(p => p.category === category);

  filtered.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.alt}" class="project-image" />
      <h3>${proj.title}</h3>
      <p class="project-description clamp-3">${proj.shortDesc}</p>
      <button class="project-button details" onclick="openPopup('${proj.id}')">📄 Project Details</button>
      <a href="${proj.link}" target="_blank" class="project-button link">🔗 Project Link</a>
    `;

    projectsWrapper.appendChild(card);
  });
}

function openPopup(projId) {
  const proj = projects.find(p => p.id === projId);
  if (!proj) return;

  popupTitle.textContent = proj.title;
  popupDescription.textContent = proj.longDesc;

  popupList.innerHTML = '';
  proj.highlights.forEach(item => {
    const li = document.createElement('li');
    li.textContent = '✔ ' + item;
    popupList.appendChild(li);
  });

  popupLink.href = proj.link;

  overlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}
