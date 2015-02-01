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
  this.route("docker"); // docker 40,500 low
  this.resource("nodejs", function() {});  // Nodejs 22,500 low
  this.resource("screencasts", function() {
    this.route('ember-tutorial'); // Ember 480 low
  });
  this.resource('services', function() {
    this.route("hosting");
    this.route("domains");
    this.route("flynn"); // 6600 low
    this.route("single-page-applications"); // single page applications 260
    this.route("mobile-app-development");
  });
  this.resource('examples', { path: "/" }, function() {
    this.route('show', {path: ':example_id'});
    this.route("fast");
    this.route("affordable");
    this.route("quality");

    this.route("cms-portal"); // cms 165,000 // low => cms portal 2900 low => cms database 260 low
    this.route("crm"); // crm 110,000 //high
    this.route("blog");
  });
  this.resource('ember-js', function(){//emberjs 4,400
    this.route('ember-rails');//ember rails 390
    this.route('ember-data');//ember data 1900
    this.route('ember-model');// ember model 720
    this.route('htmlbars');// htmlbars 590
  }); 
  this.resource('rails-api',  function(){//rails api 1,900
    this.route('generate-model');//1,000
    this.route('examples');
    this.route('authentication');//rails authentication 390
    this.route('ember-model'); //ember model
  });
  this.resource('js-frameworks', function(){//javascript frameworks 2,400
    this.route('ember');//best javascript framework 320
    this.route('backbone');//backbone 12,000
    this.route('angular-js');//angularjs 74,000
    this.route('knockout');//knockout 20,000
    this.route("react-js"); //reactjs 6600 low
    this.route("sails");   //sailsjs 1300 low
    this.route("meteor"); // meteor 1600
  });
  // this.resource('marketing', function(){//affordable internet marketing
  //   this.route('content-strategy');
  //   this.route('seo');
  //   this.route('social-media');
  // });
});
export default Router;
