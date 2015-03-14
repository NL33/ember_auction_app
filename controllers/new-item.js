Auctioner.NewItemController = Ember.Controller.extend({  
  needs: ['category'], //needs: ember's way of allowing you to access one controller from another. You just list any controllers that you need access to. Here, we have said we need the post controller, which we use at the end of this controller below
  actions: { 
    save: function() {
     var item = this.store.createRecord('item', {  
      name: this.get('name'),
      owner: this.get('owner'),
      description: this.get('description'),
      estimated_price: this.get('estimated_price'),
      }); //note: shorter might be: var item = this.get('model')
         
         item.save(); 
         var category = this.get('controllers.category.model');  //we get the current controller, and get the category property, and ask it for its model
         category.get('items').pushObject(item); //here, we make the association. We ask the category for its items, and then call the pushObject method, and push in the item that we just created.
         category.save();
         this.transitionToRoute('category', category.id); //transition to the categories route for the category that we just added item in 
    }
  }
});