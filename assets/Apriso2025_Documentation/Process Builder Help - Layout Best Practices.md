# Layout Best Practices

Panels

A Panel represents an area of the Screen, and it can be divided into Sub-Panels if necessary. A
Panel is used to display the content of one or several Views in a specific location of the Screen. It
can have a specific height or width, or it can be auto-sized.

The name of a Panel should be meaningful enough to illustrate its position or role. A Layout can be
composed of the following Panels:

           SUB_HEADER
           TITLE
           TABS
           FILTERS
           CONTEXT
           FOOTER

Defining the following Panels is recommended:
           At least one CONTEXT Panel to display the runtime information
                      The CONTEXT Panel can be divided into Sub-Panels, which will determine the
                      complexity of the Screen (that is, SIMPLE or not)
           All other Panels are optional but may be required in some situations to ensure User
           Interface consistency across the solution (e.g., a section for displaying as the Screen title
           whatever is displayed in the CONTEXT Panel)

If you need a Layout with additional Panels or a Layout that will use a height or width for each
Panel that is different from those of the Layouts that already exist, you have to create a new one.

  To display a single View on the entire Screen, the Layout should consist of one Panel
  positioned at the top-left corner and which is sized to 100% of the screen. However, in most
  cases, multiple Panels will be used. For that reason, any larger Panel can be divided into
  several smaller sub-panels.

Panel Settings in Layout Definition

           When setting up a new Layout, use a fixed size for the Panels such as SUB_HEADER
           TITLE, and FOOTER, as the View for those Panels should have a constant size
           The main level of the Layout should contain one Panel with size set to "Auto" for the
           CONTEXT in most cases
           When splitting CONTEXT into Sub-Panels, use percentage for size instead of pixels
           whenever possible for the purpose of resizing the Screen for different device resolutions

     Create a separate Panel in the Layout only if the content of the Panel changes depending on
     the Screen or context.

 Panel Naming Conventions

              When describing the vertical positions of these Panels, you could use:

           The LEFT and RIGHT suffixes when there are two Sub-Panels
           The LEFT, CENTER, and RIGHT suffixes when there are three Sub-Panels
           The 1,2,3,4… suffixes for Panels where 1 represents the Panel closest to the left
           of the parent
In another example, the CONTEXT Panel could be split into three horizontal Sub-Panels,
in which case there would be:

                   CONTEXT – the parent Panel

                      CONTEXT_TOP – the child horizontal Panel
                      CONTEXT_MIDDLE – the second child horizontal Panel
                      CONTEXT_BOTTOM – the third child horizontal Panel
When describing the horizontal positions of these Panels, you could use:

                      The TOP and BOTTOM suffixes when there are two Sub-Panels
                      The TOP, MIDDLE, and BOTTOM suffixes when there are three Sub-
                      Panels
                      The A,B,C,D… suffixes where A represent the Panel closest to the top of
                      the parent
A suffix can be inherited from a parent, which means that with more complicated Layouts,
the Panel names could be, for example: CONTEXT_TOP_LEFT,
CONTEXT_MIDDLE_RIGHT

Layout Naming Conventions

The Layout name cannot contain whitespace characters and should use the following naming
convention: <STRUCTURE>_<EXTENSIONS>

<STRUCTURE>

                   SIMPLE – contains a unique Panel for CONTEXT
                   <T><X>PAN – contains several Panels for CONTEXT

                   <T> – describes the way the Sub-Panels are positioned

                               H – horizontally
                               V – vertically
                   <X> – the number of Sub-Panels defined within the CONTEXT area
                   When having a complex structure, you can use a combination of <X> and
                   <T> (e.g., 2V3HPAN)

<EXTENSIONS>

                   _TTL – contains a TITLE panel just below the HEADER Panel
                   _FTR – contains a FOOTER panel at the bottom of the screen
                   _SBH – contains a SUB_HEADER panel below the HEADER and above the TITLE
                   panel (if defined)
                   _TAB – contains one or more TABS panels, which are dedicated to displaying tabs
                   above the CONTEXT panel(s)
                   _FLT – contains a FILTERS panel

Layout Naming Examples

In the diagrams below:
           SIMPLE_TTL – contains the TITLE, and CONTEXT Panel

V2PAN – contains the 2 CONTEXT Panels positioned vertically

V2PAN_FTR – contains the same as the previous example in addition to a FOOTER Panel
at the bottom

 Layout Example (V2H2PAN_FLT)

This is the Panel organization and naming for the Layout above:

           1 – Header – is always generated on the Screen.
           2 – CONTEXT

                      3 – CONTEXT_TOP

                                  4 – CONTEXT_TOP_LEFT
                                  5 – CONTEXT_TOP_RIGHT
           9 – FILTERS
           6 – CONTEXT_BOTTOM

                      7 – CONTEXT_BOTTOM_LEFT
                      8 – CONTEXT_BOTTOM_RIGHT
