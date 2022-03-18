const arr = [
  ["a", 1],
  ["b", 2],
];

//Objetivo, crear un objeto de tipo {a:1,b:2}
//Repasar callBacks

const createObjectFromArr = (array) => {
  return array.reduce((previus, currentValue) => {
    return {
      ...previus,
      [currentValue[0]]: currentValue[1],
    };
  }, {});
};
console.log(createObjectFromArr(arr));

//min14
