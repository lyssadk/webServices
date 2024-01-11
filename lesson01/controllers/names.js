const { get } = require("../routes");

function getName(){
    return "Bob";
}

function getSusan(){
    return "Susan";
}


// module.exports = function (){
//     return "George";
// }

module.exports = {
    "getName": getName,
    "getSusan": getSusan
}

