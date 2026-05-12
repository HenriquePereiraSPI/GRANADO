# Controls Tags Overview

Controls Tags are not supported in the HTML View.

To Add Controls to the HTML Tab (User Inputs, User Outputs, Sub-DFC
Functions, or Business Controls)

Use one of the following options:

           Add a Control on the Function Navigation Editor
           Drag a Control to the HTML Layout Editor
           Enter an appropriate HTML code in the HTML tab

It is also possible to add a Step Grid.

Adding Controls on the HTML Layout Editor

Type of Control HTML Tag                                    Effect on Function Navigation
Added manually
                                                            A User Input (optionally a
Input      <div data-flx-                                   Function if one does not exist)
           input="FunctionName.InputName"/>                 is created.
                                                            User Routing (optionally a
Output     <div data-flx-                                   Function and Output if it does
           output="FunctionName.OutputName"/>               not exist) is created.
                                                            Step Grid Control is created.
Step Grid  <div data-flx-stepgrid="4a28015b-8734-
Sub-DFC    2uas1234455jd9"/>                                Sub-DFC Function without
                                                            linked DFC is created.
           <div data-flx-subdfc="Call_Sub-DFC"/>            Business Control Function is
                                                            created.
Business   <div data-flx-
Control    bc="BusinessControlFunctionName"/>

Removing Controls on the HTML Layout Editor

Type of Control Removed manually  Effect on Function Navigation
Input                             Input Source is changed to Constant.
Output                            Output Routing is removed.
Step Grid                         Step Grid is removed.
Sub-DFC                           No action, validation fails.
Business Control                  No action, validation fails.

The Step Grid Control in the HTML Layout Editor should be used only for conversion from
Layout Editor. Its use for other purposes is not recommended.
