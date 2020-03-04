# Contacts API

A basic example of RESTful API in Node, Express & Mongo

## Install
Before installing, download and install [Node.js](https://nodejs.org/en/download/) and [MongoDB]([https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)).

Create a **config.js**  file in the root of the project. You can use [config-sample.js]([https://github.com/pavlinpetrov/contacts-api/blob/master/config-sample.js](https://github.com/pavlinpetrov/contacts-api/blob/master/config-sample.js)) as a reference.

Installation is done using the  [`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command.



## Endpoints
**GET**
`/api/contacts/` - retrieves all contacts.
`/api/contacts/id` - retrieves a single contact.

**POST**
`/api/contacts/`- creates a contact.
> Request body:
>  {
&nbsp; &nbsp; "firstName": "John",
&nbsp; &nbsp; "lastName": "Doe",
&nbsp; &nbsp; "email": "johndoe@example.com"
}

**PUT**
`/api/contacts/`- updates a contact.
> Request body:
 {
&nbsp; &nbsp; "id": "5e5f78e851bdc04140f411a8",
&nbsp; &nbsp; "firstName": "Jane",
&nbsp; &nbsp; "lastName": "Doe",
&nbsp; &nbsp; "email": "janedoe@example.com"
}

**DELETE**
`/api/contacts/`- removes a contact.
> Request body:
> {
&nbsp; &nbsp; "id": "5e5f78e851bdc04140f411a8"
}