var S$ = require('S$');

var testStr = S$.symbol('A', 'H');
S$.assume(testStr.length < 5);

if (testStr.lastIndexOf('D') == 4) {
  throw 'Reachable';
}
