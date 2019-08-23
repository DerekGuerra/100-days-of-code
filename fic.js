var a, b, results; 

a = 0;
b = 1;
results = a + b;

for (var i = 1; i < 50; i++) {
  console.log(results);
  results = a + b;

  a = b;
  b = results;
}