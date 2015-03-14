Auctioner.Router.map(function() { 
	this.resource('categories', {path: '/'});  //categories will be home page
	this.resource('new-category');
	this.resource('category', {path: ':category_id'}, function() {
		this.resource('new-item')
	});   
});