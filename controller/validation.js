//VALIDATION 
let isValidBody = function (body) {
    return Object.keys(body).length > 0;
};

const isValid = function(value){
    if(typeof value === "undefined" || value === null) return false;
    if(typeof value === "string" && value.trim().length === 0) return false;
    if(typeof value == Number && value.trim().length == 0) return false;
    return true;
};
const isValidEmail = (email) => {
    // Use the regular expression to validate the email format
    const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return emailPattern.test(email);
};

// module.exports = {
//     isValidEmail,
// };
// let isValidName = /^[a-zA-Z]*$/;
//  let isValidEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
// let isValidMobile=/^(?:(?:\+|0{0,2})91(\s*|[\-])?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

module.exports = {isValidBody,isValid,isValidEmail};
