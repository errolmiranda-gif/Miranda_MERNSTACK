import mongoose from "mongoose";

const studentSchema = new mongooseSchema({
    name : String,
    studentNumber: String,
    course: String
});

const Student = mongoose.model("Student", studentSchema)

export default Student;
mongoose.connect("mongodb://localhost:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected")

})
.catch(error =>{
    console.log(error)
})