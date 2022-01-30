

const express = require('express');

const router = express.Router();


const Checklist = require('../models/checklist')


    // router.get('/checklists', (req, res) => {
    //     console.log('Olá');
    //     res.send();
    // })

    // router.post('/checklists', (req, res) => {    
    //     console.log(req.body);
    //     // console.log(req.body["name"]);
    //     res.status(200).json(req.body)
    // })
    
    // router.get('/checklists/:id', (req, res) => {
    //     console.log(req.params.id)
    //     res.send(`ID: ${req.params.id}`);
    // })

    // router.delete('/checklists/:id', (req, res) => {
    //     console.log(req.body)
    //     res.send(`DELETE ID: ${req.params.id}`);
    // })    

router.get('/checklists', async (req, res) => {
    try {
        let checklist = await Checklist.find({})
        res.status(200).json(checklist);

    } catch (error) {
        res.status(500).json(error)
    }   
    
    console.log('Olá');
        res.send();
    })
    
router.post('/checklists', async (req, res) => {
    let { name } = req.body;
    
    try {
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error)
    }
})

router.get('/checklists/:id', async(req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist);

    } catch (error) {
        res.status(422).json(error)
    }
})


router.put('/checklists/:id', async (req, res) => {
    
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true} );
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error)
    }
})

router.delete('/checklists/:id', async (req, res) => {
    
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error)
    }
})




module.exports = router