// Longest substring without repeating characters

function longestSubString(str)
{
    let freq = {}
    for(let i=0; i<str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }

    let left = 0;
    let right = 0;
    while(right < str.length - 1) {
        if(freq[right] > 1) {
            freq[right]--;
            right++;
            left++;
        }
    }
}

console.log(longestSubString('aabcdeefkt'))