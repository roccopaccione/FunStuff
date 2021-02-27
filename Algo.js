
// Any + num - Reduce to 1

// if num = odd then num * 3 + 1

// if num = even then num / 2


let num = 5;
do{
    function collatz(num) {
        if(num % 2 === 0) {
            console.log("rule 1 gives" + num / 2);
        }else if(num % 2 !== 0){
            console.log("rule 2 gives " + (num * 3) + 1)
        }
    }console.log(collatz(num));
}while(num > 1);
