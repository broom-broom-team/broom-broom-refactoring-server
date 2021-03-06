import schema from "./schema";
import CustomError from "../../../../utils/errorhandle";

const AuthValidator = {
  signUp: (req, res, next) => {
    const value = schema.signUp.validate(req.body);
    if (value.error) {
      const error = new CustomError("VALID_ERROR", 400, value.error.details[0].message);
      next(error);
    }
    next();
  },

  postEmail: (req, res, next) => {
    const value = schema.postEmail.validate(req.body);
    if (value.error) {
      const error = new CustomError("VALID_ERROR", 400, value.error.details[0].message);
      next(error);
    }
    next();
  },
};

const UserValidator = {
  postEdit: (req, res, next) => {
    const value = schema.postEdit.validate(req.body);
    if (value.error) {
      const error = new CustomError("VALID_ERROR", 400, value.error.details[0].message);
      next(error);
    }
    next();
  },

  postPoint: (req, res, next) => {
    const value = schema.postPoint.validate({ ...req.query, ...req.body });
    if (value.error) {
      const error = new CustomError("VALID_ERROR", 400, value.error.details[0].message);
      next(error);
    }
    next();
  },

  getUserPosts: (req, res, next) => {
    const value = schema.getUserPost.validate(req.query);
    if (value.error) {
      const error = new CustomError("VALID_ERROR", 400, value.error.details[0].message);
      next(error);
    }
    next();
  },
};

export { AuthValidator, UserValidator };
