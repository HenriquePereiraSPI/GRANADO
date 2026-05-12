# Data Binding

Data Binding

Data binding is used to connect and automatically synchronize data between different data
sources.

Data Binding Within the Same View

Data binding allows you to pass data between two different HTML Elements. To use data binding
you need to wrap your variable name in double curly brackets {{ }} (two-way binding) or in double
square brackets [[ ]] (one-way binding).

HTML Editor        Runtime

HTML code

                   When you modify the value in one of the Web
                   Components, the value in the other one will be updated
                   accordingly.

 Data Binding in Screen Flows

  Data binding can also be used to pass data to Screen Flows.

  Data Binding Initialized by the Input's Value

  If you add an HTML View Input which has the same name as the Variable used in data binding,
  then data binding will be initialized by the HTML View Input's value.

   HTML Editor                                             Runtime

HTML code

Passing Data Back to Screen Flows

If you add an HTML View Output which has the same name as the Variable used in data binding,
then the Variable's value will be passed to Screen Flows. To pass data to the Output, you need to
use two-way binding. The current Variable's value will be taken upon submitting the Screen.

HTML Editor                        Runtime

       HTML code

 Types of Data Binding

  One-Way Data Binding

  Double square brackets [[ ]] used in the code mean that it is one-way data binding and it supports
  only downward data flow.

   HTML code

At runtime, when you modify the first Element, the second one will be updated accordingly. But if
you modify the second Element, the first one will not change.

Two-Way Data Binding

Double curly brackets {{ }} used in the code mean that it is two-way data binding and it supports
both upward and downward data flow.

Two-way data binding used to pass data between Web Components is described in Data Binding
Within the Same View and in Data Binding in Screen Flows.

Binding to Standard HTML Elements

Two-way data binding used to pass data between Standard HTML Elements involves the following
syntax:

      HTML code

  To two-way bind to HTML Element you need to use a double colon :: and specify an event name
  that binding is supposed to listen for. In the example above we use the "keyup" event in the first
  Element and the "change" event in the second one.

  At runtime, when you modify the first Element, the second Element will be updated immediately,
  because the "keyup" event is triggered immediately at every key press. But when you modify the
  second Element, the first Element will be updated only after the "change" event which is triggered
  when losing focus.

 Binding to an Array Element

To bind to an n-th array element, use the following syntax:

{{array.n}}

Binding to an Object Property

To bind to an object property, use the following syntax:

{{object.property}}

To learn more about data binding, refer to Polymer Library articles related to data binding.
