import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["Company", "Admin", "User"],
      required: [true, "Role is required"],
      default: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lastModificateAt: {
      type: Date,
      default: Date.now
    },
    lastModifiedUserId: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedUserId: {
      type: String,
      default: null,
    },
    signInToken: {
      type: String,
      default: null,
    },
    signInTokenExpireTime: {
      type: Date,
      default: null,
    },
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
