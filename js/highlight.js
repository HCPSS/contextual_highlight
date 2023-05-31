(function ($, Drupal, Backbone) {
  Drupal.contextualHighlight = {
    model: null,
  };

  function initEditStyle(context) {
    const contextualHighlight = Drupal.contextualHighlight;
    contextualHighlight.model = new contextualHighlight.StateModel();
  }

  Drupal.behaviors.contextualHighlight = {
    attach(context) {
      if (once('contextualHighlight-init', 'body').length) {
        initEditStyle(context);
      }
    }
  };
})(jQuery, Drupal, Backbone);
