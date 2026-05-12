# Notification Function

The Notification function lets you configure push notifications that can be sent from the DELMIA
Apriso server to the DELMIA Apriso mobile app.

A notification contains a message and, optionally, buttons. Tapping the notification message or
button in the mobile app navigates the user to a specific FlexPart.

Prerequisites and References

Notifications are supported with DELMIA Apriso Android and iOS apps 2.6.0. Refer to Mobile Apps
Guide for details on:

           Back-end service configuration.
           Notification behavior on mobile devices.

For details on managing notification-registered devices, refer to DELMIA Apriso Portal Help .

To Add the Notification Function

       1. Drag the Notification function from the toolbox to the function navigation diagram or
           double-click it in the toolbox.

       2. Complete the General and Recipients tabs.

General Tab

In the General tab, you can configure the notification:

           Title
           Message
           Actions
           Additional properties

Title and Message
The notification title and message.

UI Element Description

Code               The name of the dictionary item linked to the notification title or message. Available
                   actions:

                      : adds a dictionary item to the Dictionary and links it to the notification title
                   or message.

                      : opens the window with a list of existing dictionary items. The selected
                   item is linked to the notification title or message.

                      : unlinks the dictionary item.

                      : opens the Dictionary Translations screen in the context of the linked
                   dictionary item or message. For details, refer to Dictionary Help .

                   Adding the code is optional.

Translation The notification title or message displayed to the user of the mobile app. If a
                 dictionary item is linked in the Code field, the translation of this dictionary item is
                 used.

Actions

Actions that are triggered when the user of the mobile app taps the notification or notification
buttons. These actions determine which FlexPart the user is navigated to and what buttons are
available.

To distinguish whether the user taps the notification or the notification button, the linked FlexPart
uses the parameter named NotificationAction. This parameter is configured in the FlexPart editor
General tab. It must be overridable and of the Char type. For details on the parameter
configuration, refer to FlexParts Help .

UI Element         Description
FlexPart           The FlexPart that the user is navigated to after tapping the notification in the mobile
                   app. You can link only the FlexParts that are supported by DELMIA Apriso mobile
                   apps.

                                  : opens the window with a list of FlexParts. The selected FlexPart is
                              linked to the notification.

                                  : unlinks the FlexPart.

                   When the user of the mobile app taps the notification message, the app opens the
                   linked FlexPart with the NotificationAction parameter value set to Default.

Parameters         The parameters that are used in the action performed by the linked FlexPart. The
                   Parameters grid is populated only with the parameters that have the Allow
                   Override checkbox selected in the FlexPart editor General tab. For details, refer to
                   FlexParts Help .

                   The columns available in the grid:

                   Name: the parameter name.
                   Type: the parameter type.
                   Value: the parameter value. The column is enabled only when Value is
                   selected in the Source list.
                   Source: the parameter source:

                              FlexPart: the parameter is taken from the linked FlexPart.
                              Input: the parameter is taken from the function input.
                              Value: the parameter is taken from the value entered in the Value
                              column.

                   The NotificationAction parameter is never displayed in the grid.

   UI Element      Description
   Additional        Supported on Android.
   Actions

                   The actions that are available to the user of the mobile app as buttons displayed
                   below the notification message.

                   Tapping a notification button opens the linked FlexPart with the NotificationAction
                   parameter value overridden by the action name.

                   To configure an action, add a row in the Additional Actions section. The columns
                   available in the grid:

                              Name: the action name that will become the value of the
                              NotificationAction parameter.
                              Code (optional): the name of the dictionary item linked to the action.
                              Translation: the label displayed on the notification button. If a dictionary
                              item is linked in the Code field, the translation of this dictionary item is
                              used.

                   You can add a maximum of three actions.

Additional Properties
Additional properties that you can configure for the notification.

UI Element         Description
Expiration         The maximum time the system waits for an offline device to come online to deliver
                   a notification.
Category
                     Supported on Android.

                     The notification category. After you enter the category name, the category with the
                     same name is created in the notification settings of the mobile app. The user of
                     the app can customize the notification settings at a more granular level.

Customization For advanced usage scenarios. Used to provide parameters directly to Firebase
                     Cloud Messaging (FCM). For details, refer to the FCM documentation.

Recipients Tab

In the Recipients tab, you can specify the employees who will receive the notification on their
mobile device.

UI Element               Description
                         The notification is delivered to the employees configured in the
List of EmployeeNo from  function input.
Function Input           The notification is delivered to the employees with the roles
                         specified in the Roles grid.
Selected Roles
                         To add an employee with a specific role:

                                 1. Add a row in the Roles grid.
                                 2. In the Selecting Roles window, select one or more roles

                                    and click OK.

                                    If you select multiple roles, an employee needs at least
                                    one role to receive a notification.

Notification Function Example

Scenario
You want to send a notification to the mobile device of a shop floor operator about the production
slowdown detected in a work center.
The notification is linked to the Production Status screen that displays facilities, work centers, and
their orders. The screen contains two overridable parameters: Facility_Filter and
NotificationAction that are used to customize the screen behavior.

Function Configuration
Configure a DFC with the following step and function logic:

  Configuration Results
  See how the function configuration is reflected in the structure of the notification displayed to the
  user in the mobile app:

       1. The notification title.
       2. The notification message in which the {WorkCenter} and {speed} placeholders are replaced

           with values from the function input.
       3. The buttons displayed in the notification that execute specific actions after being tapped

           (supported only on Android).

After the user taps the notification on the mobile device, the linked FlexPart is displayed:

          4. The FlexPart linked to the notification contains the Production Status screen that displays
              facilities, work centers, and their orders.

          5. The parameter used in the linked FlexPart. It filters the production status grid by a facility.

After the user taps the Escalate button in the notification, the screen opens with an escalation pop-
up window:
