# Dynamic Navigation Between Steps

Dynamic navigation is an additional way of defining navigation between steps in a DFC that
contains a complex step flow. You can govern the flow by setting the value of one of the function
outputs in the step called the Dynamic Navigation Output.

The Dynamic Navigation Output can be chosen in the Advanced tab of the step properties pane.

You can disable the dynamic navigation output with use of the EnableDynamicNavigation key
located in the ProcessBuilder section of the Central Configuration file. For details, see Central
Configuration Documentation .

Dynamic Navigation Performed action
Output value

STOP               The system should go to the stop node, as if the navigation contained an
                   arrow going to the stop node.

LOGOUT             The system should go to the logout node, as if the navigation contained an
                   arrow going to the logout node.

ABANDON            The system should go to the abandon node, as if the navigation contained
                   an arrow going to the abandon node.

BACK               The system should go to the last step that was marked as return step. If
                   there is no step in the execution history with this flag set, the system should
                   stay on the same screen.

00000000-0000-     The system should go to the step with an FUID equal to the one provided, as
0000-0000-         if the navigation contained an arrow going to this step. The system has to
000000000000       validate that the FUID is correct, i.e., that there exists a step in the current
                   DFC with this FUID. If the validation fails, an error is shown stating that the
                   next step identifier is invalid.

(empty)            The system should use the static navigation configuration as defined in the
                   DFC.

(other)            The system should display an error stating that the dynamic navigation failed
                   due to an invalid next step identifier.
