"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('./server');
const PORT = 3000;
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}).catch((e) => console.log(e));
//# sourceMappingURL=index.js.map