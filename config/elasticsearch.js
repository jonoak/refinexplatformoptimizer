const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: process.env.ELASTICSEARCH_HOST });

client.ping({}, { requestTimeout: 3000 }, function (error) {
  if (error) {
    console.error('Elasticsearch cluster is down!');
  } else {
    console.log('Elasticsearch connected');
  }
});

module.exports = client;