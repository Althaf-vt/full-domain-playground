function isPrime_Rec(n, i = 2){
    if(n < 2) return false;
    if(i > Math.sqrt(n)) return true;
    if(n % i === 0) return false
    return isPrime_Rec(n, i + 1)
}

// console.log(isPrime_Rec(3))

function sumOfPrimeInArr(arr, sum = 0,i = 0){
    if(arr.length === i) return sum;

    if(isPrime_Rec(arr[i])){
        return sumOfPrimeInArr(arr, sum + arr[i],i + 1);
    } else{
        return sumOfPrimeInArr(arr,sum, i + 1);
    }


}
// console.log(sumOfPrimeInArr([1,2,3,4,7,80,20,5]))

function sumOfFirstNPrime(n,sum = 0,count = 0,i = 1){
    if(count === n) return sum;

    if(isPrime_Rec(i)) return sumOfFirstNPrime(n, sum + i, count + 1, i + 1);
    else return sumOfFirstNPrime(n,sum, count, i + 1)
}

console.log(sumOfFirstNPrime(11));