
function convertFive(num) {
        // code here
        let result = 0;
        let i = 0;
        while(num > 0) {
            let digit = num % 10;
            console.log(digit, 'digit')
            
            if(digit === 0) {
                digit = 5;
            }
            
            result = result + digit * Math.pow(10, i);
            i++;
            console.log(result, 'result')
            num = parseInt(num / 10);
        }
        
        return result;
    }

console.log(convertFive(1005))