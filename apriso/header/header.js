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


// Seletor de TEMA (só visível no host DEV). Aplica o tema trocando as classes
// env-* no <html>; NÃO mexe nas classes env-host-* (ambiente real), então o
// ícone de temas continua visível mesmo após escolher QA/PROD.
function __setTheme(env) {
    var r = document.documentElement;
    r.classList.remove('env-dev', 'env-qa', 'env-prod', 'env-nonprod');
    if (env === 'dev') r.classList.add('env-nonprod', 'env-dev');
    else if (env === 'qa') r.classList.add('env-nonprod', 'env-qa');
    else r.classList.add('env-prod');
    __closeThemeMenu();
}

function __toggleThemeMenu(ev) {
    if (ev) ev.stopPropagation();
    var m = document.getElementById('tb-theme-menu');
    var btn = document.querySelector('.tb-theme-btn');
    if (!m) return;
    var open = m.classList.toggle('open');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    // Fecha ao clicar fora (registra uma vez).
    if (open && !__themeOutsideBound) {
        document.addEventListener('click', __closeThemeMenu);
        __themeOutsideBound = true;
    }
}
var __themeOutsideBound = false;
function __closeThemeMenu() {
    var m = document.getElementById('tb-theme-menu');
    var btn = document.querySelector('.tb-theme-btn');
    if (m) m.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
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

async function getUser() {
    var ctx = window.AprisoHeaderContext;
    var respApi = await callDFCAsync(ctx, 'GRD_API_GetCurrentUserInformation', {});
    if (!respApi.responseResultData.Success) {
        GranadoMessagePopup.error('Erro ao pegar informações do usuário', { title: 'Erro' });
        return;
    }
    var userInfo = JSON.parse(respApi.responseResultData.User);
    return userInfo.EmployeeID;
}

async function abrirNotificacoes() {
    var userId = await getUser();

    var ctx = window.AprisoHeaderContext;

    // API de Carregamento de Mensagens
    var respMensagens = await callDFCAsync(ctx, 'GRD_API_GetAllAlertMessages', { EmployeeID: userId });
    if (!respMensagens.responseResultData.Success) {
        GranadoMessagePopup.error('Erro ao obter as notificações', { title: 'Erro' });
        return;
    }
    var mensagens = JSON.parse(respMensagens.responseResultData.Alerts);
    var alerta = mensagens.map(function (m) {
        return {
            AlertRecipientID: m.AlertRecipientID,
            AlertID: m.AlertID,
            AlertTitle: m.AlertTitle,
            AlertMessage: m.AlertMessage,
            PriorityID: m.PriorityID,
            AlertStatusID: m.AlertStatusID,
            GeneratedOn: m.GeneratedOn,
            CreatedBy: m.CreatedBy,
            CreatedByEmployeeID: m.CreatedByEmployeeID,
            RecipientID: m.RecipientID,
            IsMessageRead: m.IsMessageRead
        }
    });

    // API de Destinatários
    var respDestinos = await callDFCAsync(ctx, 'GRD_API_GetAllAllowedDestinationAlert', {});
    if (!respDestinos.responseResultData.Success) {
        GranadoMessagePopup.error('Erro ao obter destinatários', { title: 'Erro' });
        return;
    }
    var arrayDestinos = JSON.parse(respDestinos.responseResultData.Destinations);
    var destinos = arrayDestinos.map(function (a) {
        return {
            ID: a.ID,
            Description: a.Description,
            Type: a.Type
        }
    });

    GranadoNotificationPopup.show({
        data: alerta,
        destinations: destinos,
        onConfirmNewNotification: async function (d) {
            GranadoPreloader.show({ text: 'Enviando notificação...', zindex: 100010 }); // Z-index do overlay -> usado para garantir valor maior que outros modais/popups da tela.
            var respCriar = await callDFCAsync(ctx, 'GRD_API_CreateAlert', {
                AlertEmployeeID: d.AlertEmployeeID ? d.AlertEmployeeID : -1,
                AlertRole: d.AlertRole ? d.AlertRole : "-1",
                AlertTitle: d.AlertTitle,
                AlertMessage: d.AlertMessage
            });
            if (!respCriar.responseResultData.Success) {
                GranadoToast.error('Erro ao enviar notificação.', { heading: 'Erro' });
                GranadoPreloader.hide();
                return;
            }
            GranadoPreloader.hide();
        },

        onReplyNotification: async function (d) {
            GranadoPreloader.show({ text: 'Enviando resposta...', zindex: 100010 }); // Z-index do overlay -> usado para garantir valor maior que outros modais/popups da tela.
            var respResponder = await callDFCAsync(ctx, 'GRD_API_CreateAlert', {
                AlertEmployeeID: d.AlertEmployeeID,
                AlertRole: d.AlertRole,
                AlertTitle: d.AlertTitle,
                AlertMessage: d.AlertMessage
            });
            if (!respResponder.responseResultData.Success) {
                GranadoToast.error('Erro ao enviar resposta.', { heading: 'Erro' });
                GranadoPreloader.hide();
                return;
            }
            GranadoPreloader.hide();
        },

        onDeleteNotification: async function (d) {
            GranadoPreloader.show({ text: 'Deletando respostas...', zindex: 100010 }); // Z-index do overlay -> usado para garantir valor maior que outros modais/popups da tela.
            for (var i = 0; i < d.AlertRecipientIDs.length; i++) {
                var respDeletar = await callDFCAsync(ctx, 'GRD_API_DeleteAlert', { AlertItemRecipientID: d.AlertRecipientIDs[i] });
            }
            GranadoPreloader.hide();
        },

        onNotificationMarkedAsRead: function (d) {
            callDFCAsync(ctx, 'GRD_API_MarkAlertAsRead', { AlertRecipientID: d.AlertRecipientID });
        }
    });
}

async function abrirPopup() {
    var ctx = window.AprisoHeaderContext;
    var respApi = await callDFCAsync(ctx, 'GRD_API_GetCurrentUserInformation', {});
    if (!respApi.responseResultData.Success) {
        GranadoMessagePopup.error('Erro ao pegar informações do usuário', { title: 'Erro' });
        return;
    }
    var userInfo = JSON.parse(respApi.responseResultData.User);
    GranadoEmptyPopup.show({
        color: "#F4EED9",
        showClose: false,
        content:
            `<div style="display:flex; flex-direction:column; gap: 1rem;">
				<div style="position:relative; background-color: #F4EED9; display:flex; align-items:center; gap: 1rem; border-bottom: 1px solid #D6CDA4; margin:-22px -24px 0; padding:18px 24px; border-radius:12px 12px 0 0">
					<span style="flex-shrink:0;width:56px;height:56px;border-radius:50%;background:#1C5C31;display:flex;align-items:center;justify-content:center;color:#FDFAF1">
                		<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            		</span>
					<div style="font:800 18px/1.2 'Poppins',sans-serif;">${userInfo.EmployeeNo}</div>
					<button type="button" data-close aria-label="Fechar" title="Fechar" style="position:absolute !important; top:12px; right:12px; width:30px !important;background:transparent !important; border:none !important;">&#10005;</button>
				</div>
				<div style="display: flex; justify-content: space-between; align-items: center;"><div>Matrícula</div><div>${userInfo.ExployeeExternalLogin}</div></div>
				<div style="display: flex; justify-content: space-between; align-items: center;"><div>Setor</div><div>Pesagem</div></div>
				<div style="display: flex; justify-content: space-between; align-items: center;"><div>Turno</div><div>Manhã</div></div>
				<div style="display: flex; justify-content: space-between; align-items: center;"><div>E-mail</div><div>usuario@granado.com</div></div>
				<div style="border-top: 1px solid #D6CDA4; display:flex; justify-content:center; margin:0 -24px; padding:14px 24px 0">
					<granado-button label="Sair" onclickevent="Logout_Apriso()" variant="secondary" color="#8C1A1A" 
					icon='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'>
					</granado-button>
				</div>
			</div>`
    });
}

function Logout_Apriso() {
    _context = window.AprisoHeaderContext;
    _context.outputs.IsLogout = true;
    _context.outputs.Action = "LOGOUT";
    _context.submit();
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
