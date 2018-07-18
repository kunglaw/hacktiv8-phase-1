const fs = require("fs");

class PersonParser{
    constructor(){
        this._file = this.file;
        this._people = [];
    }


    readFile(){
        fs.fileStr = fs.readFileSync(this._file,"utf-8");
        return fileStr;
    }
}