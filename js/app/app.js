(function (jq){
    jq(document).ready(function (){
        jq('#heading1').on('click', function () {
            console.log(this)
        });
    });
        
//    document.addEventListener('DOMContentLoaded', function () {
//
//        var sections = document.getElementsByClassName('rad_section');
//
//        for (var i=sections.length; i--;) {
//            sections[i].addEventListener('change',function(){
//                storeSelection(this.id);
//            },false);
//        }
//
//        var selection = localStorage.gitcheatsheet_selection == undefined ? 'ac-head' : localStorage.gitcheatsheet_selection;
//        document.getElementById(selection).checked = true;
//    });
})(jQuery);