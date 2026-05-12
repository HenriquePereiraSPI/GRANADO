# Set As Default Revision

1. Launch Entity Manager or Project Entity Manager (in case of Projects).
       2. Select the entity from the list and choose the Set As Default Revision from the Entity

           Manager Right-Click Menu or Project: Entity Manager Right-Click Menu.

When duplicating an existing entity to create a new entity revision, the new revision can also be set
as default by checking the appropriate box (Set as default revision).

In the case of Project entities, setting the default revision is also possible in the Project Compare
tab by using the Set as Default Revision after Merge option from the right-click menu.

The default revision is marked with:

           An overlay indicator in the upper-right corner of the icon (i.e., ).
           The selected Default Revision check box on the General tab of the entity properties
           (displayed from the Entity Manager Right-Click Menu).
           The selected Default Revision check box on the General tab of the entity properties pane.

Default DFC Revision

Default DFC revision can be used in following areas:

           Sub-DFC
           Screen
           View
           Machine Integrator
           UOM Conversion
           Dynamic Lists
           Web Services
           EMR
           KPI
           Determination
           Sequencing
           WIP Operation
           Job Action
           Dispatching Board

When the none-revision determined at runtime option is selected, the revision will be determined
dynamically in runtime. It means that the system will select the revision set as default. See
Algorithm for Detecting Dynamic Revision of Entity.

Below is an example of that option on Sub-DFC function properties pane.
