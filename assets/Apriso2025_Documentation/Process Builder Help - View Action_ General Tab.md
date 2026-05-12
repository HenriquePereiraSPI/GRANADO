# View Action_ General Tab

View Action: General Tab

Field              Description
Name
                   The unique name of the Action (use capital letters without blank spaces). Submitting
Show Title         an Action starting with the prefix "_" does not check the required fields (controls).
check box
                   If selected, the title (label) of the Action will be displayed on the Screen.

Title                This section can be editable for Views that are in the active status. For details on
                     how to enable it, see "Modifying Properties..." section of the Entity Status Types
                     topic.

                   The descriptive Action name that will be displayed on the Button or Tab.

                              Code – the name of the Dictionary Item of the Action title; the following
                              actions are available:

                                              – adds the Dictionary Item (written in the text box) to the
                                         dictionary and links it to the Action title

                                              – invokes the Dictionary Items suggestion lookup window,
                                         which lists the existing Dictionary Items from which the user may
                                         choose

                                                     When the user enters a part of the Dictionary Item name,
                                                     the system suggests a list of matching entries from the
                                                     database
                                                     The chosen Dictionary Item is linked to the Action title

                                              – unlinks the previously added Dictionary Item (it is removed
                                         from the Code field)

                                              – opens the Dictionary Translations screen in the context of
                                         linked Dictionary Items

                                                     For more information on this screen, refer to the Dictionary
                                                     Translations topic in the Dictionary Help
                              Translation – the translation of the Action's title according to the translation
                              added in the Dictionary Translations screen

Tooltip              This section can be editable for Views that are in the active status. For details on
                     how to enable it, see "Modifying Properties..." section of the Entity Status Types
                     topic.

                   The tooltip text that will be displayed after hovering the Button with the mouse
                   pointer.

                              Code – the name of the Dictionary Item of the tooltip; the following actions
                              are available:

                                              – adds the Dictionary Item (written in the text box) to the
                                         dictionary and links it to the Action tooltip

                                              – invokes the Dictionary Items suggestion lookup window,
                                         which lists the existing Dictionary Items from which the user may
                                         choose

                                                     When the user enters a part of the Dictionary Item name,
                                                     the system suggests a list of matching entries from the
                                                     database
                                                     The chosen Dictionary Item is linked to the Action tooltip
                                              – unlinks the previously added Dictionary Item (it is removed
                                         from the Code field)

                       – opens the Dictionary Translations screen in the context of
                   linked Dictionary Items

                              For more information on this screen, refer to the Dictionary
                              Translations topic in the Dictionary Help

Defined              This section can be editable for Views that are in the active status. For details on
Type                 how to enable it, see "Modifying Properties..." section of the Entity Status Types
                     topic.

                   If selected, the Action will not be editable on the Screen. It will be overwritten.
                   The Action type determines what will trigger the Action:

                              Button (Primary)

                              Renders a Button on the View
                              The Buttons are provided for primary Actions (e.g., OK, NEXT) –
                              their purpose makes them more important than others, so they
                              have to have a stronger visual weight

                                         The primary Buttons need to stand out on the Screen,
                                         because they allow the user to navigate through the
                                         Screens to complete the task
                              To render a primary Button, the PortalGenerateButtonList sub-DFC
                              must be present in the DFC

                   Button (Secondary)

                                            Renders a Button on the View
                                            This is a style for secondary actions (e.g., BACK, CANCEL, HELP)
                                            – these Buttons allow the user to process activities that are not in
                                            the main stream of the business logic, and they should have less
                                            visual weight than a primary Button and a different, more balanced
                                            style
                                            The business logic of the flow dictates which Button is primary or
                                            secondary

                                                       For example, CANCEL – in most cases this is a secondary
                                                       Button, but when you can perform an Action that is
                                                       permanent and irreversible, the CANCEL Button should be
                                                       displayed as primary
                                            To render a secondary Button, the PortalGenerateButtonList sub-
                                            DFC must be present in the View DFC

                                 Calculated

                                            This Action type is designed to handle Screen behavior that cannot
                                            be displayed with a Button or Tab
                                            No particular UI element will be rendered for this Action

                   In this case, the developer has to handle displaying the adequate
                   UI control for this Action and also passing the Action name to an
                   External Output of the View DFC (e.g., selecting a record on the
                   grid or a drop-down Input)
                   A common situation requires handling routing from a View DFC

                            The routing value can be added as a View Action, and then
                            an appropriate Screen and/or On Action DFC is triggered

                   Numeric

                   For mobile devices, this renders a command prompt with the
                   numeric option

                     Mobile and Text platforms are no longer supported.
                   Tab

                   Renders a Tab, which is a separate Panel in the Layout

                              For example, the image above presents two Panels: a
                              small one at the top one for Tabs, and a bigger one below it
                              with the actual Tab content
                              The PortalTab Template should be used to create Views
                              that generate Tabs
                   This View should be used in a pair with the GenericPortalTab or
                   PortalTabNotification DFC

                   It is possible to switch the View Action Type between Button (Primary) and
                   Button (Secondary) types for the View Actions that are in the active status. For
                   details on how to enable it, see Entity Status Types.

Image              Sets preview background color. The button's background color can be changed on
                   the Advanced Tab by setting the appropriate Inline Style.

                   The image to be displayed on the UI element (applicable for Buttons or Tabs). The
                   image has to be either on the DELMIA Apriso server or referenced as an HTML link.
                   The relative path to the image should be pasted into this field (e.g.,
                   /images/action_accept.png).

                   This option can be editable for Views that are in the active status. For details on
                   how to enable it, see "Modifying Properties..." section of the Entity Status Types
                   topic.

Group Tag          This can be used to group Actions (Buttons in a View or in a selected grid) and later
On Action          to use the whole group instead of one particular Action. Buttons can be positioned in
                   the following groups: TOP, BOTTOM, LEFT, RIGHT, TOP-LEFT, TOP-RIGHT,
                   BOTTOM-LEFT, BOTTOM-RIGHT.

                   The On Action choice determines what will be executed when the respective Action
                   is triggered and before the target Screen is loaded. The following options are
                   available to select:

                              DFC – only DFCs of action or initialize subtype can be linked (appear in the
                              DFCs suggestion lookup window

                                 This option is disabled for HTML View Actions in Offline Modules.

                              Action Script Function – only default revisions of Action Scripts that are in
                              the Active, Prototype or Development in Progress status can be linked
                              (appear in the Action Script Functions lookup window)

                   Name – the Action handler DFC or Action Script Function

                              The DFC used here should end with _Action and be in the Prototype,
                              Development in Progress, or Active status

                   Revision – the revision of the View DFC

                   The following actions are available:

                                   – invokes the DFCs lookup window, where the user can copy and link an
                              Action handler DFC

                                   – invokes the DFCs or Action Script Functions lookup window, where
                              the user can link an Action handler DFC or Action Script Function

                                   – unlinks the linked DFC or Action Script Function
                                   – invokes the workspace of the linked DFC or Action Script Manager. If
                              there is more than one revision of that DFC, a pop-up listing all of the
                              revisions will appear (to open one of the revisions, double-click it).

                   In the case of PB Projects, the pop-up will display default revisions of
                   the DFCs (of Action type) in the current Project.

Action             Next Action – the Action to be used as the next Action

                              Use Action from different View check box – is active if there is at
                              least one View on another Panel in your Screen configuration.
                   Portal Action – the Action in the Portal

                              The available options are:

                                         Go to Screen – goes to the next Screen (identified in the
                                         Name and Revision fields below)

                                                     If empty, then:

                                                     no action is performed (in the Screen
                                                     Flows Client Mode)
                                                     the current Screen is refreshed (in the
                                                     Screen Flows Server Mode). For more
                                                     information, see the Refresh option.
                              Back – goes back to the previous Screen in a given
                              Screen stack with the Portal Session Variable restored
                              (internal Screen Flow action)
                              Close All – closes all of the Screen stacks and exits to the
                              DELMIA Apriso Portal
                              Exit – closes top Screen stacks (Sub-Portal Session) and
                              exits to the higher level Screen stack or the DELMIA Apriso
                              Portal
                              Loop Close
                              Loop Level 2 Close
                              Loop Level 3 Close
                              Pop-up Close (refresh screen)
                              Pop-up Close
                              Return – goes back to the last Screen with a different
                              Screen code

                                         If there is no previous Screen, then it will exit to a
                                         higher level Screen Stack
                              Screen Close
                              Help
                              Refresh– refreshes the current Screen
                              Replace Screen – replaces the current Screen in the
                              Screen Stack
                   Name – the name of the Screen for the Go to Screen option
                   Revision – the revision of the Screen for the Go to Screen option;
                   the following actions are available:

                                   – invokes the Screen lookup window, where the user
                              can link a Screen

                                   – unlinks the linked Screen

                                   – invokes the workspace of the linked Screen.

                                            In the case of PB Projects, the pop-up will display a
                                            default revision of the Screen in the current Project.

                   Open Pop-up View – opens a View in a pop-up window

                              Name – the name of the View to be displayed in the pop-up window
                              Revision – the revision of the View DFC; the following actions are
                              available:

                                              – invokes the Views lookup window, where the user
                                         can copy and link a View

                                              – invokes the Views lookup window, where the user
                                         can link a View

                                              – unlinks the linked View

                                              – invokes the workspace of the linked View. If there is
                                         more than one revision of that DFC, a pop-up listing all of
                                         the revisions will appear (to open one of the revisions,
                                         double-click it).

                                            In the case of PB Projects, the pop-up will display
                                            default revisions of the DFCs (of the View type) in the
                                            current Project.

Availability This functionality is valid only for a Grid View. It provides the ability to configure

Mode               read-only properties for toolbox Buttons in the grid. It can also be set directly in the

                   grid. The Action will be available depending upon selection of the grid. The options

                   are:

                         Always
                         At least two rows
                         At least one row
                         Single row only

Keyboard           The keyboard key used to trigger this Action. In addition to keyboard buttons, there
                   are items that start with the "FX" prefix. These particular shortcuts can be configured
                   with use of the keys located in the KeyboardMapping section of the Central
                   Configuration file (for details, see Central Configuration Documentation ).
