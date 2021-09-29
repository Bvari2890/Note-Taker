const express = require ("express");
const port = process.env.PORT || 3001;
const app = express();

const api = require("./routes/APIRoutes");
const html = require("./routes/HTMLroutes");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(api);
app.use(html);

app.listen(port,function(){
    console.log("App listening on port:",port)
});