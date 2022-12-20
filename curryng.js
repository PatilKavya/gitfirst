 class Student {
    static count=0;
    constructor(name,age,phone_no,marks) {
        this.name=name;
        this.age=age;
        this.phone=phone_no;
        this.marks=marks;
        Student.count++;
    }
 
       eligible(minAge) {
        return (min_marks) => {
        if(this.marks >= min_marks && this.age>=minAge){
            console.log(`${this.name} is eligible`);
        }
        else
        console.log(`${this.name} is not eligible`);
    }
     }
    }

 const student1 = new Student('Ram',18,28456179,45);
 const student2 = new Student('syam',19,28456179,50);
 const student3 = new Student('sam',18,28456179,58);
 const student4 = new Student('mahi',19,28456179,35);
 const student5 = new Student('sree',18,28456179,80);

student1.eligible(18)(40);





// let get = a => a*a;
// console.log(get(2));

// let multi = (a,b) => {
//     return a*b;
// }

// console.log(multi(4,5));

// const x = function() {
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1)
// }

// console.log(x())

// const y = (...n) => {
//     console.log(n[2]);
// }
// y(1,5,8,7);
    
    