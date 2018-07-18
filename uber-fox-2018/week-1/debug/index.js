function recursive(num = 0)
{
    if(num <= 20)
    {
        debugger;
        console.log(num);
        recursive(++num);
    }
}

recursive();