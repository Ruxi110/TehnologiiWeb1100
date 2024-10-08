const student ={
    name:"Mihai",
    email:"email",
    age:25,
    meet:()=>{
        console.log(this.name);
    }
}

console.log(student.email);
console.log(student['email']);

student.meet();

 function test1(name){
    console.log(name);
}

const arrTest1 = (name) => {
    console.log(name);
}

test1('Adrian');
arrTest1('Mihai');

const arrTest2 = name => console.log(name);