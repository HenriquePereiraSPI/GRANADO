# Pop-up Window

It is possible to display a View as a pop-up window. Any View can be displayed as a pop-up
window (including a Form View).

     Only one level of pop-up window is supported (you cannot open a second pop-up from this pop-
     up).
  To display a View in a pop-up window, link the pop-up window on the Action Properties pane:

  Some View Actions behave differently when the View is displayed as a pop-up window:

TargetScreen – Back (will close the pop-up window instead of going to the previous
Screen)
TargetScreen – Pop-up close (refresh screen) (will close the pop-up window and refresh
the Screen)

Pop-Up Window Conditional Display

If the pop-up window should be displayed based on a calculation, you can use the Action Chaining
scenario.

For example, the Button that should display the pop-up window conditionally should be linked to
the On Action DFC, which returns the next Action, which equals the pop-up display Action (if the
pop-up is to be displayed).
