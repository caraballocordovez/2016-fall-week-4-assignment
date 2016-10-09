/**
 * Created by siqi on 9/24/16.
 */

//Create a function such that, given argument arr, an array, it returns the same array in reverse order

function reverseArray(arr){
    //your code here
   var rev = new Array
    for (var i = arr.length-1; i <=0; i--) {
    	rev.push(arr[i]);
    }
    return rev 

}


console.log( reverseArray([1,2,3,4,5]) ); //should log [5,4,3,2,1]

/* arr1 = [1, 2, 4, 5]

console.log(arr1.reverse()) */