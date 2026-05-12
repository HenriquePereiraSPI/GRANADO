# Step Navigation Diagram Elements

Steps

Types

There are five types of Steps that can appear in a diagram:

Item               Name                  Description

                   Multipurpose Step     A default generic Step.

                   Multipurpose Step with A generic Step that contains a Sub-DFC inside, and

                   Sub-DFC               therefore:

                                         A Process Technical Author can double-click it and
                                         go to the Function Navigation diagram
                                         Other users will navigate to the Sub-DFC view

                   Step with User        This Step contains a Function with User Interface elements.
                   Interface
                   Decision Step         This Step has a routing output and more than one path
                                         defined.
                   Return Step           This Step should be considered when the ”BACK” value is
                                         used in runtime.

Structure

Each Step is composed of two bars:

Item               Name     Description

                   Name Bar Contains the Step's name and sequence number.

                   Information Contains icons indicating the types of Functions within the Step on the

                   Bar      left, an icon on the right indicating that a Step Description is present, as

                            well as Routing Indicators.

The size of all Steps on the Flow Diagram can be changed. Simply drag the edges to reveal the
entire name of a Step or to just make a Step larger.

Special Nodes

Item Name                Description
      Start Node
                         The starting point for DFC processing. Only one Start item can be created in
      Logout/Exit        the Step Flow.
      Node
                         Available in the toolbox. More than one Logout Node can be added. When
                         Step Navigation advances to a Logout Node, the system will end the
                         Function Interpreter session and return the user to the logon screen.

Stop/End           Available in the toolbox. More than one Stop Node can be added. When
Node               Step Navigation advances to a Stop Node, the system will end the Function
                   Interpreter session and return the user to the DELMIA Apriso Start page.
                   The Stop Node is added automatically after creating a DFC.

Back Node          Available in the toolbox. More than one Back Node can be added. In order
                   for a Back node to work, at least one Step has to be defined as a Return
                   Step. When Step Navigation advances to a Back node, the system will
                   complete the Step and return to the nearest previous Step that was defined
                   as a Return Step.

Skip/Abandon Available in the toolbox. More than one Abandon Node can be added. In

Node               order for an Abandon node to work, at least one Step has to be defined as a

                   Return Step. When Step Navigation advances to an Abandon Node, the

                   system will complete the Step and create a new task with the "Abandon"

                   status, and then end the Function Interpreter session. The "Abandon" task

                   will be the same as the previous task, but will start from the Step that was

                   marked as a Return Step.

To Add a Special Node

Drag (Stop/End), (Logout/Exit), (Back), or (Skip/Abandon) from the Toolbox into the step
navigation workspace or the DFC in Entity Explorer. Adding the (Stop/End) node is possible also
from the right-click menu.

Functions within Steps

Item Name                         Description
       Machine data Input/Output  Communication with machines.
       Query Database             Database queries.
       User Interface             User interface Inputs or Outputs.
       Printing                   Printing functionality.
       Processing                 Calls a Business Component or Stored Procedure.
       Determination              Determination Function is used.
       Routing Function           Default Routing Function on the Decision Step.

Routing Indicators

Item Name                Description
      Regular Routing
                         Indicates routing from one Step to another Step, which is dependant on
      Dynamic            the Output of a Function contained in a source Step.
      Navigation Output
                         Indicates whether Dynamic Navigation is enabled for the Step. See
                         Step Properties.

Step Descriptions

The user can add a Step Description for a chosen Step. Its visibility can be toggled by Show/Hide
Step Description through the Right-Click Menu.
