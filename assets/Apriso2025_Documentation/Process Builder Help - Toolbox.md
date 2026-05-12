# Toolbox

This tool pane lets you quickly add the components to the contents of processes, operations,
DFCs, steps, functions, layout editor, and step and task navigation in Issue Flows.

Elements Availability

The availability of components differs depending on the opened entity workspace.

Actions

           To add an element, drag it from the toolbox to the opened entity workspace or Entity
           Explorer tree. In the case of function navigation, you can also double-click the function
           icon.

Process, Operation, and Process Operation

Links

Dragging the element to the workspace or Entity Explorer displays a wizard that lets you add the
selected link:

Link \ Available Target                                 Process Process Operation Step
                                                                       Operation

   Characteristic
   Component
   Document
   Product
   Resource (resource types: Generic, Building,
Container, Equipment, Land, Supplier, Collection)
   Specification (you can link only one specification)
   Work Center (you can link only one work center)

Task Permissions

Dragging the element to the workspace or Entity Explorer displays a wizard that lets you add the
selected task permission to process operations, operations, or their steps:

               Skill
               Role
               Employee
               Employee class

                Employee class is defined by the resource class of the person type.

 DFC

  Flow Elements (Special Nodes)

You can adds the following nodes to step navigation:

       Stop/End
       Logout/Exit
       Back
       Skip/Abandon

Steps

Icon Name            Description
      Step           Adds a new step to the DFC.

Existing Step        Displays the list of DFCs from which you can choose an existing step.

Decision Step        Adds a new decision step to the DFC.

Step with Sub-DFC Adds a new step with a linked DFC that is reused as a sub-DFC.

Function Navigation

Functions                       Function Inputs                Function Outputs

You can add the following functions Functions can have inputs of Functions can have outputs of

to the DFC step:                the following sources:         the following destinations:

          3DEXPERIENCE           Constant                      External output
       Message                   Machine                       Machine
                                 Previous function             Session variable
          Apriso Message         Session variable              User
          Business Component     System parameter
          Business Control       User
          DAL Query
          Determination
          Input to Output
          Local Determination
          MDX Query
          Message Broker
          MIScript
          Notification
          Show Message
          SQL Query
          Stored Procedure
          Sub-DFC
          Submit Print Request
          User Formula
          Web Service

 Layout Editor

  You can add the following controls to Layout Editor:

Layout Controls                    Input Controls                 Output Controls

               Grid (deprecated)           Text                                  Text
               Sub-DFC                     Long text                             HTML
                                           Masked text                           Link
                                           Drop-down list
                                           Combo box              For more information on
                                           Check box              output controls, see User
                                           Button                 Interface Controls for Function
                                           Radio button           Output.
                                           Date/Time picker
                                           Date picker
                                           Time picker
                                           File picker
                                           Selection list
                                           Spinner

                                   For more information on input
                                   controls, see User Interface
                                   Controls for Function Input.

General Business Controls Functional Business Controls

                   Authentication - 1.0    Attachment Browse - 2.0
                   Auto-Refresh - 1.0      Attachment Link - 1.0
                   Background Image - 1.0  Attachment View - 1.0
                   Calendar - 1.0          Checklist - 1.0
                   FlexPart - 1.0          Cube Viewer - 2.0
                   Grid - 1.0              Dispatching Board - 3.0
                   HTML Editor - 1.0       Flat File Mask Editor - 1.0
                   Image - 1.0             Generate EMR Record - 1.0
                   Scheduler - 1.0         Map - 1.0
                   Tree - 1.0              Quality Defects Visualization (vQDT) - 1.0
                   Visualization - 1.0     Quality Defects Visualization 3D (vQDT3D) - 1.0
                                           Safety Instructions - 1.0
                                           Work Instructions - 1.0
                                           Work Instructions 3D - 1.0

HTML Layout Editor

There is a possibility to add an additional sections to the toolbox. The sections and its content are
fully customizable and contain user-defined snippets.

Icon Name                                  Description
          Operator Cockpit Layout          Example of a custom snippet.

Issue Flow Step Navigation

Icon               Name  Description
                         Adds a new step to an Issue Flow.
                   Step

Issue Flow Task Navigation

Icon Name                Description
           Task          Adds a new task to a step in an Issue Flow.
