var arr = [];

function createArrayObj(name,phase,gender)
{
    let obj = {};

    obj["name"] = name;
    obj["phase"] = phase;
    obj["gender"] = gender;

    arr.push(obj);
}

function getData(name){

    for(i = 0; i < arr.length; i++)
    {
        if(name === arr[i]["name"]){
            return arr[i];
        }
    }

    return {};
} 

createArrayObj("Dimas",1,"male");
createArrayObj("Rifki",1,"male");
createArrayObj("Ryan",2,"male");
console.log(arr);
console.log(getData("Ryan"));