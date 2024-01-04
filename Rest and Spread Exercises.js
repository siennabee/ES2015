// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

function filterOutOdds(...args) {
  return args.filter((num) => {
    return num % 2 === 0;
  });
}

function findMin(...nums) {
  return Math.min(...nums);
}

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function doubleAndReturnArgs(arr, ...num) {
  return [...arr, ...num.map((n) => n * 2)];
}

function removeRandom(items) {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

function extend(array1, array2) {
  return [...array1, ...array2];
}

function addKeyVal(obj, key, val) {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

function removeKey(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function update(obj, key, val) {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}
