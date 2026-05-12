# Simple Conditionals

Conditionals

Conditionals can be added in HTML tab between or inside HTML tags.

{?[condition]?[content if true]:[content if false]?}

The condition defines which content should be displayed. The content can range from simple text
to HTML code.

Inputs                               HTML Layout Editor/HTML Editor  Runtime
           DFC Function Navigation:

                                     HTML code

HTML View:

It is possible to embed more complicated HTML within the displayed result, see advanced
examples below.

  Conditional statements cannot be nested.

  Conditionals cannot be used with the Complex data type.

Advanced Examples

Conditionals can be used inside HTML attributes.

   <p style="background-color:{?Status=='online'?green:red?}\"><b>{?Status=='online'?
   online:offline?}</b></p>
   {?Status=='online'?<div><img src="Resources/Images/Images/Status.Normal.png"></div>:<div>
   <img src="Images/Status.Error.png"></div>?}

Below are other examples of using conditionals inside HTML attributes:

<div class="{?Input1==='AAA'?red:green?}"></div>

<input value="{?Input1==='AAA'?red:green?}"/>

Conditionals cannot be used inside the Attribute tag.
