# Manage Steps

Add a New Step

   Use one of the following options:

              Drag (Step) from the Toolbox pane into the step navigation workspace or to the DFC
              node in the Entity Explorer.
              Select the DFC in the Entity Explorer and use the Ins keyboard shortcut.
              Right-click the DFC in the Entity Explorer and choose Add Step from the right-click
              menu.
              Choose Add Step from the step navigation right-click menu.

   The system adds a new step to the step navigation diagram workspace with a default name,
   which you can modify.

   Adding the first step automatically links it to the start node.

   Add an Existing Step

           1. Use one of the following options:

                          Drag (Existing Step) from the Toolbox pane into the step navigation
                          workspace or to the DFC node in the Entity Explorer.
                          Choose Add Existing Step from the step navigation right-click menu.
           2. The Add Existing Step wizard appears. Choose a DFC from the available list:

3. Choose the step you would like to reuse from the available list:

              4. Choose any of the options available in the Options section:
                            Copy with sub-DFCs – an additional screen will be shown with all of the sub-
                            DFCs linked to the selected step, from which you can select ones to copy (hold
                            the CTRL key to select more than one).

                            Automatically create new revision – automatically creates new revisions.
                            Remember my choice – stores your previously selected options.
              5. Click Finish.
      Add a Step with Sub-DFC
              1. Use one of the following options:
                            Drag (Step with Sub-DFC) from the Toolbox pane into the step navigation
                            workspace or to the DFC node in the Entity Explorer.

              Choose Add Step with Sub-DFC from the step navigation right-click menu.
2. The Create Step with Sub-DFC wizard appears. Choose a DFC from the available list.

              3. To create a copy of a DFC, select the Create copy before linking check box. Click
                 Next, and enter a name and revision for the copy.

              4. Click Finish.

      Changes to the diagram include:

                 A step with the same name as the DFC is added to the diagram.
                 A function of type Sub-DFC is created within the new step, which is configured to call
                 the selected DFC.
                 The function inputs and outputs are configured as session variables. The names of
                 source session variables names are the same as the DFC external inputs.
                 No incoming or outgoing arrows are created to or from the step.

      Select a Step

     Select a Single Step

      Use one of the following options:

                 Click on the step in the step navigation workspace .
                 Draw a box around the step in the step navigation workspace.
                 Select the step in the Entity Explorer.

      The Background Tasks and Properties tool panes are populated with information regarding the
      selected step. The system also highlights all of the step's incoming and outgoing connections in
      green.

     Select a Group of Steps

Use one of the following options:

Draw a box around the steps in the step navigation workspace.
In Entity Explorer or the step navigation workspace, click on each step while holding
the CTRL key.

The system highlights in green all of the incoming and outgoing connections for each of the
selected steps.

        Selected steps can be grouped. For more information, see Group or Ungroup Steps.

      Duplicate a Step

      In the step navigation diagram workspace:

              1. Select one or more steps you want to duplicate.
              2. Use one of the following options:

                            The CTRL+D keyboard shortcut.
                            Choose Duplicate Selection from the step navigation right-click menu or the
                            Edit main menu.
                            Use the CTRL+C and CTRL+V keyboard shortcuts.
                            Choose Copy and Paste from the Edit menu.
                            Click (Copy) and (Paste) in the toolbar.
                            Choose Copy and Paste from the Entity Explorer right-click menu.

      In Entity Explorer:

              1. Select one or more steps you want to duplicate.
              2. Use one of the following options:

                            The CTRL+C and CTRL+V keyboard shortcuts.
                            Choose Copy and Paste from the Edit menu.
                            Click (Copy) and (Paste) in the toolbar.
                            Choose Copy and Paste from the Entity Explorer right-click menu.
              3. Paste steps into the same or different DFC.

      The system creates copies of the steps with their original names and contents. Incoming and
      outgoing arrows for the new steps are created unless they go to steps that are outside of the
      selection.

      Move a Step
              1. Select the step or group of steps you want to move.
              2. Drag the steps and drop them anywhere in the step navigation diagram workspace.

      Copy a Diagram Element
              1. Select one or more diagram element elements that you want to copy.
              2. Use one of the following options:
                            The CTRL+C and CTRL+V keyboard shortcuts.
                            Choose Copy and Paste from the Edit menu.
                            Click (Copy) and (Paste) in the toolbar.
                            Choose Copy and Paste from the Entity Explorer right-click menu.

      A diagram or its elements can be pasted:

                   Back into Process Builder into the same or different DFC.
                   As an image into an application like Microsoft Word or Visio.

Edit a Step Name

       1. Select the step you want to rename.
       2. Use one of the following options:

                      Use the F2 keyboard shortcut.
                      Choose Rename from the Entity Explorer right-click menu or the Edit menu.
                      Click the name part of the step in the step navigation diagram.
                      Select the Name field on the General tab of the step's Properties tool pane.
       3. Enter a new name.
       4. Click ENTER to confirm.

Add or Edit a a Step Description

       1. Select the step for which you want to edit the description.
       2. Select the Description field on the General tab of the step's Properties tool pane.
       3. Enter a description.
       4. Click ENTER to confirm.

Add or Edit a Step Description Using the Navigation Diagram

       1. Use one of the following options:

                      Click the icon on the information bar of the step box.
                      Select the step and use the SHIFT+F2 keyboard shortcut.
                      Choose Edit Description from the step navigation right-click menu or the
                      Navigation menu.
                      Choose Show/Hide Step Description from the step navigation right-click menu
                      or the Navigation menu, and click the description box to make it editable.
       2. Add a description. Click anywhere outside of the description box to exit edit mode.

  Select the pin in the corner of the description box to keep the box permanently visible.

Remove a Step
       1. In Entity Explorer or step navigation diagram, select one or more steps.
       2. Use one of the following options:
                      The DEL keyboard shortcut.
                      Choose Delete from the:
                                  Edit menu.
                                  Entity Explorer right-click menu.
                                  Step navigation right-click menu.

The system removes the steps from diagram. Incoming and outgoing arrows for these steps are
removed as well.
