// projects.js
 function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}
const projects = [
    /*Excel*/
    {
  id: generateId(),
  category: 'excel',
  title: 'NYC Bus Delay Analysis',
  shortDesc: 'An Excel-based data analysis project to uncover root causes of bus breakdowns and delays in New York City.',
  longDesc: 'Hired by the New York Division of Transportation, this project investigates patterns behind frequent delays and mechanical issues in the city’s bus fleet. Using Excel tools like Power Query, PivotTables, and analytical functions, it answers key questions about delay reasons, geographical and company-based variations, and weekday trends.',
  highlights: [
    'Root-cause analysis of delays using PivotTables',
    'Power Query for transforming and filtering raw operational data',
    'Comparative delay breakdown by company and borough',
    'Weekday correlation analysis for delay frequency',
    'Interactive visualizations using charts and slicers'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Bus_Breakdown_and_Delays_NYC%20Project',
  image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'Excel NYC Bus Delay Analysis'
},
 {
  id: generateId(),
  category: 'excel',
  title: 'U.S. Debt Tracker Project - Data Analysis',
  shortDesc: 'An Excel-based financial analysis project examining historical U.S. debt trends and forecasting future growth.',
  longDesc: 'This project was developed for a Washington D.C.-based debt agency, aiming to analyze and predict trends in public and governmental debt. Using advanced Excel functions like TREND, LINEST, and Power Query, it provides insights into yearly debt percentage increases, seasonal fluctuations, and future projections.',
  highlights: [
    'Historical debt trend analysis',
    'Regression modeling with LINEST',
    'Interactive dashboards & charts',
    'Forecasting future debt growth',
    'Power Query for advanced data manipulation'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/US%20Debt%20Tracker%20Project%20-%20Data%20Analysis',
  image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'Excel Debt Analysis Project'
},

{
  id: generateId(),
  category: 'excel',
  title: 'LAPD Crime Statistics Dashboard',
  shortDesc: 'An interactive Excel dashboard analyzing crime data reported by the LAPD from 2020 to present.',
  longDesc: 'This project explores crime statistics reported by the Los Angeles Police Department from 2020 onwards. Using advanced Excel tools like Power Query, Pivot Tables, and dynamic charts, the dashboard enables users to filter and visualize data by year, gender, and crime type. The analysis reveals trends, totals, and demographic patterns in reported crimes, with a focus on clarity and interactivity.',
  highlights: [
    'Power Query for data cleaning and transformation',
    'Pivot Tables and dynamic charting',
    'Interactive filters by year and gender',
    'Visual summary of crime categories and trends',
    'Excel-based dashboard with professional layout'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Lapd-Crime-Statistics-Dashboard',
  image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'LAPD Crime Excel Dashboard'
},

{
  id: generateId(),
  category: 'excel',
  title: 'Monthly Vehicle Crash Report Automation',
  shortDesc: 'An Excel VBA macro project automating monthly vehicle crash reports for efficient data analysis.',
  longDesc: 'This project automates the monthly reporting process for vehicle crash data using Excel VBA macros. It provides insights on crash times over a 24-hour period, unique accident addresses, total injured and deceased counts, and ranks contributing factors from highest to lowest. The automation reduces manual work and ensures consistent, timely reports for the client.',
  highlights: [
    'Automated report generation via VBA macros',
    'Analysis of crash times over 24 hours',
    'Identification of unique accident locations',
    'Summary of total injured and dead',
    'Ranking of contributing factors from highest to lowest'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Vehicle%20Crash%20Report%20Project',
   image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'Vehicle Crash Report VBA Macro'
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
  link: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/HR-Analytics-Projects',
  image: 'data:image/png;base64,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', 
  alt: 'HR Analytics Attrition Insight Dashboard'
},

  /*tableau*/
  {
  id: generateId(),
  category: 'tableau',
  title: 'Sales Data Analysis',
  shortDesc: 'An interactive dashboard that analyzes monthly sales performance and trends.',
  longDesc: 'A Tableau dashboard that visualizes monthly sales trends, product performance, and region-based insights. Helps decision makers understand sales drivers.',
  highlights: [
    'Monthly performance breakdown',
    'Trend analysis over time',
    'Interactive filters by region/product',
    'Visual storytelling with Tableau'
  ],
  link: 'https://public.tableau.com/views/ChurnRateDashboard_17472294245260/ChurnRateDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  image: 'data:image/png;base64,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',
  alt: 'Product Performance'
},

{
  id: generateId(),
  category: 'tableau',
  title: 'Call Center KPI Dashboard',
  shortDesc: 'An interactive Tableau dashboard designed to track employee performance and call metrics.',
  longDesc: 'This dashboard was developed for a Help Desk manager who wanted to better understand monthly performance across their call center. The manager had a vague idea of the metrics needed, so we iteratively built an insightful and flexible dashboard. It includes key performance indicators such as call volume, resolution rate, average handle time, and individual agent performance. The dashboard allows dynamic filtering and supports decision-making through visual insights.',
  highlights: [
    'Dynamic visualization of key call metrics',
    'Agent-level performance tracking',
    'Monthly call volume and resolution trends',
    'Average handle time (AHT), First Call Resolution (FCR) rates',
    'Built-in interactivity with filters for agents, teams, and time periods'
  ],
  link: 'https://public.tableau.com/views/CallCenterKPIDashboard_17497308230560/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  image: 'data:image/png;base64,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',
  alt: 'Call Center KPI Dashboard preview'
},


  /*Pandas*/
{
  id: generateId(),
  category: "pandas",
  title: "UFood Marketing Campaign Optimization",
  shortDesc: "Analyzes customer and campaign data to uncover insights, segment users, and optimize marketing strategy using Pandas.",
  longDesc: "This case study simulates a real-world data analyst scenario for UFood, Brazil’s leading food delivery platform. Using Python and Pandas, the project explores customer behavior, campaign interactions, and purchasing preferences. The analysis involves deep segmentation, behavioral clustering, and visual storytelling to identify valuable business opportunities and propose data-driven actions to improve marketing ROI and customer engagement.",
  highlights: [
    "Exploratory data analysis of customer and campaign performance",
    "Customer segmentation based on behavior, frequency, and purchase patterns",
    "Identified high-value customer groups and churn risks",
    "Recommended targeted marketing actions based on insights",
    "Visualizations created for both business and technical audiences"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/UFood-Marketting-Analyst-Project",
  image: "data:image/png;base64,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", 
  alt: "UFood Marketing Analysis Dashboard"
},

{
  id: generateId(),
  category: "pandas",
  title: "Genre Analysis in Movie Industry",
  shortDesc: "Analyzes movie genres by profitability, budget, popularity, and ratings using Pandas.",
  longDesc: "This exploratory data analysis project investigates the characteristics of movie genres using Python and Pandas. By examining budget, revenue, popularity, and ratings, it addresses key questions and hypotheses about what makes a genre successful. The dataset is enriched with profit and vote metrics to guide data-driven insights in the entertainment industry.",
  highlights: [
    "Genre-wise aggregation of budget, revenue, and profit",
    "Statistical comparisons based on popularity and voting average",
    "Validation of hypotheses with visual exploration",
    "Data cleaning, grouping, and exploratory insights with Pandas"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/Movie-Genre-Data-Analysis",
  image: "data:image/png;base64,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", 
  alt: "Movie Genre Analysis Dashboard"
},



/*Python*/
{
  id: generateId(),
  category: 'python',
  title: 'Crypto Price Scraper',
  shortDesc: 'A Python script that scrapes real-time Bitcoin price data from CoinMarketCap and logs it into a CSV file.',
  longDesc: 'This project utilizes Python and BeautifulSoup to extract the latest Bitcoin price from CoinMarketCap. The collected data is stored in a CSV file for further analysis. The script is designed with scalability in mind, allowing expansion to multiple cryptocurrencies in future updates.',
  highlights: [
    'Web scraping using BeautifulSoup',
    'Data extraction from CoinMarketCap',
    'Automated CSV logging with Pandas',
    'Error handling and request optimization'
  ],
  link: 'https://github.com/giraysengonul/Python-Projects/tree/main/Automated-Web-Scraper(Bitcoin)',
  image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  alt: 'Python Crypto Price Scraper Project'
},
{
  "id": generateId(),
  "category": "python",
  "title": "Most Used Word Finder",
  "shortDesc": "A Python script that analyzes a given text file to find and rank the most frequently used words.",
  "longDesc": "This project leverages Python and its built-in libraries to perform frequency analysis on any text file. The script reads the content, cleans and tokenizes the text, removes common stopwords, and outputs a ranked list of the most-used words. It is modular and easily adaptable for larger-scale NLP tasks in the future.",
  "highlights": [
    "Text parsing and word frequency analysis",
    "Stopword removal and case normalization",
    "Customizable text preprocessing steps",
    "Terminal output and optional CSV export"
  ],
  "link": "https://github.com/giraysengonul/Python-Projects/tree/main/Most-Used-Word-Finding-Project",
  "image": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  "alt": "Python Most Used Word Finder Project"
},

/*SQL*/

{
  id: generateId(),
  category: 'sql',
  title: 'World Life Expectancy Data Cleaning & Analysis',
  shortDesc: 'Cleans and analyzes global life expectancy data using advanced MySQL queries.',
  longDesc: 'This project involves comprehensive data cleaning to remove duplicates and fill missing values in the world life expectancy dataset. It also performs exploratory data analysis (EDA) using advanced SQL features such as window functions, conditional logic, and aggregations to extract meaningful insights about life expectancy, GDP, BMI, and development status across countries.',
  highlights: [
    'Data cleaning with window functions (ROW_NUMBER)',
    'Imputation of missing values using neighboring years',
    'Exploratory Data Analysis (EDA) using SQL aggregation and window functions',
    'Insights on life expectancy correlations with GDP, BMI, and country status'
  ],
  link: 'https://github.com/giraysengonul/SQL-Data-Analysis-Projects/tree/main/World-Life-Expectancy-Project',
  image: 'https://www.commvault.com/wp-content/uploads/2019/08/sql-server_logo.jpg',
  alt: 'World Life Expectancy Project'
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
