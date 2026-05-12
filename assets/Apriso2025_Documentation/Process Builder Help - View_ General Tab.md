# View_ General Tab

View: General Tab

Field     Description
Name      The name of the View.
Revision  The unique View revision number.
Default   If selected, this revision of the View will be used in runtime.
Revision

          A newly created View entity is set automatically as the default revision. The next
          revisions will not become "default" automatically.

Title     Code – the name of the Dictionary Item of the View title; the following
          actions are available:

              – adds the Dictionary Item (written in the text box) to the
          dictionary and links it to the View title

              – invokes the Dictionary Items suggestion lookup window,
          which lists the existing Dictionary Items from which the user may
          choose

                     When the user enters a part of the Dictionary Item name,
                     the system suggests a list of matching entries from the
                     database
                     The chosen Dictionary Item is linked to the View title

                                   – unlinks a previously added Dictionary Item (it is removed
                              from the Code field)

                                   – opens the Dictionary Translations screen in the context of
                              linked Dictionary Items (for more information, refer to the
                              Dictionary Translations topic in the Dictionary Help )
                   Translation – the translation of the View's title according to the translation
                   added in the Dictionary Translations screen

                   A value of a variable from the Screen Flows session can be displayed in a pop-
                   up title. In order to do this, specify a variable name in curly brackets, e.g., "Edit
                   WIP Order: {WIPOrderNo}".

Description        The description of a View.
Subtype
                   The type of a View. There are five options:

                              HTML – a special type reserved for offline mode
                              HTML Header – a special type reserved for Views which may be linked as
                              the Header on an Offline Screen
                              General – a standard View (without Forms)
                              Form – a View with the possibility to add Forms
                              Header – a special type reserved only for Views which may be linked as a
                              Header on the Screen

View DFC

                     The section appears only for Views of type General, Form and Header.

                   Name – the name of the View DFC linked to the View
                   Revision – the revision of the View DFC; the following actions are
                   available:

                                   – invokes the DFCs lookup window, where the user can copy
                              and link a View DFC

                                   – invokes the DFCs lookup window, where the user can link a
                              View DFC

                                   – unlinks the linked DFC

                                   – invokes the workspace of the linked DFC. If there is more
                              than one revision of that DFC, a pop-up listing all of the revisions
                              will appear (to open one of the revisions, double-click it).

                   In the case of PB Projects, the pop-up will display default
                   revision of the DFC (of the View type) in the current Project.

Version            An auto-incremented number of a View. It increases when you modify and save the
                   View or change its status. Click Edit Mask to enter a custom mask.

Version host The name of the last server where a View has been modified and saved or its
                   status has changed.
