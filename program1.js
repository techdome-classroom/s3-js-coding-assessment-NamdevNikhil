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
            const top = st.pop();
            if((i === ')' && top !== '(')
            || (i === '}' && top !== '{')
            || (i === ']' && top != '[')){
                return false;
            }
        }
    }
    return st.length === 0;
};

module.exports = { isValid };


