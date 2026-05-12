# View Action Overview

A View Action is an interactive element which enables moving between Screens and executing
business logic.

  An Action can be invoked by the following UI events:

              Clicking a Button or Tab on a Screen
              Clicking/double-clicking specific places in Business Controls (e.g., on a row on the Grid
              Control)

                         For more information, see the Display Row Selector/Click Mode, Row Single
                         Click Mode, and Row Double Click Mode descriptions on the Grid Properties
                         Tab
              Reaching the maximum number of characters on the Form control (see Forms Properties)

  An Action can:

              Invoke another action (for details, see Action Chaining)
              Go to another Screen (for details on how to create an Action, refer to Step 3: Define
              Actions)
              Invoke another Portal Command
              Invoke business logic (via a DFC)

                         A DFC of the Action type can invoke another Action after execution (for more
                         information, see Action Chaining)

 On Action DFC/Action Script Function

  The following Inputs/Outputs are the same in case of an On Action DFC as well as Action Script
  Function.

  The External Inputs available:

Screen – the Screen code of the Screen for which the Action is triggered
View – the View that caused this Action
Action – the Action
Any Portal Session Variable

The External Outputs available:

Action and ActionView – name of the next action to be executed. When an ActionView
Output is not empty, an Action will be taken from that View, only names of currently visible
View are allowed
ToScreen and ToScreenProjectCode – perform the "Go to Screen" navigation type to
any Screen. Outputs contain the name of the Screen and the Project that contain the
Screen (if this is a Project entity)
All of the variables to be merged into the Portal Session

An Action DFC/Action Script Function can change the Action that was triggered by the View (by
returning a new Action in the Action External Output). In this case the defined target Screen will not
be navigated to, as the new Action will be analyzed instead. Such analysis will proceed in a loop
until the last Action is not changed anymore. This scenario is also known as Action Chaining.

Example configuration

Action             Type          On Action                          Go to Screen
NEXT               Button        IsEmployeeValid4WorkCenter_Action
ACCESS_OK          Calculated                                       OPP-20
ACCESS_NOK         Calculated    IsThereAnyWorkCenter_Action        WCSELECT-10

If the user presses the NEXT button, IsEmployeeValid4WorkCenter_Action will be called.

The IsEmployeeValid4WorkCenter_Action DFC checks if the employee is valid for the Work
Center:

           If the employee is valid, it will return ACCESS_OK in an External Output Action
           If the employee is not valid, it will return ACCESS_NOK

The returned Action will be analyzed, and for the Action:

           ACCESS_OK
                      This will navigate to the OPP-20 Screen and finish processing

           ACCESS_NOK
                      This will call IsThereAnyWorkCenter_Action, which checks if there are any Work
                      Centers configured:
                                  If there are none, it will show an error (via the DisplayError Business
                                  Component – for details, see Errors and Messages Configuration), which
                                  will stop the Screen Flows processing
                                  If there are some, it will return an empty Action, in which case the
                                  WCSELECT-10 target Screen will appear

This pattern is essential for dividing complex business logic into smaller pieces. Such smaller
pieces can be reused later for different logic flows.

On Action DFC

  The structure of an On Action DFC is the following:

  An Action DFC (or Action handler) is used to execute the business logic related to a particular
  event (Action). There are a few requirements for this DFC:

              It cannot contain a UI element – it should only contain data validation or business logic
              execution
              It can return an error (using the DisplayError Business Component – for details, see
              Errors and Messages Configuration)

Action Wildcard

An Action name may contain a wildcard character (“%”).

This can be useful in the following example, in which a View DFC can return the following Actions:

           STATUS_TO_NEW
           STATUS_TO_CANCEL
           STATUS_TO_OPEN
           CLOSE

In this example, all the “STATUS_TO…” Actions should be handled in the same way. Instead of
creating three separate Action entries, you can create one entry with a wildcard character:
STATUS_TO_%.
