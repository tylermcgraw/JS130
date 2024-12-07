// SET TIMEOUT

// 1 + 2
// function delaylog() {
//   for (let num = 1; num <= 10; num += 1) {
//     setTimeout(() => console.log(num), num * 1000);
//   }
// }

// delaylog();

// 3
// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

// 4
// g, f, d, z, n, s, q

// 5
// function afterNSeconds(callback, time) {
//   setTimeout(callback, time * 1000);
// }

// SET INTERVAL

// 1
function startCounting() {
  let num = 1;
  let id = setInterval(() => console.log(num++), 1000);
  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();
setTimeout(() => stopCounting(id), 5000);