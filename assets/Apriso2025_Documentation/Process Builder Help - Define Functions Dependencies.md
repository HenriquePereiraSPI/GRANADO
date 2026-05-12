# Define Functions Dependencies

Define Function Dependencies

Process Builder displays the order of Functions in the Step by reading their dependencies and
determining their actual sequence.

To Define Function Execution Dependencies within a Step

       1. Select the Step for which you want to define the order of Functions.
       2. Open the General tab in the Properties tool pane.
       3. For Functions on the list, define the other Functions which must be executed first.

The Show Execution Order button analyzes the dependencies between Functions within the Step
and shows the predicted order of execution.

Functions are executed in loops on the basis of their dependencies and the results from
previous loops. If you want to enforce the order in which Functions are going to be executed,
you need to specify the sequence using Function Dependencies configuration.

The system will validate that the dependency between the Functions does not create a non-
executable loop.
