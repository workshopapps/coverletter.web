const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerStoriesSchema = new Schema(
	{
		adminId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		userId: {
			type: Schema.Types.ObjectId,
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
		challengeBody: {
      type: String,
      required: true,
    },
		challengeContent: {
      type: String,
      required: true,
    },
		solutionBody: {
      type: String,
      required: true,
    },
		solutionContent: {
      type: String,
      required: true,
    },
		outomeBody: {
      type: String,
      required: true,
    },
		outomeContent: {
      type: String,
      required: true,
    },
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("CustomerStories", CustomerStoriesSchema);
