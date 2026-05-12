# Tab Attribute

This attribute is only available in HTML View.

   <htmltag data-flx-tab = "[tab action names]" ></htmltag>

This attribute can be used to display Action tabs. Allowed values:

           * or no value - displays all Action tabs
           "actionname" - displays a specific Action tab
           "actonname1,actionname2" - displays listed Action tabs
           "!actionname" - displays all except specified Action tab
           "!actonname1,!actionname2" - displays all except listed Action tabs

If an Action is disabled in the Entity Explorer, it must be removed from the HTML tab.

HTML View Actions                  HTML Editor                 Runtime

Actions tabs with defined titles:  HTML code
VIEWACTION, VIEWACTION2,
VIEWACTION3
