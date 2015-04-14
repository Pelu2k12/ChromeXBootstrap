(function ($){
    $('#'+localStorage.stepsSelectedAccordion).collapse('show');

    $('.panel-heading').on('click', function () {
        localStorage.stepsSelectedAccordion = this.nextElementSibling.id;
    });
    
    var popUpWindow = localStorage.isPopUpWindowOpen || false;
    $('#popupwindow').on('click', function (){
        this.style.display = 'none';
        popUpWindow = window.open("", "STEPS");
        if (!localStorage.isPopUpWindowOpen){
            popUpWindow.document.write(document.documentElement.innerHTML);
            localStorage.isPopUpWindowOpen = true;
        }
    });
})(jQuery);