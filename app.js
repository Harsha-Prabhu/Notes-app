const yargs = require('yargs');
const commands = require('./commands.js')
//defining properties for cli

let command = yargs.argv._[0]; 
let params = yargs.argv;

let title = params.title;
let body = params.body;


if(command == 'add'){
    if( title && body)
    {
        commands.add(title,body)
    }
}
else if(command == 'remove'){
    if(title){
        commands.remove(title);
    }
}
else if(command == 'list'){
    commands.list(title);
}