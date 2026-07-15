function initHeaderEvents() {

    var header_home = document.querySelector('.tb-home');
    header_home.addEventListener('click', function () {
        if (window.AprisoContext && window.AprisoContext.outputs) {
            window.AprisoContext.outputs.current_sidebar_selected_item = '';
        }
    });

    var hamburger = document.querySelector('.tb-hamburger');
    hamburger.addEventListener('click', function () {
        var panel = document.getElementById('panel_SIDEBAR');
        if (panel) panel.classList.toggle('drawer-open');
    });
}