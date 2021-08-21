import * as DB from "../models";

export default async () => {
  const sequelize = DB.init();
  await sequelize
    .sync({ force: false })
    .then(() => {
      console.log("    ################################################");
      console.log("    ✌️ SEQUELIZE LOADED");
    })
    .catch((err) => {
      console.error(err);
    });
};
