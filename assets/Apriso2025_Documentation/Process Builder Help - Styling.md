# Styling

In the HTML tab, CSS styles are applied for each instance of a DFC.
In the CSS tab, CSS styles are applied only once per all instances of the same DFC.

CSS Styles

  It is recommended to use the already defined CSS classes. The CSS Framework is supported
  in the client mode. For details, see the CSS Framework Documentation .

Font Icons

You can use 3DS and Font Awesome icons in the HTML tab. For more information, see How to Use
Font Icons.

Including CSS Styles from an External File

   <link rel="stylesheet" type="text/css" href="[AprisoStyles]/mystyle.css">

In runtime, the [AprisoStyles] placeholder is replaced by a specific path. By default, the path looks
like this: <drive>\Program Files\Dassault Systemes\DELMIA Apriso
2025\WebSite\Portal\Styles\Default. You can also use the [Apriso] placeholder, which corresponds
to the following path: <drive>\Program Files\Dassault Systemes\DELMIA Apriso 2025\WebSite\Portal.

  To learn more about placeholders available in the HTML Layout editor, see Placeholders.

If you have a style that you want to reuse in many different DFCs, you should copy it to a file and
link it in the CSS tab, or create a Sub-DFC which will be linked on all of the screens.

Files linked to the CSS tab will be added as dependencies to the DFC in the GPM package.

Function Navigation  HTML Layout Editor                                              Runtime

                     HTML Tab

                                            HTML Layout Editor Code

                     CSS Tab

                     HTML Layout Editor Code

Defining the CSS Style in the HTML Tag

Function Navigation  HTML Layout Editor           Runtime
                                                  Runtime
                     HTML Layout Editor Code

Defining the CSS Class in the HTML Tab

Function Navigation  HTML Layout Editor

                     HTML Layout Editor Code

Defining the CSS Classes in the CSS Tab

Function Navigation  HTML Layout Editor           Runtime

                     HTML Tab

                                                  HTML Layout Editor Code

                   CSS Tab

                   HTML Layout Editor Code
