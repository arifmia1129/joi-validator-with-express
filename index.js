const express = require("express");
const { registrationSchema, loginSchema } = require("./middleware/joiSchema");
const { runValidator } = require("./middleware/runValidator");
const app = express();

const port = 5000;

app.use(express.json())

app.post("/registration", runValidator(registrationSchema), (req, res) => {
    try {
        res.status(201).json({
            success: false,
            message: "Successfully register",
            user: req.body
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
})

app.post("/login", runValidator(loginSchema), (req, res) => {
    try {
        res.status(200).json({
            success: false,
            message: "Successfully logged in",
            user: req.body
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})