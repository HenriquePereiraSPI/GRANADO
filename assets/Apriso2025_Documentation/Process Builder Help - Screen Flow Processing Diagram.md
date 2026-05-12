# Screen Flow Processing Diagram

Screen Navigation

A standard flow consists of three elements:

           A display screen (UI)
           Execute Action(s) (business logic)
           Navigating the user to the next Screen

Proper Screen navigation is essential for maintaining a clean, simple solution and for an excellent
user experience.

Screen Stack

There is an associated Screen stack called by each Portal Session. When navigating between
Screens, a Screen can be pushed to the stack or pulled from the stack and presented to the user.
When navigating to a normal Screen, the Screen is placed on the Screen stack and can be
returned to later on. However, you can change how the Screens interact with the Screen stack
using the navigation types. Another way to control the Screen stack is by using standard navigation
from the Action properties.

To define the Screen navigation, use the Portal Actions in the Action properties. Here you can
define what to do after executing an Action.

  The following options are available:

              Portal Action drop-down menu values

                         Go to Screen – select this option to navigate to other Screens (see the Refresh
                         option section for more information)
                         All other options are used to navigate in the Screen stack (for details on all of the
                         Portal Action options, see View Action: General Tab)
              Open Pop-up View definition section

                         On every Screen, you can define a modal pop-up window that usually contains
                         some additional context-based information
                         Every View defined in Process Builder can be used as a pop-up View
                         By default, pop-up Views are not shown when entering the Screen (you can
                         change this using the Screen: Change Flow Tab and the pop-up Views will
                         disappear after navigating from the Screen)

 Standard Navigation

Simple examples of standard navigation actions are described below.

  The diagrams below present Screen transitions, not the contents of the Screen stack.

Back

The "back" scenario will go back to the previous Screen in a given Screen stack. Portal Session
Variables from the previous Screen will be used. For example, when going back from SCR-31 to
SCR-30, the variables from SCR-30 will be restored and used. If there is no previous Screen, the
flow will exit to a higher-level Screen stack.

In this example, you can see that the "Intermediate" Screens are bypassed because they are not
part of any Screen stack.

Close All

The "close all" scenario closes all the Screen stacks and will exit to the DELMIA Apriso Portal.

 Exit

  The "exit" scenario will exit to a higher level screen stack.

Loop Close (2, 3)

The "loop close" scenario closes all the Screens from the stack up to the Screen which has the
navigation type set to the respective loop level (as in, 2 or 3). When no Screen is found with the
proper loop level, the Portal is exited.

Pop-Up Close (refresh screen)

The "pop-up close" scenario closes the pop-up window and stays on the same Screen. After the
pop-up is closed, the Screen is refreshed.
To close the pop-up and navigate to another Screen, use the Go to Screen option (see Screen
Stack for more information). Pop-ups are automatically closed when navigating to a different
Screen.

 Pop-Up Close

This scenario is similar to the previous one, except the Screen is not refreshed automatically after
closing the pop-up.

  This action only works in client mode. In server mode, the Screen is always refreshed after
  closing the pop-up.

Return

The "return" scenario will go back to the last Screen with a different Screen code. Portal Session
Variables from the "later" Screen will be preserved. For example, when returning from SCR-31 to
SCR-30, variables from SCR-31 will be kept and used in SCR-30. If there is no previous Screen,
the flow will exit to a higher-level Screen stack.

Returning from SCR-34 to SCR-33 would be another example. The XYZ data is preserved in SCR-
33. The SCR-34 Screen with the ABC data is bypassed in this scenario because its Screen code is
also SCR-34.

Screen Close

The "screen close" scenario removes the Screen from the stack but without restoring the Portal
Session Variables from the snapshot.

 Refresh

For the "refresh" scenario, the Screen stays the same and is refreshed.

For example, there is an Input box for the Container ID and a list below of all the added Containers.
Once a Container is added in the Input box and the ADD button is clicked, an Action triggers a DFC
to add the Container to the database. The "refresh" scenario displays the same Screen, and since
the list reads data dynamically from the database, the list is refreshed and now includes the
Container that was just added.

Replace Screen

In this scenario, the last item on the Screen Stack is replaced with the target Screen. This action
gives the ability to switch between Screens without adding new items to the stack, but still having
the "Back" option available.

 Header Navigation

  When using the DELMIA header, the user can click on the breadcrumb items. This will make a
  jump from the Screen being currently presented to the one clicked. All the Screens that are above
  the target Screen in the Screen stack will be removed from it.
