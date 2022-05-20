const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers//userController");

router.route("/").post(createUser).get(getAllUsers);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.post("/:userId/friends/:friendId", addFriend);
router.delete("/:userId/friends/:friendId", removeFriend);

module.exports = router;
