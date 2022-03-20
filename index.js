import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import authRoute from "./routes/auth.routes.js";
import browseRoute from "./routes/browse.routes.js";
import movieRoute from "./routes/movie.routes.js";
import tvshowRoute from "./routes/tvshow.routes.js";
import passport from "passport";
import morgan from "morgan";
import config from "./config/index.js";
import "./config/passport.js";
import "./config/env.js";
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

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// server
app.listen(config.port, () => console.log(`*** Server running on port ${config.port} ***`));

process.on("SIGINT", () => process.exit(1));
