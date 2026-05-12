# Layout_ General Tab

Layout: General Tab

The Layout General tab options are different depending on whether the Layout has Panels linked
or not.

General Tab of a Layout  General Tab of a Layout
without Panels           with at Least One Panel Added

Field              Description
Name               The name of the Layout (it cannot contain whitespace characters).
Revision           The Layout revision number (must be unique).

                      The revision of the Layout which will be used in runtime. It is selected by default
                      for a newly selected Layout (the next revisions of the Layout will not be selected
                      as default ones).

Description The description of the Layout.

Layer type Defines the color scheme to be applied to some of the elements displayed in this
                   Panel (including the Panel background). The layer corresponds to the desired visual
                   depth for the Panel:

                              Background – the bottommost layer of the Screen
                              Panel – the middle layer of the Screen
                              Sub-Panel – the topmost layer of the Screen
                              Transparent (show content only) – there is no background, only the
                              content is visible

                   The same UI element can be displayed using a different color set, depending on
                   the Panel layer on which it is being placed.

Orientation
type

                   The Orientation type section is available only for Layouts with Panels linked.

Style              The orientation type is important for Panels that are divided further into Sub-Panels,
                   as the type defines the orientation of the Sub-Panels inside the parent Panel. The
Default            following types can be used:
Header
                              Vertical – all the child Panels of a horizontal Panel will be placed one
                              below the other

                                         The size of a Panel is interpreted as height
                                         The width will always be adjusted automatically to fill the parent
                                         Panel
                              Horizontal – all the child Panels of a vertical Panel will be placed one next
                              to the other
                                         The size of a Panel is interpreted as width
                                         The height will always be adjusted automatically to fill the parent
                                         Panel

                              Floating – not available

                              CSS Classes – apply additional CSS classes to the selected element
                              Inline Style – apply additional CSS definitions to the selected element

                              Name – the name of the default Header to be displayed above the Layout
                              (this can be overridden by the Screen configuration)
                              Revision – the revision of the default Header; the following actions are
                              available:

                       – invokes the Views lookup, where the user can link a default
                   header View

                       – unlinks the linked header View

                       – invokes the workspace of the linked header View (for details,
                   Header) . If there is more than one revision of that View, a pop-up
                   listing all of the revisions will appear (to open one of the revisions,
                   double-click it).

                   In the case of PB Projects, the pop-up displays a default
                   revision of the View in the current Project.

Version            An auto-incremented number of a Layout. It increases when you modify and save
                   the Layout or change its status. Click Edit Mask to enter a custom mask.

Version host The name of the last server where a Layout has been modified and saved or its
                   status has changed.
