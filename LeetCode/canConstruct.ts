/* 383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  let map1 = new Map();
  let map2 = new Map();

  for (let letter of ransomNote) {
    map1.set(letter, (map1.get(letter) || 0) + 1);
  }

  for (let letter of magazine) {
    map2.set(letter, (map2.get(letter) || 0) + 1);
  }

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) < value) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b"));
