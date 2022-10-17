const spinner = function (position, delay) {
  setTimeout(() => {
    process.stdout.write(`\r ${position} `)
  }, delay);
}

spinner("|", 100);
spinner("/", 300);
spinner("-", 500);
spinner('\\', 700);
spinner("|", 1000);

// setTimeout(() => {
//   process.stdout.write("\r| ")
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/ ")
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r- ")
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\ ")
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r| ")
// }, 1000);