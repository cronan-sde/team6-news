require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Open port 3000 on server and log port number to console
app.listen(3000, () => console.log('lisening on port 3000'));