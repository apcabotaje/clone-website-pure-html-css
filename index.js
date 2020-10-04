let str = "2 2 4";
let array = str.split(" ").map((x) => parseInt(x));
console.log(array);

for (let i = 0; i < array.length; i++) {
  let sum = array[i] + array[i + 1];
  if (sum == array[i + 2]) {
    console.log("Hooray");
  } else {
    console.log("Boo!");
  }
}
