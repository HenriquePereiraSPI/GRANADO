# Main Menu Bar

The main menu provides access to many high-level administrative and entity functions.

File

Item               Description

New                Displays New Entity Wizard, where you can create a new process, operation, DFC,
                   screen, view, layout, action script, or project.

Open               Displays a dialog box that lets you open a process, operation, DFC, screen, view,
                   layout, action script, or project.

Save               Saves the currently open entity.

Save As Saves the currently open entity under a different name.

Save All Saves of all open entities.

Close              Closes the currently open window.

Connect Enables connecting to a DELMIA Apriso server.

Disconnect Enables disconnecting from a DELMIA Apriso server.

Print              Enables printing the step navigation diagram.

Print              Provides a preview of the step navigation diagram.
Preview

Exit               Exits the application.

Edit               Description
                   Undoes a change.
Item               Redoes a change (active only if Undo was used).
Undo               Copies the selected element of the step or function navigation to the clipboard
Redo               and removes it from the entity workspace and the Entity Explorer tree.
Cut                Copies the selected element of the step or function navigation to the clipboard.
                   Inserts the last copied element of the step or function navigation from the
Copy               clipboard into the entity workspace and the Entity Explorer tree .
Paste              Deletes selected elements.
                   Duplicates the element of step navigation to a new one or to a new revision.
Delete
Duplicate          Displays the Advanced Find tool pane.
Selection
Advanced           Displays the entity Properties tool pane unless it is already open.
Find               Renames:
Properties
Rename                        The selected step or function navigation element of Entity Explorer.
                              A PB project module.
Select All
                   Selects all entities in the Entity Manager or Project Entity Manager.

View

This menu controls the visibility of the following tool panes:

        Entity Explorer
        Session Variables
        System Parameters
        Validation Messages
        Rich Text Description
        Categories
        Preview
        Change Orders
        Action Script Output
        Background Tasks
        Recent and Favorite Items
        Toolbox
        Unit Test Explorer
        Properties

The remaining options:

Item               Description

Designer Switches back to the designer view when DFC or screen are in the Test Run mode.

Test Run Opens the selected DFC or screen in Test Run.

HTML               Displays developer tools. This option is active only in Test Run mode. For more
Source             information, refer to the Google for Developers documentation..

Full Screen Displays the workspace in full-screen mode.

Refresh Refreshes the workspace.

Managers

This menu displays:

           The following Process Builder tabs:

                      Project Manager
                      Entity Manager
                      Action Script Manager
                      Business Component Repository
                      Web Services Manager
                      Issue Flows Manager

           The following DELMIA Apriso Desktop Client (ADC) screens, accessible also from ADC:

                      Dictionary
                      System Parameters and Lists
                      Determinations
                      Documents
                      Work Instructions
                      Change Management
                      Specifications
                      Issue Properties

                            You can access the Issue Properties Manager only if you are assigned the
                            Issue Management Process Author role. For more information on the roles
                            used in Process Builder, see Security Roles.

                   FlexParts
                   Project Runtime Configuration

Tools

Item                 Description
Translate
                     Displays the Dictionary Links screen in context of the selected DFC,
Import Translated    screen, or view. For more information, refer Dictionary Help .
Literals
Export Literals for  Enables importing literals from an XML file that was translated with the
Translation          DELMIA Apriso Translation Tool.
SQL Query Editor
Rename Action        Enables exporting literals from a process, operation, or DFC to an XML
Script References    file, which you can translate in the DELMIA Apriso Translation Tool.

Options              Displays the SQL Query Editor.

                     Displays the Renaming Action Script References window that you can
                     use to rename invalid references to action script functions in screen flow
                     entities.

                     Displays the Options window.

Entity

Item                 Description
Change Status
                     Changes the status of the selected one or more entities. For more
Change Status        information, see Change the Status of an Entity.
Recursively
                     Changes the status of the selected entity and its child entities. The
Show Usages          recursive status change works only for the prototype, development in
Compare              progress, or active statuses. For more information, see Change the Status
                     of an Entity.
Validate
                     Displays the pop-up window listing all entities that use the selected entity.

                     Displays the DFC Compare tab for two selected DFCs or Project
                     Compare tab for two selected project revisions.

                     Validates if the selected entity is designed correctly and can be properly
                     executed. The validation results are displayed:

                                In the Entity Validation Result window – when the entity
                                validation runs in Entity Manager or Project Entity Manager.
                                In the Validation Messages tool pane – when the entity validation
                                runs in an open entity.

Compile              Compiles a DFC in the prototype, development in progress, or active
                     status or an action script.
Generate Diagram
Snapshots            Creates snapshots of DFC navigation, DFC step navigation diagrams, or
                     Layout Editor view and stores them in database. Generating multiple
Publish as FlexPart  diagram snapshots is possible by selecting more than one entity.

                     Enables publishing the selected DFC or screen in the prototype,
                     development in progress, or active status as a FlexPart. After publishing
                     the entity, the FlexPart link can be copied from the Other Entities tab of
                     theShow Usages window. For more information, refer to FlexParts
                     Help .

                      This option is only available for screens with the selected Base Screen
                      box checked in the screen properties. The type of the created FlexPart
                      can be set to screen or offline screen.

Check-In            Removes the lock from the selected entity.
Check-Out
New                 Locks the selected entity for editing by the current user.
Revision/Duplicate
                    Displays the Duplicate Entity window to create a new revision of the
Propagate Desktop   selected entity or a new entity with a different name and revision. You can
Prompts             also select many entities and create a new revision for all of them.

                    Copies all desktop prompts to mobile and text prompts.

                      Mobile and Text platforms are no longer supported.

Generate Apriso Unit Generates Apriso Unit Test code for a DFC. See Apriso Unit Tests

Test                Framework Documentation for details.

Navigation

Item                  Description
Add Step              Adds a new step to a DFC or operation.
Edit Description      Allows the addition and editing of a step's description.
Set Routing Output    Enables setting a function output that will be used as an output routing
                      of a DFC step.
Change Routing Value  Allows the changing of the value used for a step routing.
Autolayout            Automatically places elements on the Flow diagram.
Show/Hide Step        Controls the visibility of a step description.
Description
Save As Image         Saves the Flow Diagram as an image to a file.

Functions

The following options are available only for DFCs:

Item               Description
Add Function       Adds a new function to the step.
Add Input          Adds an input to the selected function.
Add Output         Adds an output to the selected function.
Add Pair           Adds both the input and output mapped together to the selected function. This
                   option is available only for the Input to Output function type.
Add Session        Adds a routing disposition for a function output to a session variable.
Routing
Add Machine        Adds a routing disposition for a function output to a machine.
Routing
Add User           Adds a routing disposition for a function output to a screen.
Routing
Add External       Adds a routing disposition for a function output to a DFC's external output.
Routing

 Window                            Description
                                   Closes the current tab.
   Item                            Closes all open windows.
   Close
   Close All Windows

Help

Item                  Description

Contents              Displays the contents of the Help.

Database Documentation Opens the web application which enables users to view information
                                      about DELMIA Apriso tables.

Business Components   Opens the web application which contains documentation with a
Documentation         summary of all Business Components (BC) available in DELMIA
                      Apriso.

Show Welcome Screen Opens the Welcome Screen with basic information about Process
                                      Builder.

About                 Provides information about the release of Process Builder being
                      used.
