# View Templates

Using predefined Templates for Views and linked DFCs is recommended (see details on
Copying and Linking Views to Screen Panels). You can find the Templates with the use of Entity
Manager (use the following filter: Revision:APR.TPL, Type: View).

The following Templates are delivered with the product:

Template               Usage

Portal2ButtonGroups    A View that supports grouping buttons (two groups).

PortalAJAX             A View that supports AJAX refresh.

PortalClock            A View that shows an example of a client-side clock.

PortalComplex          A View that supports implementing more complex logic with three
                       Steps in the DFC (Initialize, Display, Finalize).

PortalEmployeeAuth     A View that displays employee authorization.

PortalForm             A View that supports Forms (e.g., text box, radio button, check
                       box).

PortalGrid             A View to display a single grid (the Grid control is used).

PortalHeader           A View to display a standard Header with both predefined and
                       custom Buttons.

PortalMessage          A View for mobile devices that displays a message.

PortalMobileSimple     A simple View for mobile devices.

PortalMobileYesNoMessage A View that displays a message with YES and NO Buttons.

PortalPaging           A paging Template for mobile devices.

PortalSimple           A View that supports implementing simple logic with one Step in the
                       DFC.

PortalTab              A View to display Tabs.

PortalTabNotification  A View to display Tabs with notifications.
PortalTree
PortalVisualization    A View to display a single tree (the Tree control is used).

                       A View to display a chart or gauge (the Visualization control is
                       used).

  Usage examples of the main Template Views are listed above. To see them, use the following filter
  in Entity Manager: Revision: APR.EXA, Type: Screen.

     Additional configuration information is included inside the Rich Text Description of each
     Template and its usage example.
  A View can always be changed, even if you started from a Template that does not handle a
  particular functionality. For example, a View created from PortalTemplate_View can be easily
  adjusted to support AJAX refresh. In such cases, just compare the Templates to see the
  differences.

 AJAX View Template

     The AJAX View Template should be used in the server mode. It is not needed to use this
     template in the client mode.
  The AJAX functionality allows for refreshing the Views asynchronously without page postback via
  AJAX.

 Functional Overview

  An AJAX View consists of a View and an DFC of the View type that should have the same name as
  the View.

Only pure HTML or snippets can be used with AJAX (Business Controls and Forms will not
work).

Configuration

       1. Use the PortalAJAX View template (for details, see View Templates).
       2. After copying and linking it, set its Refresh Interval TimeScreen Panel Definition property.

Usage Example

The following example presents how the AJAX View Template works. To study the example, run the
PortalAJAX_example Screen.

When the entire Screen is displayed, an AJAX View Template is rendered on the Screen in the
same way as a regular (non-AJAX) View. Upon a refresh request, the View DFC is called again but
this time in the AJAX mode. In this case, the View DFC returns HTML text as the External Output
(and it does not render the UI). The HTML code then replaces the original content of a given tag
within the Screen.

  The data-portal-id attribute of the HTML tag enables control over the elements from the View
  which should be replaced. The content of this tag will be replaced on every AJAX refresh.

  The data-portal-id attribute should be set to a unique value within the View. The examples below
  illustrate the HTML code of the View (the green elements will be replaced on a Screen refresh):

              Example 1: refreshing the Quantity and Status fields (but not the OrderNo)

Example 2: refreshing the inner-HTML of the buttons
