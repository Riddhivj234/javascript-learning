

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}

let str1 = "madam";
let str2 = "dad";
let str3 = "hello";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));


function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase to ensure case insensitivity and ignore spaces
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // If lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert strings to arrays of characters, sort them, and join them back into strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare sorted strings
    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams("silent", "listen"));  // True
console.log(areAnagrams("hello", "world"));    // False
console.log(areAnagrams("Such", "much"));      // False


