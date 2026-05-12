# Disable Button

This attribute is only available in HTML View.

   <htmltag data-flx-button = "[action names]" data-flx-button-disabled = "[action names]" >
   </htmltag>

Disables the specified Actions. Allowed values:

           * or no value - disables all Actions
           "actionname" - disables specific Action
           "actonname1,actionname2" - disable listed Actions
           "!actionname" - disables all actions except specified Action
           "!actonname1,!actionname2" - disables all except listed Actions

If an Action is disabled in the Entity Explorer, it must be removed from the HTML tab.

HTML View Actions                    HTML Editor                  Runtime

Action buttons with defined titles:  HTML code
act1, act2, act3
