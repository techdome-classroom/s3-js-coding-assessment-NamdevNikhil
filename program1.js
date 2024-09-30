/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else { 
        else{
            if(!st.lenght || (i === ')' && st[st.length - 1] !== '(')
            || (i === '}' && st[st.length - 1] !== '{')
            || (i === ']' && st[st.length - 1] !== '[')){
                return false;
            }
            st.pop();
        }
    }
    return st.length === 0;
};

module.exports = { isValid };


