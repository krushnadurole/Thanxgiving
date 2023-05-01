const express = require('express');
const Router = express.Router();
const { body, validationResult } = require('express-validator')
const Element = require("../Models/Element")
const fetchuser  = require('../Middlewares/fetchuser')
// get the all the requirements available.
Router.get('/getelements', async (req, res) => {
    try {
        const elements = await Element.find()
        // const requirements = await Element.find({category:"Outdoor"})
        res.json(elements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }
})

// get all the filtered requirements from all.
Router.get('/getfiltered/:category', async (req, res) => {
    try {
        const elements = await Element.find({ category: req.params.category })
        res.json(elements);
    } catch (error) {
        res.status(401).send("Something went wrong");
    }
})



// add the requirement to the store.
Router.post('/addelement', [
    body('title', 'Enter the title'),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('category')],fetchuser, async (req, res) => {

        try {
            const { title, description, category, email } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            // console.log(req.user.id);
            const element = new Element({
                title, description, category, user:req.user.id, email
            })
            const savedelement = await element.save()

            res.json(savedelement)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

//ROUTE3:Update an existing Note using:PUT /api/notes/updatenotes.Login required
Router.put('/update/:id', fetchuser, async (req, res) => {
    const { title, description, category, user, email,date } = req.body;

    //create a requirement object
    const newele = {};
    if (title) { newele.title = title };
    if (description) { newele.description = description };
    if (category) { newele.category = category };
    if (user) { newele.user = user };
    if (email) { newele.email = email };
    if (date) { newele.date = email };

    //Update the node
    // try {
    let element = await Element.findById(req.params.id);

    if (!element) {
        return res.status(404).send("Not found");
    }

    if (element.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    element = await Element.findByIdAndUpdate(req.params.id, { $set: newele }, { new: true });
    res.json({ element });
})


// router4:delete an existing requirement
Router.delete('/delete/:id', fetchuser, async (req, res) => {
    const { title, description, category } = req.body;

    //Delete the requirement
    try {
        let element = await Element.findById(req.params.id);
        if (!element) {
            return res.status(404).send("Not found");
        }

        if (element.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        element = await Element.findByIdAndDelete(req.params.id);
        res.json({ success: "Successfully delete the requirement" });
    } catch (error) {
        res.status(400).send("something went wrong")
    }
})




module.exports = Router;