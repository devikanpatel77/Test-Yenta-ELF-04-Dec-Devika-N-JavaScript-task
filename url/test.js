fetch('http://www.omdbapi.com/?i=tt3896198&apikey=bab63207')
  .then(response => response.json())
  .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

