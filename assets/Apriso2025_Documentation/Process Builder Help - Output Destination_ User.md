# Output Destination_ User

Output Destination: User

General Tab

The general properties available for all outputs are described in the Output Properties topic.

Field              Description
                   The type of control to render on the output:
User Interface
Control

                   Text – displays the value as regular text

                   HTML – displays the HTML output without replacing special characters;
                   plain HTML Output can be enabled using "RenderPlainHtmlOutput" key
                   located in the "FunctionInterpreter" section of the Central Configuration
                   file (for details, see Central Configuration Documentation )
                   Link – displays the value as a link or embedded content, see Display
                   Mode

                   Be aware that using HTML or Link mode as the User Output type from
                   functions or from the Selection Grid Business Control will be rendered as
                   pure HTML on the DELMIA Apriso page. In case the value of such output is
                   JavaScript code, then the script will be executed.

Dictionary Item        – Adds Dictionary Item (written in the text box) to the dictionary and
                   links it to the Output.

                       – Opens a Reusable Dictionary Items suggestion lookup window
                   which is a list of existing Dictionary Items that the user may choose
                   from. When the user enters a part of the Dictionary Item name, the
                   system suggests a list of matching entries from the database. The
                   chosen Dictionary Item is linked to the Output.

                                 When you duplicate a DFC to a new revision or a new entity, links to
                                 Dictionary Items are copied too.

                                   – Unlinks the Dictionary Item.
                                   – Opens the Dictionary Translations screen. For more information
                              on this screen, refer to the Dictionary Translations topic in the
                              Dictionary Help .

                   The prompts associated with the Function Outputs you are defining:

                              Desktop – the prompt string (text) to be used with this Output as
                              rendered on a desktop browser
                              Mobile – the prompt string (text) to be used with this Output as
                              rendered on a mobile browser
                              Text – the prompt string (text) to be used with this Output as rendered
                              on a text client device

                   Mobile and Text platforms are no longer supported.

Control            Width – the size of the Output. Text longer than the width that has been set will
properties for     be cut.
device
(Desktop,          Hide Prompt check box – if selected, the prompt will not be displayed.
Mobile)
                   Attributes button – opens a pop-up window for configuration of additional HTML
                   attributes.

                   Formatting

                   Direct – allows the user to define the fonts, colors, etc. of the prompt on
                   a desktop or mobile:

                              Prompt – the formatting that applies to the desktop prompt string
                              Value – the formatting that applies to the value field on a desktop
                              CSS-based – the user may specify a CSS class (by selecting an item
                              from the drop-down list or typing its name) or multiple classes
                              (separated by spaces) to be used for the following Output elements:
                              Prompt
                              Value

                   Classes used are based on the default theme. Using multiple classes is
                   beneficial when there is a need to combine certain properties. For example,
                   when text Outputs (being Value) are to be centered rather than left-aligned, in
                   addition to the default “Prompt” class you should type “AlignCenter.”

                   Dassault Systèmes recommends combining classes over substituting default
                   ones (default classes will be always set for Input prompt even in CSS class
                   is not specified) – unless you know what you are doing! The functionality of
                   certain controls depend on them having specific class names.

                   In the case of the Input Controls in Layout Editor, it is possible to assign a CSS
                   class to a container (HTML object directly hosting the Input/Output control) in
                   the Value style field with the syntax Container.ProperCSSClass and using the
                   classes "AlignCenter," "AlignLeft," "AlignRight".

Control            Characters – enables the defining of the number of characters which
properties for     will be displayed
device (Text)      Breaks – enables the defining of the number of new lines after the user
                   control

Advanced text      These options are available when the Text User Interface Control is chosen:
control
properties                    Mask – the user can specify a Function Output format mask, which
                              displays the appropriate formatted value (e.g., N3 displays 3 decimal
                              places) (refer to Formatting Types at Microsoft Docs for details)
                              Maximum Length

   Display Mode    If Link (type of User Interface Control) is chosen, a new field called Display
                   Mode (the method for displaying the link) is displayed:

                              Regular Link – a regular link will be displayed as a hyperlink
                              Automatically Browse Link – opens a window to display the link as if
                              the hyperlink was manually selected
                              Embed Link Content in Workspace – opens and display the object in
                              the content of the workspace

                           If the Output value contains an incorrect link (i.e., it does not link an existing
                           page or file), the HTTP 404 error ("The webpage cannot be found") will be
                           displayed.

                        If Embed Link Content in Workspace is selected, a new option is displayed:
                        Embedding Area Size – the size of the embedded object

                                    Width – the width of the embedded object (in pixels)
                                    Height – the height of the embedded object (in pixels)

Advanced UI Tab

Field     Description

Layout and An icon displayed to the immediate left of the Output prompt on the Desktop.

Icon      Available icons include:

                   Information
                   Question
                   Warning
                   Error

Position  If the Absolute Position check box is selected, the user may change the position of
          the control in Layout Editor. The user specifies the offset (in pixels) and the alignment
          of the control.
