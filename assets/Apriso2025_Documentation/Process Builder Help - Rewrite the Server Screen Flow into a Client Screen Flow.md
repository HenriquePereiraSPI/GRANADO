# Rewrite the Server Screen Flow into a Client Screen Flow

Rewrite the Server Screen Flow into a Client Screen
Flow

The tables below present the list of functionalities that need to be checked when starting to rewrite
the server screen flows into client screen flows as well as how the configuration from the server
mode should look in the client mode.

Process Builder Changes

Functionality                   Example of Configuration in How to Rewrite the Server Mode

                                the Server Mode                Configuration to the Client Mode

Check if the business controls  All the business controls are  If a business control is not
used in your screen flow are    supported.                     supported in the client mode (see
supported in the client mode                                   the list of business controls), it
(for details, see Screen Flows                                 should be rewritten into the DFC.
Client Mode).

All the DFCs of the View type   1. The step navigation configuration (the DFC with steps,
should use the HTML Layout         one step contains the UI elements).
Editor:

Convert only the steps
with UI elements
If the UI step contains
a sub-DFC with UI
elements, both the UI
step and sub-DFC
should use the HTML
Layout Editor
If a DFC contains
more than one UI step,
all the UI steps should
be converted (note
that there should be
only one UI step in one
routing path in the step
navigation view)

                               2. The DISPLAY step             2. The DISPLAY step
                                  configuration in the            configuration should be
                                  Layout Editor (for              converted to the HTML
                                  server mode).                   Layout Editor (for
                                                                  converting from server
                                                                  mode to client mode).

The User Inputs should be      Function navigation             Configuration example:
rewritten into the Screen      configuration:                         1. The Function navigation
Interface Outputs (the data-                                              configuration:
flx-bind tag should be used).    An External Output
                                 configuration is an                         An External Output
                                 exemplary configuration                     configuration is an
                                 and can be changed to the                   exemplary
                                 other one (e.g., a different                configuration and can
                                 Function type).                             be changed to the
                                                                             other one (e.g., a
                                                                             different Function
                                                                             type).

                                                               2. The HTML Layout
                                                                  Editor:

The User Outputs should be     Function navigation                            Code
rewritten into the Screen      configuration:
Interface Inputs that can be                                   Configuration example:
inserted into the HTML Layout                                         1. The Function navigation
Editor.                                                                   configuration:

                                  An External Input             An External Input
                                  configuration is an           configuration is an
                                  exemplary configuration       exemplary
                                  and can be changed to the     configuration and can
                                  other one (e.g., a different  be changed to the
                                  Function type).               other one (e.g., a
                                                                different Function
                                                                type).

                                                                2. The HTML Layout
                                                                   Editor:

JavaScript Changes

Functionality        Example of Configuration in the How to Rewrite the Server Mode

                     Server Mode             Configuration to the Client Mode

The JavaScript When the JavaScript "Document When the JavaScript "Document Ready"

"Document            Ready" event occurs, a screen is event occurs, a screen is not loaded yet. To

Ready" event no already loaded. HTML Layout perform screen modifications in the

longer ensures Editor Configuration          JavaScript use $View.onLoaded event. HTML

that a screen is                             Layout Editor Configuration

loaded.

                     Code

                                             Code

Check if             Configuration example:

JavaScript           1. A screen with a view that defines a JavaScript variable:
variables are still

needed after a

view is unloaded.

                   2. The user is moved from the previous screen to the screen that shows
                      the value of the variable defined in the previous screen:

                   When a variable is defined in the When a screen is submitted, the page is not

                   scripts, it is removed when a reloaded, so unused variables should be

                   page is submitted. The variable removed manually (e.g., the onViewsUnloading

                   does not exist, so it is not  event). Otherwise, the variable exists, so its

                   displayed on the screen.      value will be displayed on the screen.

If you use the     This code invokes the myCallback This code invokes the myCallback function
setTimeout or
                   function every 2 seconds until every 2 seconds until the user stays in the
setInterval
                   postback occurs (e.g., the user screen flows client mode context (e.g., it will
functions, make
sure that their    goes to another screen):      be still invoked when the user goes to
execution is
stopped when it                                  another screen, but the execution will be
is needed.
                   setInterval(myCallback,       stopped when going to the Portal Home
                   2000);                        page):

                                                 setInterval(myCallback, 2000);

                                                 If you want to stop the interval execution
                                                 when going to another screen, you should
                                                 clear the interval manually. This is an
                                                 example of how to do this:

                                                 var intervalId = setInterval(myCallback,
                                                 2000);

                                                 $View.onUnloading(function() {
                                                       clearInterval(intervalId);

                                                 });
