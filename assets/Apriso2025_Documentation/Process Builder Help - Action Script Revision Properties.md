# Action Script Revision Properties

Field              Description
Name
Revision           The unique name of the Action Script.
Default Revision
                   The Action Script revision number. This is a read-only field.

                   The revision of the Action Script that enables the Action Script to be used.

                              Only default revisions of Action Scripts Functions that are in the
                              Active, Prototype or Development in Progress status can be linked to
                              the following entities:

                                         Screen "On Load" Property
                                         Screen "On Initialize" Property
                                         View Actions "On Action" Property
                                         View Forms "On Change" Property
                              Only the function of the Action Script's default revisions can be used
                              in other Action Scripts

                           The Default Revision check box is selected by default for newly created
                           Action Script revisions (the subsequent revisions of the Action Scripts will not
                           be selected as default ones – you need to use the Entity Explorer Right-Click
                           Menu).

Include all default If selected, the functions from other Action Scripts can be included while
Action Scripts in testing the Action Script.
Test Run

                   Only default revisions of Action Scripts that are in the Active, Prototype or
                   Development in Progress status can be included.

Available Action This list contains all of the Action Script Functions available in the Action
Script Functions Script revision. For details, see Action Script Function Definition.

                   You can double-click any of the Functions to locate it in the Code tab.

(Show Function Opens a window with the names of Screens and Views that use the selected

Usages)            Action Script Function. For more information, see How To Detect Usages of

       (Generate   an Entity.
   Function Test   Generates an initial code that is inserted into the Tests Tab.
   Code)
                     Each revision of the Action Script has its own test code.
