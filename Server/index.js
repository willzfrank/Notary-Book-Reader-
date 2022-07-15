const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./Schema/schema.js");

const app = express();

// middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(5000, () => {
  "listening on PORT 5000";
});
