const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hellow World, I Can Code Node now. Yayyy')
})

const users = [
    { id: 1, name: 'Kamrul', email: 'kamrulprl@gmail.com', phone: '215653621' },
    { id: 2, name: 'Hasan', email: 'Hasan@gmail.com', phone: '215653621' },
    { id: 3, name: 'Babu', email: 'Babu@gmail.com', phone: '215653621' },
    { id: 4, name: 'Ratul', email: 'Ratul@gmail.com', phone: '215653621' },
    { id: 5, name: 'Nayem', email: 'Nayem@gmail.com', phone: '215653621' },
    { id: 6, name: 'Abdullah', email: 'Abdullah@gmail.com', phone: '215653621' },
    { id: 7, name: 'Abuilla', email: 'Abuilla@gmail.com', phone: '215653621' },
]

// getting the all users data
app.get('/users', (req, res) => {
    res.send(users)
});



app.listen(port, () => {
    console.log('listening to port: ', port);
});