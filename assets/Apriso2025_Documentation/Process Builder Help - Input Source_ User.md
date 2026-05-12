# Input Source_ User

Input Source: User

General Tab

The general properties available for all inputs are described in the Input Properties topic.

Field              Description

User               The User Interface Control you wish to display on the screen. A sample of the UI
Interface          control is displayed in the Layout Editor. The available User Interface Controls
Control            include the following:

                              Text
                              Long Text
                              Masked Text

                     This User Interface Control is most commonly used to mask password
                     input in runtime. To ensure that the input value is also masked in
                     DELMIA Apriso logs, Job Executor, and Job Scheduler, the name of the
                     input must include the word "password".

                   Drop-down
                   Combo Box
                   Check Box
                   Button
                   Radio Button
                   Date/Time Picker
                   Date Picker
                   Time Picker
                   File Picker

                     By default, uploading files is disabled. To enable uploading, edit the
                     AllowedUploadedFileExtensions key in central configuration: set it to "*" to
                     accept all file types, set it to a list of specific file types separated by
                     semicolons to accept only the listed types, or leave it empty to block all
                     file types.

                   Selection List
                   Spinner

Input                When a Button or a Selection List User Input is set to read-only (Input Values
Values...            Editor, Advanced tab) and the onClick event is defined in the Attributes pop-up
                     window, the action will be triggered even if control is disabled (default HTML link
Allow                behavior). In such case onClick action needs to contain additional IF statement
external             which determines if control is disabled or not:
input                if(!$(this).closest('table').hasClass('aspNetDisabled')).

                   For more information, see Input Values Editor below.

                   Selecting this check box will expose the Input as an external Input of the DFC.
                   External Inputs can be used to pass values to the DFC when using it as sub-DFC
                   or when invoking it from Machine Integrator/Job Scheduler/XML Manager. When
                   this check box is selected, the External Input Name field is required.

                   This option is disabled when the DFC Interface functionality is enabled.

                   This option is deprecated. Use DFC Interface instead.

External The name of the External Input. Used only when the Allow external input check box
input name is selected.

Dictionary             – Adds Dictionary Item (written in the text box) to the dictionary and
Item               links it to the Input.

                       – Opens a Dictionary Items suggestion lookup window which is a list of
                   existing Dictionary Items that the user may choose from. When the user

                   enters a part of the Dictionary Item name, the system suggests a list of
                   matching entries from the database. The chosen Dictionary Item is linked
                   to the Input.

                                 When you duplicate a DFC (to a new revision or a new entity), links to
                                 Dictionary Items are copied too.

                                   – Unlinks the Dictionary Item.
                                   – Opens the Dictionary Translations screen in the context of linked
                              Dictionary Item. For more information on this screen, refer to the Dictionary
                              Translations topic in the Dictionary Help .

                   The prompts associated with the Function Inputs that are displayed respectively on
                   the following devices:

                              Desktop – the prompt string (text) to be used with this Input as rendered on
                              a desktop browser
                              Mobile – the prompt string (text) to be used with this Input as rendered on a
                              mobile browser
                              Text – the prompt string (text) to be used with this Input as rendered on a
                              text client device

                   Mobile and Text platforms are no longer supported.

Control            Width – the size of the Input (not available for the Check Box, Radio Button, and
properties         File Picker Controls). Text longer than the width that has been set will be cut.
for device
(Desktop           Hide Prompt check box – if selected, the prompt will not be displayed.
and Mobile)
                   Attributes button – opens a pop-up window for the configuration of additional
                   HTML attributes.

                   Formatting

                   Direct – allows the user to define the fonts, colors, and alignment of the
                   User Interface control:

                              Prompt – the formatting that applies to the desktop prompt string
                              Value – the formatting that applies to the value field on a desktop
                              Selected – the formatting that applies to the selected value of a
                              button or selection list on the desktop,
                   CSS-based–allows the user to specify a CSS class (by selecting an item
                   from the drop-down list or typing its name) or multiple classes (separated
                   by spaces) to be used for the following Input elements:

                              Prompt
                              Value
                              Selected Value for Button or Selection List

                   Classes used are based on the default theme. Using multiple classes is beneficial
                   when there is a need to combine certain properties. For example, when text Inputs
                   (being Values) are to be centered rather than left-aligned, in addition to the default
                   “Prompt” class you should type “AlignCenter.”

                     Dassault Systèmes recommends combining classes over substituting default
                     ones (default classes will be always set for Input prompt even in CSS class is
                     not specified) – unless you know what you are doing! The functionality of certain
                     controls depend on them having specific class names.

                   In the case of the Input Controls in Layout Editor, it is possible to assign a CSS
                   class to a container (an HTML object directly hosting an Input/Output control) in the
                   Value style field with the syntax Container.ProperCSSClass and using the classes
                   "AlignCenter," "AlignLeft," "AlignRight."

                   Keypad mode (Desktop only) – enables a pop-up keyboard to be used on a touch
                   screen or with a mouse. The list of valid keypad modes is as follows:

                              None – does not allow pop-ups
                              Show – allows pop-ups with user intervention
                              Auto Popup – automatically renders pop-ups without user intervention

                   When the Input type is numeric, the system displays the numeric pad.
                   Otherwise it displays the alphanumeric pad.

                   The configuration file of the keypad is virtualKeyboard.js and it is placed in
                   Apriso\Scripts folder on the Web Server. The default keypad language displayed
                   when the keypad is invoked is the language defined in the DELMIA Apriso Portal for
                   the user currently logged in. The virtualKeyboard.js script contains language
                   definitions for the keypad and allows adding additional languages.

Control            Characters – enables the defining of the length of the Input field
properties         Breaks – enables the defining of the number of new lines after the user control
for device
(Text)

Advanced UI Tab

Field              Description

Layout and         Layout – there are 3 types of layouts:
icon
                              Simple
                              Tabular
                              Horizontal

                   Icon – displayed to the immediate left of the Input prompt on Desktop and Mobile
                   devices. Available icons include:

                              Information
                              Question
                              Warning
                              Error

Advanced           These options are available when the Text User Interface Control has been chosen:
text control
properties                    Mask – the user can specify the Function Input masking, which validates
                              the entered value using the
                              RegularExpressionValidator.ValidationExpression Property (see Microsoft
                              Docs articles for details) for the controls Text, Long Text, and Spinner (e.g.,
                              \d{5} means 5 digits) (see Regular Expression Language - Quick Reference
                              at Microsoft Docs for details)
                              Maximum Length

Navigation         Used to control navigation from one Function Input to the next:
and
behavior                      None – no navigation
                              Auto Advance – automatically advances to the next User Input (the
                              Maximum Length option should be set together with this option)
                              Auto Submit – automatically submits the page after entering the value

                      The Auto Submit functionality may not work correctly on some "old" types of mobile
                      devices. For more information, refer to the comments in autoadvance_mobile.js.

   Position                   Hide OK Button
                              Show Work Instructions – the Show Work Instructions button makes it
                              possible to re-open the Work Instructions pop-up once it has closed (this
                              option is only available for the Button and Selection List User Interface
                              Control)
                              Use this option if you plan to create your own UI element to trigger the
                              Work Instructions pop-up – simply add the ShowWIPop() attribute to any
                              User Input button (use the Attribute button on the User Input Properties
                              pane)
                              Hide WI Button – if selected, the Show Work Instructions button will not be
                              displayed during runtime
                              Skip User Control on Tab
                              Receives Focus – this should be set for only one control
                              Allow multiple selection – for Buttons and Selection Lists
                              Show calendar – for Date Picker

                   If the Absolute Position check box is selected, the user is able to change the
                   position of the control in the Layout Editor. The user specifies the offset (in pixels)
                   and the alignment of the control.

Input Values Editor

General Tab

Field              Description

Show Initial Value If this check box is selected, the initial value will be shown.

User must enter If this check box is selected, the user must enter the value.
non-blank value
(required input)

Default Value      The value that will be used by the system in case an empty value has been
                   entered. It is possible to choose the source of this parameter: None,
                   Constant, Session Variable, Previous Function Output, or System Parameter.

                   With the Combo Box and Drop-down User Input Controls, the Default
                   Value should be set to a different value than the ones that are available.

Initial Value      The value that will be shown upon entering the screen. It is possible to
Input Value List   choose the source of this parameter: None, Constant, Session Variable,
                   Previous Function Output, or System Parameter.
                   The list of values that can be chosen from during runtime. The list can be
                   specified statically, retrieved by the database query, or taken from previous
                   Function Outputs, Session Variables, or System Parameters.

                              For a Static List:

                              It is possible to take advantage of the Quick Command functionality
                              by setting the Quick Command No. field (for details, see the
                              KeyboardMapping section of the Central Configuration
                              Documentation ).

                              You can add the Dictionary Item (or link it from the existing ones)
                              using buttons in Dictionary Item column (see the Dictionary section).

                              For a Database Query:

                                         Master value – the actual value which populates the Input,
                                         which can be a column's name or an expression (e.g.,
                                         "ColumnName*2")
                                         Display value – this is text displayed on the screen related to
                                         the Master value, and a column name or expression can be
                                         used

                   Example:

                   select P.PRODUCTNO, TT.MEDIUM from product p, text_translation tt where
                   p.textid=tt.textid and languageid=1033

                   When a Master value is set to "ProductNo" and a Display value "Medium", the
                   displayed values will be values from Medium column. Values saved to the
                   database will be values from ProductNo column.

                                 It is possible to pass image from Session Variable, Previous Function
                                 Output or System Parameter for Button or Selection List User Interface
                                 Control.

   Repeat layout/ The possibility to format button or selection list (chosen from User Interface
   Repeat direction Control).

 Advanced Tab

Field      Description

Read-only  It is not possible to enter the input value in runtime, as it is a read-only field. The user
           can see what value has been entered, and may choose the source of this parameter:
           None, Constant, Session Variable, Previous Function Output, or System Parameter.
           The Read-only option works in combination with the Initial value option that has been
           set. If the Read-only option for the List Input is set and no corresponding Initial value
           exists, the Read-only setting will be ignored.

Minimum The minimum value which can be entered. The user may choose the source of this

value      parameter: None, Constant, Session Variable, Previous Function Output, or System

           Parameter.

Maximum The maximum value which can be entered. The user may choose the source of this

value      parameter: None, Constant, Session Variable, Previous Function Output, or System

           Parameter.

New item This option is used for the List of... Input Type. The user may choose the source of
initial value this parameter: None, Constant, Session Variable, Previous Function Output, or

                 System Parameter.

Examples

Layout and Icon

   Configuration      Runtime display

 Mask

   Configuration               Runtime display

 Auto Advance

   Configuration   Runtime display

                   After entering 5 characters (set in the Maximum
                   length option), it automatically focuses on the next
                   control:

 Hide OK Button

   Configuration             Runtime display

 Show Work Instructions

   Configuration       Runtime display

 Skip User Control on Tab

   Configuration   Runtime display

                   The screen after launching the DFC (the focus on
                   the first control is always skipped using the Tab
                   key):

Receives Focus     Runtime display
                   The screen after launching the DFC:
Configuration

Allow multiple selection

   Configuration           Runtime display

 Show calendar

   Configuration   Runtime display
