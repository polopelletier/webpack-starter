const express = require("express");
const handlebars = require("express-handlebars");

const PORT = 8080;

const app = express();

// Setup view engine
const viewsDir = "src/views";
app.set("views", viewsDir);
app.engine("handlebars", handlebars({
	defaultLayout: "main",
	layoutsDir: `${viewsDir}/layouts`,
	partialsDir: `${viewsDir}/partials`
}));
app.set("view engine", "handlebars");

// Static files
app.use(express.static("build"));

// Routes
app.get("/", function(req, res) {
	res.send("Hello world");
});

app.get("/animals", function(req, res) {
	res.render("page", {
		title: "Animals",
		script: "js/animals.js"
	});
});

app.get("/page1", function(req, res) {
	res.render("page", {
		title: "Page 1",
		script: "js/page1.js"
	});
});

app.get("/page2", function(req, res) {
	res.render("page", {
		title: "Page 2",
		script: "js/page2.js"
	});
});

// Listen
app.listen(PORT, function(err) {
	if (err) {
		console.error(err.message);
		return;
	}

	console.log(`Listening on port ${PORT}`);
})