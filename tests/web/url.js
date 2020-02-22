var S$ = require('S$');
var x = S$.symbol("X", '');

var url = 'https://experiment.com?' + x;

const hashes = url.slice(url.indexOf('?') + 1).split('&');
const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    });

if(params['z'] === '3') {
	throw "Hello Z3.";
}
