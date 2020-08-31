const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1/paginate-appliction', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(db.connection.host))
  .catch((error) => console.error(error));
