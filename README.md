# Definitely Not Stack Overflow

#### _An application for asking questions and getting answers about computer programming. 1.13.16_

#### By _**Jonathan Thom**_

## Description

Users can enter questions, as well as supply answers to other users. There is upvote/downvote functionality, as well as a search-by-category function, and update/deletion methods for questions.

You must create your own Firebase database to run this application. See "Installation" below.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/JonathanWThom/not-stack-overflow`
* `cd not-stack-overflow`
* `npm install`
* `bower install`

## Running / Development

* Navigate to [https://console.firebase.google.com/](https://console.firebase.google.com/) and create a new project.
* Click "Add Firebase to Web App" and copy the given information into the firebase object in this program's config/environment.js file.
* In your Firebase Database > Rules, paste and save as public: 

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
* In the command line, run: `ember serve`
* Navigate to [http://localhost:4200](http://localhost:4200).

## Support and Contact Details

_Contact Jonathan at: jonathan.thom1990@gmail.com_

## Technologies Used

_JavaScript (Ember.js), CSS, HTML, Firebase_

### License

*MIT*

Copyright (c) 2016 **_Jonathan Thom_**
