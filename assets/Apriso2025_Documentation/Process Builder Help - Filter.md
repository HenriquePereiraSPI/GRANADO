# Filter

Filter can be used to toggle displaying the content of an HTML tag using a condition:

   <htmltag data-flx-filter="[condition]">[content]</htmltag>

The condition can be written either in C# (for HTML Layout Editor) or JavaScript (for HTML
View). The condition must return a boolean value.

Inputs                               HTML Layout Editor/HTML Editor                    Runtime

        DFC Function Navigation:

                                     HTML code

        HTML View:

The Filter converter cannot be used with the Complex data type.

Iterate with Filter

<htmltag data-flx-iterate="i,List" data-flx-filter="[condition]"></htmltag>

data-flx-filter limits the number of iterations based on the condition which could contain correct C#
or JavaScript code returning a Boolean value, for example: "List[i]== X", "List[i] < X || List[i] > X",
etc.

Inputs                               HTML Layout Editor/HTML Editor                    Runtime
           DFC Function Navigation:

                                     HTML code

        HTML View:

If a standard control is hidden by a filter attribute, it will be shown finally at the end. Controls can
be surrounded by a filter attribute, but on the assumption that filtered elements will not include
the control.
