const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number
});

const personModel = dynamoose.model('lab18', personSchema)

exports.handler = async (event) => {

  const pathId = event?.pathParameters?.id

  let response = { body: 'troubleshooting text 1' };

  try {
    let deleteConfirmation = await personModel.delete(pathId);
    response = {
      statusCode: 200,
      body: JSON.stringify([deleteConfirmation, 'Item Deleted']),
    };
  } catch (error) {
    response = { statusCode: 500, body: error }
  }


  return response;
};

