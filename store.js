Blogger.ApplicationSerializer = DS.LSSerializer.extend(); //sets up Ember to use Ember data with local storage adapter
Blogger.ApplicationAdapter = DS.LSAdapter.extend(); //DS stands for datastore, which is how we call Ember data