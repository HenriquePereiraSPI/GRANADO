// Aba JavaScript da DFC da ScreenTest2 (GRN_ScreenTest2_View / GRN_ScreenTest2_DFC).
// Sem logica de cliente — os botoes emitem Actions via data-flx-bind="Action".
//
// Wiring necessario na View (Entity Explorer > Actions):
//
//   Action 1: refresh provisorio
//     Name:           Refresh
//     Type:           Calculated
//     Portal Action:  Refresh
//
//   Action 2: abre o popup de teste (mesma View do popup usada na ScreenTest)
//     Name:           OpenTestPopup
//     Type:           Calculated
//     Portal Action:  (vazio / Go to Screen sem Name)
//     Open Pop-up View > Name: GRN_TestPopup_View
//
// DFC Interface:
//   External Output: Action (Char)
