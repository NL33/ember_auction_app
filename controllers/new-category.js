Auctioner.NewCategoryController = Ember.Controller.extend({  
	actions: {
		save: function() {
		 var newCategory = this.store.createRecord('category', {  
		 	name: this.get('name') 
		  }); 
         
         newCategory.save(); 
         this.transitionToRoute('categories'); 
	    }
	}
});