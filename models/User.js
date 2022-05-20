const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");
const { isEmail } = require("validator"); //?
// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return isEmail(value);
        },
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, //??
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
}); //
const User = model("User", userSchema);
module.exports = User;
