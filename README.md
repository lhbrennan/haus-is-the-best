# House is a Feeling

https://house-is-a-feeling.herokuapp.com/

This application is a drum sequencer with precise audio event timing. It uses the primary Javascript thread to run an event scheduling system. The scheduling system 'wakes up' periodically, looking ahead to find audio events that need to be scheduled. It schedules these events using a secondary thread via the Web Audio API. This strategy avoids the imprecision common to web audio applications by ensuring that the audio events are not interrupted by rerendering, garbage collection, etc

## Getting Started

1. mongod
2. npm start
3. npm run react-dev

## Built With

* React
* Redux
* Styled Components
* Node
* Express
* MongoDB
* Mongoose
* Heroku
* AWS S3

## Author

**Luke Brennan**

## Design

**Luke O'Connor**