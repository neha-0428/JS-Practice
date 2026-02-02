// Check if ANY substring of str2 is an anagram of str1
function subStringAnagram(str1, str2) {
    let freq = {}
    for(let i=0; i<str1.length; i++) {
        freq[str1[i]] = (freq[str1[i]] || 0) + 1
    }

    let needed = str1.length;
    let left = 0;

    for(let right=0; right<str2.length; right++) {
        let rightChar = freq[str2[right]];

        if(freq[rightChar] !== undefined) {
            if(freq[rightChar] > 0) {
                needed--;
            }

            freq[rightChar]--;
        }

        if(right - left + 1 > str1.length) {
            let leftChar = freq[str2[left]]

            if(freq[leftChar] !== undefined) {
                if(freq[leftChar] >= 0) {
                    needed++;
                }

                freq[leftChar]++;
            }

            left++;
        }

        if(needed === 0) {
            return true;
        }
    }
    return false;
}


console.log(subStringAnagram('ab', 'cbedgbaki'))