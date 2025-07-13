function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute('target', '_blank');
})


function openPopup() {
      document.getElementById('popup').style.display = 'block';
    }
function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }
    