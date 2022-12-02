const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema(
	{
		title: {
			type: String,
			
		},
		content: {
			type: String,
			
		},
		createdAt: {
			type: Date,
			
			default: Date.now,
		},
		replies : [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'replies'
			}
		]
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("Blog", BlogSchema);
