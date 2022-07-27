/*Fetch*/

function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
  return parent.appendChild(el);
  }
  
  const ul = document.getElementById('colaborador');
  const url = 'https://randomuser.me/api/?results=5';
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
  let colaborador = data.results;
  return colaborador.map(function(colaborador) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = colaborador.picture.medium;
    span.innerHTML = `${colaborador.name.first} ${colaborador.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
  })
  .catch(function(error) {
  console.log(error);
  });