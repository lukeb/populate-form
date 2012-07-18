/**
 *  ===================================================
 *  jquery.populate_form.js v1
 *  @Author: Luke Brookhart
 *  ===================================================
 *
 * This source file is free software, under either the GPL v2
 * http://www.gnu.org/licenses/licenses.html
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * =================================================== */

;(function($){

$.fn.populate_form = function(form_data) {

    var form = this;

    $.each(form_data, function(name, values){

        values = $.isArray(values) ? values : [values];

        // debug.log(name, values);

        var $el = form.find("[name='"+name+"']");
        if(!$el.length){
            $el = form.find("[name='"+name+"[]']");
        }
        var type = $el.attr('type');

        // debug.log($el);

        $.each(values, function(i, v){
            switch(type){
                case 'checkbox':
                    $el.filter('[value="'+v+'"]').attr('checked', 'checked');
                    break;
                case 'radio':
                    $el.filter('[value="'+v+'"]').attr('checked', 'checked');
                    break;
                default:
                    $el.val(v);
            }
        });
    });

};

})(jQuery);