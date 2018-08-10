// created function to print table 
function printTimesTable(num,limit=10) {
    for(var i=1; i<=limit; i++) {
        prod=num*i;
        console.log(`${num} * ${i} = ${prod}`)
    }
}
printTimesTable(5);