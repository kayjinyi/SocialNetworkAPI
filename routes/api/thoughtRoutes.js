const router = require("express").Router();
const {
  createThought,
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").post(createThought).get(getThoughts);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.post("/:thoughtId/reactions", createReaction);
router.delete("/:thoughtId/reactions/:reactionId", deleteReaction);

module.exports = router;
