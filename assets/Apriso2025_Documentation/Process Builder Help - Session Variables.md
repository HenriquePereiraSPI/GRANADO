# Session Variables

Field      Description
                    Filter
                               Enter a name of the system or
                    External   session variable that you want to find.
                    Inputs
                               All external inputs that are available
                    External   within the open DFC (see the inputs
                    Outputs    section on the DFC Interface tab).
                    Session
                    Variables  All external outputs that are available
                               within the open DFC.
                    System
                    Variables  All the session variables that are
                               defined by the process author and
                               available within the open DFC (see
                               the outputs section on the DFC
                               Interface tab).

                               This list contains all the variables that
                               are defined in the system (see the list
                               in Input Source: Session Variable).

 Basic Rules

              When dragging a system or session variable between inputs, the input and output are
              created based on the data type of the selected variable.
              Validation returns an error when the input data type is not compatible with the data type of
              the system variable.
              The default session variable name is based on the function output name. If the output
              name is the same as one of the system variables, the system renames the newly created
              session variable by adding and incrementing a number at the end of the name
              (SessionVariable_1, SessionVariable_2).

 Actions Available on Variables

              You can drag multiple function outputs from Entity Explorer or function navigation
              workspace into the Session Variables tool pane to automatically create a session routing
              and a new session variable.

  You can drag a session variable from the tool pane to the:

              Function's input or output – the system adds the input or output source with the selected
              variable.
              Function, between inputs – the system creates a new input (with source set to the selected
              variable) and output. You can select more than one variable.
              Function, between outputs – the system creates a new output (with source set to the
              selected variable) and input. You can select more than one variable.

  You can drag a system variable from the tool pane to the:

              Function's input – the system adds the input source with the selected variable.

Function, between inputs – the system creates a new input (with source set to the selected
variable) and output. You can select more than one variable.

Dragging external inputs and outputs works in the same way.

You can drag a session variable from the Session Variables tool pane to the function either in Entity
Explorer or the function navigation workspace.

After selecting one or more external inputs, external outputs, system variables, or session variables
in the Session Variables tool pane, Entity Explorer highlights the function inputs or outputs that use
the selected variables (parent entities are highlighted to facilitate navigating to specific function
inputs or outputs):
