App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('receitas');
});

var receitas = [{
	id: '1',
	title: "Arroz de marisco",
	author: {name: "Diogo Vaz"},
	date: new Date('19-07-2014'),
	description:"Um belo prato para receber amigos em casa"
	ingredients:"Cebola: 1, &#10;Alho: 4 dentes, &#10;Azeite: 4 colheres de sopa, &#10;Tomate: 4,&#10; Sal: q.b.,&#10;Marisco: 1 embalagem (mistura),&#10; Caldo de peixe: 1 cubo,&#10; Arroz: 1 chávena, &#10;Coentros: q.b., &#10;piri-piri: q.b."
	preparation:"Refogue no azeite a cebola grande e os dentes de alho bem picados. Esmague os tomates maduros e já pelados e junte ao refogado. Tempere com piri-piri e sal. Deixe apurar durante alguns minutos.&#10;
Entretanto, descongele uma embalagem de cocktail de marisco. Se tiver delícias do mar, retire-as e ponha-as de parte. Junte os mariscos ao refogado e mexa. Com o lume brando, tape o tacho e deixe apurar durante 15 minutos.&#10;
Junte o cubo de caldo de peixe. Aqueça à parte 3 chávenas de água e junte a esta mistura. Quando começar a ferver junte o arroz e mexa. Quando retomar a fervura, deixe cozer tapado durante 10 minutos.&#10;
Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida."
}, {
	id: '2',
	title: "Iscas de bacalhau",
	author: {name: "Diogo Vaz"},
	date: new Date('21-07-2014'),
	description:"O tradicional na sua mesa"
	ingredients:"Cebola: 1, &#10;Alho: 4 dentes, &#10;Azeite: 4 colheres de sopa, &#10;Tomate: 4,&#10; Sal: q.b.,&#10;Marisco: 1 embalagem (mistura),&#10; Caldo de peixe: 1 cubo,&#10; Arroz: 1 chávena, &#10;Coentros: q.b., &#10;piri-piri: q.b."
	preparation:"Refogue no azeite a cebola grande e os dentes de alho bem picados. Esmague os tomates maduros e já pelados e junte ao refogado. Tempere com piri-piri e sal. Deixe apurar durante alguns minutos.&#10;
Entretanto, descongele uma embalagem de cocktail de marisco. Se tiver delícias do mar, retire-as e ponha-as de parte. Junte os mariscos ao refogado e mexa. Com o lume brando, tape o tacho e deixe apurar durante 15 minutos.&#10;
Junte o cubo de caldo de peixe. Aqueça à parte 3 chávenas de água e junte a esta mistura. Quando começar a ferver junte o arroz e mexa. Quando retomar a fervura, deixe cozer tapado durante 10 minutos.&#10;
Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida."
}];