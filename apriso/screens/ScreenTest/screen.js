// Aba JavaScript da DFC da ScreenTest (GRN_ScreenTest_View / GRN_ScreenTest_DFC).
// Sem logica de cliente — os botoes emitem Actions via data-flx-bind="Action".
//
// Wiring necessario na View (Entity Explorer > Actions):
//
//   Action 1: abre o popup de teste
//     Name:           OpenTestPopup
//     Type:           Calculated
//     Portal Action:  (vazio / Go to Screen sem Name)
//     Open Pop-up View > Name: GRN_TestPopup_View
//
//   Action 2: refresh provisorio (mesmo padrao do header/sidebar)
//     Name:           Refresh
//     Type:           Calculated
//     Portal Action:  Refresh
//
// DFC Interface:
//   External Output: Action (Char)
