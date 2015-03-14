Auctioner.Category = DS.Model.extend({    //creates and Ember data model. Then specify the properties of this class:
  name: DS.attr(), 
  items: DS.hasMany('item', {async: true})
});