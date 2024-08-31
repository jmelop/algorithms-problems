/* 14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    var prefix: string = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
