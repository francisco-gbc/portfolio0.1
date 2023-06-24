/*document.addEventListener('DOMContentLoaded', function() {
    var bota_menu = document.querySelector('.botao_menu');
    var menu = document.querySelector('.menu');

    botao_menu.addEventListener('click', function() {
      menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
    });
  });*/
  currentPage.classList.remove('page-transition');
  newPage.classList.add('page-transition');