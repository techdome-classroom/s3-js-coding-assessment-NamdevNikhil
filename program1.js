/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];

    for(let i of st){
        if(i === '(' || i === '{' || i ==='['){
            st.push(i);
        }
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


