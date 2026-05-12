# Layout Conversions

A Layout is a part of a Screen that defines its graphic design. Different Screens can use the same
Layout revision. You can change a Layout by adding and removing Panels, changing the Layout
properties, etc. To make it possible, you need different Layout conversions. For more information,
refer to the Embedded Layout and Layout Conversions sections in Process Builder Projects
Guide.

You might need the Layout conversion in the following scenarios:

           Modifying the linked Layout structure (Scenario 1)
           Linking Screens to a different Layout (Scenario 2)
           Setting the default revision of a Layout to a different Layout revision (Scenario 3)
           Duplicating the Project that contains a Screen with a linked Layout (Scenario 4)

Here is the basic configuration where the Layout is dynamically linked to all Screens:

S1 REV.1           Read-only  L1 REV.1
S2 REV.1           Read-only

S3 REV.1

S3 REV.2

                              S1 REV.1 Screen in the Ac ve status
                              S3 REV.1 Screen in the Prototype status

                                        Layout in the Prototype status

                              L1 REV.1

Scenario 1: Modifying the linked Layout structure

                            Read-only
       S1 REV.1                        L1 REV.1
       S2 REV.1             ?
       S3 REV.1                                                 Change the L1 REV.1 structure
       S3 REV.2                                                 (add two Panels, remove
                                                                one).

                                       L1 REV.1

After making the changes presented in the diagram, you need to make a decision about the Layout
conversion. For more information, see here.

Scenario 2: Linking Screens to a new Layout

S1 REV.1           Read-only           L1 REV.1
S2 REV.1           Read-only

S3 REV.1                                         Create a new en ty L2 REV.1 from L1 REV.1.

S3 REV.2

                                       L2 REV.1

Link S3 REV.1 and S3 REV.2                       Change the L2 REV.1
to L2 REV.1.                                     structure (add two Panels,
                                                 remove one).

                                            L2 REV.1

  After making the changes presented in the diagram, you need to make a decision about the Layout
  Panel conversion. For more information, see here.

 Scenario 3: Changing the default Layout revision

Scenario 3a: Changing the default Layout revision

S1 REV.1           Read-only  L1 REV.1
S2 REV.1           Read-only

S3 REV.1                                           Create a new L1 REV.2 revision from L1 REV.1.

S3 REV.2

                              L1 REV.2

                   ?                               Set the default Layout revision to L1 REV.2.

                                          L1 REV.2

After making the changes presented in the diagram, you need to make a decision about the Layout
conversion. For more information, see here.

Scenario 3b: Modifying the Layout structure and changing the default Layout revision

                                             Read-only
       S1 REV.1                                         L1 REV.1
       S2 REV.1                               ?
       S3 REV.1                                                             Create a new L1 REV.2 revision from L1 REV.1.
       S3 REV.2

                                                        L1 REV.2

                                                                                                             Change the L1 REV.2 structure
                                                                                                             (add two Panels, remove one).

                                                        L1 REV.2

                                                                             Set the default Layout revision to L1 REV.2.

                                                        L1 REV.2

After making the changes presented in the diagram, you need to make a decision about the Layout
conversion. For more information, see here.

Scenario 4: Duplicating the Project that contains a Screen with a linked
Layout

For more information on Project duplication, see Duplicate a Project.

S1 REV.1                                                Project1 REV.1
S2 REV.1
S3 REV.1           Read-only                 L1 REV.1
S3 REV.2           Read-only

                                                                                                             Duplicate Project1 by selec ng the New

                                                                                                             Project op on.                          ?

In the Relink Modiﬁed Layout to Screens      L1 REV.2
pop-up window:
- Select the S3 REV.1 to link it to the new                     Set the default Layout revision to L2 REV2.
default revision L1 REV.2.
- Do not select the S3 REV.2. It will then   L1 REV.2
use the embedded version of the Layout L1
REV.1.

After making the changes presented in the diagram, you need to make a decision about the Layout

conversion while duplicating the Project1 REV.1. For more information, see here.

Known Issues

Layouts are not relinked when you change a default revision in the Project Compare tab.
