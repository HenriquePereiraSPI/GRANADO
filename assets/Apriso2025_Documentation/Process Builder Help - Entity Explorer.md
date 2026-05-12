# Entity Explorer

Entity Explorer displays an entity structure and dependencies in the form of a tree. You can
expand or collapse the list by clicking the / icon next to an item. When you click an entity or its
child elements, the properties are displayed in the Properties tool pane.

You can modify the status of entities and change the tree structure using the right-click menu.

To Select an Entity in the Entity Explorer

       1. Left-click the node.
       2. The corresponding node on the diagram (for DFCs) will become highlighted and tool

           panes and entity workspaces will be populated.

You can use Backspace to navigate (items are highlighted going up in Entity Explorer) and Enter
to open the selected view.

Parent/Child Relationships in the Entity Structure

Process and        DFC  Screen, Layout, Project   Action
Operation               and View                  Script

Processes contain DFCs have steps as Screens are  Projects consist of The list

process operations child nodes. Steps composed of a linked modules that serve of action

and linked stand-      contain one or more layout, which includes as a container for  scripts
                                                                                      depends
alone operations.      functions, and  panels to which you other entities.            on
                                                                                      whether
Steps are the child functions consist of link views. Views                            they are
                                                                                      assigned
nodes of process       inputs and outputs. contain actions that                       to a
                                                                                      project or
operations and                         are designed to                                not. The
                                                                                      child
operations.                            display various                                nodes of
                                                                                      action
                                       information.                                   scripts
                                                                                      are their
Operations consist of                                                                 revisions.

steps. Links and task

permissions can be

added to operations

and their steps.

Entity Explorer Right-Click Menu

Right-click options differ depending on the entity. The options are available for:

           Processes
           Process operations
           Operations
           Operation steps
           Links and task permissions
           DFCs
           DFC steps
           Functions
           Inputs and outputs
           Screens
           Layouts
           Views
           Projects
           Action scripts
