/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const s = [];
    const brackets = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };

    for(let i of s){
        if(i in brackets){
            const top = s.length > 0 ? s.pop() : '#';
            if(top !== brackets[i]){
                return false;
            }
            
        }
    }
};

module.exports = { isValid };


