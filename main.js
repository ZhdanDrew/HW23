const arr = ["Ann", "Oleg", "Viktor"];

function findLongestName(array) {
    let longestName = "";
    for (let name of array) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}

const longestName = findLongestName(arr);
console.log(longestName); 


function findLargestPoint(points, axis) {

  let maxPoint = points[0];

  for (const point of points) {
      if (axis === "x" && point[0] > maxPoint[0]) {
          maxPoint = point;
      } else if (axis === "y" && point[1] > maxPoint[1]) {
          maxPoint = point;
      }
  }

  return maxPoint;
}

const points = [[1, 5], [6, 3], [2, 5]];

console.log(findLargestPoint(points, "y")); 
console.log(findLargestPoint(points, "x")); 
