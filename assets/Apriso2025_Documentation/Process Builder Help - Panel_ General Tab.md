# Panel_ General Tab

Screen Panel Definition

Screen Panel with a Linked View

Entity Explorer View             General Tab Properties Pane

Field              Description
Name
View Title         The name of a Panel.

                   The additional View title that can be displayed on the Screen.

                              Code – the code of the Dictionary Item linked to the Panel View; the
                              following actions are available:

                                              – adds a Dictionary Item (written in the text box) to the
                                         dictionary and links it to the Panel View title.

                                              – opens the Dictionary Items suggestion lookup window,
                                         which lists the existing Dictionary Items from which the user may
                                         choose.

                                                     When the user enters a part of the Dictionary Item
                                                     name, the system suggests a list of matching entries
                                                     from the database.
                                                     The chosen Dictionary Item is linked to the Panel View
                                                     title.

                                              – unlinks the previously added Dictionary Item (it is removed
                                         from the Code field).

                                              – opens the Dictionary Translations screen in the context of
                                         the linked Dictionary Items. For more information on this screen,
                                         refer to the Dictionary Translations topic in the Dictionary Help .
                              Translation – the translation of the Panel View's title according to the
                              translation added in the Dictionary Translations screen.

   View            Name – the name of the View to be displayed in this Panel on any Screen
                   that uses this Layout (this can be overridden by the Screen
                   configuration). When a Screen uses an embedded Layout, the field
                   displays the name of the default View that was linked to the Panel when
                   the Layout became embedded.
                   Revision – the revision of the default View; the following actions are
                   available:

                                   – invokes the Views lookup window, where the user can copy
                              and link a View.

                                   – invokes the Views lookup window, where the user can link
                              a View.

                                   – unlinks the linked View.

                                   – invokes the workspace of the linked View.

                   In the case of PB Projects, the pop-up displays default
                   revisions of Views in the current Project.

Default Action The Action executed when no other Action was invoked. The drop-down menu
                     lists all the Actions available in the View (on the selected Panel).

Refresh            The time interval in seconds after the View will be refreshed. This option can be

Interval Time used only with AJAX Views requests. When it is set to 0, the refresh is off.

[s]

Inherit            If selected, the Actions inherited from the Default View linked to the Panel directly
Actions from       on the Layout will be available.
Layout Panel
Default View

  For more information on Layout Panels, see Layout Panel Properties.
