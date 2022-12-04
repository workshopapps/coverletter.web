const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			required: true,
			default: Date.now,
		},
		replies : [
		{	text: String,
			user_id: String,
			replyId : {
               type: mongoose.Schema.Types.ObjectId,
			   ref : 'user'
			}}
			
		]
	},

	{
		timestamps: true,
	}
);
module.exports = mongoose.model("Blog", BlogSchema);
