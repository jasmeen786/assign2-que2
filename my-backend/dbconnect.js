
const express = require('express');
const app = express();
app.use(express.json()); 

const registrations = [];

function calculateFee(status) {
    switch (status) {
        case 'student':
            return 10;
        case 'staff':
            return 50;
        case 'volunteer':
            return 0;
        default:
            return null; 
    }
}


app.post('/register', (req, res) => {
    const { userId, fullName, address, status } = req.body;

   
    const fee = calculateFee(status);
    if (fee === null) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    registrations.push({ userId, fullName, address, status, fee });

    res.json({
        message: 'Registration successful!',
        userId,
        fullName,
        address,
        status,
        fee,
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
