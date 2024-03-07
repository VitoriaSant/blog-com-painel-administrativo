const Sequelize = require("sequelize");
const Connection = require("../database/connection");
const Category = require("../categories/category");

const Article = Connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNell: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNell: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNell: false
    }
})

Category.hasMany(Article);//Uma categoria tem muitos artigos
Article.belongsTo(Category);//Um artigo pertence a uma categoria

//So tirar o comentario que vai criar a tabela no bd de acordo com esse arquivo
//Article.sync({force: true})

module.exports = Article;