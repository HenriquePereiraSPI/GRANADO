# Manage Inputs and Outputs

Create an Input or Output

   Use one of the following options:

              Drag-and-drop an item from the Toolbox to the Function diagram or into the Entity
              Explorer
              Right-click on a Function in the diagram or Entity Explorer pane to invoke the right-click
              menu and choose Add Input or Add Output (the default Input/Output data type is char)
              Right-click on a Function in the diagram or Entity Explorer pane to invoke the right-click
              menu and choose Add Pair (this option is available for the Function type Input to
              Output)
              Use the Ctrl+Shift+I (for Inputs), Ctrl+Shift+O (for Outputs), or Ctrl+Shift+R (for
              an Input and Output pair) Keyboard Shortcuts
              Select Functions in the Main Menu and then the Input/Output type of your choice

  The names of the Inputs and Outputs within a single Function must be unique.

Select an Input or Output

Use one of the following options in the Entity Explorer or in the Function Flow Editor:

           To select a single item, click or use the cursor keys
           To select multiple items, click and hold the Ctrl key
           To select a range of items, click and hold the Shift key

Rename an Input or Output
       1. Use one of the following options:
                      Click the Name portion of the item in the Function Navigation workspace
                      Select the Name field on the General tab in the Properties tool pane
                      Choose Rename from the Right-Click Menu
                      Use the F2 Keyboard Shortcut
                      Choose Edit ► Rename from the Main Menu
       2. Enter the new name.

The name of the Inputs and Outputs within a single Function must be unique (Input/Output
names are case-sensitive).

  When an Input is mapped to an Output, renaming the Input for the first time applies the same
  name to the Output.

Change the Properties of Multiple Inputs or Outputs
       1. Select one or more Inputs or Outputs to be changed.
       2. The system will display a set of common features of selected items in the properties
          pane.

When only items with related User Controls are selected, the user can change the prompt,
font, size, color, and other visual options of the items.

For more information about Input and Output Properties, see Function Input and Output
Properties, Input Properties, and Output Properties.

Copy an Input or Output

The copy feature works in Entity Explorer, the Function Navigation diagram, and between them.

Copy an Input or Output Using Copy and Paste

       1. Select an Input or Output to be copied.
       2. Use one of the following options:

                      Choose Edit ► Copy from the Main Menu
                      Choose Copy from the Right-Click Menu
                      Use the Ctrl+C Keyboard Shortcut
       3. Use one of the following options to paste the Input or Output:
                      Choose Edit ► Paste from the Main Menu
                      Choose Paste from the Right-Click Menu
                      Use the Ctrl+V Keyboard Shortcut

The above actions work between DFCs opened in different tabs of Process Builder.

Copy an Input or Output Using Drag-and-Drop and Holding Ctrl Key

Source Target           Action

Input Function or place between Inputs. This DFC creates a copy of an Input.

Input Another Input.    This DFC overwrites the target Input's properties.

Output Function or place between Outputs. This DFC creates a copy of an Output.

Output Another Output.  This DFC overwrites the target Output's properties.

    After Copying an Input or Output

      The system creates copies of Inputs or Outputs with original names, adding and then
      incrementing a number at the end of names that already exist (e.g., Input, Input1...).

      The system preserves all Input and Output properties except invalid pointers to Outputs from
      previous Functions.

      Move an Input or Output

      The move feature works in Entity Explorer, the Function Navigation diagram, and between them.

    Move an Input or Output Using Cut and Paste

              1. Select an Input or Output to be moved.
              2. Use one of the following options:

                            Choose Edit ► Cut from the Main Menu
                            Choose Cut from the Right-Click Menu
                            Use the Ctrl+X Keyboard Shortcut

3. Use one of the following options to paste the Input or Output:

                   Choose Edit ► Paste from the Main Menu
                   Choose Paste from the Right-Click Menu
                   Use the Ctrl+V Keyboard Shortcut

The above actions work between Operations opened in different tabs of Process Builder.

Move an Input or Output Using Drag-and-Drop

Source             Target                                  Action
Input              Place between Inputs in a Function.     The Input is moved.
Output             Place between Outputs in a Function.    The Output is moved.

It is possible to change the order of Inputs and Outputs in the Entity Explorer or in Function
Navigation by dragging and dropping an Input or Output within the same Function.

After moving an Input or Output

The system moves the Inputs or Outputs with original names, adding and then incrementing a
number at the end of names that already exist (e.g., Input, Input1...).

The system preserves all Input and Output properties except invalid pointers to Outputs from
previous Functions.

Remove an Input or Output
       1. Select one or more Inputs or Outputs to be removed.
       2. Use one of the following options:
                      Choose Edit ► Delete from the Main Menu
                      Choose Edit ► Cut from the Main Menu
                      Choose Delete or Cut from the Right-Click Menu
                      Use the Del Keyboard Shortcut

The system removes invalid links between Inputs and Outputs after deletion.

In an Input To Output Function, the system will remove items in pairs.
