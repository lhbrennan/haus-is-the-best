# House is a Feeling

I was motivated to start this project by the relative lack of interesting web-based audio applications. Audio applications have historically been constrained by the technical limitations of working with audio in javascript, but with the advent of the Web Audio API, I feel like this should be changing. I've spent a lot of my personal time over the last 10 years working in electronic music production, so I wanted to create a tool that I would benefit from while getting a deeper understanding of the Web Audio capabilities. There are a number of web-based drum sequencers out there, but most of them suffer from imprecise event timing due to the single-threaded nature of Javascript. This application avoids that limitation by using the core Javascript thread to run the scheduling system, while using the Web Audio thread for scheduling the actual audio events.

## Getting Started

1. mongod
2. npm start
3. npm run react-dev 

## Built With

* React
* Redux
* Node/Express
* MongoDB

## Author

**Luke Brennan**