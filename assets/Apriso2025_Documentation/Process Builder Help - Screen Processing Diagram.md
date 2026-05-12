# Screen Processing Diagram

This diagram presents a simplified flow of the steps executed in the PortalExecute DFC:

 Action Chaining

When multistep background validation or processing is required, make sure validation and
processing actions are divided into dedicated (and more granular) DFCs. The Next Action feature
will then have to be used to determine how and when each validation or processing action will be
executed.

Using the Next Action feature will ensure better reusability of the DFCs used in your business logic.

Action Priority

There are several sources of Actions, all of which are analyzed (in order) before an Action is picked
to be executed. After submitting a Screen, the next processing step is determined based on the
following order:

       1. Clicking on a breadcrumb.
       2. An Action from the Screen Views (including pop-up Views).
       3. The GoToScreen External Output
       4. An Action from the Header.
       5. The Header Search box.
       6. An Action taken from the default Screen Actions.
       7. If none of the above, the Screen refreshes.
