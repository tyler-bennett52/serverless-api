const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number
});

const personModel = dynamoose.model('lab18', personSchema)

exports.handler = async (event) => {

  // const pathId = event?.pathParameters?.id

  const parsedBody = JSON.parse(event.body);
  console.log(event.body)
  const { id, name, age } = parsedBody;

  const personObject = { id, name, age };

  let response = {body: 'troubleshooting text 1'};
  try {
    let newPerson = await personModel.create(personObject);
    response = {statusCode: 200, body: JSON.stringify(newPerson)};
  } catch (error) {
    response = {statusCode: 500, body: error};
    console.log(error)
  }


  return response;
};

