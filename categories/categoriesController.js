const express = require("express");
const router = express.Router();
const category = require("./category");
const slugify = require("slugify");

router.get("/admin/Categories/new", (req, res) => {
    res.render("admin/Categories/new");
});

router.post("/categories/save",(req,res) =>{
     var title = req.body.cadTitle;
     if(title != undefined){
        category.create({
            title: title, 
            slug: slugify(title)

        })
     }else{
        res.redirect("/admin/Categories/new")
     }
});



module.exports = router;