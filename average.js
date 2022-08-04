// 75.25, 65, 80, 35.45, 99.50
// Mathematics, Biology, Chemaistry, Physics, and Bangla
var mathMarks = 75.25;
var biologyMarks = 65;
var chemaistryMarks = 80;
var physicsMarks = 355.45;
var banglaMarks = 99.50;

var totalmarks = mathMarks + biologyMarks + chemaistryMarks + physicsMarks + banglaMarks;
console.log(totalmarks);
var average = totalmarks / 5;
var averageTwoDecimle = average.toFixed(2);
console.log(averageTwoDecimle);