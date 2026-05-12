# Layout Controls

The Layout Editor makes it possible to change the layout of the user controls. The Layout Controls
for grids and Sub-DFCs can be found in the Toolbox. In the design area, the user can change the
order of the controls and place them within the grids.

Grid (Deprecated) Properties

Step Grid Layout Control is deprecated. Rewrite the UI to use the Grid Business Control.

Field              Type of Value

Layout             Enumerate: Simple, Tabular, Horizontal.

Size               Enumerate: None, Rows, Columns. Only for Layout Horizontal or Tabular. The
Limit              restriction on the number of rows or columns to display before the screen attempts to
Type               wrap the Inputs or Outputs.

                              Limit Rows
                              Limit Columns

Size               Integer (only when the Size Limit Type is something other than None).
Limit
Width              The width of the grid. Decimal/Integer with units. Only for Layout Tabular. Can be
                   empty.
Height             The height of the grid style. Decimal/Integer with units. Only for Layout Tabular. Can be
                   empty.
CSS                The user may specify a single CSS class (by selecting an item from the drop-down list
class              or typing its name), or type multiple classes (separated by spaces) to be used for a

                  Step Grid.

Classes will be used based on a default theme. Using multiple classes is beneficial
when there is a need to combine certain properties, e.g., to force centered alignment
for all Grid values or add class AlignCenter to the existing TabularGridLayout class. You
can control the alignment of individual columns (prompts and values) by adding
alignment classes to the User Inputs/Outputs or by combining the two.

It is also possible to assign the CSS class to a container (an HTML object directly
hosting the Grid control) with the syntax Container.ProperCSSClass. The user may
choose Container.AlignCenter, Container.AlignLeft, and Container.AlignRight classes to
align content properly. In the case of a Simple Layout, only Desktop devices support
these CSS classes.

                  A NoWrapPromptGrid CSS class is available in the Default and Classic Apriso themes.
                  Process Authors can specify this class in the tabular grid layout to prevent text from
                  being wrapped. If all grid prompts are to be affected by the no-wrap requirement,
                  the CSS style sheet used can be manually updated to include the correct property
                  (white-space:nowrap) in the Prompt class of the desired grid class. A NoWrap CSS
                  class is available in mobile stylesheets (Default and Classic). The class can be
                  used on top of the default ones to control if prompts and other text elements are to
                  be split into several lines if no space is available to display them. Please note that
                  CSS knowledge is required to perform any changes to the CSS files.

Absolute When selected, the user can change the position of the grid. The user specifies the
Position offset (in pixels) and offset direction (Alignment field). The user may also drag-and-drop

               the elements while holding the Ctrl key (this check box will then be automatically
               selected).

               The default selection of this check box may be configured in Options.

The user can add all of the controls (except for the grid) available in the Toolbox in the Layout
Editor to the grid.

  A control is moved out of the grid when Absolute Position is enabled in the control's Properties
  pane.

Sub-DFCs Properties

For more information about the Sub-DFCs Properties tool pane, see Sub-DFC Function.

     Double-clicking on the Sub-DFCs inside the Layout Editor opens this DFC only if the revision is
     set. Otherwise, no action is performed.

 Examples

 Layout

   Configuration                    Runtime display
   Layout: Tabular

   Layout: Simple

   Layout: Horizontal

Size Limit Type                 Runtime Display

Configuration
Layout: Horizontal
Size Limit Type: Limit Columns
Size Limit: 1
