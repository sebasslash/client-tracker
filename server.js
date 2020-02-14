const express         = require('express'),
      mongoose        = require('mongoose'),
      bodyParser      = require('body-parser'),
      compression     = require('compression'),
      helmet          = require('helmet'),
      handlebars      = require('express-handlebars'),
      uuid            = require('uuid/v4'),
      session         = require('express-session'),
      passport        = require('passport'),
      LocalStrategy   = require('passport-local').Strategy,
      app             = express();

const mainRoutes = require('./api/routes/main.routes');
const port = process.env.PORT ? process.env.PORT : 3000;


// hard coded right now for testing -- TODO: Add a config file
mongoose.connect('mongodb://localhost/paperless-client', {useNewUrlParser: true});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());

app.use(express.static(__dirname + "/public"));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(session({
    secret: uuid()
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(mainRoutes);

try {
    app.listen(port, () => {
        console.log(`Starting Client Tracker Server on ${port}`);
    });
} catch (err) {
    console.error(`Error starting server: \n ${err}`);
}
