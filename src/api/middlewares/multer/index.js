import multer from "multer";
import multerS3 from "multer-s3";
import config from "../../../config";
import CustomError from "../../../utils/errorhandle";

const s3 = config.s3;

const userStroage = multerS3({
  s3: s3,
  bucket: "broombroom",
  key: (req, file, done) => {
    const extension = file.mimetype.split("/")[1];
    const random = Math.random().toString().substr(2, 3);
    done(null, "broomProfile-" + Date.now() + random + "." + extension);
  },
});

const postStroage = multerS3({
  s3: s3,
  bucket: "broombroom",
  key: (req, file, done) => {
    const extension = file.mimetype.split("/")[1];
    const random = Math.random().toString().substr(2, 3); // 동시에 업로드되는 경우 이름 겹치는걸 방지하기 위한 난수
    done(null, "broomPost-" + Date.now() + random + "." + extension);
  },
});

const messageStroage = multerS3({
  s3: s3,
  bucket: "broombroom",
  key: (req, file, done) => {
    const extension = file.mimetype.split("/")[1];
    const random = Math.random().toString().substr(2, 3); // 동시에 업로드되는 경우 이름 겹치는걸 방지하기 위한 난수
    done(null, "broomMessage-" + Date.now() + random + "." + extension);
  },
});

const fileFilter = (req, file, done) => {
  const extension = file.mimetype.split("/")[1];
  if (extension === "jpg" || extension === "jpeg" || extension === "png") done(null, true);
  else {
    const error = new CustomError("IMPOSSIBLE_EXTENSION", 400, "확장자명이 *.jpg, *.jpeg, *.png 파일만 업로드가 가능합니다.");
    done(error, false);
  }
};

const userImageUpoad = multer({ storage: userStroage, fileFilter });
const postImageUpoad = multer({ storage: postStroage, fileFilter });
const messageImageUpoad = multer({ storage: messageStroage, fileFilter });

export { userImageUpoad, postImageUpoad, messageImageUpoad };
