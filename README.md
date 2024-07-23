this is api project which allows users to create question ,options and add ther opnion as vote to the respective option as there wish 
this api is developed by using nodejs,expressjs framework and mongodb for database
inorder to execute this api 
download the repository 
make a npm install cammand in cmd by mainting this repositroy as current directory then all required libraries and setup will be install 
now make a node index.js cammand 
now it will show the port number in the console this tells form where it is listening

the following are the routing paths inorder to operations with this api
  - /questions/create (To create a question) this is post request where user have to pass json object in body with containg title porperty
    all below requests would require corresponding id as parameter along with other data
  - /questions/:id/options/create (To add options to a specific question) this put request where user have to json objext in body containg text property
  - /questions/:id/delete (To delete a question) this is delete request where user don't need to pass any thing
  - /options/:id/delete (To delete an option) this is also a delete request whre user don't need to pass nay thing
  - /options/:id/add_vote (To increment the count of votes) this is put request and with this request user don't need pass any thing 
  - /questions/:id (To view a question and it’s options) this is get request and no need of passing any thing
