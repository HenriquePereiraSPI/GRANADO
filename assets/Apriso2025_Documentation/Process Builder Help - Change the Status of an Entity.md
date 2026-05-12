# Change the Status of an Entity

For more information on available statuses, see Entity Status Types.

  Depending on the server configuration (using the ShowNoteOnStatusChange key in the Central
  Configuration file), you might be asked to provide an action comment when changing the status
  of an entity. It will be visible in the History tab of process, operation, or DFC properties.

To Change the Entity Status in Entity Manager or Project Entity
Manager

Select one or more entities and use one of the following options:

           Choose a required status from the toolbar:

Use the right-click menu and choose Change Status:

              Choose Change Status from the Entity main menu:

In the case of operations, processes, and DFCs, you can also change the status from the
entity properties window:

 To Change the Status of an Open Entity

  Use one of the following options:
              Choose a required status from the toolbar:

              Right-click the status part of the status bar:

              Right-click the entity in Entity Explorer and choose Change Status:

           Choose Change Status from the Entity main menu:

To Change the Status of Default Entities in Projects or Modules

In projects, you can change the status of all the default entities inside the project or single PB
module using Project Entity Explorer's right-click menu – this works only for the prototype, design in
progress, development in progress, or active statuses:

 To Change the Entity Status Recursively

  You can change the status of the selected entity (process, operation, DFC, screen, layout, or view)
  and all its child entities. In the case of projects, the recursive status change occurs only within a
  single project and does not affect entities that are linked from referenced projects. The status
  change works only for the prototype, development in progress, or active statuses.

The status does not change for any dependent entities that are open in a tab.

  When recursively changing the status of a DFC with linked invoked DFCs, the status of invoked
  DFCs changes only if they have the revision selected on the Advanced tab of a step
  properties. The status of invoked DFCs with "(all revisions)" selected does not change.

Select the entity and choose Change Status Recursively from the:

           Entity main menu.
           Entity Manager's right-click menu or Project Entity Manager's right-click menu.
           Entity Explorer's right-click menu of screen, view, layout, process, operation, DFC.

Rules

   Changing the Status to Prototype
   Changing the Status to Development in Progress
   Changing the Status to Active

Changing Entity Status to Active (Releasing) with Sign-Off

If the server is configured for electronic signatures, after changing the process, operation, or DFC
status to active, you need to electronically sign off on this action. First, a window appears where
you can see the history of changes made in the current revision, including those made by other
users or in previous revisions (which are grayed out). You can approve or reject such changes.

  If changes were approved or rejected, the sign-off window appears, where you can provide a
  password, reason code, and optionally a comment on the action – the comments appear in the
  History tab of process, operation, and DFC properties.

              Click Approve – the entity status changes to active.
              Click Reject – the entity status does not change.

     To find out if the sign off on a release has been requested, check the sign-off status on the
     status bar.
     This option can be changed with use of the RequireSignOffOnRelease key located in the
     ProcessBuilder section of the Central Configuration file – for details, refer to Central
     Configuration Documentation .

 Change Status Result Window

  This window lists all entities for which the Change Status or Change Status Recursively options
  have been used. When changing the status of more than one entity, the details of the status
  change action are grouped into:

              Status change succeeded – the entity status changed.
              Status change skipped – the entity has already been in the required or active status or
              the status could not be changed because the entity was open in another tab.
              Status change or validation failed – changing the entity status or the entity validation
              failed. In such cases, validate failed entities and make the appropriate modifications.

  When using the Change Status Recursively option, the window lists the status change details
  also for all child entities:

Actions

           Open – redirects to the workspace of the selected one or more entities and automatically
           validates them.
           Open All Failed – redirects to the workspace of the entities under the Status change or
           validation failed node and automatically validates them.
