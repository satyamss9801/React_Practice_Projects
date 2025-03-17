document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', event => {
      alert(`You selected: ${item.textContent}`);
    });
  });
  