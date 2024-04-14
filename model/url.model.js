

import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
  timestamp: { type: Number }
});

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [visitSchema],
  },
  { timestamps: true },
);

const URL = mongoose.model("URL", urlSchema);

export {URL};
