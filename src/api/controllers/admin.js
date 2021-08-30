import getApi from "../../utils/response";
import AdminService from "../../services/admin";

const AdminController = {
  getCog: async (req, res, next) => {
    try {
      const page = req.query.page ? req.query.page : 1;
      const filter = req.query.filter ? req.query.filter : "false";
      const tab = req.query.tab ? req.query.tab : "all";
      const type = req.query.type ? req.query.type : "all";
      const cog = await AdminService.getCog(type, tab, filter, page);

      res.status(200).json(getApi({ suc: true, data: cog }));
    } catch (err) {
      next(err);
    }
  },
};

export default AdminController;