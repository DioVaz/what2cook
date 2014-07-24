App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('recipes', function() {
  	this.resource('recipe', {path: ':post_id'});
  });
});

App.RecipesRoute = Ember.Route.extend({
	model: function() {
		return posts;
	}
});

App.RecipeRoute = Ember.Route.extend({
	model: function(params) {
		return posts.findBy('id', params.post_id);
	}
});

App.RecipeController = Ember.ObjectController.extend({
	isEditing: false,

	actions:{
		edit: function(){
			this.set('isEditing', true);
		},

		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});

Ember.Handlebars.helper('format-date', function(date){
	return moment (date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper ('format-markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [{
	id: '1',
	title: "Arroz de marisco",
	author: {name: "Diogo Vaz"},
	date: new Date('07-19-2014'),
	ingredients:"Cebola: 1, Alho: 4 dentes,  Azeite: 4 colheres de sopa,  Tomate: 4,  Sal: q.b., Marisco: 1 embalagem (mistura),  Caldo de peixe: 1 cubo,  Arroz: 1 chávena,  Coentros: q.b.,  piri-piri: q.b.",
	description:"Refogue no azeite a cebola grande e os dentes de alho bem picados.  Sirva de seguida."
}, {
	id: '2',
	title: "Iscas de bacalhau",
	author: {name: "Diogo Vaz"},
	date: new Date('07-20-2014'),
	ingredients:"Cebola: 1,  Alho: 4 dentes,  Azeite: 4 colheres de sopa,  Tomate: 4,  Sal: q.b., Marisco: 1 embalagem (mistura),  Caldo de peixe: 1 cubo,  Arroz: 1 chávena,  Coentros: q.b.,  piri-piri: q.b.",
	description:"O tradicional na sua mesa"
	
}];