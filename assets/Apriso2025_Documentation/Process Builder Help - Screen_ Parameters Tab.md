# Screen_ Parameters Tab

Screen: Parameters Tab

The Parameters tab lists all the parameters defined for entities linked to the Screen:

           External Inputs defined for an DFC linked to the Screen (On Load, On Initialize, and On
           Action) or a View (View DFC). For more information, see DFC Interface Tab
           Fields defined for a View type of Form linked to a Screen. For more information, see
           Forms
           Action Script functions linked to the Screen (On Load, On Initialize, and On Action)

All the External Inputs defined and the fields from Forms used within the Screen can be displayed
here and initialized accordingly when opening the Screen. The Inputs will be visible on the list after
the refresh. To refresh the list of Inputs, click (Update). By default the list is empty (not updated).
You can also open a DFC where the selected Input is used by clicking (Properties).

Column Name Description

Enabled    If selected, the Input will be initialized (forced) with the provided value.

InputName  The External Input name (this is a read-only field).

Type       The External Input type (this is a read-only field).

Value      The value that will be passed to the Input.

Maplnput   The existing Input from the current session will be passed to the value.

Override   If selected, the value will be overridden every time the Screen is reloaded.

SystemParameter The existing System Parameter will be passed to the value.

External   If selected, the parameter value will be configurable in the FlexPart
           Configuration M&M screen , when a FlexPart is created using the given
           Screen.

When the parameter is of the Complex/List of Complex data type, the entire parameter row
becomes uneditable.

Provide a value in only one of these fields: Value, MapInput, or SystemParameter.
