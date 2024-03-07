const express = require("express");
const router = express.Router();
const category = require("./category");
const slugify = require("slugify");
const Category = require("./category");

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/Categories/new");
});

router.post("/categories/save",(req,res) =>{
     var title = req.body.cadTitle;
     if(title != undefined){
        category.create({
            title: title, 
            slug: slugify(title)

        })
        res.redirect("/admin/Categories/new")
     }else{
        res.redirect("/admin/Categories/new")
     }

});
 
router.get("/admin/categories", (req, res) => {

    Category.findAll().then(categories =>{
        res.render("admin/Categories/index", {categories: categories});
    });
});

router.post("/categories/delete", (req, res) =>{
    var id= req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Category.destroy({
                where:{
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            })
            
        }else{
            res.render("/admin/categories");
        }
    }else{
        res.render("/admin/categories");
    }
});



module.exports = router;