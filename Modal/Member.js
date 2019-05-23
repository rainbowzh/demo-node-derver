var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    name: String ,
    age : Number
}) ;

MemberSchema.methods.speak = function() {
    var gretting =  this.name  ? `miaomiao name is ${this.name}` : 'i dont have name' ;
    console.log(gretting) ;
}

module.exports = mongoose.model('Member', MemberSchema);