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
            const top = s.length > 0 ? s.toUpperCase()
        }
    }
};

module.exports = { isValid };


