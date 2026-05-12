# How to Create a Layout

When creating a Layout, the Panels must be divided in the correct order. See the example below to
understand the Layout creation logic.

       1. Create a new Layout. Use one of the following options:

                      Select the New... option from the File drop-down in the Main Menu
                      Click (New) on the Toolbar
                      Use Ctrl+N Keyboard Shortcut
                      Select New > Layout from the Right-Click Menu in the Entity Manager
       2. Define the Layout look (see the Layout Definition Example section below).
       3. Link a Default View to the last Panel (in this example, the CONTEXT_RIGHT Panel) using
           the Default View section on the Panel Properties pane.

   After using this Layout on the Screen, you can see the Panel with this View linked.

4. Link a Header to the Layout using the Default Header section on the Layout Properties
   pane.

              After using this Layout on the Screen, you can see the Screen with the Header linked.

              Views can only be linked to the Panel elements that do not have any child elements.

Layout Definition Example

Design the following Layout:

In this Layout, there are four Panels for showing the Views:

           TABS: 100% x 100px
           CONTEXT_LEFT: 70% x auto
           CONTEXT_RIGHT: auto x auto
           FOOTER: 70% x 200px

The child Panel size is always in relation to its parent. For example, if the parent Panel width is
1000px and you create a child Panel of 70%, its width will be 700px. If this child Panel is divided
further into two child Panels of 50%, their width will be 350px.

The steps below present how to divide and size Panels in order to obtain the Layout above.

Step 1

Start from the base panel, which is stretched to the full screen:

          1. Right-click the previously created Layout in Entity Explorer and select the Add Panel
              option:

2. Set the following properties in the Layout Properties tool pane:

              Name – 2VPAN_FTR
              Height, Fill (fill full Screen)

 Step 2

  Divide the Panel created before into two child Panels:

          1. Create two Sub-Panels under the 2VPAN_FTR Panel:

2. Set the following properties of the created Panels:

           a. Panel 1:

                          Name: TABS
                          Height, Specific: 100px (height, as the parent is vertical)
           b. Panel 2:

                          Name: CONTEXT
                          Height, Fill (fill rest of the space)
3. Set the 2VPAN_FTR Layout's orientation type to Vertical on the Layout Properties pane:

 Step 3

When you have multiple Panels on one level, only one of them can have an undefined size. This
means that it will always be the part of the Screen that is not taken by the other Panels (which must
have their sizes defined).

1. Create two Panels under the CONTEXT Panel.
2. Set the following properties of created Panels:

           a. Panel:

                          Name: CONTEXT_LEFT
                          Height, Specific: 70% (width, as parent is vertical)
           b. Panel:

                          Name: CONTEXT_RIGHT
                          Height, Specific: 30%
3. Set the CONTEXT Panel orientation type to Horizontal on the Layout Properties pane.

 Step 4

          1. Create two Panels under the CONTEXT_LEFT Panel.
          2. Set the following properties of created Panels:

                      a. Panel:
                                    Name: CONTEXT_TOP_LEFT
                                    Height, Fill (fill rest of the space)

                      b. Panel:
                                    Name: FOOTER

                          Height, Specific: 200px (height, as parent is horizontal)
3. Set the CONTEXT_LEFT Panel Orientation type to Vertical on the Layout Properties

   pane.
