const { toGraphQLTypeDefs } = require("@neo4j/introspector");
const neo4j = require("neo4j-driver");
const fs = require("fs");
require("dotenv").config();

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const sessionFactory = () =>
  driver.session({ defaultAccessMode: neo4j.session.READ });

// We create a async function here until "top level await" has landed
// so we can use async/await
async function main() {
  const typeDefs = await toGraphQLTypeDefs(sessionFactory);

  const file =
    'const { gql } = require("apollo-server");' +
    "\n" +
    "\n" +
    "const typeDefs = gql`" +
    "\n" +
    typeDefs +
    "\n" +
    "`" +
    "\n" +
    "\n" +
    " module.exports = typeDefs;";

  fs.writeFileSync("./graphql/schema.js", file);
  await driver.close();
}

main();
