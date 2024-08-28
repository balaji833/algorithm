function isPalindrome(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }
    let testString="madam"
    let result=isPalindrome(testString)
    console.log(result);