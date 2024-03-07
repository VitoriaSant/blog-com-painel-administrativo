const Sequilize = require("sequilize");
const Connection = require("../database/connection");

const Category = Connection.define('articles',{
    title:{
        type: Sequilize.STRING,
        allowNell: false
    },
    slug: {
        type: Sequilize.STRING,
        allowNell: false
    },
    body: {
        type: Sequilize.TEXT,
        allowNell: false
    }
})


module.exports = Article;