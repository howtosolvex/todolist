module.exports.getdate = function(){

    const today = new Date() // created the date object so that we will be able to fetch the current day and date

    const options = {
        weekday : "long",
        day : "numeric",
        month : "long",
        year : "numeric",
    }    
    return today.toLocaleDateString("ur-Ur", options) // uses the string format as setted in the options
}

module.exports.getday = function(){

    const today = new Date() // created the date object so that we will be able to fetch the current day and date

    const options = {
        weekday : "long",
    }    
    return today.toLocaleDateString("ur-Ur", options) // uses the string format as setted in the options
}
