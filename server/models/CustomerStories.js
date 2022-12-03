const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerStoriesSchema = new Schema(
	{
		adminId: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		subTitle: {
			type: String,
			required: true,
		},
		introduction: {
			type: String,
			required: true,
		},
		challenge: [
			{
				body: {
					type: String,
					required: true,
				},
				comment: {
					type: String,
					required: true,
				},
			},
		],
		solution: [
			{
				body: {
					type: String,
					required: true,
				},
				comment: {
					type: String,
					required: true,
				},
			},
		],
		outcome: [
			{
				body: {
					type: String,
					required: true,
				},
				comment: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("CustomerStories", CustomerStoriesSchema);
