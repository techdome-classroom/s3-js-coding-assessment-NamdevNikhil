/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const st = [];
    const brackets = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };

    for(let i of st){
        if(i in brackets){
            const top = st.length > 0 ? st.pop() : '#';
            if(top !== brackets[i]){
                return false;
            }
        }
        else{
            st.push(i);
        }
    }
    return st.length === 0;
};

module.exports = { isValid };


