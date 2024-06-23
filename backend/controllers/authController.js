const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: 'User already exists' })
        }

        user = new User({
            userName, email, password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();


        const payload = {
            user: {
                id: user.id
            }
        }


        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
}


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                messgae: 'Invalid credentials'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
}