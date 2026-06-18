import userService from "../services/userService.js";

const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Usuário logado encontrado com sucesso",
      data: req.user,
    });
  } catch (error) {
    next(error);
  }
};