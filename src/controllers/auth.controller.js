const bcrypt = require("bcryptjs");
const prisma = require("../config/prisma");

exports.register = async (req, res) => {
try {
const { name, rollNo, email, password } = req.body;

```
// Validation
if (!name || !rollNo || !email || !password) {
  return res.status(400).json({
    success: false,
    message: "All fields are required"
  });
}

// Check existing student
const existingStudent = await prisma.student.findFirst({
  where: {
    OR: [
      { email: email },
      { rollNo: rollNo }
    ]
  }
});

if (existingStudent) {
  return res.status(400).json({
    success: false,
    message: "Student already exists"
  });
}

// Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// Save to database
const student = await prisma.student.create({
  data: {
    name,
    rollNo,
    email,
    password: hashedPassword
  }
});

return res.status(201).json({
  success: true,
  message: "Student Registered Successfully",
  data: student
});
```

} catch (error) {
console.error("Registration Error:", error);

```
return res.status(500).json({
  success: false,
  message: error.message
});
```

}
};
