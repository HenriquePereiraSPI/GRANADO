# Screen Interface Output

Screen Interface Outputs

It is possible to write a value from the Screen Interface Function Input into an Output.

   <input type="text" value="{Input}" data-flx-bind="Output">

Writing a Value to an Output from a Screen Interface Input

Inputs/Outputs       HTML Layout Editor   Runtime   Debug Results

DFC function
navigation:

                     Code

Screen Interface
properties:

Supported HTML Input Types and Returned Values

Input Type                 Scalar Output            Listed Output
Check box single           True/false               List of true/false
Check box many
Radio button single        Value                    List of values
Radio button many          Value
Text Box single                                     List of true/false
Text Box many              Index                    List of values
Select single
Select many                Value
Multiselect single
Multiselect many
TextArea
TextArea many

If a value in the TextArea Input is not changed by the user, it will not be passed to an Output. In
order to do this, you need to add an Input with a name "OutputDefault" (see the example below).

Writing Values from Many HTML Inputs to One Output with the Auto
Submit Option

You can also save values from many Inputs to one Output. The Output may have the Auto Submit
option selected. The page will submit when Autoadvance conditions are met for the control. Such
behavior makes sense with the Hide OK Button check box selected.

Function Navigation  HTML Layout Editor             Runtime Debug Results

DFC function         Code
navigation:

Screen Interface
properties:
