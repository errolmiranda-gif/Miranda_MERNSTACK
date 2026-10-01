const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const initialStudents = require("../src/data/Students.json");

const app = express();
const PORT = 5000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/studentDB";

app.use(cors());
app.use(express.json());

const studentSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  age: Number,
  section: String,
  student_no: String,
  course: String,
  sex: String,
  status: String,
  religion: String,
  address: String,
});
const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
  res.send("Hello from my server!");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Express!" });
});

app.get("/api/students", async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.json(initialStudents);
  }

  try {
    const students = await Student.find().lean();
    res.json(students.map((student, index) => ({
      ...student,
      id: student.id ?? index + 1,
    })));
  } catch (error) {
    console.error("Could not load students:", error);
    res.status(500).json({ error: "Could not load students" });
  }
});

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log("MongoDB connected");
    const studentCount = await Student.countDocuments();
    if (studentCount === 0) {
      await Student.insertMany(initialStudents);
      console.log("Loaded the sample students into MongoDB");
    }
  })
  .catch((error) => {
    console.error("MongoDB is unavailable; the students API will use the local JSON data.", error.message);
  })
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  });
