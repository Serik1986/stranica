var fs = require('fs');
 fs.mkdir ('text',  function() {
   fs.writeFile ('./text/text.txt', 'Privet', function() {
     console.log("Sozdan");
   });

 });
