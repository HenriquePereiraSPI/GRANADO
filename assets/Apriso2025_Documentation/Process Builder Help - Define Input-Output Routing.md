# Define Input-Output Routing

Define an Input-Output Routing

To Define a Routing Between a Function Input and Output

Use one of the following options:
           Use the drop-down list of previous Function Outputs of the matching type in the Function
           Input properties

              Manually set the routing lines in the Function Navigation diagram

  The system will report an error on validation if the data type of the previous Function Output is not
  convertible into the Input data type.

Drag-and-Drop Actions on Inputs

Source Target                         Action

Input Function (in Entity Explorer) or This DFC creates an Output in the target Function. It also
          place between Outputs in the links the Output to an Input.
          same Step.

Input Function (in Entity Explorer) or This DFC creates an Output in the target Function. It also

place between Outputs in              creates a Session Variable as an Output routing and sets

another Step.                         the Session Variable as the Input source.

Input Output in another Function in This DFC links an Output to an Input.
          the same Step.

Input Output of a Function in         This DFC creates a Session Variable as an Output routing
          another Step.               and sets the Session Variable as the Input source.

Drag-and-Drop Actions on Outputs

Source Target                         Action

Output Function (in the Entity        This DFC creates an Input in the target Function. It also
          Explorer) or place between  links an Output to the Input.
          Inputs in the same Step.

Output Function (in the Entity        This DFC creates an Input in the target Function. It also
          Explorer) or place between  creates a Session Variable as an Output routing and sets
          Inputs in another Step.     the Session Variable as the Input source.

Output Input in another Function in the This DFC links an Output to an Input.
          same Step.

Output Input of a Function in another This DFC creates a Session Variable as an Output routing

Step.                                 and sets the Session Variable as the Input source.
