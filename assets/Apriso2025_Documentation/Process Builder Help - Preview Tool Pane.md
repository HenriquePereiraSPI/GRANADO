# Preview Tool Pane

Preview

The Preview tool pane gives the ability to preview a screen created in the HTML, JavaScript and
CSS tabs (after conversion to HTML Layout or within an HTML View). It is also possible to preview
certain screen flows entities.

You can display the preview for:

           DFCs with defined Step shown on Preview property
           Views that have linked DFC with defined Step shown on Preview property
           HTML Views
           Screens (only in the Entity Manager)
           Layouts (only in the Entity Manager)

It is possible to unpin this pane and show it on the second monitor.

AJAX calls are only available in runtime (not in the Preview tool pane).

To Enable/Disable Options:

Click              button to show more options. Click                 button to hide options.

Field              Description
                   The ability to preview code from HTML Layout Editor in the chosen browser.
Open in
Browser            The preview is saved locally in Preview.html file located in your Temp folder. To see
                   the current preview in the browser, you have to refresh the browser.

                   It enables to see the preview of the screen written in HTML tab. The button appears
                   only when the Auto Refresh check box is cleared.

                            Options

   Re-Render The button refreshes the preview of the current Step with all its sub-DFCs. The sub-
   Sub-DFCs DFC will not be displayed if the Hide on Preview check box is selected. Preview is

                   generated based on the following priorities:

                          1. Custom Image – If an Image for visualization check box on a sub-DFC
                              pane is selected.

                          2. HTML preview – If a sub-DFC has a Step shown on preview functionality
                              used (HTML Layout only).

                          3. Default image – If none of the above-mentioned options is set.

Auto               If selected, the preview parses code from HTML Layout Editor automatically on
Refresh            every change (selected by default).
Browser
Language           The drop-down contains browsers installed on your client.

Include            Used to select the language that will be used to display the Preview content. The
JavaScript         languages that are available in the drop-down menu are those that are selected on
                   the Translation Settings screen (main language and target languages). For more
                   information on this screen, refer to the Translations Settings topic in the Dictionary
                   Help .

                   If selected, the JavaScript code will be included and executed in preview tool pane
                   (the check box is cleared by default). The check box appears only when HTML
                   Layout Editor is used.

                   Because of the JavaScript complexity and DFC design (main DFC may include
                   Script variables used in sub-DFCs) script errors may be only validated on
                   Preview (if Include JavaScript check box is selected) or Test Mode view.

  If there is an error in HTML (scripts), the line number with the invalid code is displayed. Note
  that this line number is the number of the line in the generated HTML (view HTML Source in the
  browser or in the preview).

Labels Translation

If the Preview tool pane is visible and you open the DFC, screen, or view in the Dictionary Links
screen (using the Translate option), you can use the tool pane to translate labels. Clicking the
preview element highlights it in the pane and automatically selects it in the Text/Literal Item list.
