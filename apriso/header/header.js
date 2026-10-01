function initHeaderEvents() {

    // Os eventos são wirados por CLASSE porque o header tem DOIS blocos
    // (#HEADER_WEB e #HEADER_MOBILE), cada um com seus próprios elementos.

    // Home (breadcrumb) — limpa a seleção da sidebar.
    document.querySelectorAll('.tb-home').forEach(function (home) {
        home.addEventListener('click', function () {
            if (window.AprisoContext && window.AprisoContext.outputs) {
                window.AprisoContext.outputs.current_sidebar_selected_item = '';
            }
        });
    });

    // Hambúrguer (mobile) — abre/fecha o drawer da sidebar.
    document.querySelectorAll('.tb-hamburger').forEach(function (hamburger) {
        hamburger.addEventListener('click', function () {
            var panel = document.getElementById('panel_SIDEBAR');
            if (panel) panel.classList.toggle('drawer-open');
        });
    });

    // Nome do usuário: corta em MAX chars e coloca "." (nome completo vai no title).
    var MAX_NAME = 14;
    document.querySelectorAll('.tb-user-name').forEach(function (un) {
        var full = (un.textContent || '').trim();
        un.setAttribute('title', full);
        if (full.length > MAX_NAME) {
            un.textContent = full.slice(0, MAX_NAME).replace(/\s+$/, '') + '.';
        }
    });

}


function initResponsiveLayoutHeader() {

    var MOBILE_QUERY = "(max-width: 768px)";
    var mq = window.matchMedia(MOBILE_QUERY);

    updateResponsiveLayoutHeader(mq.matches);

    // dispara só ao cruzar o breakpoint
    mq.addEventListener("change", function (e) {

        updateResponsiveLayoutHeader(e.matches);
    });
}

function updateResponsiveLayoutHeader(isMobile) {

    document.getElementById("HEADER_WEB").style.display = isMobile ? "none" : "block";
    document.getElementById("HEADER_MOBILE").style.display = isMobile ? "block" : "none";

}


function Logout_Apriso() {
    GranadoOptionPopup.show({
        type: 'warning',
        title: 'Sair do sistema',
        message: 'Deseja realmente fazer logout?',
        buttons: [
            { text: 'Cancelar', value: 'cancelar', variant: 'ghost' },
            {
                text: 'Sair', value: 'sair', variant: 'primary',
                onClick: function () {
                    _context = window.AprisoHeaderContext;
                    _context.outputs.IsLogout = true;
                    _context.outputs.Action = "LOGOUT";
                    _context.submit();
                }
            }
        ]
    });
}

async function waitForDashboard() {

    const maxAttempts = 20;
    const interval = 500;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {

        if (window.top.location.href.includes("/apriso/apriso/#/dashboard/")) {

            window.top.location.href =
                window.top.location.origin +
                "/apriso/Portal/UIService.aspx?Alias=GRD_MainDashboard";

            return;
        }

        await new Promise(resolve => setTimeout(resolve, interval));
    }
}
