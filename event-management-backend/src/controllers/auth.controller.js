const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, rollNo, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({
      success: true,
      message: "Student Registered Successfully",
      data: {
        name,
        rollNo,
        email,
        password: hashedPassword
      }
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};