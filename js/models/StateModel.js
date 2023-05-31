(function ($, Drupal, Backbone) {
  Drupal.contextualHighlight.StateModel = Backbone.Model.extend({
    initialize(attrs, options) {
      $('.contextual-region').toggleClass('highlighted-context-region', !Drupal.contextualToolbar.model.get('isViewing'));
      this.listenTo(Drupal.contextualToolbar.model, 'change:isViewing', (model, isViewing) => {
        $('.contextual-region').toggleClass('highlighted-context-region', !isViewing);
      });
    }
  });
})(jQuery, Drupal, Backbone);
