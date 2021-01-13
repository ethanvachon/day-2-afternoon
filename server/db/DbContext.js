import mongoose from "mongoose";
import CarSchema from "../models/Car"
import JobSchema from "../models/Job"
import HouseSchema from "../models/House"


class DbContext {
  Cars = mongoose.model("Car", CarSchema)
  Houses = mongoose.model("House", HouseSchema)
  Jobs = mongoose.model("Job", JobSchema)
}

export const dbContext = new DbContext();
