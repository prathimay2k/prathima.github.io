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
  title: 'HR Analytics Dashboard – Attrition Insight',
  shortDesc: 'Interactive Power BI dashboard analyzing employee attrition patterns.',
  longDesc: `This project presents an interactive Power BI dashboard developed to analyze employee attrition patterns using a cleaned and standardized HR dataset. The analysis explores how attrition varies across different demographic, educational, and job-related dimensions, supporting strategic HR insights and workforce planning.`,
  highlights: [
    'Cleaned, standardized, and transformed employee data using Power Query',
    'Explored attrition dynamics using descriptive analytics and visual trends',
    'Built intuitive Power BI visuals to present insights interactively',
    'Focused on business questions relevant to retention and talent strategy',
    'Attrition by Salary Range',
    'Attrition by Education Level',
    'Attrition by Job Role',
    'Attrition by Years at Company',
    'Job Satisfaction vs. Attrition Trends'
  ],
  tools: ['Power BI Desktop', 'DAX', 'Power Query', 'GitHub'],
  link: 'https://github.com/prathimay2k/Sales_analysis_Dashboard',
  image: 'data:image/png;base64,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', 
  alt: 'HR Analytics Attrition Insight Dashboard'
},
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
