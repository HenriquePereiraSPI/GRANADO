# Show Message Function

Use the Show Message function to define a set of messages that are shown on the screen. You
can define info, success, warning, or error messages.

To Add the Show Message Function

       1. Drag the Show Message function from the Toolbox to the Function Navigation diagram, or
           double-click the Show Message icon in the Toolbox.

       2. Define the message codes and choose their severity type.
       3. Define the prompts that will be displayed for the message codes.

Field              Description
Add
                   Adds a new message code (the name of the error) to the list. You can define
                   the following message types:

Remove                Info
                      Success
                      Warning
                      Error

                   Removes the selected message code.

              Code            – Adds a dictionary item (written in the field) to the dictionary
                          and links it to the message.

                              – Opens a lookup window that lists available dictionary items to
                          choose from. When you enter a part of the dictionary item name,
                          the system suggests a list of matching entries from the database.
                          The chosen dictionary item is linked to the message.

                    When you duplicate a DFC to a new revision or a new entity, links to
                    dictionary items are copied too.

      User                          – Unlinks the dictionary item.
      Interface
      Prompts                       – Opens the Dictionary Translations screen in the context of a
                               linked dictionary item. For more information on this screen, refer to
                               the Dictionary Translations topic in Dictionary Help .
                    The prompts associated with the message code that are displayed
                    respectively on the following devices:

                               Desktop
                               Mobile
                               Text

                    The names of the function inputs can be used in the prompts by placing
                    them in braces "{ }" for text concatenating.

                    Mobile and Text platforms are no longer supported.

Show Message Function Inputs

Input/Output Description

Code                The code of the message to be displayed. This input is required.

ShowMessage If set to True, the error message will be shown. Otherwise, the function is
                     ignored. This input is required.

ShowAsModal If set to True, the error message will be shown with a grayed-out background.
                     Anything below the message will not be available for any interaction until the
                     message is acknowledged by clicking it.

  There is a possibility to display error messages using User Formula Function. However, the
  Show Message function is recommended because of easier navigation of the error message
  placement. In addition, the linked dictionary items are automatically added to the
  GPM package.

Show Message Function with Parameters

Additional inputs can be added in the Show Message function to generate an error message with
parameters (for example, OrderNo and OrderStatus).

In the Code field, link a dictionary item with parameters.
  The Input names must correspond to the parameter names.

In this example, the displayed error message is: SelectedOrder: SampleOrder is in invalid status: 1.
