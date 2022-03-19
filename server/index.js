import "./config/env";
import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import authRoute from "./routes/auth.routes.js";
import browseRoute from "./routes/browse.routes.js";
import movieRoute from "./routes/movie.routes.js";
import tvshowRoute from "./routes/tvshow.routes.js";
import passport from "passport";
import morgan from "morgan";
import config from "./config";
import "./config/passport";

const app = express();
connectDB(); // connect DB

// middleWares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(passport.initialize());

// routes
app.use("/api/auth", authRoute);
app.use("/api/browse", browseRoute);
app.use("/api/movie", movieRoute);
app.use("/api/tv", tvshowRoute);

//routes
app.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });
  // server static assets if in production
if(process.env.NODE_ENV === 'production'){    
  app.use(express.static('frontend/build'))  // set static folder 
  //returning frontend for any route other than api 
  app.get('*',(req,res)=>{     
      res.sendFile (path.resolve(__dirname,'frontend','build',         
                    'index.html' ));    
  });
}

3. Writing scripts in package.json file for our app to work.

Open your package.json file and write the following script to start the server and build process whenever we deploy our app.

  To start node server write the following code :

“scripts":{
  “start”:"nodemon server.js",}

  Post build script for our frontend to install the npm libraries needed and building the app (if your React project name is client, then use client instead of frontend).


   
  
  

// server
app.listen(config.port, () => console.log(`*** Server running on port ${config.port} ***`));

process.on("SIGINT", () => process.exit(1));
