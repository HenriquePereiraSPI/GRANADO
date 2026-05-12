# DFC Properties

To Launch the DFC Properties

       1. In the Entity Explorer, select a DFC.
       2. Choose one of the following options:

                      Choose View > Properties from the main menu.
                      Use the F4 shortcut.

You can also open the Entity Properties window by selecting a DFC in the Entity Manager or
Project Entity Manager and using one of the following options:

                      Choose Properties from the right-click menu.
                      Use the Shift+F4 shortcut.

DFC Properties

General Tab

                        Field      Description
                        Code
                                   Translated name of the
                        Subtype    DFC. The name can be
                                   up to 80 characters long.

                                   Types of the DFC. Use
                                   the following subtypes:

                                              Generic
                                              View
                                              Action
                                              Change
                                              Validate
                                              Data
                                              Initialize
                                              Extension
                                              Process
                                              Interface

                                   The Labor, Machine, and
                                   Background subtypes are
                                   visible if you selected one
                                   of them when creating the
                                   DFC. For more
                                   information on the
                                   subtypes, see New Entity
                                   Wizard.

                   Revision        The revision of the DFC.
                                   This field is read-only.

                   Default         The revision of the DFC
                   Revision        that is used in runtime. It
                                   is selected by default for a
                                   newly created DFC (next
                                   revisions of the DFC are
                                   not selected as the default
                                   ones).

                   Description The description of the
                                      DFC.

                   Valid           Enables changing the
                   Between         date range for the validity
                                   of the DFC. Values are
                                   not validated when
                                   changing. If values are
                                   incorrect, a warning is
                                   displayed during the entity
                                   validation.

                   Step shown The option is available
                   on preview only if HTML Layout

                                      Editor functionality is
                                      used. The drop-down
                                      menu enables the user to
                                      choose a step (available
                                      in this DFC) containing
                                      HTML Layout. The chosen
                                      step will be used in a
                                      Preview tool pane as a

                                                                       DFC preview or will be
                                                                       displayed on the Preview
                                                                       tool pane when the DFC
                                                                       becomes a sub-DFC of
                                                                       the other one.

                                                                       If no step is selected, the
                                                                       sub-DFC is presented by
                                                                       a default sub-DFC icon (or
                                                                       a Visualization Image) in
                                                                       the Preview pane.

                       Version                                         An auto-incremented
                                                                       number of a DFC that
                                                                       increases when you
                                                                       modify, save, and then
                                                                       compile the entity. Click
                                                                       Edit Mask to enter a
                                                                       custom mask.

                       Version host The name of the last
                                          server where a DFC has
                                          been modified and then
                                          compiled.

                       Compilation The date of the latest DFC

                       date                                            revision change.

                       Allow                                           If enabled, the entity can
                       editing in                                      be edited in the prototype
                       Prototype                                       status. This setting is
                       mode                                            selected when creating
                                                                       the entity.

Work Instructions Tab

Work instructions defined on the DFC level are visible at every step.

                        Field       Description
                        Visibility
                                    The visibility options for
                                    work instructions:

                                               Always – work
                                               instructions are
                                               displayed in
                                               runtime.
                                               Never – work
                                               instructions are not
                                               displayed in
                                               runtime. This
                                               option is selected
                                               by default.
                                               Dynamic – the
                                               visibility of work
                                               instructions can be
                                               dynamically
                                               controlled by an
                                               indicated session
                                               variable of the
                                               Boolean type (if
                                               the session
                                               variable value is
                                               set to true, then
                                               the work
                                               instruction will be
                                               displayed).

                   Display            Work instructions in the
                   Mode               cancelled or on hold
                                      status are not displayed
                                      in runtime. For more
                                      information, refer to
                                      Work Instructions
                                      Help .

                                    The configuration of the
                                    appearance of the work
                                    instructions:

                                               Sidebar – work
                                               instructions are
                                               displayed in a
                                               sidebar panel that
                                               can be positioned
                                               at four different
                                               sides of the screen
                                               (in the Docking
                                               section).

                                                                                                            Pop-up – work
                                                                                                            instructions are
                                                                                                            displayed in a pop-

                                   up window (the
                                   Show Work
                                   Instructions
                                   button appears
                                   only if the Pop-up
                                   option is selected).

                                                         Maximized
                                                         – if
                                                         selected,
                                                         the pop-
                                                         up window
                                                         is opened
                                                         in a full-
                                                         screen
                                                         mode. The
                                                         Size
                                                         section is
                                                         grayed
                                                         out.

                                   You can change the default
                                   pop-up appearance and
                                   behavior in the
                                   ficontrols.js file (for more
                                   information, refer to the
                                   jqModal plugin
                                   documentation).

                                   Use work instructions in
                                   the pop-up mode on
                                   devices such as
                                   smartphones or tablets.

                   Docking         The sidebar location of
                                   work instructions: top, left,
                                   bottom, and right. Available
                                   only if the Sidebar display
                                   mode option is selected.

                   Size            The size of the sidebar and
                                   pop-up window (width and
                                   height separately). If there
                                   is more than one size set
                                   (from step or DFC), the
                                   largest size is chosen. The
                                   minimum size that you can
                                   set is 100px.

                   Work            The list of available session

                   Instructions variable outputs (list of char

                   from            type) defined as work

                                   instructions in all DFC

                                   returns: a work instruction
 Advanced Tab           Session    name or FUID of a specific
                        Variable   work instruction revision.

                   Field           Description

                   Properties Additional properties that
                                   you can include using the
                                   JSON format.

                   Created Date the entity was created

                   on              on.

                   Created User who created the entity.
                   by

                   Modified Date the entity was last

                   on              modified on.

                   Modified User who last modified the

                   by              entity.

                   ID              ID of the record in the

                                   database.

                   FUID            FUID of the record in the
                                   database.

Interface Tab

Using the Interface tab instead of previous External Inputs functionality is recommended.

                        Field      Description
                        Enable
                        Interface  The Interface functionality is
                                   enabled by default for non-
                                   active DFCs. The default
                                   selection of this check box
                                   is controlled by the Enable
                                   the DFC interface by
                                   default check box (see
                                   Advanced tab in Options
                                   dialog box).

                                   If the input of the
                                   Complex or List of
                                   Complex data typ exists
                                   in the DFC, the Enable
                                   Interface check box is
                                   selected and grayed out.

                                   Removes external inputs

                   (Remove and outputs that are not

                   all the         used by any function within

                   unused a DFC.

                   External

                   Inputs and

                   Outputs)

                   Inputs          Gives the possibility to add
                                   and remove external inputs
                                   that you can use within a
                                   DFC. You can provide the
                                   input name, set the input
                                   data type, and select if the
                                   input is required or not. The
                                   following sections are
                                   available for each external
                                   input:

                                   Test Value – the
                                   input value used in
                                   Advanced Test
                                   Run.
                                   Default Value – the
                                   value used for non-
                                   required inputs if no
                                   other value was
                                   specified for them.

                                                                                                   You can also create
                                                                                                   external inputs while
                                                                                                   editing a function. For
                                                                                                   more information, see
                                                                                                   Function Navigation
                                                                                                   Right-Click Menu.

                        Outputs    Gives the possibility to add
                                   and remove external
                                   outputs that you can use
                                   within a DFC.

                                   Allowed output values –
                                   makes it possible to add
                                   values to the entered
                                   outputs (except outputs of
                                   the Complex data type).

                                   You can also create
                                   external outputs while
                                   editing a function. For
                                   more information, see
                                   Function Navigation
                                   Right-Click Menu.
