# View Workspace_ Forms Tab

View Workspace: Forms Tab

The Forms tab in the View workspace lists all the groups of controls (in the Groups section) with
their respective controls (in the Controls section). You can see the configuration settings and also
change the arrangement of controls by using these buttons:

Button Description
          Adds a new group or control.
          Deletes the selected group or control.
          Copies the selected group or control.
          Cuts the selected group or control.
          Pastes the selected group or control.
          Enables/disables displaying the selected group or control in runtime.

The enabled control will be displayed in runtime only if it is assigned to the enabled
group.

Moves the group or control up/down on the list (available only if there is at least one group
or control above/below the selected one). It is also possible to use drag-and-drop to
change the sequence of groups or controls.

The tables below present descriptions of the View settings. For additional details, see Form.

Groups

Column             Description
Name
Enabled            If selected, the group will be displayed in runtime.
Name               The name of the group of controls.
Show Title         If selected, the title (label) of this group will be displayed on the Screen.
State              The initial state of the section (control group).
Style              The style to be rendered on the UI element for this group of controls (usually used
                   for changing the size, etc.).

CSS Class Additional CSS classes for the selected group of controls.

Controls

Column Description
Name

Enabled If selected, the control can be displayed in runtime if it is assigned to enabled group.

Code               The unique control code.

Type               The type of control Input (e.g., Text Box, Drop-down List, Time Picker).

Data Type The data type of the control.

Show               The title (label) of the control that will be visible on the Screen.
Title

Required Adds a validation on the UI to force the user to fill the control. If Required is set to true
                and the entered value of this control equals the Default Value or it is empty, then an
                error will be displayed in runtime after the submit. For details, see View Type: Form.

Initial            The value that will be displayed in the control after entering the Screen. For details,
Value              see View Type: Form.

Span               Controls how many columns the control should span. For details, see View Type:
Over               Form.
