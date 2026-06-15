// Find All Leaders in Array

// 👉 Element is leader if all elements to its right are smaller

function findLeaders(arr) {
    let leaderArray = []
    
    for(let i=0; i<arr.length; i++) {
        let leader = true
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] > arr[i]) {
                leader = false;
            }
        }

        if(leader) {
            leaderArray.push(arr[i])
        }
    }

    return leaderArray
}

console.log(findLeaders([16,17,4,3,5,2]))

// Time Complexity - O(n)
// Space Complexity - O(n)