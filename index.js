const express = require('express');
const graphqlHTTP = require('express-graphql');
import schema from './schema';

const app = express();

const PORT = 4000 || process.env.PORT;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})