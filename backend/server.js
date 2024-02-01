const express = require("express");
const connectdb = require("./databases/connectDB");
const routes = require("./routes/route");

const port = 3000;
const app = express();

//middleware
const LoggerMiddleware = (req, res, next) => {
	console.log(`Logged  ${req.url} ${req.method} -- ${new Date()}`);
	//pour passer au middleware suivant
	next();
};
// utilisation de la fonction middleware
app.use(LoggerMiddleware);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// Appel pour établir la connexion à la base de données
// connectdb();

// app.use("/", routes);

app.listen(port, () => {
	console.log(`Server is running and listening on port ${port}`);
});
