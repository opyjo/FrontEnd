// For Loop

// The main difference between break and continue is that break is used for immediate termination of loop on the other hand, 'continue' terminates the current iteration and resumes the control of the next iteration of the loop.

arr = [10, 7, 5, 200, 3, 1];
//arr.forEach((arr) => console.log(arr));

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (i === 3) {
//     break;
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (i === 3) {
//     console.log(`code executed not to include ${arr[3]}`);
//     continue;
//   }
//   console.log(arr[i]);
// }

//While Loop

// let i = 0;
// while (i < 4) {
//   console.log(i);
//   i++;
// }
//do While
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 4);

//for Loop

nArr = [1, 2, 3];
// logs the values
for (numb of nArr) {
  console.log(numb);
}
//log the keys/index
for (numb in nArr) {
  console.log(numb);
}
