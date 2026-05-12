# Panel Properties

The Panel Properties pane differs depending on the Panel's configuration. There are two different
cases:

Panel without Any Sub-Panels            Panel with at Least One Sub-
                                        Panel

Entity Explorer General Tab Properties  Entity Explorer General Tab Properties

View               Pane                 View              Pane

Field              Description
Name
Layer type         The name of the Panel (it cannot contain whitespace characters).

                   Defines the color scheme to be applied to some of the elements displayed in this
                   Panel (including the Panel background). The layer corresponds to the desired
                   visual depth for the Panel:

                              Background – the bottommost layer of the Screen
                              Panel – the middle layer of the Screen
                              Sub-Panel – the topmost layer of the Screen
                              Transparent (show content only) – there is no background, only the
                              content is visible

                   The same UI element can be displayed using a different color set, depending
                   on the Panel layer on which it is being placed.

   Orientation     This section is available only for Panels that have Sub-Panels.
   type

                    The type is important for Panels that are divided further into Sub-Panels, as the
                    type defines the orientation of the Sub-Panels inside the parent Panel. The
                    following types can be used:

                               Vertical – all the child Panels of a horizontal panel will be placed one
                               below the other

                                           The size of a Panel is interpreted as height
                                           The width will always be adjusted automatically to fill the parent
                                           Panel
                               Horizontal – all the child Panels of a horizontal panel will be placed one
                               next to the other

                                           The size of a Panel is interpreted as width
                                           The height will always be adjusted automatically to fill the parent
                                           Panel

Height/Width The size of the Panel represents its width or height, depending on the parent Panel
                    type:

                               If the parent Panel type is horizontal, the size of its child Panels is
                               interpreted as its height

                                           The width will always be adjusted automatically to fill the parent
                                           Panel
                               If the parent Panel type is vertical, the size of its child Panels is interpreted
                               as its width

                                           The height is adjusted to the parent Panel

                    There are three options to define the height or width of the Panel:

                               Fill – takes available space. When the total Layout size is greater than the
                               window size, it may decrease to 0 pixels.
                               Specific – the size can be defined in pixels or percentage
                               Match Content – uses only as much space as it is needed by its child
                               content

                   Keep in mind that the Match Content option does not define the
                   extrinsic size for the View container so using percentage dimensions in
                   the View content (e.g., style="height: 100%;") may not work as
                   intended.

                   Screen Flows Layouts are based on the CSS Flexbox. Some Layout
                   configurations might not work as expected.

                   You cannot mix size measures (pixels and percentages) in child Panels of the
                   same parent Panel.

Style              CSS Classes – apply additional CSS classes to the selected element

                   Inline Style – apply additional CSS definitions to the selected element

Default View

                   This section is only available for Panels that have no Sub-Panels.

                   A Default View is a way to share a particular View DFC between multiple Screens.
                   It will be suppressed by a View mapped to a Panel in a Screen definition. If you
                   want a View to be shared across more than one Screen, you can link it directly on
                   a Layout Panel as a Default View.

                              Name – the name of the default View to be displayed in this Panel on any
                              Screen that uses the Layout (this can be overridden by the Screen
                              configuration)
                              Revision – the revision of the default View; the following actions are
                              available:

                                              – invokes the Views lookup, where the user can copy and link
                                         a Default View (this option is not available for Layouts which are
                                         part of a Project)

                                              – invokes the Views lookup, where the user can link a Default
                                         View

                                              – unlinks the linked View

                                              – invokes the workspace of the linked View.
                                         If there is more than one revision of that View, a pop-up listing all
                                         of the revisions will appear (to open one of the revisions, double-
                                         click it).

                   In the case of PB Projects, the pop-up displays a default
                   revision of the View in the current Project.
