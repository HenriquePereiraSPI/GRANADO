# Operation Properties

To Launch the Process Operation or Operation Properties

       1. In the Entity Explorer, select a process operation or an operation from the list or select the
           operation on the diagram.

       2. Choose one of the following options:
                      Choose View > Properties from the main menu.
                      Use the F4 shortcut.

You can also open the Entity Properties window by selecting an operation in the Entity Manager
and using one of the following options:

                      Choose Properties from the right-click menu.
                      Use the Shift+F4 shortcut.

Operation Properties

General Tab

                      Field                 Description
                      Name
                                            Translated name of the
                      Subtype               operation. The name can
                                            be up to 80 characters
                                            long.

                                            Types of the operation.
                                            Use the following
                                            subtypes:

                                                       Generic
                                                       Labor
                                                       Machine
                                                       Background

                                            The Labor, Machine, and
                                            Background subtypes are
                                            visible if you selected one
                                            of them when creating the
                                            operation. For more
                                            information on the
                                            subtypes, see New Entity
                                            Wizard.

                      Operation             Internal name of the
                      code                  operation. This field is
                                            read-only.
                      Revision
                                            The revision of the
                      Default               operation. This field is
                      Revision              read-only.

                                            The revision of the
                                            operation that is used in
                                            runtime. It is selected by

                                             default for a newly created
                                             operation (next revisions
                                             of the operation are not
                                             selected as the default
                                             ones).

                       Description The description of the
                                         operation.

                       Valid                 Enables changing the date
                       Between               range for the validity of the
                                             operation. Values are not
                                             validated when changing.
                                             If values are incorrect, a
                                             warning is displayed
                                             during the entity
                                             validation.

                       Version               An auto-incremented
                                             number of an operation
                                             that increases when you
                                             modify and save the entity.
                                             Click Edit Mask to enter a
                                             custom mask.

                       Version               The name of the last
                       host                  server where an operation
                                             has been modified.

                       Allow                 If enabled, the entity can
                       editing in            be edited in the prototype
                       Prototype             status. This setting is
                       mode                  selected when creating
                                             the entity.

Work Instructions Tab

                       This tab lists all linked work instructions.
                       Their order is specified in the Sequence
                       column. The Context Usage column
                       informs if the work instruction has the
                       usage context linked:

                                  No – there is no usage context
                                  parameters defined.
                                  Yes – the usage context
                                  parameters are defined or the
                                  work instruction is of the list type
                                  and consists of work instructions
                                  with the linked usage context
                                  parameters.

                       If you link the operation to the process
                       from which an execution order is
                       exploded, the list of work instruction is
                       visible in the Execution Order screen.

                       The status of the linked work instructions
                       must be prototype or active.

                                                                    Available Actions

                                                 Double-click a work instruction to
                                                 open the Work Instruction
                                                 Revision browser (for dynamic
                                                 revision) or Work Instruction
                                                 Properties Editor (for specific
                                                 revision).

                                                    – opens the Add Work
                                                 Instruction Wizard, which lists
                                                 available work instructions.
                                                 Select one or more of them to
                                                 link them to the operation.

                                                    – removes the selected work
                                                 instruction from the list.

                                                    and – changes the order in
                                                 which the work instructions are
                                                 defined.

                                                    – displays a preview of all
                                                 linked work instructions in a
                                                 read-only pop-up window. You
                                                 cannot perform any actions on
                                                 them.

Advanced Tab                  Field        Description
                              Task
Process Operation Properties  Permissions  Opens the Task
                                           Permissions window
General Tab                   Additional   (see Task Permissions
                              Properties   Tab).
                              Created on
                              Created by   For more information,
                              Modified on  see Additional
                              Modified by  Properties Editor.
                              ID
                              FUID         Date the entity was
                                           created on.

                                           User who created the
                                           entity.

                                           Date the entity was last
                                           modified on.

                                           User who last modified
                                           the entity.

                                           ID of the record in the
                                           database.

                                           FUID of the record in
                                           the database.

                   Field      Description
                   Name
                   Operation  Translated name of the process
                   Code       operation.
                   Revision
                   Execution  Internal name of the operation used in
                   Template   the orocess. This field is read-only.

                   Show       Revision of the operation, if this
                              process operation is based on a stand-
                              alone operation. This field is read-only.

                              The name of the operation (from
                              external system) retrieved from the

                              PROCESS_OPERATION.ExecutionTemplate

                              field. It is used to decide which
                              operation to use during explosion of
                              type 4 via
                              APR_PPR_EXPLOSION_OPERATION
                              determination. The field is active only
                              for operations imported and managed
                              by an external system (for example,
                              DELMIA). These operations are in
                              Active status and do not need to have
                              any steps inside so that the validation
                              could be successful.

                              Displays the Process Operation
                              Configuration pop-up window
                              (executes the
                              QueryDeterminationInputByET
                              business component method).

                              The window lists all process operations
                              existing on the server which
                              ExecutionTemplate field on the
                              database is the same. It displays
                              determination configuration according
                              to Execution Template field value (on
                              the Properties pane). Double-clicking
                              the row on the pop-up opens selected
                              process operation.

                   Description The textual description of the entity.

                   Operation Identification number of the process
                   Sequence operation (the sequence number for
                   Number/No. this operation, commonly 0010, 0020,

                                     0030, etc.).

                   Process    Reference only. Select one of the
                   Operation  following from the drop-down list:
                   type
                                         Labor – means that the pace
                                         of the operation is governed

                                             by the labor resources
                                             allocated to the operation.
                                             Machine – means that the
                                             pace of the operation is
                                             governed by the machine
                                             resources allocated to the
                                             operation.
                                             Background – means that the
                                             pace of the operation is
                                             governed by the background
                                             resources allocated to the
                                             operation.

                                If the operation is linked to the process
                                from which an execution order is
                                exploded in the Execution Order
                                screen, and the operation subtype is
                                other than Generic, selecting one of
                                these three types is required.

                       Valid    Enables changing the date range for
                       Between  the validity of the process operation.
                                Values are not validated when
                                changing. If values are incorrect, a
                                warning is displayed during the
                                validation of the entity.

Work Instructions Tab

                                This tab lists all linked work instructions.
                                Their order is specified in the Sequence
                                column. The Context Usage column
                                informs if the work instruction has the
                                usage context linked:

                                           No – there is no usage context
                                           parameters defined.
                                           Yes – the usage context
                                           parameters are defined or the
                                           work instruction is of the list type
                                           and consists of work instructions
                                           with the linked usage context
                                           parameters.

                                If you link the operation to the process
                                from which an execution order is
                                exploded, the list of work instruction is
                                visible in the Execution Order screen.

                                The status of the linked work instructions
                                must be prototype or active.

                                                                    Available Actions

                                                                                          Double-click a work instruction to
                                                                                          open the Work Instruction
                                                                                          Revision browser (for dynamic

 Advanced Tab                         revision) or Work Instruction
                                      Properties Editor (for specific
                                      revision).

                                         – opens the Add Work
                                      Instruction Wizard, which lists
                                      available work instructions.
                                      Select one or more of them to
                                      link them to the operation.

                                         – removes the selected work
                                      instruction from the list.

                                         and – changes the order in
                                      which the work instructions are
                                      defined.

                                         – displays a preview of all
                                      linked work instructions in a
                                      read-only pop-up window. You
                                      cannot perform any actions on
                                      them.

                   Field        Description
                   Create task
                   for each     Task strategy type for
                   Additional   process operation.
                   properties
                                For more information,
                   Task         see Additional
                   Permissions  Properties Editor.

                                Opens the Task
                                Permissions window
                                (see Task Permissions
                                Tab).
