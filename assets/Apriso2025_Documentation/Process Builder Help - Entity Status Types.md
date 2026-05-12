# Entity Status Types

A color-code is used to indicate the status of an entity.

A default revision of entity has an overlay indicator in the upper-right corner of the icon – .

Entity Status Descriptions

Status             Color  Description
Active
                          An entity that has been successfully tested in the Prototype status can
                          be released to the Active status. In the Active status, the entity can be
                          executed in runtime. It is possible to enter test values (e.g., in the User
                          Formula and SQL Query Editors, Grid Business Control, and HTML
                          Layout Editor) without saving changes, but no further modifications can
                          be made.

                          If an entity is released to the Active status, it cannot be modified in
                          the same revision – a new revision must be created. The only
                          exception is the ability to edit specific properties of Screens and
                          Views that are in the Active status, but this requires additional
                          configuration.

Prototype                   An entity cannot be moved back from Active to Design in Progress.

Development               This status is used for testing purposes, before releasing an entity to
in Progress               Active status (which cannot be changed back to Design in Progress). It
                          enables executing entities in Function Interpreter and moving them back
Design in                 to Design in Progress status without creating new revisions. Prototype
Progress                  status may be changed back to Design in Progress or Development in
On Hold                   Progress or released to Active status.
                          This status is used while working on the entity and its development is in
                          progress.

                            Entities in Development in Progress status cannot be moved with the
                            use of Global Process Manager.

                          Every new entity is created in Design in Progress status. In this status
                          the entity can be edited and modified, but cannot be executed in the
                          Function Interpreter. Design in Progress status may be changed to
                          Prototype, Active, or Cancelled. You can go back to Design in Progress
                          status only from Prototype status.
                          An entity can be put on hold (e.g., if it is faulty). On Hold status may be
                          changed back to Active status. Status change from Active to On Hold is
                          impossible for DFCs that are deployed without design data .

   Cancelled            If the entity is defective or no longer needed, its status can be changed
                        to Cancelled from Design in Progress, Prototype, Active, or On Hold
   Compiling in         status.
   Process
                        A cancelled entity revision cannot be default if other revisions of this
                        entity exist.

                          Cancelling an entity cannot be undone, but some functionalities are
                          still available for cancelled entities. For example, you can duplicate
                          entities, move DFCs, screens, layouts, and views, and add
                          processes and operations to GPM modules.

                          Cancelling a DFC that is linked by revision to other non-cancelled
                          entities might cause unexpected system behavior. A warning
                          message informs about parent entities. Unlink this entity from any
                          parent entity before cancellation.

                        A temporary status that occurs between status changes.

Valid Status Changes

You will notice that not all statuses will be available at once. This is because a certain sequence
needs to be followed.

For more information on status change, see Change the Status of an Entity.

From \ To          Design in  Prototype Development in  Active On           Cancelled
                   Progress                  Progress              Hold

Design in Progress N/A

Prototype                     N/A
Development in                               N/A
Progress
Active                                                  N/A
On Hold                                                            N/A
Cancelled                                                                     N/A

Compilation Status

Each entity has a compilation status (visible in the Entity Manager column). There are two types of
compilation status:

           Compiled – the entity was successfully regenerated during a database upgrade, its status
           was successfully changed to Prototype or Active, or it was successfully built

Regeneration failed – the entity was not successfully regenerated during a database
upgrade (the Function Interpreter does not run Process or DFC in this status)
