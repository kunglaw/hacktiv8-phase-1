class Person{
    constructor(fname,lname){
        this._first_name = fname;
        this._last_name= lname;
    }

    last_name()
    {

    }

    get nama_belakang(){
        return this._last_name
    }

    set nama_belakang(lname){
        this._last_name = lname;
    }


}

let person = new Person("John","Wick");

console.log(person);

person.nama_belakang = "Doe";

console.log(person);