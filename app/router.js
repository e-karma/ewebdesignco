import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("intro");
  this.route('about');
  this.route('contact');
  this.route('sign-up');
  this.route("pricing");
  this.resource("nodejs", function() {});
  this.route("docker");
  this.resource("screencasts", function() {});
  this.resource('services', function() {
    this.route("hosting");
    this.route("domains");
    this.route("flynn");
    this.route("single-page-applications");
    this.route("mobile-app-development");
  });
  this.resource('examples', { path: "/" }, function() {
    this.route('show', {path: ':example_id'});
    this.route("fast");
    this.route("affordable");
    this.route("quality");

    this.route("cms");
    this.route("crm");
    this.route("blog");
  });
  this.resource('ember', function(){//emberjs 4,400
    this.route('ember-rails');//ember rails 390
    this.route('ember-data');//ember data 1900
    this.route('ember-model');// ember model 720
    this.route('htmlbars');// htmlbars 590
  }); 
  this.resource('rails',  function(){//rails api 1,900
    this.route('generate-model');//1,000
    this.route('examples');
    this.route('authentication');//rails authentication 390
    this.route('ember-model'); //ember model
  });
  this.resource('js-frameworks', function(){//javascript frameworks 2,400
    this.route('ember');//best javascript framework 320
    this.route('backbone');//backbone 12,000
    this.route('angular-js');//angularjs 27,000
    this.route('knockout');//knockout 27,000
    this.route("react");
    this.route("sails");
    this.route("meteor");
  });
  this.resource('marketing', function(){//affordable internet marketing
    this.route('content-strategy');
    this.route('seo');
    this.route('social-media');
  });
});
export default Router;
