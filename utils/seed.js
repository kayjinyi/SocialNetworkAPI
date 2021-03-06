const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  const thoughts = [
    {
      thoughtText: "Here's a cool thought...",
      username: "lern",
      reactions: [{ reactionBody: "nice" }],
    },
    {
      thoughtText: "Super.",
      username: "lern",
      reactions: [],
    },
  ];

  const users = [
    {
      username: "jinyi",
      email: "jinyi@gmail.com",
      // thoughts: [...thoughts],
      thoughts: [],
    },
    { username: "luke", email: "luke@gmail.com", thoughts: [] },
  ];
  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);
  // Add courses to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.table(users);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
