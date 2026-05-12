# Manage Functions

Add a New Function to the Step

   Use one of the following options:

              Drag-and-drop a Function type from the Toolbox (see Available Elements in Function
              Navigation) in the diagram or the Entity Explorer, or double-click the Function icon in the
              Toolbox
              Double-click a Function type from the Toolbox (see Available Elements in Function
              Navigation)
              Right-click on the diagram to reveal the right-click menu and choose Add Function (the
              only default Function type)
              Select Functions in the Main Menu and then the Function type of your choice
              Right-click a Step in the Entity Explorer to reveal the right-click menu and choose Add
              Function (the only default Function type)

   The System adds a new Function in the Function Navigation diagram workspace with a default
   name that can be optionally modified. If there are two functions of the same type in one Step, the
   system generates the name for the Function using the Function type and number (e.g., Input to
   Output, Input to Output1).

   For Functions related to other entities (Stored Procedure, Business Components, DFCs, DAL
   methods), the system displays a Suggestion Lookup to search for a proper entity when a
   function is added.

   Select a Function

   Use one of the following options in the Entity Explorer or in the Function Designer:

              To select a single item, click or use the cursor keys
              To select multiple items, click and hold the Ctrl key
              To select a range of items, click and hold the Shift key

   Rename a Function
           1. Select the Function to be renamed.
           2. Use one of the following options:
                          Choose Rename from the Right-Click Menu
                          Select the Name field on the General tab in the Properties tool pane
                          Use the F2 Keyboard Shortcut
                          Choose Edit>Rename from the Main Menu (this option works only in the Entity
                          Explorer)
           3. Enter the new name.

        The name of the Function within a single Step must be unique (Function names are case
        sensitive).

      Copy a Function

      It is possible to copy selected Functions within one Step and between Steps (of the same or
      another DFC).

    Copy a Function Using Copy and Paste

1. Select the Function to be copied.
2. Use one of the following options:

              Choose Edit > Copy from the Main Menu
              Choose Copy from the Right-Click Menu
              Use the Ctrl+C Keyboard Shortcut
3. Use one of the following options to paste the Function:

                   Choose Edit > Paste from the Main Menu
                   Choose Paste from the Right-Click Menu
                   Use the Ctrl+V Keyboard Shortcut

These copy and paste options work:

                   On a Step selected in the Entity Explorer
                   On a Step selected in the Step Flow Editor
                   Inside the Function Navigation diagram

Copy a Function Using Drag-and-Drop and Holding Ctrl Key

       1. Select the Function to be copied.
       2. The Function (or more than one Function) can be copied:

                      Within the Function Navigation Editor
                      From Function Navigation to a Step in the Entity Explorer
                      Between Steps in the Entity Explorer
                      From the Entity Explorer to a Step within the Step Flow Editor
                      From Entity Explorer to Function Navigation

After Copying a Function

The system creates copies of Functions in the diagram with the original names, adding and then
incrementing the number at the end of the name.

The system preserves all Function properties except invalid pointers to Outputs from previous
Functions.

The user is able to change the order of Functions in the Entity Explorer (inside one Step) by
dragging a Function and dropping it between other Functions.

Move a Function

It is possible to move selected Functions between Steps of the same or another DFC.

Move a Function Using Cut and Paste

       1. Select the Function to be moved.
       2. Use one of the following options:

                      Choose Edit > Cut from the Main Menu
                      Choose Cut from the Right-Click Menu
                      Use the Ctrl+X Keyboard Shortcut
       3. Use one of the following options to paste the Function:
                   a. Choose Edit > Paste from the Main Menu
                   b. Choose Paste from the Right-Click Menu
                   c. Use the Ctrl+V Keyboard Shortcut

These cut and paste options work:

                   On a Step selected in the Entity Explorer
                   On a Step selected in the Step Flow Editor
                   Inside the Function Navigation diagram

Move a Function Using Drag-and-Drop

       1. Select the Function you want to move.
       2. A Function (or more than one Function) can be moved:

                      From the Function Navigation diagram to another Step in the Entity Explorer
                      Between Steps in the Entity Explorer
                      From the Entity Explorer to a Step within Step Flow Editor
                      From the Entity Explorer to Function Navigation

After Moving a Function

The system preserves all Function properties except invalid pointers to Outputs from previous
Functions.

If the user pastes the Function with the name as it exists in the Step, the system will rename the
Function by adding and then incrementing a number at the end of the name.

The user is able to change the order of Functions in the Entity Explorer (inside one Step) by
dragging a Function and dropping it between other Functions.

Remove a Function
       1. Select the Function to be removed.
       2. Use one of the following options:
                      Choose Edit > Delete from the Main Menu
                      Choose Edit > Cut from the Main Menu
                      Choose Delete or Cut from the Right-Click Menu
                      Use the Del Keyboard Shortcut

The system removes the selected Functions from the diagram. Broken Input-Output
dependencies from the Functions that remain in the Step are removed. Incoming and outgoing
connector lines for these Functions are removed as well.
