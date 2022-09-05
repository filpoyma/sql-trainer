fs = require('fs');
fs.readFile('sampleData.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data.replace(/(\r\n|\n|\r)/gm, "");
  const arrData = data.split(';');
  arrData.pop();
  //console.log(JSON.stringify(arrData));

  fs.writeFile('tableInit.json', JSON.stringify(arrData), function (err) {
    if (err) return console.log(err);
    //console.log('tableInit.json');
  });

});


// fs.readFile('seeds.sql', 'utf8', function (err,data) {
//   if (err) return console.log(err);
//
//   data = data.replace(/(;)/gm, "");
//   const arrData = data.split('\n');
//   arrData.pop();
//   //console.log(JSON.stringify(arrData));
//
//   fs.writeFile('seeds.json', JSON.stringify(arrData), function (err) {
//     if (err) return console.log(err);
//     console.log('tableInit.json');
//   });
//
// });



