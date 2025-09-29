import Subject from "../models/Subjects.model.js";
// !Add Subject
export const addSubject = async (req, res) => {
  try {
    const { title, category, type, author, link } = req.body;
    if (!title || !category || !type || !author || !link) {
      return res.json({ success: false, message: "Please fill all fields" });
    }
    const newSubject = new Subject({
      title,
      category,
      type,
      author,
      link,
    });
    await newSubject.save();
    res.json({ success: true, message: `${title} created Successfully` });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error from add subject Function");
  }
};

// !Get Subject
export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.json({ success: true, subjects });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error from add subject Function");
  }
};

// !Delete Subject
export const deleteSubject = async (req, res) => {
  try {
    const { id } = req.body;
    const subject = await Subject.findByIdAndDelete(id);
    if (!subject) {
      return res.json({ success: false, message: "subject not found" });
    } else {
      res.json({ success: true, message: "subject Deleted Successfully" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error from add subject Function");
  }
};
