if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteor-heroku-twilio.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
      console.log("About to load twilio...");
      var client = Npm.require('twilio')("key", "secret");
      console.log("Everything went better than expected!");
  });
}
