Auctioner.Item = DS.Model.extend({    
  name: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  estimated_price: DS.attr(),
  category: DS.belongsTo('category', {async: true}) 
});
