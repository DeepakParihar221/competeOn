import bodyParser  from 'body-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({lomit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({lomit: "30mb",extended: true}));

app.use(cors()) ;

const CONNECTION_URL = 'mongodb+srv://CompeteOn:123123123@cluster0.qf7lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((err) => console.log(err));

// mongoose.set('useFindAndModify', false);