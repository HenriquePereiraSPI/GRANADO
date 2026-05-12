# Screen Interface Function Usage

A $Context object – a representation of a screen interface function – is available in the HTML layout
editor. For more information on the $Context methods, refer to HTML Layout Editor API
Documentation .

  You can use the $Context object only in the HTML tab.

           $Context.inputs - allows you to access inputs.
           $Context.outputs - allows you to access outputs.
           $Context.literals - allows you to access literals.
           $Context.view - allows you to access current view.
           $Context.showWorkInstructions() - allows you to display work instructions.
           $Context.submit() - submits the view. You can use this method in client mode to update
           external outputs – this action refreshes the screen in the server mode.
           $Context.callDFC() - allows you to call a DFC asynchronously. For more information, see
           Using AJAX.

Usage Examples

   Accessing Values from Screen Interface Function Inputs in JavaScript
   Setting Values of an Outputs in JavaScript
   Inserting Literals
   Displaying the Submit and Work Instructions Buttons
   Accessing a current View from HTML Layout Context
