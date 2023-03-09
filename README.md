# serverless-api (LAB 18)

## Project: Deploy to AWS

### Author: Tyler Bennett

### Problem Domain  

Create an API using API Gateway

### Links and Resources

- [back-end server GUI deployed](https://fxyxdqmig0.execute-api.us-east-1.amazonaws.com/Lab18/people)

The above link will automatically take you to the People route. The people object expects 3 properties: age(integer), id(string), and name(string).

### Features / Routes

There is only one route, the people route that optionally accepts a path parameter :id.

#### /people

    GET - Will return all people objects in the database

    GET/:id - Will return the people object with the matching id.

    POST - Expects a request body with a people object containing 3 properties (id, age, name). Will return the created object. 

    PUT/:id - Expects a request body carrying a people object with any or all of the 3 properties (id, age, name). Will update the object with the id that matches the path parameter by changing it's properties to match the request body. Will return the updated object.

    DELETE/:id - Will find a people object with matching id and remove it from the database. Will return a string confirming the item was deleted.

#### UML

![Lab-18 UML](assets/lab-18-uml.png)
