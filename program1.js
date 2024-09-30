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
            const top = s.length > 0 ? s.pop() : '#';
            if(top !== brackets[i]){
                return false;
            }
        }
        else{
            s.push(i);
        }
    }
    return s.length === 0;
};

module.exports = { isValid };


