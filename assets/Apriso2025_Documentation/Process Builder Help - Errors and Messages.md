# Errors and Messages

Managing Screens in Process Builder includes an improved way of raising errors and displaying
messages.

Displaying Error Messages

To display the error message:

       1. Navigate to Dictionary screen and open Dictionary Links.
       2. Change the Context filter to [CustomLiteral].
       3. Add a new Literal: NO_PRODUCT.

          4. After creating the literal, add its translation, for example:
              Product: {ProductNo} does not exist

          5. Use the DisplayError Business Component:

       6. The message displayed will be as follows:

The Business Component (BC) behavior is exactly the same as that of the standard Show
Message Function, except that the Code Input should contain the message code defined in the
custom literal. The BC does not support displaying an error in a pop-up window.

  To get a formatted message without raising an error, use the GetPortalMessage BC.
If you need to calculate if the error should be displayed (in a User Formula Function), consider
using the DisplayCalculatedError BC, which takes the formula to be executed as the Input:

  Inside the formula, assign the message code (from the custom literal) to Code if you want to display
  an error. If a Code is empty, the error will not be displayed.

 Messages

  A message can be used to inform or warn the user about a specific situation:
              The message code should first contain the main entity to which it is referring as well as
              information about the message type or validation type that can trigger its display
              The message must be written in all caps (e.g., PRODUCT_LOCATION_ERROR,
              CONTAINER_LOCATION_INVALID)
              The message content can also contain variables (e.g., "Product: {ProductNo} does not
              exist")
