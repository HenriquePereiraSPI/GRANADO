# Screen_ General Tab

Screen: General Tab

   Field           Description
   Base Screen     This is the screen from which the user starts the business flow. If selected, the
                   Screen is available in the header search.
   Name            The unique name of the Screen. It is used to identify the Screen and to define the
                   flow between the Screens.
   Revision        The Screen revision number (must be unique).

Title                The revision of the Screen which will be used in runtime. It is selected by
                     default for a newly created Screen (the next revisions of the Screen will not be
                     selected as default ones).

                   A descriptive Screen name. It can be shown directly on the screen as part of the
                   header or in the breadcrumb.

                              Code – the name of the Dictionary Item linked to the Screen title. The
                              following actions are available:

                                              – adds a Dictionary Item (written in the text box) to the
                                         dictionary and links it to the Screen title

                                              – opens the Dictionary Items suggestion lookup window,
                                         which lists the existing Dictionary Items from which the user may
                                         choose

                                                     When the user enters a part of the Dictionary Item
                                                     name, the system suggests a list of matching entries
                                                     from the database
                                                     The chosen Dictionary Item is linked to the Screen title

                                              – unlinks the current Dictionary Item (it is removed from the
                                         Code field)

                                              – opens the Dictionary Translations screen in the context of
                                         the linked Dictionary Item (for more information, refer to the
                                         Dictionary Help )
                              Translation – the translation of the Screen's title according to the
                              translation added in the Dictionary Translations screen

Description          Titles can be formatted using all available variables from the Portal Session.
Layout               For example, the title "Details of the {ProductNo} product" defined for a Screen
                     would be formatted to "Details of the ABC product", assuming the ProductNo
                     variable exists in the session and has the value of "ABC".

                   The description of the Screen.
                   The Layout chosen for the Screen. The following actions are available:

                                    – invokes the Layouts dialog (it contains all of the Layouts already
                              defined), where a Layout can be linked.

                                       If the Layout is already linked, there is possibility to convert to
                                       another Layout. Click this button to choose another Layout and then
                                       follow instructions located on the Layout Panel Converter pop-up
                                       window.

                                         – unlinks the Layout

                   The best practice is to link a Layout by clicking  in the
                   workspace. For more information, see Layout.

                       – clicking this button takes you to the Layout workspace that is linked
                   (for more information, see Layout)

                   In the case of PB Projects, the pop-up will display a default revision of the
                   Layout in the Project.

Instance             If you deploy a Layout entity on the destination server where this Layout is
Navigation           already linked, the Screen that uses the Layout will use its old version rather
                     than the one already deployed. You can manually relink recently deployed
On Initialize        Layout for each Screen.

                   This is used when the same Screen has to be used with a different context. For
                   more information, see Instance.

                   Defines how the Screen will interact with the Portal Session and the Screen
                   Stack, e.g., whether a snapshot of the Screen will be stored in the Screen Stack
                   or not. The drop-down menu presents the options:

                              Home – the first Screen in the stack, used to reset the whole Screen
                              Stack history
                              Sub-Portal – used to create the new lower level Screen Stack session,
                              Normal – put in the Screen Stack with all related variables
                              Intermediate – these Screens are temporary and are not put in the
                              Screen Stack
                              Loop – the Screen is marked as the start of the loop
                              Loop Level 2 Close
                              Loop Level 3 Close

                   For more information, see Navigation Type.

                   A DFC or action script function which feeds the data that have to appear on the
                   Screen when it is shown for the first time. The On Initialize choice is used to
                   define the Actions that will be triggered before the Screen load. The following
                   options are available to select:

                              DFC – only DFCs of action or initialize subtype can be linked (appear in
                              the DFCs suggestion lookup window). For example, the DFC can display
                              pop-up windows and handle the Screen routing before the user enters
                              the Screen. The On Initialize DFC is called only during the first load of
                              the Screen in the current session (except when the Screen is of the
                              Home navigation type, in which case the DFC is called each time the
                              Screen is loaded).

                                       This option is disabled for Screens in an Offline Module.

                                     Action Script Function – only default revisions of Action Scripts that are in
                                     the Active, Prototype or Development in Progress status can be linked
                                     (appear in the Action Script Functions lookup window)

                         Name – the name of the Screen On Initialize DFC or Action Script Function

                              The DFC used here should end with _Initialize
                              For the On Initialize DFCs, Process Builder provides the
                              PortalScreen_Initialize DFC template

                   Revision – the revision of the On Initialize DFC

                   The following actions are available:

                                   – invokes the DFCs lookup window, where the user can copy and link
                              a Screen On Initialize DFC

                                   – invokes the DFCs or Action Script Functions lookup window,
                              where the user can link an Action Script Function or the On Initialize DFC

                                   – unlinks the linked DFC or Action Script Function
                                   – invokes the workspace of the linked DFC or Action Script Manager.
                              If there is more than one revision of that DFC, a pop-up listing all of the
                              revisions will appear (to open one of the revisions, double-click it).

                                 In the case of PB Projects, the pop-up displays default revisions of
                                 DFCs in the current Project.

                   It is also possible to change a View (see Change View: Advanced Configuration)
                   with the use of the DFC.

On Load              The On Initialize DFC can also change the Views on Panels. By using the
                     PanelList and ViewList Outputs, the Process Author can dynamically change
                     the View presented inside a Panel.

                   The On Load choice is called each time the Screen is loaded (refreshed). It is
                   called after the On Initialize DFC or Action Script Function. The following options
                   are available to select:

                              DFC – only DFCs of action or initialize subtype can be linked (appear in
                              the DFCs suggestion lookup window)

                                       This option is not available for Screens in an Offline Module.

                                     Action Script Function – only default revisions of Action Scripts that are in
                                     the Active, Prototype or Development in Progress status can be linked
                                     (appear in the Action Script Functions lookup window)

                         Name – the name of the On Load DFC or Action Script Function

                         Revision – the revision of the On Load DFC

                         The following actions are available:

                                         – invokes the DFCs lookup window, where the user can copy and link
                                     a Screen On Load DFC

                                         – invokes the DFCs or Action Script Functions lookup window,
                                     where the user can link a Screen On Load DFC or Action Script
                                     Function.

                                         – unlinks the linked DFC or Action Script Function

                                   – invokes the workspace of the linked DFC or Action Script Manager.
                              If there is more than one revision of that DFC, a pop-up listing all of the
                              revisions will appear (to open one of the revisions, double-click it).

                                 In the case of PB Projects, the pop-up will display default revisions of
                                 DFCs in the current Project.

                   It is also possible to change a View (see Change View: Advanced Configuration)
                   with the use of the DFC.

                   The On Load DFC can also change the Views on Panels. By using the
                   PanelList and ViewList External Outputs, the Process Author can dynamically
                   change the View presented inside a Panel.

Header             Name – the name of the HeaderView
                   Revision – the revision of the Header; the following actions are
                   available:

                                   – invokes the Views browser, where a Header View can be
                              linked

                                   – unlinks the linked Header View

                                   – invokes the View's workspace screen. If there is more than
                              one revision of that View, a pop-up listing all of the revisions will
                              appear (to open one of the revisions, double-click it).

Inherit Header If selected (and inactive), the Header inherited from the Default Header linked to
from Layout the Layout will be available.
Default Header

Version            An auto-incremented number of a Screen. It increases when you modify and
                   save the Screen or change its status. Click Edit Mask to enter a custom mask.

   Version host    The name of the last server where a Screen has been modified and saved or its
                   status has changed.

Instance

Sometimes you need to display the same Screen in a different context. You may have one Screen
for displaying product details, but you want to distinguish instances for different products. This
scenario is supported through identification of the instance of the Screen.

Following this example with the different products, assume that your Screen for displaying the
product details is named "PRD-10" and its instance is set to {ProductNo}. If you navigate to this
screen with the ProductNo variable set to “ABC”, the screen instance will be set to “ABC”, and if you
change the product to “XYZ”, the instance will be set to “XYZ”. In both scenarios the Screen
instance is different, so the system assumes that these are in fact different Screens. This is
important for the support of automated navigation scenarios such as back or return, and also for
calling the Screen On Initialize DFC.

This is an example of a Screen call stack:

Stack Element Number                        Screen Code                 Screen Instance
1                                           HOME-10                     HOME-10
2                                           PRD-10                      PRD-10ABC
3                                           PRD-10                      PRD-10XYZ

For example, you are at the PRD-10 Screen, executed for XYZ (the last element of the call stack).
If you issue a back Action from here, the system will go to the previous stack element, which is
PRD-10 for ABC. If you issue a return Action, the system will go back to the last element with a
different screen code, which in this case is HOME-10.

The back navigation will always restore the previous Portal Session (with all the variables except
the global ones).

Navigation Type

The screen navigation type defines how the Screen will interact with the Portal Session and Screen
call stack. This setting also directly implies what kind of navigation action can lead to this particular
Screen.

Navigation Session & Call Stack Interaction                      Usage

Normal             The Screen is added to the call stack with a A typical Screen supporting back

                   session snapshot.                             navigation.

Intermediate The Screen is not added to the call stack, A Screen that should not support back

                   no session snapshot.                          navigation.

Home               Before the display, the call stack is cleared. A starting base Screen, clearing the
                   The Screen is added to the call stack with a history.
                   session snapshot.

Sub-Portal The Screen is displayed in a new,                     The start Screen of a separated
                  separated, clean session.                      business flow.

Loop               The Screen is marked as the start of the      The start Screen for a Screen loop.
                   loop. On the following Screen or View, the    After closing the loop, the navigation
                   user can decide to close the loop by calling  takes the user to the first Screen with
                   Portal Action: Loop close.                    the loop navigation.
