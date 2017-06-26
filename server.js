var express = require("express"),
	api		= require("./api"),
	users	= require("./accounts"),
    app 	= express();

app
    .use(express.static("./public"))
    .use(users)
    .use("./api", api)
    .get("*", function (req, res){
    	if (!req.user) {
    		res.redirect("/login");
    	}else {
       		res.sendfile("public/main.html");
       }
    });
    .listen(3000);

/*var angularserver = require('angularjs-server');
var express = require('express');
var fs = require('fs');
 
// The main main.html file for your application, that you'd normally serve to browsers to start the app. 
// This should have any script tags for your application removed from it, as they will be added separately. 
var templateFile = 'main.html';
var template = fs.readFileSync(templateFile);
 
// Directory to serve static resources from. 
var staticDir = 'static';
 
var app = express();
var angularMiddlewares = angularserver.Server({
    template: template,
 
    // Scripts that should be loaded into the angularjs context on the server. 
    // This should include AngularJS itself and all of the source files required 
    // to register your Angular modules, but *not* code to bootstrap the 
    // application. 
    serverScripts: [
        'angular.js',
        'angular-route.js',
        'app.js'
    ],
 
    // Scripts that should be loaded by the client browser to render the page. 
    // This should include the same set of files to load Angular itself and 
    // your Angular modules, but should also include additional code that 
    // calls into angular.bootstrap to kick off the application. 
    // Unlike serverScripts, these are URLs. 
    clientScripts: [
        '/static/angular.js',
        '/static/angular-route.js',
        '/static/app.js',
        '/static/clientonly.js'
    ],
 
    // Angular modules that should be used when running AngularJS code on 
    // the server. 'ng' is included here by default, along with the 
    // special AngularJS-Server overrides of 'ng'. 
    angularModules: [
        'app'
    ]
});
 
// Make the scripts and other assets available to the browser. 
app.use('/static', express.static(staticDir));
 
// Serve all other URLs by rendering the Angular page on the server. 
app.use(angularMiddlewares.htmlGenerator);*/