import User from "../Modules/user.model.js";
import createError from "../Utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toSTring()) {
    return next(createError(403, "You can only delete your account!"));
  }

  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Successfully deleted. . . ");
};
