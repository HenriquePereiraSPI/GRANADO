# Duplicate of an Existing Entity

Duplicate an Entity

You can duplicate an entity to a new revision or a new entity. The status of a new revision or new
entity is set to design in progress. For more information on entity duplication in Process Builder
projects, refer to Duplicate a Project.

When creating a new DFC revision or a new DFC, the links to literals are also copied.

To Create a New Revision

In the case of projects, you can add a new entity revision only to the module of the source entity.

       1. Select one or more entities in Entity Manager or Project Entity Manager.
       2. Use one of the following options:

                      Click (New Revision/Duplicate) on the toolbar.
                      Select the New Revision/Duplicate option from the right-click menu.
       3. In the dialog box that the system displays, select New entity revision.

                          Field                            Description

                          Entity                           This field is read-only.
                          name

                          Entity                           The revision of the new

                          revision entity.

                          Set as                           If selected, the newly
                          default                          created entity revision is
                          revision                         set as default.

                          Use the Available only for active or

                          embedded cancelled screens. You

                          version of can:

                          the Layout                       Select the check

                                                           box – remove the

                                                           link and keep the

                                                           embedded version

                                                           of a Layout as it is

                                                           in the source

                                                           screen.

                                                           Do not select the

                                                           check box –

                                                           refresh the

                                                           embedded Layout

                                                           with the latest

                                                           version of a linked

                                                           layout and keep

                                                           the link.

                                                           For a complete explanation
                                                           of the check box possible
                                                           states click here.

                          Change                           Available only for
                          Order                            processes and operations.
                                                           If the entity revision is

                                                                    affected by a change order
                                                                    (CO), the CO list is
                                                                    activated. It enables
                                                                    deciding if the newly
                                                                    created entity revision is a
                                                                    response to the CO. For
                                                                    more information, refer to
                                                                    Change Management
                                                                    Help .

                   Open                                             If selected, the workspace

                   entity after of the created entity

                   creation revision opens

                                                                    automatically.

A proper note is added to the process or operation properties History Tab, although it only appears
if one of these keys in the Central Configuration file is set to "true": RequireSignOffOnRelease,
ShowNoteOnStatusChange, or ShowNoteOnSave (for details, see Central Configuration Documentation ).

Electronic signatures (if any) will be copied to the new revision.

  Notes are available only for processes and operations.

To Create a New Entity

       1. Select the entity in Entity Manager or Project Entity Manager.
       2. Use one of the following options:

                      Click (New Revision/Duplicate) on the toolbar.
                      Select the New Revision/Duplicate option from the right-click menu.
       3. In the dialog box that the system displays, select New Entity.

                   Field                            Description

                   Entity                           The name of the new
                   name                             entity.

                   Entity                           The revision of the new

                   revision entity.

                   Set as                           The newly created entity is
                   default                          automatically set as default
                   revision                         revision.

                   Use the Available only for active or

                   embedded cancelled screens. You

                   version of can:

                   the Layout                       Select the check

                                                    box – remove the

                                                    link and keep the

                                                    embedded version

                                                    of a Layout as it is

                                                    in the source

                                                    screen.

                                                    Do not select the

                                                    check box –

                                                    refresh the

                                                    embedded Layout

                                                    with the latest

                                                    version of a linked

                                                    layout and keep

                                                    the link.

                                                    For a complete explanation
                                                    of the check box possible
                                                    states click here.

                   Project                          Enables selecting the
                   revision                         project revision in which
                                                    you want to locate the new
                   Project                          entity. When the revision is
                   module                           set to (none), the
                                                    duplicated entity is added
                   Change                           to Entity Manager. Not
                   Order                            available for processes and
                                                    operations.

                                                    Enables selecting the
                                                    Module in the chosen
                                                    project revision in which
                                                    you want to locate the new
                                                    entity. Not available for
                                                    processes and operations.

                                                    Available only for
                                                    processes and operations.
                                                    If the entity revision is
                                                    affected by a change order
                                                    (CO), the CO list is
                                                    activated. It enables
                                                    deciding if the newly
                                                    created entity revision is a
                                                    response to the CO. For

                                                    more information, refer to
                                                    Change Management
                                                    Help .

                   Open                             If selected, the workspace

                   entity after of the created entity

                   creation revision opens

                                                    automatically.
