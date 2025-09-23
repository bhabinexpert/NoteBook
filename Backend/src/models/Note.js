import mongoose, { Schema } from "mongoose";

// step-1: Create the Schema;
// Step-2 : Create the model based on the schema;

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema)

export default Note;
