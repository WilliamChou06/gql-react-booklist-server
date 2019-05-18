const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// CORS config | Allow cross-origin requests
app.use(cors())

// MongoDB connection
mongoose.connect(
  'mongodb://william:test123@ds139775.mlab.com:39775/codingband-test-server'
);
mongoose.connection.once('open', () => {
  console.log('Connected to DB')
})

// Port config
const PORT = 4000 || process.env.PORT;


// GraphQL middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
