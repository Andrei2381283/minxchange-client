export default (str, replaceStr, elem) => {
    return str.replace(new RegExp(replaceStr, "g"), `|${replaceStr}|`).split("|").map(e => e == replaceStr ? elem : e);
}