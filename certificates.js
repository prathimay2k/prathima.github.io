
 function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}

const certificates = [

{
  id: generateId(),
  title: "MySQL Interview Crash Course Certificate",
  description:
    "Completed a focused training on MySQL fundamentals tailored for technical interviews. Covered query writing, filtering, joins, subqueries, and real-world problem solving using SQL best practices.",
  image:
    "https://drive.google.com/thumbnail?id=1IPN6DcvJXuyYMcYY6bwVBT2ORknYDvNX",
  link:
    "https://www.analystbuilder.com/achievements/verify/Y69G38S60C?r=DXJeBIXWnZaOYO5QTIVN8Ag0b"
},

{
  id: generateId(),
  title: "Python Interview Crash Course Certificate",
  description:
    "Completed an intensive crash course on Python fundamentals geared toward technical interviews. Covered core concepts such as data types, control flow, functions, OOP, and real-world problem-solving using Python best practices.",
  image:
    "https://drive.google.com/thumbnail?id=1jevBbPsgv4pIFRXE0mSQd-g2obQkBnF-",
  link:
    "https://www.analystbuilder.com/achievements/verify/LIWF1SXY75?r=qzcvJCmTK7hKkFhmW5Ref1OKB"
},
];

function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}

// ... certificates array senin gönderdiğin gibi ...

function renderCertificates() {
  const container = document.getElementById("certificateSlider");

  const fullContent = certificates.map(cert => {
    return `
      <div class="certificate-card">
        <a href="${cert.link}" target="_blank">
          <img src="${cert.image}" alt="${cert.title}">
        </a>
        <h3>${cert.title}</h3>
        <p>${cert.description}</p>
        <button onclick="window.open('${cert.link}', '_blank')">View Certificate</button>
      </div>
    `;
  }).join("");

  // İçeriği 2 kez ekle (sonsuz scroll için)
  container.innerHTML = fullContent + fullContent;
}

document.addEventListener("DOMContentLoaded", renderCertificates);
