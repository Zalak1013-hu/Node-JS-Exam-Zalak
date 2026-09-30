import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    return res.json({ message: "User registered successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ message: "Invalid password" });
    }

    return res.json({ message: "Login successful" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const profile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json({ user });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
