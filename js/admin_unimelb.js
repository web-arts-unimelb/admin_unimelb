(function ($) {
  Drupal.behaviors.admin_unimelb = {
    attach: function(context) {
      // Make the shared image field collapsible.
      $('#edit-field-shared-images .fieldset-content').css('display: none');
      $('#edit-field-shared-images legend').click(function() {
        $(this).parent().children('.fieldset-content').slideToggle('fast');
      });

      // Make the shared file field collapsible.
      $('#edit-field-shared-attachments .fieldset-content').css('display: none');
      $('#edit-field-shared-attachments legend').click(function() {
        $(this).parent().children('.fieldset-content').slideToggle('fast');
      });
    }
  }
})(jQuery);
