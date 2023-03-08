const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number
});

const personModel = dynamoose.model('lab18', personSchema)

exports.handler = async (event) => {

  const id = event?.pathParameters?.id

  let response = {body: 'troubleshooting text 1'};

  if (id) {
    try {
      let onePerson = await personModel.get(id)
      response = { statusCode: 200, body: JSON.stringify(onePerson) }
    } catch (error) {
      response = { statusCode: 500, body: error }
    }
  } else {
    try {
      let allPeople = await personModel.scan().exec();
      response = {
        statusCode: 200,
        body: JSON.stringify(allPeople),
      };
    } catch (error) {
      response = { statusCode: 500, body: error }
    }
  }


  return response;
};

