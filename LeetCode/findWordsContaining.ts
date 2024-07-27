/* 2942. Find Words Containing Character
You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order. */

function findWordsContaining(words: string[], x: string): number[] {
    let array: number[] = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            array.push(i);
        }
    }
    return array;
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));
