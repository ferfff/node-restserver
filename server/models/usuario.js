const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let validRoles = {
	values: ['ADMIN_ROLE', 'USER_ROLE'],
	message: '{VALUE} is not a valid role'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
	nombre:{
		type: String,
		required: [true, 'Field nombre is required']
	},
	email:{
		type: String,
		unique: true,
		required: [true, 'email is required']
	},
	password:{
		type: String,
		required: true
	},
	img:{
		type: String,
		required: false
	},
	role:{
		type: String,
		default: 'USER_ROLE',
		enum: validRoles
	},
	estado:{
		type: Boolean,
		default: true
	},
	google:{
		type: Boolean,
		default: false
	}
});

usuarioSchema.methods.toJSON = function() {
	let user = this;
	let userObject = user.toObject();

	delete userObject.password;

	return userObject;
}

usuarioSchema.plugin(uniqueValidator, {message: '{PATH} should be unique'});

module.exports = mongoose.model('Usuario', usuarioSchema);
