var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mouriceoronje:Sammy6432.1@mouricecluster.3pujjfm.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://mouriceoronje:Sammy6432.1@mouricecluster.3pujjfm.mongodb.net/darkroom_dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://mouriceoronje:Sammy6432.1@mouricecluster.3pujjfm.mongodb.net/darkroom_test?retryWrites=true&w=majority',
}
module.exports = config;
