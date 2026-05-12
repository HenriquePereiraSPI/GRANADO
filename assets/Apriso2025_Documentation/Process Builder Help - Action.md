# Action

This attribute is only available in HTML View.

<htmltag data-flx-action = "[action name]" ></htmltag>

If an Action is disabled in the Entity Explorer, it must be removed from the HTML tab.

HTML View Actions  HTML Editor                                                          Runtime

Action without a defined
title.

                                         HTML code

Note that this attribute only adds an "onclick" event with a callback. It does not add the title of the
button defined in the Action's properties (unlike the Button attribute). Therefore, the title of the
button has to be added in the HTML Editor.
Another example:

   <input type="button" data-flx-action="SUBMIT" value="SUBMIT"/>
