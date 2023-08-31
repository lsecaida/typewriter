const sentence = "hello there from lighthouse labs";

let timer = 0; // Keep track of the incremental time delay
let speed = 50; // Control the rate of increment for the time delay

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += speed;
}

setTimeout(() => {
  console.log();
}, sentence.length * speed); // Add a new line after the final delayed output
