# Screen_ Change Flow Tab

Screen: Change Flow Tab

Change Flow is used to modify the Screen Flow behavior by defining Actions that might be
triggered before the Screen load. The trigger comes with the value of the Output ACTION, which is
set in On Initialize DFC and On Load DFC. It enables displaying pop-ups and handles the Screen
routing before entering the Screen.

In the example below, if the On Initialize DFC sets the Action External Output to:

           CLOCK, then the PortalClock_example Screen will be displayed instead of the current one
           TREE, then the PortalTree View will be displayed instead of the current Screen

The following actions are available at the top of the pane:

           Clicking (Add) adds an Action
           Clicking (Remove) removes the Action

The table at the top of the pane presents the following information:

Column Name        Description
Enabled            If selected, the Action is enabled.
Name               The name of the Action.
Open Pop-up View   The View that will be displayed in a pop-up window.
Portal Action      The target Screen that will be opened.

Individual Actions can be edited in the following fields at the bottom of the pane:

Field              Description

Action Name The name of the Action.

Open Pop-          Name – the name of the pop-up View being linked
up View            Revision – the revision of the pop-up View; the following actions are
                   available:

                                    – invokes the Views window, where a pop-up View can be
                                copied and linked

                                    – invokes the Views window, where a pop-up View can be
                                linked. If there is more than one revision of that View, a pop-up
                                listing all of the revisions will appear (to open one of the revisions,
                                double-click it).

                                    – unlinks the linked View

                                    – invokes the View workspace screen (for details, see View
                                Overview).

Portal                           In the case of PB Projects, the pop-up displays default
Action – Go                      revisions of Views in the current Project.
to Screen
                   Name – the name of the Screen being linked
                   Revision – the revision of the linked Screen; the following actions are
                   available:

                                   – invokes the Screens window, where a Screen can be linked.
                              If there is more than one revision of that Screen, a pop-up listing
                              all of the revisions will appear (to open one of the revisions,
                              double-click it).

                                   – unlinks the linked Screen
                                   – invokes the workspace of the linked Screen

                                In the case of PB Projects, the pop-up displays default
                                revisions of Screens in the current Project.
