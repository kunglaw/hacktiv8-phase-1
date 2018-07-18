/*
    input pemain 
    input panjangTrack 

    input mainboard
    input listBoard 
    
    build listboard with panjangTrack
    insert listboard into mainboard

*/

function printMainboard(player,listB) 
{
    var mainboard = [];
    for(i = 0; i < player; i++)
    {
        mainboard.push(listB);
    }

    return mainboard;
}

function printListBoard(player,track,position)
{
    //var playerChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var listB = [];

    for(let i = 0; i < track; i++)
    {
        listB.push("");
        
    }

    return listB;
}

function jsRacer(player,track)
{
    let chance = 0;
    var position = 0;

    if(track < 15)
    {
        track = 15;
    }

    while(chance < 2)
    {
       
        let listboard = printListBoard(track,position);
        
        let mainboard = printMainboard(player,listboard);
        console.table( mainboard);
        position++;
        chance++;
    }
    //return mainboard;
}
var argv = process.argv.slice(2); 
jsRacer(argv[0],argv[1]);

    



/* 
function diceRoll () {

}

function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard () {

}

function printLine (player, pos) {

}

function advance (player) {
    
    let board = [];

    for(i = 0; i <= player; i++)
    {

    }
}

function finished () {

}

function winner () {

}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}*/