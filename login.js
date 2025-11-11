// login.js
function validateLogin(username, password) {
  const validUser = "admin";
  const validPass = "password123";

  if (!username || !password) {
    return { success: false, message: "Empty fields" };
  }

  if (username === validUser && password === validPass) {
    return { success: true };
  }

  return { success: false, message: "Invalid credentials" };
}

module.exports = validateLogin;
