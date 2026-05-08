
function initSidebarEvents() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    // ============================================================
    // 1. Highlight do item ativo + abre modulo pai
    //    Prioridade:
    //      a) window.AprisoContext.inputs.current_sidebar_selected_item
    //         (source of truth — variavel mantida pelo proprio sidebar
    //         no Output, devolvida como Input no proximo render).
    //      b) data-active-menu (fallback quando ainda nao houve clique).
    //      c) data-current-screen (fallback final pra navegacao inter-Screen).
    // ============================================================
    var ctx = window.AprisoContext;
    var ctxSelected = (ctx && ctx.inputs && ctx.inputs.current_sidebar_selected_item) || '';
    var activeMenu = sidebar.getAttribute('data-active-menu') || '';
    var currentScreen = sidebar.getAttribute('data-current-screen') || '';

    var activeKey = ctxSelected || activeMenu || currentScreen;

    if (activeKey) {
        var activeBtn = sidebar.querySelector('button[value="' + activeKey + '"]');
        if (activeBtn) {
            activeBtn.classList.add('active');
            var parentModule = activeBtn.closest('.sb-module');
            if (parentModule) {
                var parentSubList = parentModule.querySelector('.sb-sub-list');
                var parentModBtn = parentModule.querySelector('.sb-module-btn');
                if (parentSubList) parentSubList.classList.add('open');
                if (parentModBtn) {
                    parentModBtn.classList.add('open');
                    parentModBtn.classList.add('active');
                }
            }
        }
    }

    // ============================================================
    // 1b. Toggle imediato no clique (UX): server confirma via
    //     {ActiveMenu} no re-render. JS aqui so evita o flicker entre
    //     click e re-render.
    // ============================================================
    sidebar.addEventListener('click', function (e) {
        // NAO filtrar por [data-flx-bind="Action"] aqui — o Apriso processa
        // esse atributo durante o render e pode remove-lo/renomea-lo no DOM
        // final, fazendo o seletor falhar. Todos os .sb-sub-item da sidebar
        // ja sao botoes de Action por convencao.
        var item = e.target.closest('.sb-sub-item');
        if (!item) return;

        sidebar.querySelectorAll('.sb-sub-item.active').forEach(function (el) {
            el.classList.remove('active');
        });
        item.classList.add('active');

        // Expoe o item selecionado como Screen Interface Output.
        // Output 'current_sidebar_selected_item' precisa estar declarado
        // em Screen Interface Function Outputs.
        // window.AprisoContext e definido pela ponte inline em sidebar.html
        // (porque $Context so existe na aba HTML, nao em arquivo externo).
        if (window.AprisoContext && window.AprisoContext.outputs) {
            window.AprisoContext.outputs.current_sidebar_selected_item = item.value;
        }
    });

    // ============================================================
    // 2. Toggle dos modulos via event delegation
    // ============================================================
    sidebar.addEventListener('click', function (e) {
        var btn = e.target.closest('.sb-module-btn[data-toggle]');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        var moduleDiv = btn.closest('.sb-module');
        if (!moduleDiv) return;
        var subList = moduleDiv.querySelector('.sb-sub-list');
        if (!subList) return;
        subList.classList.toggle('open');
        btn.classList.toggle('open');
    });

    // Acessibilidade: ENTER/SPACE no toggle (já que não é mais <button>)
    sidebar.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        var btn = e.target.closest('.sb-module-btn[data-toggle]');
        if (!btn) return;
        e.preventDefault();
        btn.click();
    });

    // ============================================================
    // 3. Relogio + data
    // ============================================================
    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function tick() {
        var now = new Date();
        var clk = sidebar.querySelector('.sb-clock');
        var dt = sidebar.querySelector('.sb-date');
        if (clk) {
            clk.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
        }
        if (dt) {
            try {
                dt.textContent = now.toLocaleDateString('pt-BR', {
                    weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
                });
            } catch (err) {
                dt.textContent = pad(now.getDate()) + '/' + pad(now.getMonth() + 1) + '/' + now.getFullYear();
            }
        }
    }
    tick();
    setInterval(tick, 1000);

}

function testContext() {
    console.log("CLICKED ON TEST CONTEXT", window.AprisoContext);
}
