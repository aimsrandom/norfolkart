Norfolkart.MapRoute = Ember.Route.extend({
  model: function () {
    return this.get('store').find('exhibit');
  }
});

