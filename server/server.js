const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const uploadRoute = require('./routes/uploadRoute');
const cors = require("cors");


const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ecommerce-site', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => console.log(error));

app.use(bodyParser.json());
app.use("/api/uploads", uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));



if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(morgan('tiny'));


app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
