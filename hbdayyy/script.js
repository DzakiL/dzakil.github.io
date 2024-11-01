var pages = new Array('halaman1', 'halaman2', 'halaman3', 'halaman4');

function klikMenu() {
  document.getElementsByClassName('inside_container')[0].classList.toggle('buka_menu');
}

function PindahKeHalaman(page) {
  var inside_container = document.getElementsByClassName('inside_container')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  inside_container.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2');
  inside_container.classList.add('page-' + pages[page]);
}