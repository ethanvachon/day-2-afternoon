import mongoose from "mongoose";
import CarSchema from "../models/Car"

class DbContext {
  Cars = mongoose.model("Car", CarSchema)
}

export const dbContext = new DbContext();
