import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt: -1}); //newest first
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.error("An Error occurred", error);
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res
      .status(201)
      .json({ message: "Notes Created Successufully!", note: savedNote });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while creating the New notes!!" });
    console.error("Error while creating the Note:", error);
  }
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNotes = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    }, { new: true });
    if(!updateNotes) return res.status(404).json({message: "Note not found"})
    
    res
      .status(200)
      .json({ message: "Notes updated Successfully!", note: updatedNotes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while updating the notes!!" });
    console.error("Error while updating the Note:", error);
  }
}

export async function deleteNotes(req, res) {
  try {
    const deletedNotes = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNotes) return res.status(404).json({message: "Note not found!"})

    res.status(200).json({message:"Notes Deleted Successfully!"})
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while deleting the notes!!" });
    console.error("Error while deleting the Note:", error);
  }
}

export async function getNotesById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.error("Error while getting the Note:", error);
    }
}