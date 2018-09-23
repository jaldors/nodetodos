var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.name + 
        ":" + configValues.pwd + 
        '@ds111913.mlab.com:11913/nodetodosample';
    }
}