spriteAnimations = [
 "idle" = {
     loc: [
        { x: 0, y: 0 },
        { x: 575, y: 0 },
        { x: 1150, y: 0 },
        { x: 1725, y: 0 },
        { x: 2300, y: 0 },
        { x: 2875, y: 0 },
        { x: 3450, y: 0 },
     ]
 },
 "jump" = {
    
 },
 "run" = {
    
 },
];

console.log(spriteAnimations["idle"].loc[2].x);
console.log(spriteAnimations["idle"].loc.length);
