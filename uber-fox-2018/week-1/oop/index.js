class Person{
    constructor(fname,lname,age)
    {
        this.first_name = fname;
        this.last_name = lname;
        this.age = age
    }

    fullname(){
        return "Full Name"
    }
}

let person1 = new Person();

person1.fullname