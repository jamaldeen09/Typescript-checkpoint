
// vectors
// ( x,y ) - x represents movement vertically while y represents movement horizontally
// to calculate the total length of the 2 points we do: Math.sqrt(x^2, y^2) that is known and a magnitude
// What is a unit vector? 
//   it is a vector that points in a direction, but has a magnitude of 1

const vectorX = 6
const vectorY = 8

const magnitude = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

const normalizingX = vectorX/magnitude;
const normalizingY = vectorY/magnitude;

const unitVectors = [ normalizingX,normalizingY ];
console.log(
    `(${unitVectors[0]},${unitVectors[1]})`
)
