
const createNewNote = asyncHandler(async (req, res) => {
    const { user, title, text } = req.body;

    if (!user || !title || !text) {
        return res.status(400).json({ message: "All fields are required" })
    }
    

    //check for dup
    const duplicate = await Note.findOne({ title }).lean().exec()
    
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate note title" })
    }
    
    const note = await Note.create({ user, title, text })
    console.log(duplicate)

    if (note) { // Created 
        return res.status(201).json({ message: 'New note created' })
    } else {
        return res.status(400).json({ message: 'Invalid note data received' })
    }
})