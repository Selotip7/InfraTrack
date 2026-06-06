import * as auth from "#src/services/auth.services.js";
import { asyncHandler } from "#src/handler/async.handler.js";
export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role_id } = req.body;

  if (!name || !password || !role_id) {
    const error = new Error("You must fill in all required fields.");
    error.code = 400;
    throw error;
  }

  await auth.register(req);

  return res.json({
    success: true,
    message: "user created successfully",
  });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new Error("You must fill in all required fields.");
    error.code = 400;
    throw error;
  }

  await auth.login(req);

});
