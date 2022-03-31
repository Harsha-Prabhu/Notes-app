const fs = require('fs');
const { title } = require('process');
const file = "notes.json";


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
        console.log(notes);
        write(file,notes);
    }else{
        notes[index].body = body;
        write(file,notes);
        console.log('note updated');
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
    var keys = []
    for(var key in notes)
    {
        keys.push(key);
        console.log(keys.values);
    }
}
module.exports={
    add,
    list,
    remove
}