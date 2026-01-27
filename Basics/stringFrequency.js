// Count frequency of each character
function stringFreq(str) {
    let freq = {}
    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i)
        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
} 

// time complexity - O(n)
// space complexity - O(n)
console.log(stringFreq('helLo'))

// Find the first non-repeating character
function firstNonRepeatingChar(str) {
    let freq = {}
    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i)
        freq[char] = (freq[char] || 0) + 1
    }

    for(let i=0; i<str.length; i++) {
        if(freq[str[i]] == 1) {
            return str[i]
        }
    }
}
// time complexity - O(n)
// space complexity - O(n)
console.log(firstNonRepeatingChar('aabccdee'))
console.log(firstNonRepeatingChar('aabccdee'))

// Check if two strings are anagrams
function checkAnagrams(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }

    let freq = {}

    for(let i=0; i<str1.length; i++) {
        let char = str1.charAt(i)
        freq[char] = (freq[char] || 0) + 1;
    }

    for(let i=0; i<str2.length; i++) {
        let char = str2[i]
         
        if(!freq[char]) {
            return false;
        }

        freq[char]--;
    }

    return true;
}
// time complexity - O(n)
// space complexity - O(n)
console.log(checkAnagrams("listen", "silent"))
console.log(checkAnagrams("hello", "world"))

// Return all characters that appear more than once
function moreThanOnce(str) {
    let freq = {}
    let result = []
    
    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i)
        freq[char] = (freq[char] || 0) + 1

        if(freq[char] == 2) {
            result.push(char)
        }
    }

    return result;
}

// time complexity - O(n)
// space complexity - O(n)
console.log(moreThanOnce('programming'))

// Check if a string can be rearranged to form a palindrome
function checkPalindrome(str) {
    let freq = {}
    let oddCount = 0;
    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i)

        freq[char] = (freq[char] || 0) + 1;
    }

    for(let [key, value] of Object.entries(freq)) {

        if(value % 2 !== 0) {
            oddCount++;
            if(oddCount > 1) return false;
        }
    }

    return true;

}

// time complexity - O(n)
// space complexity - O(n)
console.log(checkPalindrome('carrace'))
console.log(checkPalindrome('carrrace'))
console.log(checkPalindrome('aabb'))
console.log(checkPalindrome('abc'))