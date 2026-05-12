# Screen Interface Input

Screen Interface Inputs

It is possible to insert values from Inputs of the Screen Interface into HTML.

<input type="text" value ="{Input}">

Inputs                               HTML Layout Editor                         Runtime

           DFC Function
           Navigation:

        Screen Interface             HTML code
        properties:

For Inputs of the Integer, Decimal, and DateTime types, it is possible to format the value in HTML
code using suitable .NET formats (refer to Formatting Overview at Microsoft Docs) with the syntax
{InputName:Format}. See the following examples:

Format             Input value       Displayed value                    Description
                                     0009                               Five digits
{TestInteger:00000} 9                $99.99                             Currency string
                                     Monday, January 01, 1900           Full date/time pattern (long
{TestDecimal:C} 99.99                12:00:00 AM                        time)

{TestDateTime:F} 1900-01-01
                           00:00:00

The Screen Interface Inputs converter cannot be used with the Complex data type.
