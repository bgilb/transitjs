# transitjs
Wrapper api for getting data from the [syncromatics](http://syncromatics.com) transit servers. Currently used to provide the transit data for the iPhone app [PennTransit](https://itunes.apple.com/hk/app/penntransit/id737534948?mt=8), but could be extended to other transit systems which use syncromatics.

# install
To install dependencies, from the root directory run

`npm install`

Then to start the server

`npm start`

# tests
Uses [mocha](http://visionmedia.github.io/mocha/) for testing (`npm install mocha -g`). Once mocha is installed globally, run

`npm test`

from the root directory to run the tests.