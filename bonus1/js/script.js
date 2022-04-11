const container = document.getElementById('container');

for(let i = 1; i <= 100; i++){

  let content;

  if(i % 3 === 0 && i % 5 === 0){
    content = 'FizzBuzz';
  }else if(i % 3 === 0){
    content = 'Fizz';
  }else if(i % 5 === 0){
    content = 'Buzz';
  }else{
    content = i;
  }

  container.innerHTML += `<div>${content}</div>`;

}