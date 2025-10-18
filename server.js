const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Login-Handler: leitet auf /treasure.html weiter und übergibt bug flag als Query
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'JackSparrow' && password === 'rum') {
    const bug = process.env.BUG_MODE === '1' ? 'true' : 'false';
    return res.redirect(`/treasure.html?bug=${bug}`);
  }
  res.send('<h1>☠️ Falsches Passwort, Landratte!</h1><a href="/login.html">Zurück</a>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`⚓ Pirates app running at http://localhost:${PORT}/login.html`);
});