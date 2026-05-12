# HTML Layout Editor Right-Click Menu

This can be accessed by using the right-click menu keyboard key or by right-clicking anywhere on
the HTML Layout Editor workspace.

HTML Tab

                   Command      Description

                   Insert Input Adds an Input tag: {Input name}

                   Insert Literal Adds a Literal tag:
                                          {@Literal name}

                   Link to Output Adds an Output tag: data-flx-bind="Output name"

                   Iterate      Adds an Iterate tag: data-flx-iterate="index,
                                ListInput"

                   Iterate Children Adds an Iterate children tag:data-flx-iterate-
                                          children="index, ListInput1, ListInput2"

                   Filter       Adds a Filter tag:data-flx-filter="C# code:
                                ListInput[index] == true"

                   Insert 'If'  Adds a Conditional tag: {?condition?
                   condition    valueiftrue:valueiffalse?}

                   Set Boolean  Adds a Boolean attribute tag: data-flx-attr="Input
                   Attribute    containing Boolean attribute"

                   Assign Key   Adds a Key attribute tag: data-flx-key="KeyNo or
                                #KeyCode or [KeyEnum]"

                   Autoadvance  Adds an Autoadvance attribute tag: data-flx-
                                autoadvance="true" maxlength="number of
                                characters, i.e. 10"

                   Autofocus    Adds Autofocus attribute tag: data-flx-
                                autofocus="true"

                   Undo         Undoes the modification.

                   Redo         Redoes the modification.

                   Cut          Copies and cuts the selected text.

                   Copy         Copies the selected text.

                   Paste        Pastes the selected text.

                   Delete       Deletes the selected text.

                   Find/Replace Opens the Find/Replace Dialog Box.

                   Select All   Selects all of the text.

                   Switch Back to Switches back to the Layout Editor. All content
                   Layout Editor from the HTML Layout Editor will be deleted. The

                                          Screen Interface Function will be removed from
                                          the Function Navigation as well.

JavaScript Tab, CSS Tab

                   Command Description
                   Link File for Adds the link to the required file on all platforms
                   All Platforms (Mobile and Desktop).

                                        JavaScript tab

                                            <script src="[AprisoScripts]/myscript.js"></script>

                                        CSS tab

                                            <link rel="stylesheet" type="text/css" href="
                                            [AprisoStyles]/mystyle.css">

                                          Alternatively to link script file to all platforms you
                                          can use the following syntax:

                                               <script src="[AprisoScripts]/asdf.js" data-flx-
                                               include="Desktop|Mobile" />
                                               <link rel="stylesheet" type="text/css" href="
                                               [AprisoStyles]/mystyle.css" data-flx-
                                               include="Desktop|Mobile">

                                  Mobile and Text platforms are no longer
                                  supported.

                   Link File for  Adds the link to the required file only on the Desktop
                   Desktop        platform.
                   Platform
                                  JavaScript tab

                                  <script src="[AprisoScripts]/myscript.js" data-flx-
                                  include="Desktop"></script>

                                  CSS tab <link rel="stylesheet" type="text/css"

                                  href="[AprisoStyles]/mystyle.css" data-flx-
                                  include="Desktop">

                   Link File for  Adds the link to the required file only on the Mobile
                   Mobile         platform.
                   Platform
                                  JavaScript tab

                                  <script src="[AprisoScripts]/myscript.js" data-flx-
                                  include="Mobile"></script>

                                  CSS tab

                                  link rel="stylesheet" type="text/css" href="

                                  [AprisoStyles]/mystyle.css" data-flx-

                                  include="Mobile"> In runtime, the names of folders
                                  in square brackets ([AprisoStyles], [AprisoScripts],
                                  and [Apriso]) are changed to a specific path:

                                  [AprisoStyles] is changed to

                                  <drive>\Program Files\Dassault
                                  Systemes\DELMIA Apriso
                                  2025\WebSite\Portal\Styles\Default

                                  [AprisoScripts] is changed to

                                  <drive>\Program Files\Dassault

                                       Systemes\DELMIA Apriso
                                       2025\WebSite\Portal\Scripts

                                     [Apriso] is changed to<drive>\Program

                                       Files\Dassault Systemes\DELMIA Apriso
                                       2025\WebSite\Portal

                           Instead of "[AprisoStyles]/mystyle.css " or "
                           [AprisoScripts]/myscript.js" the full path can be
                           specified (http://...).

                           Files linked to the JavaScript or CSS tab will be
                           added as dependencies to the DFC in the GPM
                           Package.

                           Desktop|Mobile values are taken from the
                           Platform System Variable (see Session Variable
                           Input Source topic).

                   Undo    Undoes the modification.

                   Redo    Redoes the modification.

                   Cut     Copies and cuts the selected text.

                   Copy    Copies the selected text.

                   Paste   Pastes the selected text.

                   Delete  Deletes the selected text.

                   Find/Replace Opens the Find/Replace dialog Box.

                   Select All Selects all of the text.
