// Aba JavaScript da DFC do header (GRN_Header_View / GRN_Header_DFC).
// Sem logica de cliente — botoes emitem Actions via data-flx-bind, e as
// Portal Actions configuradas nos Action sub-entities da View disparam os
// popups (ANDON, Tractian). Breadcrumb resolve via interpolacao Apriso de
// {ScreenTitle} no HTML.
//
// Wiring necessario na View (Entity Explorer > Actions):
//   Name:           OPEN_ANDON
//     Type:           Calculated
//     Portal Action:  Open Pop-up View -> GRN_AndonPopup
//
//   Name:           OPEN_TRACTIAN
//     Type:           Calculated
//     Portal Action:  Open Pop-up View -> GRN_TractianPopup
//
// DFC Interface:
//   External Inputs:  Screen (Char), ScreenTitle (Char)
//                     -> declarar e rotear no Display Step para o
//                        ScreenInterface Function, senao {ScreenTitle}
//                        renderiza vazio no breadcrumb.
//   External Output:  Action (Char)
