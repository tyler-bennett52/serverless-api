const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number
});

const personModel = dynamoose.model('lab18', personSchema)

exports.handler = async (event) => {

  const pathId = event?.pathParameters?.id
  const parsedBody = JSON.parse(event.body);
  const personObject = {}
  parsedBody.id ? personObject.id = parsedBody.id : null;
  parsedBody.age ? personObject.age = parsedBody.age : null;
  parsedBody.name ? personObject.name = parsedBody.name : null;


  let response = { body: 'troubleshooting text 1' };

  try {
    let allPeople = await personModel.update(pathId, personObject)
    response = {
      statusCode: 200,
      body: JSON.stringify(allPeople),
    };
  } catch (error) {
    response = { statusCode: 500, body: error }
  }


  return response;
};

