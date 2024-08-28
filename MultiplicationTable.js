function MultiplicationTable() {
  let table = '';


  for (let i = 1; i <= 10; i++) {
      
      for (let j = 1; j <= 10; j++) {
          
          table += (i * j).toString().padStart(4, ' ') + ' ';
      }

      table += '\n';
  }

  console.log(table);
}
MultiplicationTable();