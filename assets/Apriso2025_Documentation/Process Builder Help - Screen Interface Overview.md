# Screen Interface Overview

Action HTML Tag                                     Description Typical Usage                                     Availability
Name
                                                    Passing       1. Passing (string replace) value to            Everywhere
Screen HTML: {InputName}, JavaScript:               values           HTML
Input $Context.inputs.InputName
                                                                             A. {InputName} – for a scalar
           For example:                                                         Input
           <input type="text" value="
           {ScreenInterfaceInput}">                                          B. {InputName[i]} – for list Inputs
           <script> varvalue                                      2. In scripts (HTML tab)
           =$Context.inputs.InputName;</script>
                                                                  A. $Context.inputs.InputName

Screen HTML (only with data-flx-                    Gathering     1. Gathering values from HTML                   Bind or
                                                                             A. data-flx-bind ="                  script tags
Output bind):OutputName,                            values

JavaScript:$Context.outputs.OutputName                                         {ScreenInterfaceOutput} – for

For example:                                                                   a scalar Output
<input type="text" data-flx-bind="
{ScreenInterfaceOutput}">                                         B. data-flx-bind ="
<script> $Context.outputs.OutputName
='value';</script>                                                             {ScreenInterfaceOutput[i]} –

                                                                               for list Outputs

                                                                  2. In scripts (HTML tab)

                                                                  A. $Context.outputs.outputName

Local {@Literal name}                               Insertion of  1. Display translated string (text, labels, Everywhere
Literal For example:                                a Literal        headers)

           <span> {@LiteralName}</span>                                      A. {@LiteralName}
           <script> var value =                                   2. In scripts (HTML tab)
           $Context.literals.LiteralName;</script>
                                                                             A. $Context.literals.LiteralName

To Add Screen Interface Elements

Use one of the following options:

           HTML Layout Editor Right-Click Menu and choose Insert Input or Insert Literal
           One of the Keyboard Shortcuts:

                          Ctrl+Shift+Space
                      in | ... + Tab
           Write the HTML code (the HTML element will appear in the Screen Interface Function Properties pane)
           Drag elements from the Screen Interface Properties pane (elements are available in the pane after adding them to
           the Screen Interface Function)
