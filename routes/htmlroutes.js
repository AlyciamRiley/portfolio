var path = require("path");

module.exports = function(app){

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/splash.html"));
    });

app.get("/main", function(req, res){
    res.sendFile(path.join(__dirname, "../public/main.html"));
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "../public/about.html"));
});

app.get("/projects", function(req, res){
    res.sendFile(path.join(__dirname, "../public/projects.html"));
    
});

app.get("/resume", function(req, res){
    res.sendFile(path.join(__dirname, "../public/resume.html"));
});





};