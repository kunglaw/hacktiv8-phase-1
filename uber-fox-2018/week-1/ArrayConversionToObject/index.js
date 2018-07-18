function arrayConversiontoObject(arr)
{
    let result = [];

    for(i = 1; i < arr.length; i++)
    {
        let tmp = {};

        tmp[arr[0][0]] = arr[i][0];
        tmp[arr[0][1]] = arr[i][1];
        tmp[arr[0][2]] = arr[i][2];
        tmp[arr[0][3]] = arr[i][3];

        result.push(tmp);
    }

    return result;

}

/* console.log(arrayConversiontoObject([
    ["Number","Name","Position","Point per Game"],
    [1,"Dimas","Center",[1,22,19,14]],
    [2,"Ryan","Point of Guard",[1,22,19,14]],

]));*/

 var object_roster = arrayConversiontoObject([
    ["Number","Name","Position","Point per Game"],
    [1,"Dimas","Center",[1,22,19,14]],
    [2,"Ryan","Point of Guard",[1,22,19,14]],

]);

console.log(object_roster[1]);