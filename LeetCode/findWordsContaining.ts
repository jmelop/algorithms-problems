/* 2942. Find Words Containing Character
You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order. */

function findWordsContaining(words: string[], x: string): number[] {
  let array: number[] = [];
  let i = 0;
  while (i < words.length) {
    for (let z = 0; z < words[i].length; z++) {
      if (words[i][z] === x) {
        array.push(i);
        break;
      }
    }
    i++;
  }
  return array;
}

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));

/* function findWordsContaining(words: string[], x: string): number[] {
    let array: number[] = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            array.push(i);
        }
    }
    return array;
}; */
