function findTwoNnumber(array,N){
    for(let i =0 ; i<array.length;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[i]+array[j]===N){
                return[array[i],array[j]];
            }
        }
    }
    return "no pair found"

}
let array = [2,3,4,5,6,7,8,9]
let N = 20
console.log(findTwoNnumber(array,N));
