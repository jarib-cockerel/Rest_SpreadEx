/*
function filterOutOdds() {
    var nums  = Arrays.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}

*/

const filterOutOddss = (...args) => args.filter((v) => v % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
  // OPTION 1
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // return { ...obj, [key]: val };
};

const removeKey = (obj, key) => {
  // OPTION 1
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // ({ [key]: undefined, ...obj } = obj);
  // return obj;
};

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
  // OPTION 1

  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
