const { get } = require("../routes");

function getBrother(){
    return "Jake Kucharyski";
}

function getMom(){
    return "Charity";
}


// module.exports = function (){
//     return "George";
// }

module.exports = {
    "getBrother": getBrother,
    "getMom": getMom
}

