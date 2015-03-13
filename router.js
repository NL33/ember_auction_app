Auctioner.Router.map(function() { 
	this.resource('categories', {path: '/'});  //categories will be home page
	this.resource('new-category');
	this.resource('category', {path: 'categories/:category_id'});   
});