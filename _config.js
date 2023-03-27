var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mouriceoronje:Sammy6432.1@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://mouriceoronje:Sammy6432.1@mouricecluster.3pujjfm.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://mouriceoronje:Sammy6432.1@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
