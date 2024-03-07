const Sequilize = require("sequilize");
const Connection = require("../database/connection");

const Category = Connection.define('categories',{
    title:{
        type: Sequilize.STRING,
        allowNell: false
    },slug: {
        type: Sequilize.STRING,
        allowNell: false
    }
})


module.exports = Category;