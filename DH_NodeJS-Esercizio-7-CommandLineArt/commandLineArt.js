const figlet = require('figlet');

figlet(
    `There we can
 find something beauty,
 and something full,
  in this case we have both: 
  This is beautiful!!`
  , function(err, data) {
    if (err) {
        console.log('And they said "nothing can go wrong"...');
        console.dir(err);
        return;
        
    }
    console.log(data);
});


