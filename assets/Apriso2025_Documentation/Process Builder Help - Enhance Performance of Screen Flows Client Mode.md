# Enhance Performance of Screen Flows Client Mode

The tables below present the list of improvements that can be introduced in order to enhance the
screen flows client mode performance.

Refresh Functionality

Use the refresh functionality only when necessary.

In the screen flows server mode, every action causes a refresh. In the screen flows client mode,
you can choose between a refresh and no action.

Functionality                  Server Mode Behavior  Client Mode Behavior

The Go to Screen navigation Example of the configuration in the server and client modes:
action does not refresh the
screen when the action has no
screen linked (in the server
mode, the Refresh action is
performed).

                               Server mode behavior: The Client mode behavior: The
                               screen will be refreshed (the Refresh action will not be
                               Refresh action will be executed), executed, which can speed up
                               which is not needed every time. the screen's functioning.

                                                     If the Refresh action must be
                                                     executed, it is necessary to
                                                     change the Portal Action
                                                     type from Go to Screen to
                                                     Refresh.

Submitting the view does not   Example of the configuration in the server and client modes:
refresh the screen when no
Action was returned from any   A screen with a view linked, and the user submits the view. This is
view (in the server mode, the  an example:
Refresh action is performed).
                                      1. A DFC with the Grid Business Control (the Row Double
                                          Click Mode set as default to Select and Submit) and the
                                          User Formula Function with an External Output.

                                  2. The value of the External Output is the name of the
                                     Action to be executed. It can be empty when no Action is
                                     to be executed.

                                  Server mode behavior: If a Client mode behavior: If a

                                  DFC does not return the Action DFC does not return the Action

                                  External Output or the External External Output or the External

                                  Output's value is empty, the    Output's value is empty, the

                                  Refresh action is performed (it is Refresh action will not be

                                  not needed in every case).      performed.

                                                                  If the refresh action must be
                                                                  executed, it is necessary to
                                                                  return the Action name of the
                                                                  Refresh type using the
                                                                  Action External Output.

Go to Screen Functionality

Use the Go to Screen functionality only when it is necessary.

Functionality                     Server Mode Behavior            Client Mode Behavior

The difference between the        Example of the configuration in the server and client modes:
Change View and Go to
Screen functionality              1. A screen has two views linked: View1 and View2.
performance is not significant    2. After executing an action on View1, the user wants to
in the server mode. However,
in the client mode, it is better     change View2 to View3.
to use Change Views (if
applicable) rather than Go to
Screen.

                                  Server mode behavior: It is Client mode behavior: It is

                                  possible to use either the      possible to use the Change View

                                  Change View functionality to or Go to Screen functionality.

                                  change View2 into View3 or

                                  the Go to Screen functionality

                                  in order to navigate to the

                                  screen that displays View2 and

                   View3. In both cases, the
                   screen is reloaded.

                                              It is important to remember
                                              that a Change View will
                                              change only the selected View
                                              without changing the other
                                              ones; therefore, fast
                                              application performance can
                                              be achieved. The Go to
                                              Screen functionality will reload
                                              all the Views.
