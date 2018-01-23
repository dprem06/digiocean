var express    = require('express');
var app        = express(); 


// Handle / route
app.get('/', (req, res) =>
   
  res.json({'Message' : 'I am working...'})
)

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
