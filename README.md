# mern-docker
Fully functional MERN using docker

Clone the project using your preference method and then,

**Build**

> cd mern
> docker-compose build
  
**Run**
> docker-compose up

You have an Nginx proxy listening to port 80 in order to handle all network requests
There are 2 REST example endpoints exposed in the API

 1. List all post
```
    curl --request GET --url http://localhost/api/posts
```
 2. Create a post
```
    curl --request POST \
      --url http://localhost/api/products \
      --header 'Content-Type: application/json' \
      --data '{
    	"name": "yuca",
    	"category": "vegetales"
    }'
```
The API connects with a Mongo database called mydbname (use your preferred name)

The Front UI is built with React + NextJS 13 + React-Query
