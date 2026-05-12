# User Interface Controls for Function Input

Do not include colons in the Control's title. The appearance of colons is controlled in the style
(CSS).

There are different types of Input Controls:

User Input Supported Description
Control Type of

                Function Input

Text               String, Integer, Allows the user to write text in the box.

                   Decimal,

                   DateTime

Long Text String, Integer, Allows the user to write text in the box.
                Decimal

                             Virtual Keyboard Enter key starts a new line in the LongText
                             (multiline) Input.

Masked String, Integer, Allows the user to write masked text in the box.

Text               Decimal

                             Masked Text is used for a sensitive data, for example passwords.
                             Values entered in the masked text box are cleared after refreshing
                             the screen. In the Google Chrome browser, disable the option to
                             save passwords. Otherwise, the saved passwords will be
                             populated automatically.

Drop-              String, Integer, Allows the user to choose one value from the list.

Down List Decimal,

                   Boolean,

                   DateTime

Combo              String, Integer, Allows the user to choose from the list of existing options.
Box                Decimal,
                   Boolean,
                   DateTime

Check Box String, Integer, Permits the user to make multiple selections from a number of

                   Decimal,  options.

                   Boolean,

                   DateTime

Button             String, Integer, Adds a button.
                   Decimal,
                   Boolean,
                   DateTime

Radio              String, Integer, Allows the user to choose only one of a predefined set of options.
Button             Decimal,
                   Boolean,
                   DateTime

Date/Time DateTime           The displayed date format is based on employee UICulture
Picker                       (Personalization).

   Date                      When using the Date Picker Input in Process Builder with the Show
   Picker                    Calendar option enabled, the displayed date format is based on
                             UICulture (Personalization).
Time               DateTime  The displayed time format is based on UICulture (Personalization).
Picker
                             Allows the user to browse for a file. The file is uploaded to the server
File Picker String           and the control returns the path to the file. The user is able to copy or
                             move the file from the server to another location using the MoveFile
                             business component.

                             By default, uploading files is disabled. To enable uploading, edit
                             the AllowedUploadedFileExtensions key in central configuration: set
                             it to "*" to accept all file types, set it to a list of specific file types
                             separated by semicolons to accept only the listed types, or leave it
                             empty to block all file types.

Selection          String, Integer, Allows the user to choose one of the displayed options (in hyperlink
List
                   Decimal,  format).
Spinner
                   Boolean,

                   DateTime

                   Integer,  Allows the user to click on arrow buttons to change the value within its
                   Decimal,  associated text box.
                   Boolean,
                   DateTime

Properties

On the right hand side of the Layout Editor workspace, the system should display the properties of
Inputs, Outputs and Grids. When the user selects an element in the central part of the screen, the
system shows an appropriate editor in the properties pane. To see more information about the
properties of Input Controls, see Input Source: User.

The Input Values... button opens the Input Values Editor. This option is not available for the File
Picker Input Control type. Some of the Input Controls (Buttons, Check Boxes, Radio Buttons,
Selection Lists) populated from static lists are visualized in the Layout Editor.
