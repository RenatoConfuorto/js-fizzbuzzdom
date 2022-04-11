const container = document.getElementById('container');

let content;
for(let i = 1; i <= 100; i++){
  const cell = document.createElement('div');
  cell.classList.add('cell');

  if(i % 3 === 0 && i % 5 === 0){
    content = 'fizzbuzz';
  }else if(i % 3 === 0){
    content = 'fizz';
  }else if(i % 5 === 0){
    content = 'buzz';
  }else{
    content = i;
  }

  cell.classList.add(content);
  cell.innerHTML = content;
  container.append(cell);

}