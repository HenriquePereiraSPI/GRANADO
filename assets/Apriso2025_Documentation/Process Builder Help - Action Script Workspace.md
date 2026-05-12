# Action Script Workspace

The main space for managing Action Scripts is divided into three sections:
       1. The Entity Explorer tool pane contains a list of all Action Scripts unassigned to any
           specific Project.

              Choose a Project from the Select a Project drop-down menu to display Action Scripts
              associated with this Project. To learn more about Projects, see Projects Overview.

You can perform different actions on specific elements using the Entity Explorer Right-Click
Menu (e.g., change the way the structure is displayed).

Node Type          Possible Node  Description
Parent             Type Child

Action             Action Script  An Action Script root element contains Action Script
Scripts root
element            categories, Action categories and Action Scripts.

                   Scripts

Action Script Action Script       An Action Script Category contains Action Scripts with

Category           categories, Action their revisions or another Action Script Category.

                   Scripts

              Action Script Action Script     An Action Script contains Action Script revisions
                                   revisions  (Action Scripts are grouped by name). Under an Action
                                              Script name, you can find its revisions (only one is set
                                              as default).

   The list of Action Scripts can be expanded and collapsed by clicking the / icons next to
   an item. When you click an Action Script revision, its properties are displayed in the Action
   Script Revision Properties tool pane.

2. The Action Script Manager section is divided into two tabs: Code (for the main code of
   the script) and Tests (for script testing purposes).

3. The Action Script Revision Properties tool pane appears after clicking an Action Script
   revision element in the Entity Explorer tool pane.

Action Script Category View

When an Action Script Category is selected in the Entity Explorer, a general overview of individual
scripts included in this category will be displayed in the middle pane. In this view, you can perform
specific actions on multiple Action Script revisions. To do this, select one or more revision and
choose an action from the Entity Explorer Right-Click Menu (e.g., change their status).

The following actions are also available in the Action Script Category View:

Icon Action   Description
      Type
      Add     Adds a new Action Script to the selected category. The Create Action Script
              dialog box will appear, where you can provide the new Action Script details (name
      Remove  and revision).
              Deletes the selected revision. Only a revision in the Canceled status can be
      Save    removed.
              Saves changes made in a selected revision. Note that revisions which have been
              modified have the Has Changes box selected.
