App.Router.map(function() {
  this.route("portfolio");
  this.route("resume");
  this.resource('projects', function(){
    this.route('project', {path: '/:project_id'});
  });
});


App.ProjectsRoute = Ember.Route.extend({
  model: function(){
    return [
    {id: 1, name: "#tagboard", stack: "Angular JS", image: 'images/tagboard.jpg'},
    {id: 2, name: "Zendesk", stack: "React JS", image: 'images/zendesk.jpg'},
    {id: 3, name: "Stripe", stack: "Rails", image: 'images/stripe.jpg'},
    {id: 4, name: "Airbnb", stack: "Rails", image: 'images/airbnb.jpg'},
    {id: 5, name: "Square", stack: "Ember JS", image: 'images/square.jpg'},
    {id: 6, name: "Galvanize", stack: "Rails", image: 'images/galvanize.jpg'}
    ];
  }
});
