process.on('message', (msg) => {

  //console.log('message recieved', msg)
  let sum = 0;
  for(let i = 0; i < 1e9 * 10; i++) {
    sum += i;
  }

  process.send(sum);
});