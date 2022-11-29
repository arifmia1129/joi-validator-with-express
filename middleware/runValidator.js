exports.runValidator = schema => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
            errors: {
                wrap: {
                    label: ""
                }
            }
        })
        if (error) {
            const errorList = error.details.map(err => err.message)
            return res.status(400).json({
                success: false,
                message: "Validation error",
                error: errorList
            })
        }
        next();
    }
}