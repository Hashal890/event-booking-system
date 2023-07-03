const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Must provided event title"],
      maxlength: [50, "Must be less than 50 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Must be provided event description"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    bookingPeoples: {
      type: Array,
      default: [],
    },
    ticketFixedPeoples: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const EventModel = mongoose.model("event", eventSchema);

module.exports = EventModel;
