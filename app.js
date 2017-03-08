var soap = require('soap');
var uuid = require('node-uuid');

var url = 'http://localhost:21134/Service1.svc?wsdl';
var guid = uuid.v1();

var cred = {UserName: 'magvas',Password: '1234',SessionId: guid};

var sortedCred = sortObject(cred);

var args = {value: sortedCred};

soap.createClient(url,function(err,client){
    console.log(client.describe());
    client.GetData(args,function(err,result){
        console.log(result);
    });
});

function sortObject(objectToSort) {
    var sortedObject = {},
    key, a = [];

    for (key in objectToSort) {
        if (objectToSort.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sortedObject[a[key]] = objectToSort[a[key]];
    }
    return sortedObject;
}