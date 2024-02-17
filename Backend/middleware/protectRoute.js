import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return req.status(401).json({ error: "Unauthorized access- no token provied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return req.status(401).json({ error: "Unauthorized access- invalid token" });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return req.status(401).json({ error: "User not found" });
    }

    req.user = user;

    next();


  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
