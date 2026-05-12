# Custom Attribute Overview

The table describes special attributes that can be used in the HTML tab of HTML Layout Editor and HTML
Editor.

Action Name HTML Tag                          Description                     Typical Usage          Availability

Iterate            <htmltag data-flx-         Duplicates the                  Generation of          Only inside a tag

                   iterate="i,ListA,ListB">... HTML block                     multiple radio         (must be a tag
                   </htmltag>
                                              (including the tag              buttons and other attribute).

                                              containing the                  repeatable elements.

                                              attribute).

Iterate            <htmltag data-flx-iterate- Duplicates the                  Generation of combo Only inside a tag
children
                   children=                  HTML block (child               box and other          (must be a tag

                   "i,ListA,ListB">...        nodes only).                    repeatable elements attribute).
                   </htmltag>
                                                                              with the same

                                                                              parent.

Filter             <htmltag data-flx-filter=" Filters the HTML                         To cut a part Only inside a tag
                   [condition]">...</htmltag> tags (tags that do
                                                                                       of the HTML (must be a tag
                                                         not meet the filter                         attribute).
                                                                                       code
                                                         condition).
                                                                                       May be used

                                                                                       with Iterate

                                                                                       to filter only This cannot be

                                                                                       specific      used in

                                                                                       elements of containers

                                                                                       the list      containing

                                                                                                     standard Process

                                                                                                     Builder controls:

                                                                                                     User

                                                                                                     Inputs/Outputs,

                                                                                                     Business

                                                                                                     Controls, Sub-

                                                                                                     DFCs.

Attribute          <htmltag data-flx-attr= "  The entire tag is Boolean attributes                   Tags supporting
                   [attribute]"></htmltag>    changed to text (for example,                          Boolean
                                              (the attribute values checked).                        attributes (checked,
                                              may be Screen                                          selected, and other)
                                              Interface input
                                              only).

                                              This is only
                                              used to ensure
                                              compatibility
                                              with HTML.

Bind               <htmltag data-flx-bind= "  Binds the HTML                           To replace Inside input, button,
                   [OutputName]"></htmltag>   Input value to the                       standard textarea, select tags.
                                              Screen Interface                         User Inputs
                                              Output.                                  To simplify
                                                                                       routing (one
                                                                                       Output is
                                                                                       bound to
                                                                                       many
                                                                                       Inputs)

   Dynamic         <htmltag data-flx-dynamic- Works the same       To replace Inside input, button,
   Bind                                                            standard textarea, select tags.
                   bind= "[OutputName]">   way as Bind with        user inputs
                   </htmltag>              an additional           To simplify
                                                                   routing (one
                                           benefit of              output is
                                                                   bound to
                                           dynamically             many
                                                                   Inputs)
                                           assigning output        To
                                                                   dynamically
                                           name.                   assign
                                                                   Output
                                                                   name

Key                <htmltag data-flx-key= " Calls click event      View or DFC Inside input, button,

                   [key_number]"></htmltag> or after pressing the  submit on textarea, select tags.

                   <htmltag data-flx-key= " button. The value of   key

                   [key_enumerable]">      the attribute is        Pressing a

                   </htmltag> or <htmltag  matched with a key      button on

                   data-flx-key= "#        located in the          key

                   [key_code]"></htmltag>

                                           "KeyboardMapping"

                                           section of the

                                           Central

                                           Configuration file

                                           (for details see

                                           Central

                                           Configuration

                                           Documentation ).

Autoadvance <htmltag data-flx-             Moves focus to the      More           Inside input, button,
                                                                   convenient     textarea, select tags.
                   autoadvance= "          next Input when         forms filling
                                                                   Automated       Specific for the
                   [true/false]"...</htmltag> autoadvance                         select element:

                                           conditions are met.

                                           For details, see        autoadvance    AutoSubmit

                                           Autoadvance.            functionality  when

                                                                   to next        tabbing into

                                                                   control after  drop-down

                                                                   scan action    menu or

                                                                                  selecting an

                                                                                  option with

                                                                                  DOWN

                                                                                  ARROW key

                                                                                  and pressing

                                                                                  ENTER is

                                                                                  supported

                                                                                  only on the

                                                                                  Mozilla

                                                                                  Firefox

                                                                                  browser;

                                                                                  other

                                                                                  browsers

                                                                                  that are

                                                                                  supported

                                                                                  submit a

                                                                                  page on

                                                                                  DOWN

                                                                                  ARROW key

                                                                                  pressed

                                                                                              Autoadvance
                                                                                              after mouse
                                                                                              click is not
                                                                                              supported on
                                                                                              the Google
                                                                                              Chrome
                                                                                              browser

Autofocus          <htmltag data-flx-          If an attribute is set                         Inside input, button,
                   autofocus= "[true/false]">  to true, the control                           textarea, select tags.
                   </htmltag>                  is automatically        Automatic Input
                                               focused when a          focusing after
                                               page is loaded.         starting execution of
                                                                       a DFC.

Action             <htmltag data-flx-action=   Adds an "onclick"       Enabling actions in    Only in HTML View.
Button             "[action]"> </htmltag>      event with a            offline mode.          Inside button, image,
Disable                                        callback to submit                             input tags.
Button                                         the view.
Tab                                                                                           Only in HTML View.
Tab Text           <htmltag data-flx-button= Adds specified            Enabling actions in
Scan               "[actions]"> </htmltag> action buttons.             offline mode.          Only in HTML View.
                                                                                              Inside a tag with
Validate           <htmltag data-flx-button-   Allows to disable       Disabling actions in   data-flx-button
                   disabled= "[actions]">      specific buttons        offline mode.          attribute.
                   </htmltag>                  based on action                                Only in HTML View.
                                               names.
                                                                                              Only in HTML View.
                   <htmltag data-flx-tab= " Adds specified             Enabling tabs in       Inside a tag with
                                                                       offline mode.          data-flx-tab attribute.
                   [actions]"> </htmltag>      action tabs.
                                                                                              Only in input.
                   <htmltag data-flx-tab-      Allows to add           Providing additional
                                                                       information, like the
                   text= "[text]"> </htmltag> custom text to tab       number of items
                                                                       available under the
                                               headers.                tab.

                   <htmltag data-scan-mode= " Allows to configure Configuring code

                   [text]"> </htmltag>         text inputs to          scanning behavior.

                   <htmltag data-scan-type= " receive data from
                                               the device's
                   [text]"> </htmltag>

                                               scanner.

                   <htmltag data-scan-length=

                   "[text]"> </htmltag>

                   <htmltag data-scan-format=
                   "[text]"> </htmltag>

                   <htmltag data-scan-sign-
                   substitution= "[text]">
                   </htmltag>

                   <htmltag data-scan-
                   postfix= "[text]">
                   </htmltag>

                   <htmltag data-scan-area-
                   size= "[text]"> </htmltag>

                                               Displays inline         Immediate error        Inside input and
                                               validations.
                   <htmltag data-apr-                                  feedback during the textarea tags.
                   validate= "[true/false]">
                   </htmltag>                                          user data entry.

                   <htmltag data-apr-
                   validate= "[true/false]"
                   data-apr-validate-
                   message= "[message]">
                   </htmltag>
