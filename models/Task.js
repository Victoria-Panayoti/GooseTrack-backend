const { Schema, model } = require("mongoose");
const { timeRegexp, dateRegexp } = require("../const/const");

const taskSchema = new Schema(
  {
    title: { type: String, required: [true, "Enter a title"] },
    date: {
      type: String,
      required: [true, "Enter the date"],
      match: dateRegexp,
    },
    start: {
      type: String,
      required: [true, "Enter the start time"],
      match: timeRegexp,
    },
    end: {
      type: String,
      required: [true, "Enter the end time"],
      match: timeRegexp,
      validate: {
        validator: function (v) {
          return v >= this.start;
        },
        message: "Select end time more than start time",
      },
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Select priority"],
    },
    category: {
      type: String,
      enum: ["to-do", "in-progress", "done"],
      required: [true, "Select category"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Task = model("task", taskSchema);

module.exports = { Task };
