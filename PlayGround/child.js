process.on('message', (msg) => {
  let sum = 0;
  for(let i = 0; i < 1e9 * 4; i++) {
    sum += i;
  }
  process.send(sum);
});

