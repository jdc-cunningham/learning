// I get the jist of this problem I'm at 18:32 right now
// tired af but trying

// copilot right here ha
// straightoutta SO https://stackoverflow.com/a/1527820/2710227
const randomGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomHeights = [];

// looks like 1 billion is my limit
for (i = 0; i < 100000000; i++) {
  randomHeights.push(randomGenerator(0, 100000000));
}



// built in array method from SO
// https://stackoverflow.com/a/1379568/2710227
// this is not peak finding

const controlStart = Date.now();
const largest = () => randomHeights.sort().pop(); // wow took 52 seconds

// console.log('control max val is ' + largest);
console.log('took ' + (Date.now() - controlStart) + ' ms');



// the dunce ways

// method one
let largestNum = 0;

const methodOneStart = Date.now();

randomHeights.forEach((num, index) => {
  if (num > largestNum) {
    largestNum = num;
  }
});

console.log('peak is: ' + largestNum);

console.log('took ' + (Date.now() - methodOneStart) + ' ms');