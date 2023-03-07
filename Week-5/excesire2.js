function isVowel (char) { 
    return "aeiou".includes(char); 
}

const vowelCount = (word) => {
    const vowelMap = new Map();
    for (let letter of word){
        let letterLower = letter.toLowerCase();
        if (isVowel(letterLower)){
            vowelMap.set(letterLower, 
                vowelMap.has(letterLower) ? vowelMap.get(letterLower) + 1 : 1
            )
        }
    } 
    console.log(vowelMap);
    return vowelMap;
}

vowelCount("hirenjethva");  //Map(4) { 'i' => 1, 'e' => 2, 'a' => 4, 'u' => 1 }

// Time Complexity is O(n)
// Space complexity is O(1)