// please run it on Node.js in visual studio
const a = [1,1,1,2,8,6,1];
const b = [2,4,6,1,4,18,61];
const c = [2,8,18,2,1,1,8];

let oglist = [];
let list = [];
let newl = [];

//converting the 3 given list contents into columns
for(i = 0; i < a.length; i++){
    list[i] = [a[i],b[i],c[i]];
    oglist[i] = [a[i],b[i],c[i]];
}

//converts the nested array into a string
//and sorts it out in ascending order
list.forEach(listre);
function listre(val){
    newl.push(JSON.stringify(val.sort(function(a,b){
    return a - b;
    })));
}

//duplicate removal    
for (i = 0; i < newl.length; i++) {
    var current = newl[i];
    var lastIndex = newl.lastIndexOf(current);
    while (lastIndex > i) {
    newl.splice(lastIndex, 1);
    oglist.splice(lastIndex, 1);
    lastIndex = newl.lastIndexOf(current);
    }
}

//output printed without the list
console.log('a','b','c');
for(i = 0; i < oglist.length; i++){
    console.log(oglist[i].join(' ').toString());
}
