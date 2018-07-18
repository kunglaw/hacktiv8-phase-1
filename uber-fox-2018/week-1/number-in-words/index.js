"use strict"
function numberInWords(num)
{
    let numberStr = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan"];
    let satuan = ["belas","puluh","ratus","ribu","juta","milyar","triliun"];

    
    if(num < 10)
    {
        return numberStr[num];
    }
    else if(angka < 20 )
    {
        num = num - 10;
        return kamus[angka] + "belas"; 
    }
    else if(angka < 100)
    {
        let sisa = angka % 10;
        angka = Math.floor(angka/10);
        return numberInWords(angka) + 'puluh' + numberInWords(sisa);
    }
    else if(angka < 200)
    {
        
    }
    
}

console.log(numberInWords(1))