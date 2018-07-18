function snakeAndLadder(num) {
    let total = num * num;
    let count = 1;
    let LastIdx = num - 1;
    let result = [];

    for (let i = 0; i < num; i++) {
        let tmp = [];

        if (i % 2 === 0) {
            for (let j = 0; j < num; j++) {

                tmp.push(count);
                count++;
            }

        } else {
            start = count + num -1 ;
            finish = start - num;
            for (let j = start; j > finish; j--) {

                //console.log("start - finish = ",start,finish)
                tmp.push(j);
                count++;
                
            }

        }

        //tmp.push(count);

        result[LastIdx] = tmp;
        LastIdx--;
        //count++;
    }

    return result;
}

console.log(snakeAndLadder(4));