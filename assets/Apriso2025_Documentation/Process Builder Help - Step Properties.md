# Step Properties

To Launch the Step Properties Tool Pane

       1. Select a step in the Entity Explorer or in the navigation diagram.
       2. Choose one of the following options:

                      Choose Properties from the step navigation right-click menu.
                      Use the F4 keyboard shortcut.
                      Click (Properties) in the toolbar.
                      Choose Properties from the View menu.

General Tab

                       Field            Description

                       Name             The translated name of
                                        the step. The name can
                                        be up to 80 characters
                                        long.

                       Description The textual description
                                             of the step.

                       Routing          Enables setting a
                       Output           function output that will
                                        be used as an output
                                        routing of a DFC step.

                       Return Step      When this check box is
                                        selected, it indicates
                                        that the step is in the
                                        step flow and should be
                                        considered when the
                                        "BACK" value is used in
                                        runtime.

                       Show             This button analyzes
                       Execution        the dependencies
                       Order            between functions
                                        within the step and
                                        shows the predicted
                                        order of execution. See
                                        Define Functions
                                        Dependencies.

                       Functions        See Define Functions

                       Dependencies Dependencies.

Work Instructions Tab

     Work instructions defined on the DFC level are visible at every step.

  The settings of the Display Mode section are not supported in the Screen Flows client mode. In
  this case, use Work Instructions business control.

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

                                    The display mode options
                                    are not available if the work
                                    instructions business
                                    control has been added to
                                    the step. You can change
                                    the default pop-
                                    up appearance and
                                    behavior in the
                                    ficontrols.js file (for more
                                    information, refer to the
                                    jqModal plugin
                                    documentation).

                                    Use work instructions in
                                    the pop-up mode on
                                    devices such as
                                    smartphones or tablets.

                   Docking          The sidebar location of
                   Size             work instructions: top, left,
                                    bottom, and right. Available
                                    only if the Sidebar display
                                    mode option is selected.
                                    The docking options are
                                    not available if the work
                                    instructions business
                                    control has been added to
                                    the step.

                                    The size of the sidebar and
                                    pop-up window (width and

 Advanced Tab                       height separately). If there
                                    is more than one size set
                                    (from step or DFC), the
                                    largest size is chosen. The
                                    minimum size that you can
                                    set is 100px. The size
                                    options are not available if
                                    the work instructions
                                    business control has been
                                    added to the step.

                   Work             The list of available session

                   Instructions variable outputs (list of char

                   from             type) defined as work

                   Session instructions in all DFC

                   Variable steps. The session variable

                                    returns: a work instruction

                                    name or FUID of a specific

                                    work instruction revision.

                   Field            Description

                   Dynamic When set, this indicates
                   Navigation that the dynamic navigation
                   Output output should be used

                                    when navigating from the
                                    step. The output must be of
                                    the Char type. When you
                                    click Change, the system
                                    opens the window to
                                    choose an appropriate
                                    output. See Dynamic
                                    Navigation Between Steps.

                   Invoke           Contains a list of DFCs that
                   DFCs /           can be called
                   AJAX             asynchronously from the
                                    scripts. The invoked DFC
                                    revision must be unique.
                                    See Using AJAX.
