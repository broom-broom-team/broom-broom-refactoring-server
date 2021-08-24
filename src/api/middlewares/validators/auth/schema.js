import joi from "joi";

const postEmail = joi.object().keys({
  email: joi.string().email().min(6).required(),
});

const signUp = postEmail.keys({
  nickname: joi
    .string()
    .regex(/^[가-힣|a-z|A-Z|0-9|]{2,8}$/)
    .required(), // 특수문자 제외 2~8글자
  name: joi
    .string()
    .regex(/^[가-힣]{2,8}$/)
    .required(), // 한글 2~8글자
  password: joi
    .string()
    .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/)
    .required(), // 영문, 숫자, 특수문자 혼합하여 8~16글자
});

export { signUp, postEmail };