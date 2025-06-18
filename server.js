const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3001;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets
app.use('/assets', express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    repoUrl: 'https://github.com/Srimany123/ElVoidDB',
    pdfUrl:  'https://github.com/Srimany123/ElVoidDB/blob/main/ElVoidDB.pdf'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
