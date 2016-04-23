define(function(require, exports, module) {

    var DynamicCollection = require('../widget/dynamic-collection4');
    require('jquery.sortable');
    require('es-ckeditor');

    exports.run = function() {
        require('./header').run();

        // group:'course'
        CKEDITOR.replace('course-about-field', {
            allowedContent: 'ol{*};a[!href]{*};img[alt,!src]{*};div{*};span{*};table{*};ul{*};li{*};p{*};u{*};em{*};strong{*}',
            toolbar: 'Detail',
            filebrowserImageUploadUrl: $('#course-about-field').data('imageUploadUrl')
        });

        var goalDynamicCollection = new DynamicCollection({
            element: '#course-goals-form-group'
        });

        var audiencesDynamicCollection = new DynamicCollection({
            element: '#course-audiences-form-group'
        });

        $(".sortable-list").sortable({
            'distance':20
        });

        $("#course-base-form").on('submit', function() {
            goalDynamicCollection.addItem();
            audiencesDynamicCollection.addItem();

        });

    };

});