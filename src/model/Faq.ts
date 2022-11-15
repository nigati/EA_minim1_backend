import { Schema, model } from 'mongoose';

const Faq = new Schema({
	title: {
		type: String,
		required:true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	body: {
		type: String,
		required:  true
	},
    dayOfCreation: {type: Date, default: Date.now}



});

export default model('Faq', Faq);