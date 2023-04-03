$('form').on('submit', function(e) {
    e.preventDefault();

    const novaTarefa = $('#nova-tarefa').val();
    const linha = $('<li></li>');

    $(`<li>${novaTarefa}</li>`).appendTo(linha);
    $(linha).appendTo('ul');
    $('#nova-tarefa').val('');
})

const lista = document.querySelector('ul');
lista.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);