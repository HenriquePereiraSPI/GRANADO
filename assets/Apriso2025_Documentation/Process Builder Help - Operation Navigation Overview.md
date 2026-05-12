# Operation Navigation Overview

The functionalities related to process authoring are deprecated and will not be further
  developed.

  For more information on operation navigation, refer to Explosion, Navigation & Tasking
  Guide.

The operation navigation view is available when you open a process entity. The view consists of
two tabs:

           Navigation – represents the movement of quantities (or progress) between process
           operations or work orders. Operation navigation triggers tasking and moving quantities
           according to the connector lines through a process or operations that make up a process.
           Links – displays a list of links that are added to the process.

  Operation navigation determines where, when, and how to move quantities based on process
  design and order reporter (good, fail, scrap, alternative, or reason code). The navigation is
  triggered by report production. For "first" operations, operation navigation is triggered by explosion.

 Operation Navigation Diagram

     For more information on an alternative view of the operation navigation diagram, see Operation
     Navigation PERT View.

  Symbols

  The symbol indicates the point where the navigation can split into multiple operations, and the
  symbol indicates the point where the navigation can merge back to a single operation.

  Connector Line Descriptions

  When you connect two diagram elements with a connector line, the system displays a pop-up
  window where you can set a WIP content class and reason code. Their visibility on the diagram can
  be set with the Show Reason Code Description and Show WIP Content Class Description
  right-click options.

  Navigation Actions

  Operation navigation can be broken down according to the following actions:
              Move – transfer quantities from one operation to the subsequent operation.

                   1. Draw a line out of Operation 0010 into Operation 0020.
                   2. Draw a line out of Operation 0020 into Operation 0030.

              Split – move quantities between two or more operations.

                                                                         1. Draw a line out of Operation 0010 and into
                                                                         Operation 0020.
                                                                         2. Draw a line out of into Operation 0030.
                                                                         When the line is created, the symbol is
                                                                         enlarged to on the line.

              Duplicate – move quantities to more than one subsequent operation, or initialize more
              than one operation at the time of explosion.

                                                                             1. Draw a line out of Start into Operation
                                                                             0010.
                                                                             2. Draw a second line out of Start into
                                                                             Operation 0020.
                                                                             3. Draw a line out of Operation 0010 into
                                                                             Operation 0030.
                                                                             4. Draw a second line out of Operation
                                                                             0010 into Operation 0040.

              Merge – combine quantities from two or more preceding operations.

                               1. Draw a line out of Operation 0020 into
                               Operation 0040.
                               2. Draw a line out Operation 0030 into .
                               When the line is created, the symbol is
                               enlarged to on the line.

Merge with dependencies

                         Merging with dependencies entails the same
                         action as the merge, however, you can build
                         in multiple dependencies on preceding
                         operations. In this example, the quantity must
                         be reported for both Operation 0020 and
                         Operation 0030 before Operation 0040 and
                         Operation 0050 can be started.

              Add – add quantities received from two preceding operations.

                                                                         1. Draw a line out of Start into Operation
                                                                         0010.
                                                                         2. Draw a second line out of Start into
                                                                         Operation 0020.
                                                                         3. Draw a line out of Operation 0010 into
                                                                         Operation 0030.
                                                                         4. Draw a line out of Operation 0020 into
                                                                         Operation 0030.

 How To

Enable or Disable Editing of the Operation Navigation

Print the Operation Navigation Diagram
Save the Operation Navigation Diagram as an Image
