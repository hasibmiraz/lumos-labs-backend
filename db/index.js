const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://lumosLabs:${process.env.DB_PASS}@cluster0.osawyzp.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log(`DB connected`))
  .catch((err) => console.log(err));
