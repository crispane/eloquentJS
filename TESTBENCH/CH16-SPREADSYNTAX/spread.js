let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

console.log(simpleLevelPlan);
let rows = simpleLevelPlan.trim();
console.log(rows);
let rows1 = simpleLevelPlan.trim().split("\n");
console.log(rows1);
let rows2 = simpleLevelPlan.trim().split("\n").map(l => [...l]);
console.log(rows2);