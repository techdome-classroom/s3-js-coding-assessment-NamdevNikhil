/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const st = [];

    for(let i of st){
        if(i === '(' or i === '{' or i ==='['){
            st.push(i);
        }
        else{
            const top = st.pop();
            if()
        }
    }
    return st.length === 0;
};

module.exports = { isValid };


