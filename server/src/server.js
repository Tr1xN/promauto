import express from 'express';
import mongoose from 'mongoose';
import orderModel from './models/order.model.js';
import sendMail from './mailer.js';

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/promauto', { useNewUrlParser: true })
    .then(db => console.log('[OK] DB is connected'))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', express.static('../../client/dist'));

app.post('/api/order', (req, res) => {
    orderModel.create({ name: req.body.name, phone: req.body.phone, placement: req.body.placement, square: req.body.square, height: req.body.height }, (err, order) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } else {
            console.log('\n' + order)
            res.status(200).send(order)
        }
    })
    sendMail({
        from: 'promaserver@gmail.com',
        to: 'promaopt@gmail.com',
        subject: `Нове замовлення від "${req.body.name}" (${req.body.phone})`,
        text: `Ім'я клієнта: ${req.body.name}\nНомер телефону: ${req.body.phone}\nТип приміщення: ${req.body.placement}\nПлоща: ${req.body.square}m²\nВисота: ${req.body.height}m`
    });
})

app.listen(port, () => {
    console.log(`[OK] Server is running on localhost:${port}`)
})