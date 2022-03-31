const fs = require('fs');
const { title } = require('process');
const file = "notes.json";
const chalk = require('chalk');


let notes = [];
try{
    notes = JSON.parse(fs.readFileSync("notes.json"));
}catch(e){
    console.log(e);
}

const write = (file,content) =>{
    fs.writeFile(file,JSON.stringify(content), (err)=>{
        if(err){
            console.log(err);
        }   
    })
}

const add = (title,body) =>{

    index = notes.findIndex((x)=> x.title == title)
    if(index==-1){
        notes.push({title,body});
        write(file,notes);
        console.log(chalk.green('note updated'));  
    }else{
        notes[index].body = body;
        write(file,notes);
        console.log(chalk.green('note updated'));  
      }
}


const remove = (title) => {
    index = notes.findIndex((x)=> x.title == title);
    if(index==-1){
        console.log('this title does not exist in notes');
    }
    else{
        const remnote = notes.filter((x) => x.title != title);
        write(file,remnote)
    }
}

const list = ()=>{
    console.log(chalk.yellow('Your notes'));
    for(var note of notes){
        console.log(note.title);
    }
}

const read = (titles)=>{
    index = notes.findIndex((x)=> x.title == titles);
    for(var note of notes){
        if(note.title == titles){
            console.log(note.body);
        }
    }
}
module.exports={
    add,
    list,
    remove,
    read
}