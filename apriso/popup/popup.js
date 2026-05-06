// Aba JavaScript da DFC do popup de teste (GRN_TestPopup_View / GRN_TestPopup_DFC).
// Sem logica de cliente — o botao Fechar emite a Action "Close" via data-flx-bind,
// e a Portal Action configurada no Action sub-entity da View encerra o popup.
//
// Wiring necessario na View (Entity Explorer > Actions):
//   Name:           Close
//   Type:           Calculated
//   Portal Action:  TargetScreen -> Back
//
// DFC Interface:
//   External Output: Action (Char)
