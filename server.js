import express from "express"
import fetchJson from './helpers/fetch-json.js'
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use('/assets', express.static('assets'));
app.use('/images', express.static('assets/images'));

app.get('/', (req, res) => {
    res.render('index', {
      name: "Alice", // Voorbeelddata, je kunt dit aanpassen
      surname: "Afanasieva", // Voorbeelddata
      bio: "Een gepassioneerde webdesigner en ontwikkelaar", // Voorbeelddata
    });
  });

app.set('port', process.env.PORT || 2007)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})