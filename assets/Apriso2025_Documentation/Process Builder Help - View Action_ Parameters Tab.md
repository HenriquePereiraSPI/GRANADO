# View Action_ Parameters Tab

View Action: Parameters Tab

The Parameters tab lists all the External Inputs defined by the user in the View DFC (see DFC
Interface tab) linked to the Action and the fields from the Forms used within the View.

The External Inputs and Form fields can be initialized when opening the View according to the
settings defined on this list. The Inputs will be visible on the list after refreshing. To refresh the list of
Inputs, click (Refresh). By default the list is empty (not refreshed). You can also open an DFC
where the selected Input is used by clicking (Properties).

Column Name        Description
Enabled            If selected, the Input will be initialized (forced) with the provided value.
InputName          The External Input name (read-only).
Type               The External Input type (read-only).
Value              The value that will be passed to the Input.
Maplnput           The existing Input from the current session will be passed to the value.
Override           The value will be overridden each time the Screen is reloaded.
SystemParameter    The existing System Parameter will be passed to the value.

When the parameter is of the Complex/List of Complex data type, the entire parameter row
becomes uneditable.

Provide a value in only one of these fields: Value, MapInput, or SystemParameter.
