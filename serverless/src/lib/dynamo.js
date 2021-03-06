import AWS from 'aws-sdk';

const prod = { region: process.env.AWS_REGION }

const dev = {
  region: 'localhost',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'random',
  secretAccessKey: 'string'
}

AWS.config.update(process.env.IS_OFFLINE ? dev: prod);

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const defaultTable = process.env.DYNAMO_TABLE || '';

const get = (key, table = defaultTable) => {
  return docClient.get({
    TableName: table,
    Key: key
  }).promise()
}

const put = (item, table = defaultTable) => {
  return docClient.put({
    TableName: table,
    Item: item
  }).promise();
}

const query = (params, table = defaultTable) => {
  return docClient.query({
    TableName: table,
    ...params
  }).promise();
}

export {
  get,
  put,
  query
};

//todo update, query, scan, delete
