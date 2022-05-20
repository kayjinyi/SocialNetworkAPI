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
      username: "lernantino",
      // userId: "62880a6a36d285de026c5873",
    },
    {
      thoughtText: "Super cool.",
      username: "lernantino",
      // userId: "62880a6a36d285de026c5873",
    },
  ];
  const users = [
    {
      username: "lernantino",
      email: "lernantino@gmail.com",
    },
    { username: "lern", email: "lern@gmail.com" },
  ];
  // Add thoughts to the collection and await the results
  await Thought.insertMany(thoughts);

  // Add courses to the collection and await the results
  await User.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
