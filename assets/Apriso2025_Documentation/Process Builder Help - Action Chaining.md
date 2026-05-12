# Action Chaining

An Action can invoke another Action (or more than one Action). It allows for building more granular
and reusable designs.

In the image below, notice the following:

           The VIEWACTION Action calls the VIEWACTION2 Action
           The VIEWACTION2 Action calls the VIEWACTION3 Action
           The VIEWACTION3 Action calls the VIEWACTION4 Action

 Business Example

  This image presents a typical business scenario:

  In the image above:

The OK Action is configured as a Button on the Screen, and the VALIDATE and SAVE
Actions are calculated Actions that call DFCs
After the user clicks the OK Button, the Action is executed and calls the VALIDATE Action,
which checks that the data is correct

           If it is, then it calls the SAVE Action, which persists the data
           Otherwise, it displays an error on the Screen
Action chains are limited to Actions used inside a Panel

           If you need to use an Action defined in another View (e.g., a validation Step that
           conditionally requires an additional User Input), you can use the On Action
           DFC/Action Script Function, which returns two Outputs: ActionView and Action

                      The processed Action and the subsequent Actions in the Action chain will
                      then be taken from the View that was returned in the ActionView Output
                      ActionView can contain only the Views defined in the current Screen
                      For more information, see Screen Flow Processing Diagram
