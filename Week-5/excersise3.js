const hasDuplicate = arr => new Set(arr).size !== arr.length

console.log(hasDuplicate([1,5,-1,4])); // false

// Time complexity is O(n)
// space complexity is O(n)

/* Here, we are creating a new Set object from the input array, which has a time complexity of O(n) in the worst case. 
The size property of the Set object gives us the number of unique elements in the input array, which also takes O(1) time. Finally, 
we are comparing the size of the set with the length of the input array to determine if there are any duplicates. 
This comparison operation takes O(1) time as well.
Therefore, the overall time complexity of the code is O(n) + O(1) + O(1), which simplifies to O(n). */

