/* 
    RELEASE 0:
    bikin board static untuk posisi kapal 

    node namaFile.js [koordinatyanginginditembak]
    - minimal input koordinatTembakan 1 
    - maksimal input koordinatTembakan 10

    RELEASE 1:
    bikin board random untuk posisi kapal. 
    jumlah kapal tetap 4 dengan size yang sama 

    - tidak boleh ada kapal yang bertabrakan 
    - arah penulisan kapal (up, left, down, right) ini random

*/

function checkIsShipCross()
{
    // return false / true
}

function attack()
{

}

// pengecekan koordinat yang sama belum sempurna
function generateShip(dataShip) // board dalam bentuk array multi dimensi 10 * 10
{
    //let direction = ["up","right","down","left"];
    //var stateDirection = "";
    let saveCoordinate = {}

    // start coordinate
    for(let i = 0; i < dataShip.length; i++)
    {
        let tempCoordinat = []

        let rowPosition = Math.floor(Math.random() * 9);
        let colPosition = Math.floor(Math.random() * 9); 
        let isPush = true;
        // console.log([rowPosition,colPosition]);
        
        for(j = 0; j < saveCoordinate.length;  j++ )
        {
            
            if(saveCoordinate[j][0] === rowPosition && saveCoordinate[j][1] === colPosition)
            {
                isPush = false;
            }
        }
        
        if(isPush)
        {
            tempCoordinat.push(rowPosition);
            tempCoordinat.push(colPosition);
            
            saveCoordinate[dataShip[i].id] = []
            saveCoordinate[dataShip[i].id] =tempCoordinat;
        }else
        {
            // recursive
        }
    
    }

    return saveCoordinate;

}

function generateBodyShip(ships,board,coorAllShip)
{
    console.log(" coorAllShip : ",coorAllShip);
    // let direction = ["up","right","bottom","left"];
    let stateDirection = "up";
   

    for(let j = 0; j < coorAllShip.length; j++)
    {
        let start = 0;
        let finish = 0;
        let isBodyform = true;

        let rowC = coorAllShip[j][0];
        let colC = coorAllShip[j][1];

        if(stateDirection === "up")
        {
            
            start = coorAllShip[j][0]; // koordinat row
            finish = start = ships[j]["width"];

            for(let i = start; i < finish; i++)
            {
                if(board[rowC][colC] !== undefined && board[rowC][colC] === "")
                {
                    board[rowC][colC] = 
                }    
            }

            if(isBodyform === true)
            {
                break;

            }else{
                stateDirection = "right"
            }
           
        }
        if(stateDirection === "right")
        {
            
            
            if(isBodyform === true)
            {
                break;

            }else{
                stateDirection = "bottom";
            }
        }
        if(stateDirection === "bottom")
        {
            
            
            if(isBodyform === true)
            {
                break;

            }else{
                stateDirection = "left";
            }
        }
        if(stateDirection === "left")
        {
            
            if(isBodyform === true)
            {
                break;

            }else{
                stateDirection = "";
            }
        }
    }
}

function coordinateSystem(coordinate)
{
    let listRow = ["A","B","C","D","E","F","G","H","I","J"];
    let listCol = [1,2,3,4,5,6,7,8,9,10];
    
    var realCoordinate = [];

    // row
    let coorArr = coordinate.split("");
    //console.log(coorArr);
    
    for(let i = 0; i < listRow.length; i++)
    {
        if(coorArr[0] === listRow[i])
        {
            realCoordinate.push(i);
            //console.log("hahi");
            break;
        }
    }

    for(let j = 0; j < listCol.length; j++)
    {
        if(Number(coorArr[1]) === listCol[j])
        {
            realCoordinate.push(j);
            //console.log("hah");
            break;
        }
    }

    return realCoordinate; // coordinate 
}

function printBoard(coorAllShip,ships){

    let boardWide = 10;
    let board = [];

    // baris 
    for(let i=0; i<boardWide; i++)
    {
        // kolom
        let tmp = [];
        for(let j=0; j<boardWide; j++)
        {
            tmp.push('');
            
           
        }
        board.push(tmp);
    }
    

    // writing board
    for(let k = 0; k < board.length; k++){
        for(let l = 0; l < board[k].length; l++)
        {
            for(ship in coorAllShip)
            {
                if(coorAllShip[ship][0] === k && coorAllShip[ship][1] === l)
                {
                    board[k][l] = ships[ship-1]["char"];
                }
            }
        }
    }

    

    return board;
    //console.table(board);
}


// main Function
function battleship(ships)
{
    
    //console.log(printBoard());
    let coorAllShip = generateShip(ships);
    let board = printBoard(coorAllShip,ships);
    // generateBodyShip
    //console.log(coorAllShip);
    let completeBoard = generateBodyShip(ships,board,coorAllShip);
    
    //console.table(board);
    //coordinateSystem("B8");
    
}

battleship([
    {
        id:1,
        name:"AirCraft Carrier",
        width:5,
        char:"#"
    },
    {
        id:2,
        name:"Battleship",
        width:4,
        char:"@"
    },
    {
        id:3,
        name:"Cruiser",
        width:3,
        char:"H"
    },
    {
        id:4,
        name:"Destroyer",
        width:2,
        char:"O"
    }
]);