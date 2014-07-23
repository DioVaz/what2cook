App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('recipes');
  this.resource('recipe', {path: ':post_id'});
});

App.RecipesRoute = Ember.Route.extend({
	model: function() {
		return posts;
	}
});

var posts = [{
	id: '1',
	title: "Arroz de marisco",
	author: {name: "Diogo Vaz"},
	date: new Date('19-07-2014'),
	description:"Um belo prato para receber amigos em casa",
	ingredients:"Cebola: 1, Alho: 4 dentes,  Azeite: 4 colheres de sopa,  Tomate: 4,  Sal: q.b., Marisco: 1 embalagem (mistura),  Caldo de peixe: 1 cubo,  Arroz: 1 chávena,  Coentros: q.b.,  piri-piri: q.b."
}, {
	id: '2',
	title: "Iscas de bacalhau",
	author: {name: "Diogo Vaz"},
	date: new Date('21-07-2014'),
	description:"O tradicional na sua mesa",
	ingredients:"Cebola: 1,  Alho: 4 dentes,  Azeite: 4 colheres de sopa,  Tomate: 4,  Sal: q.b., Marisco: 1 embalagem (mistura),  Caldo de peixe: 1 cubo,  Arroz: 1 chávena,  Coentros: q.b.,  piri-piri: q.b."
}];