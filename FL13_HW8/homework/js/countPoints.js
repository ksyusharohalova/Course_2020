function countPoints ([...args]) {
    let count = 0;
    for (let i=0; i<args.length; i++) {
        if (args[i][0] > args[i][2]) {
            count += 3;
        } else if(args[i][0] === args[i][2]) {
            count +=1;
        }
    }
    return count;
}
console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));