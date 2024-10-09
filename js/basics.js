console.log("Terve!");

let numbers = [];

console.log (numbers);

numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);
console.log (numbers);

numbers.unshift(222);
console.log(numbers);

let number = numbers.pop();
console.log(numbers);
console.log(numbers);

let student = {
    name:"Ram",
    id :"123"

}
console.log(student);

let students =[];
students.push(student);
students.push({
    name:"Sam",
    id :"321"
});
students.push({
    name:"mam",
    id :"567"
});
students.push({
    name:"yam",
    id :"765"
});
console.log(student);
console.log(students);

students.forEach(Element=> console.log(Element));

while (students.length > 0) {
    console.log (students.pop());
}
console.log(students);
//function myFunction(){
   // alert("Hello world");
//}
//myFunction();
