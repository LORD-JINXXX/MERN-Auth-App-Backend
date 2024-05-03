require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

const corsConfig = {
    credentials: true,
    origin: true,
};




//middlewares
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cookieParser());


app.use(express.json());
app.use(cors(corsConfig));



//Routers

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const verifyRoute = require('./routes/verify');



//Routes


app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/users", verifyRoute);







//Database
const connectDB = require("./database/db");

connectDB();



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});