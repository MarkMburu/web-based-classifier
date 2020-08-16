# web-based-classifier

## Experiment Workflow
 - client -- Js css3 html5 ejs to build a complete ui
 - Pycaret --> Train Machine learning pipeline
 - Node -->  Build backend server
 - Heroku --> Platform as a service to host web endpoint for Ml
 - Github --> Host repository source code

 ## Objective
 To build a web application that uses neural network to classify and predict images and audio files

 ## Tasks
 - Train and validate models and develop a machine learning pipeline for deployment.
 - Build a basic HTML front-end with an input file for independent variables.
 - Build a back-end of the web application using a express Framework. 
 - Deploy the web app on Heroku. Once deployed, it will become publicly available and can be accessed via Web URL.

 ### Task 1 — Model Training and Validation.

 Training and model validation are performed in google colab Notebook. In this we will use PyCaret in our Notebook to develop machine learning pipeline and train our model.

 ### Task 2 — Building Web Application

After implementing our machine learning pipeline and model we will start building a web application that can connect to them and generate predictions on new data in real-time. There are two parts of this application:

 - Front-end (designed using ht,l5 css3 js)
 - Back-end (developed using node express)