function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}

const certificates = [
  {
    id: generateId(),
    title: "Deloitte Australia Data Analytics Completion Certificate",
    description:
      "Completed an intensive crash course on Python fundamentals geared toward technical interviews. Covered core concepts such as data types, control flow, functions, OOP, and real-world problem-solving using Python best practices.",
    image:
      "/assets/deloittecertificate.jpg"
    link:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_kxkoPGNErASk7mqm3_1751722614066_completion_certificate.pdf"
  }
  {
    id: generateId(),
    title: "Quantium Data Analytics Completion Certificate",
    description:
      "Completed an intensive crash course on Python fundamentals geared toward technical interviews. Covered core concepts such as data types, control flow, functions, OOP, and real-world problem-solving using Python best practices.",
    image:
      "/assets/deloitte certificate.jpg",
    link:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_kxkoPGNErASk7mqm3_1751722614066_completion_certificate.pdf"
  }
  ];

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

  container.innerHTML = fullContent; // NO duplication here
}

document.addEventListener("DOMContentLoaded", renderCertificates);

 /*function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}

const certificates = [
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

function generateId(length = 1) {
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
  container.innerHTML = fullContent ;
}*/

document.addEventListener("DOMContentLoaded", renderCertificates);
