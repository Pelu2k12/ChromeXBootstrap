(function ($){
    $('#'+localStorage.stepsSelectedAccordion).collapse('show');

    $('.panel-heading').on('click', function () {
        localStorage.stepsSelectedAccordion = this.nextElementSibling.id;
    });
})(jQuery);