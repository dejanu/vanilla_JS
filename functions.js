function greet (name,surname) {
   console.log("hello"+name+surname); 
}

greet('John',"bovi");

function square (number){
    return number * number;
}

let x = square(2);



function get_max(no1,no2){
    // if (no1 >= no2) return no1 ;
    // return no2;
    //conditional operator
    return (no1 > no2) ? no1 : no2 ;
    }


function isLandscape(width,height){
    return (width > height);
}


function fizzBuzz (input){
    if (typeof(input) !== "number") return NaN;
    if (input % 3 == 0 && input % 5 == 0){
            return "FizzBuzz";
        }
    if (input % 3 == 0){
            return "Fizz";
        }
    if (input % 5 == 0){
            return "Buzz";
        }
    
    }



function showNumbers (limit){
    for (let i = 0; i<=limit; i++){
        if (i%2 == 0)
            console.log(i+"even");
        else
        console.log(i+"odd");
    }
}

/// Strict Equalty (===) have the same value and type 
/// Loose Equality (==) have same value but can be different type '1' == 1
function showPrimes (limit) {
    let isPrime = true;
    for (let number = 2; number<=limit ; number++){
        for  (let factor = 2 ; factor < number; factor++){
            ///has another factor
            if (number % factor === 0){
                isPrime =  false;
                break;
            }
        }
        if (isPrime) console.log(number);    
    }
    
}

