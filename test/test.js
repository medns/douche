var douche = require('../index.js');

var client = new douche('http://api.search.live.net/search.wsdl');
client.wsdl.parse();

var client = new douche('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');
client.wsdl.parse();