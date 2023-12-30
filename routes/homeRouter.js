const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',  (req, res) => {
    const htmlPath = path.join(__dirname, '../views/home.html');
    res.sendFile(htmlPath)
})

module.exports = router;