var S$ = require('S$');
var x = S$.symbol("X", '');
S$.assume(x.length < 25);

var url = 'https://experiment.com?z=' + x + "&y=10&c=%3F";

const hashes = url.slice(url.indexOf('?') + 1).split('&');
const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    });

if(params['z'] === '3') {
	throw "Hello Z3.";
}
