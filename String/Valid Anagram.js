/*
Question:
Given two strings s and t, return true *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
*/
function(s, t) {
    let letter={};
    if(s.length !==t.length) return false;
    
    for(let i=0; i< s.length; i++){
        letter[s[i]] ? letter[s[i]]++ : letter[s[i]]=1;
    }
   // console.log(letter)

    for(let j=0; j< s.length; j++){
        if(letter[t[j]]){
            letter[t[j]]--
        }else{
            return false;
        }
    }
    return true;
};