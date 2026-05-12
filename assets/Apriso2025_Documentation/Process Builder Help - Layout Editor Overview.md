# Layout Editor Overview

The Layout Editor in Process Builder is used to design the User Interface of Steps in a convenient
visual way, and includes the ability to position screen elements and grids (deprecated).

  The editor of the User Interface for Steps is integrated with the Function Editor. You can switch
  between the following views:

              Function Navigation screen (for the Process Technical Author Role)
              Sub-DFC view
              Layout Editor screen
              HTML Layout Editor screen

  Layout Editor makes it possible to edit the layout of User Interface elements:

              Function Inputs
              Function Outputs
              Business Controls
              Sub-DFCs
              Machine Inputs
              Grids (Deprecated)

  The central part of the screen contains a design area for user controls. The controls are related to
  Inputs, Outputs, and Functions inside a Step.

  On the right side of the screen, the system should display the properties of Inputs, Outputs,
  Business Controls, Sub-DFCs, and grids. When the user selects an element in the central part of
  the screen, the system shows an appropriate editor in the Properties pane.

  The user can resize Business Controls with the Layout Editor by selecting the control and dragging
  the border (some Business Controls such as Quality Defect and Flat File Mask Editor have
  predefined minimum sizes).

In the Layout Editor, the system displays the style (such as font color, size, etc.) as defined by the
user (by setting direct formatting or CSS style).

The user can freely change the position of the elements (Business Controls, Input and Output
Controls, grids) when the absolute position option is enabled (use the Absolute Position check box
in the Advanced properties of the control, or drag-and-drop the elements while holding the Alt key
[the check box will be automatically selected]).

If Business Controls or Sub-DFCs Functions have an iterated or duplicated Input, the Function is
marked in the Layout Editor. For more information, see Input Properties.
