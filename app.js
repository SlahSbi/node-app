
//App note 

const fs = require('fs');
let n = 0

list = () => {
    //n +=1
    console.log(`Printing ${n} note(s)`)
  if(n!==0){  fs.readFile('app.json', (err, data) => {
        if (err) throw err;
        //let note = JSON.parse(data);
        console.log(`Title:${JSON.parse(data).title}`)
       
        console.log(`Body :${JSON.parse(data).body}`);
    })}
}
add = () => {
    console.log('add to program')
    let Maj =
{
    "title": "react1",
    "body": "learn-react1"
}
    
let data = JSON.stringify(Maj, null, 2);

fs.writeFile('app.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

}

help = () => {
    console.log('options:')
    console.log('--help\t\tShow help\t\t\t[boolean]')
    console.log('--title, -t\tTitle of note\t\t\t[required]')
    console.log('--body,  -b\tBody of note\t\t\t[required]')
    console.log('\nMissing required argumets:title,body');
}

let a = process.argv[1].substring(process.argv[1].lastIndexOf("\\")+1,process.argv[1].length)
let b = process.argv[2]
switch (b) {
    case '--help':
        help();
        break;
    case 'list':
        list();
        break;

    case 'add':
        add();
        break;

    default:
        if((a!=="")||(b!==""))console.log(a+" "+b)
        help();

}








