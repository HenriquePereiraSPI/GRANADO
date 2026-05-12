# Change View

It is possible to switch between different Views on the same Panel on the same Screen.

See the PortalTab_example Screen in the image below. It displays different Views (PortalGrid, PortalTree, see View Templates) on the same
Panel on the same Screen. The Views are changed in runtime after selecting different tabs.

Change View Configuration

       1. In this example Screen, two (or more) Views can be linked to one Panel.

              Note that you cannot link the same View as the default View and a Change View.

           2. Define which Action changes which View on the content Panel.
                         The GRID_TAB Action changes the View to PortalGrid on the content Panel

                         The TREE_TAB Action changes the View to PortalTree on the content Panel

For further exploration of the configuration, open PortalTab_example and look at the configuration:

Change View Advanced Configuration

You can change a View with the use of the On Initialize or On Load DFCs. This scenario is applied when there is a need to show a View that
can be determined only during runtime.

On Initialize and On Load DFCs have special Outputs: PanelList and ViewList. The PanelList Output should contain Screen Panel names in
which corresponding items from the ViewList Output will be shown.

When the business logic returns a View name that is attached to a Screen as a Change View, its configuration will be displaying this View.
When a View name is not found in the Screen configuration, a plain View configuration will be used.

Example:

If your On Initialize DFC returns those two Outputs with the values set as below:

In configuration when Views are available in Entity In configuration when Views are entities that belong to the same Project:
Manager:

Then the runtime will render the Screen where:  Then the runtime will render the Screen where:

View of Name "1" will be displayed in Panel     View of Name "1" that belongs to the Project of Code "Project1" will be
of Name "A"                                     displayed in Panel of Name "A"
View of Name "2" will be displayed in Panel     View of Name "2" that belongs to the Project of Code "Project1" will be
of Name "B"                                     displayed in Panel of Name "B"
View of Name "3" will be displayed in Panel     View of Name "3" that belongs to the Project of Code "Project1" will be
of Name "C"                                     displayed in Panel of Name "C"

     Views that are not a part of the Screen configuration will not be attached to GPM packages automatically and must be added manually.

  Business Example:

   Assume that there is one Panel on the Screen that is displaying Alerts. Each Alert type has a corresponding View displaying it.

           1. Create a Determination that keeps the link between specific View and a corresponding Alert type.
              For each Alert, there is a View that can show the Alert detail and allow you to respond to that items.

           2. Create a generic Screen with one Panel (in our example it name is set the ALERT_CONTENT) which will show the specific View
              depending on the Alert type.

           3. Configure the OnLoad DFC configuration as follows:

a. The first Function: the value of Alert type is taken from the Portal Session.
b. The second Function (BusinessLogic) based on the Determination configuration returns the View name for a given Alert

   type.
c. The third Function sets the ViewList and PanelList Outputs.

              PanelList and ViewList should be lists of the same number of elements.

After selecting the Alert from the list, you are able to show different Views for different Alert types which are not tied to the Screen
configuration.
