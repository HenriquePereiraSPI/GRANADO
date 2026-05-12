# Form View Type_ Controls

Form View Type: Controls

Form Runtime

On the Forms Tab of the View workspace, it is possible to organize the display of a Form by
defining groups and then assigning controls to these groups.

Properties of a Group of Controls

Field              Description
Name               The unique name of the section (group of controls).
Title
                   The descriptive name of the section (group of controls).

                              Code – the name of the Dictionary Item of the title of the group of controls; the
                              following actions are available:

                                              – adds the Dictionary Item (written in the text box) to the dictionary
                                         and links it to the title of the group of control

                                              – invokes the Dictionary Items suggestion lookup window, which
                                         lists the existing Dictionary Items from which the user may choose

                                                     When the user enters a part of the Dictionary Item name, the
                                                     system suggests a list of matching entries from the database

                                         The chosen Dictionary Item is linked to the Group of controls
                                         title

                                   – unlinks the previously added Dictionary Item (it is removed from
                              the Code field)

                                   – opens the Dictionary Translations screen in the context of
                              linked Dictionary Items

                                         For more information on this screen, refer to the Dictionary
                                         Translations topic in the Dictionary Help
                   Translation – the translation of the Group of controls title according to the
                   translation added in the Dictionary Translations screen

Show               If selected, the title (label) of the group of controls will be displayed on the Screen.
Title
Position           The number in the sequence of the groups of controls.
Order
Column             The number of controls per row within the group. For example, there are three controls
Count              defined in the group, and when “Columns” is set to “2”, there will be two rows: two
                   controls in the first row and one in the second row.
Focus              The control which will be focused when the Form is displayed.
State              The initial state of the section (the group of controls):

                              Open – the group of controls is expanded
                              Closed – the group of controls is collapsed
                              Closed if no required control – the section will be closed unless there is at
                              least one control that is required

Style              The style to be rendered on the UI element for the Action (usually used for changing
                   the size, etc.)

                              CSS Classes – apply additional CSS classes to the selected element
                              Multiple class names must be separated with spaces
                              Inline Style – apply additional CSS definitions to the selected element

Properties of a Control

General Tab

Field              Usage
Code
                   The unique control code. This name is also used as the Portal Session Variable
                   (corresponding to an External Input or Output of the View).

                   The Control's name cannot start with a number.

Show Title The title (label) of the control which will be visible on the Screen.
check box

Title              The descriptive control name.

                   Code – the name of the Dictionary Item of the control's title; the following
                   actions are available:

                       – adds the Dictionary Item (written in the text box) to the
                   dictionary and links it to the control's title

                       – invokes the Dictionary Items suggestion lookup window,
                   which lists the existing Dictionary Items from which the user may
                   choose

                                         When the user enters a part of the Dictionary Item name,
                                         the system suggests a list of matching entries from the
                                         database
                                         The chosen Dictionary Item is linked to the control's title

                                   – unlinks the previously added Dictionary Item (it is removed
                              from the Code field)

                                   – opens the Dictionary Translations screen in the context of
                              the linked Dictionary Items

                                         For more information on this screen, refer to the Dictionary
                                         Translations topic in the Dictionary Help
                   Translation – the translation of the control's title according to the translation
                   added in the Dictionary Translations screen

                   Do not include colons in the Control's title. The appearance of colons is controlled
                   in the style (CSS).

Required           Adds a validation on the UI to force the user to fill the control. If Required is set to
check box          true and the entered value of this control equals Default Value or it is empty, then an
                   error will be displayed in runtime after the submit. For example:

                              Input Name: Quantity
                              Initial = 10
                              Default = 0

Position           Upon the first display of this configured example control in the Form on the Screen,
Order              the Initial Value of Quantity will be set to 10. When the user changes the value to 0
                   and submits, an error will be displayed that the value is required, because the
Display            provided value (0) for Quantity is equal to the Default Value (0). The same result will
Format             occur if the user leaves this control value empty.

                   The position of the control on the Form in relation to other controls during runtime.
                   This field is read-only, as the order of the controls must be changed by the up and
                   down arrow buttons in the View Workspace: Forms Tab.

                   The display format of the control's value. Only some control types are supported.

                   Text Box and Label Controls

                   You can control the format of the Text Box and Label controls. For example: {0:0.00}
                   {UOMCode} can display the value: 1.25KG

                   UOMCode – a Portal Session Variable
                   0:0.00 – a current control
                   0:0.00 – a display format

                   For details, see formatString at Microsoft Docs.

                       For the Text Box control with the Date Time data type you cannot use generic
                       format strings. You can use the following format strings: date, time, datetime.
                       They will display appropriate parts of the control value with appropriate pickers.

                    Time Picker Control
                    The default format is HH:MM:SS, which displays the hour, minute, and second Inputs

                   In addition, for MM and SS, you can control the value step:

                   MM10:SS5 will display the minutes in increments of 10 (0, 10, 20, 30, …)
                   and the seconds in increments of 5 (0, 5, 10, …)
                   If the step is not specified, step = 1 is assumed
                   The 24H or AM/PM format for the hour Input is automatically set based on
                   the user's settings (DELMIA Apriso Portal > Personalize)

                   Date Picker always displays the year, month, and day inputs. The Display Format
                   option controls if the year is four or two digits long:

                   YYYY – sets the four digit format
                   YY – empty sets the two digit format

List of            System ParameterName – it is possible to link a System Parameter (type: Static List
Values             or Dynamic SQL) to display its values to the control if it is of one of the following
                   types:
Type
                              Text Box
                              Drop-down List
                              Radio Button
                              State Button
                              Label

                   For more information on System Parameters, refer to the System Parameters
                   Help .

                   The type of control (e.g., Text Box, Password, Drop-down List, Check Box).

                   Date Picker and Time Picker controls are intended to be used on Mobile devices.
                   To use the Date Picker on the Desktop device, use Text Box control and set its
                   Data Type to Date Time.

Data Type The data type of the control.

Initial            The value that will be displayed in the control after entering the Screen.
Value

                   If a Session Variable of the control’s name exists in the Portal Session, then its
                   value will be applied instead of Initial Value.

Default            The value that will be used by the system in case an empty value has been entered.
Value              This works only if the control is not set as required.

Maximum            Used for a control of the Text Box, Password, and Text Area type. This controls the
Text               maximum length of the entry. If the Submit Action property is not set, after reaching
Length             the Maximum Text Length, the focus will be moved to the next control. If the Submit
                   Action property is set, the View will submit with the given action. If On Change DFC
                   is set, the On Change DFC will be called by AJAX.

Span Over Controls how many columns the control should span. For example, if Span Over is
                 set to 2, that means that this control will be spanned over two columns (the number of
                 columns is set in the group properties). Target Quantity, UOM, and Production Line
                 are spanned over one column (default). The Order Status is spanned over two
                 columns.

Submit             The View Action that should be executed when the control is submitted. For example,
Action             submit OK when the Text Box length reaches the maximum value, or submit
                   REFRESH when the Button is pressed.
Display
Option             This setting is valid only for controls of the Label type. When the Initial Value setting
                   is empty or the Initial Value is the same as the Default Value setting, you can use
                   the following options:

                              Empty on default – the label has the value "--"

                               Hide on default – the label and its value are hidden

   On Change The On Change choice determines what will be called in the background (by AJAX)
                    when the control value is changed. Typically used for validation purposes or for a fast
                    scanning scenario for mobile devices.

                       The option is not available for the Label, Button (Primary), Button (Secondary),
                       Date Picker and Time Picker type of control.
                    The following options are available to select:

                               DFC
                               Action Script Function – only default revisions of Action Scripts that are in the
                               Active, Prototype or Development in Progress status can be linked (appear
                               in the Action Script Functions lookup window)
                    Name – the Action handler DFC or Action Script Function
                               The DFC used here should be of type Change
                    Revision – the revision of the View DFC

                   The following actions are available:

                       – invokes the DFCs lookup window, where the user can copy and link an
                   Action handler DFC

                       – invokes the DFCs or Action Script Functions lookup window, where
                   the user can link an Action handler DFC or Action Script Function

                       – unlinks the linked DFC or Action Script Function

                       – invokes the workspace of the linked DFC or Action Script Manager. If
                   there is more than one revision of that DFC, a pop-up listing all of the
                   revisions will appear (to open one of the revisions, double-click it).

                   In the case of PB Projects, the pop-up will display a default revision of the
                   DFC (of the View type) in the current Project.

Advanced Tab

Field              Usage
Style
                   The inline style to be applied on the control:

                              CSS Classes – apply additional CSS classes to the selected element
                              Multiple class names must be separated with spaces
                              Inline Style – apply additional CSS definitions to the selected element

Properties Additional properties can be configured in this section using the JSON format.

Additional Configuration

On Change DFC

This is a DFC of the Change type that will be called after changing the state of the control, such as:

        Text Box – after value is changed
        Drop Down, Radio – after the selection change
        State Button, Check Box – after changing the option

Usage:

        In fast scanning scenarios
        For quick validation without a full page refresh

External Inputs:

                      Control – the unique name of the control that triggered the change
                      Value – the new value of the control

External Outputs

                      Value – the value to be put back inside the control
                      KeepFocus – if set to True, the focus will be kept on the control (otherwise, it will
                      follow the Autoadvance settings)

Any error raised in this DFC will be displayed on the Portal screen in a standard way.

OnChange Action Script

Below is presented an example of a script that can be used to perform the OnChange functionality.
It is required to use the same Inputs and Outputs as for OnChange DFC in this context,

//Define your namespace/module name eg: Warehouse, Maintanance, Quality
namespace YourNamespace {

           export class YourClassName extends ActionScript.Script {
                       //Sample function that can be used on View Form Control On Change. Inputs and

outputs are the same as for DFCs in that context
                       public static YourFunctionForControlOnChange(Control: string, Value: string) :

{
                                  Value: string,
                                  KeepFocus: boolean

                       }
                       {

                                  //logic for checking or validating values on control
                                  if (Control == 'ControlName' && Value == 'old value')

                                            return {
                                                        Value: 'new value',
                                                        KeepFocus: true
                                                        };

                       return {
                                            Value: Value,
                                            KeepFocus: true

                                  };
                       }
           }
}

Injecting and Retrieving Variables Using Forms

It is possible to inject some variables into a Portal Form. This might be useful when the variable
used is initialized in the same DFC in which the Form exists (when the variable is not yet a part of
the Screen stack or when you want to overwrite it). To inject this variable into a Form, use the
InlineInputs variable from the GenericPortalForm DFC. To transform the variable into the inline
string, use the EncodeParameters Business Component.

It is also possible to retrieve a variable coming from a Form. This might be useful in an DFC in
which the variable coming from the Form needs to be used to perform a validation (and is thus not
yet part of the Screen stack). To do this, pass the InlineOutputs variable, which is coming from the
GenericPortalForm DFC, into the DecodeParameters BC. Then add an Output to this BC with
the same name as the Output from the Form.

Hiding Controls Dynamically

       1. Add a control (of any Type):

          2. Duplicate the GenericPortalForm View DFC to a new entity (using Copy & Link from the
              View DFC property on the View: General Tab), set the name as identical to that of the
              View Form, and link it to the previously created View.

                When you change the default revision of the GenericPortalForm View DFC, this
                revision will apply to all the Views that use this DFC on the server.
          3. Open the duplicated View DFC and add EncodeDynamicParameters Business
              Component.
          4. Configure the following:

                      a. Set the OriginalEncodedParameters Input (EncodeDynamicParameters BC)
                         as an InlineInputs External Input

                      b. Add the <control name>Hidden Input (in our example below, this is the
                         check_boxHidden Input), and set its type to Boolean with its value set to True
                         (other Input Sources may be used).

                      c. Set the InlineInputs Input's (PortalGenerateForm View DFC) Input Source to
                         Previous Function and the Previous Function Output to
                         EncodeDynamicParameters.EncodedParameters.

 Read-Only Property

          1. Add a control (of any Type):

2. Duplicate the GenericPortalForm View DFC, set the name as identical to that of the View
   Form, and link it to the previously created View (use the View DFC property on the View:
   General Tab).

3. Open the duplicated View DFC and add EncodeDynamicParameters Business
   Component.

4. Configure the following:

           a. Set the OriginalEncodedParameters Input (EncodeDynamicParameters BC)
              as an InlineInputs External Input

           b. Add the <control name>Readonly Input (in our example below, this is the
              text_exReadonly Input), and set its type to Boolean with its value set to True
              (other Input Sources may be used).

           c. Set the InlineInputs Input's (PortalGenerateForm View DFC) Input Source to
              Previous Function and the Previous Function Output to
              EncodeDynamicParameters.EncodedParameters
