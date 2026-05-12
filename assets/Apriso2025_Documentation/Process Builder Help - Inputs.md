# Inputs

HTML View Inputs

It is possible to insert values from HTML View Inputs into HTML.

<input type="text" value ="{Input}"/>

Note that Inputs are added automatically when typing a valid name in curly brackets inside the
HTML tab, e.g., typing {test} will add an Input named "test" to the HTML View Inputs grid.

Inputs                               HTML Editor                  Runtime

                                     HTML code

For Inputs of the Integer, Decimal, and DateTime types, it is possible to format the value in HTML
code using suitable .NET formats (refer to Formatting Overview article at Microsoft Docs) with the
syntax {InputName:Format}. See the following examples:

Format             Input value       Displayed value              Description
                                     0009                         Five digits
{TestInteger:00000} 9                $99.99                       Currency string
                                     Monday, January 01, 1900     Full date/time pattern (long
{TestDecimal:C} 99.99                12:00:00 AM                  time)

{TestDateTime:F} 1900-01-01
                           00:00:00
