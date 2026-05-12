# Screen Flows Usage

In the HTML Layout Editor, a $View object is available. This is a representation of a Screen Flows
View.

  You can use the $View object only in the HTML tab (in the <script> tag).

These examples present the following usage scenarios that are supported in the Screen Flows
server and client modes:

           Accessing HTML Elements Representing a Current View
           Submitting a Current View
           Executing a Script after View is loaded
           Executing a Script before View is unloaded

The following scenario is supported only in the Screen Flows Client Mode

           Preventing Leaving the Page with Unsaved Changes

Accessing HTML Elements Representing the Current View

This scenario returns an HTML element that represents the current rendering context (the main
DFC container of the current View).

   $View.node: HTMLElement;

Submitting the Current View

This scenario submits the current View. If there is an Action Output from a DFC of the View, it is
executed.

  $View.submit(): void;  HTML Layout Editor  Runtime

Function Navigation      HTML Tab            The SampleAction will be
                                             executed after clicking the
                                             button.

                                                   HTML Layout Editor Code

 Executing a Script After the View Is Loaded

  This scenario enables executing a callback when the View is loaded and added to a document
  object model (DOM). A callback is invoked on the onViewLoaded event of the View (client mode) or
  the "DOM content ready" event of the HTML document (server mode).

      $View.onLoaded(func: () => void): void;                Runtime
                                                             The alert will be displayed when the
   Function Navigation HTML Layout Editor                    View is loaded.

                           HTML Tab

HTML Layout Editor Code

Executing a Script Before the View Is Unloaded

This scenario enables executing a callback before the View is removed. The callback is invoked on
the onViewsUnloading event of the View (client mode) or before the Screen is submitted (server
mode).

  $View.onUnloading(func: () => void): void;   Runtime

Function Navigation HTML Layout Editor         The alert will be displayed before the
                                               View is unloaded.
                        HTML Tab

                                        HTML Layout Editor Code

  It is also possible to verify if a View is being unloaded by checking the property isUnloading on a
  View object.

      $View.isUnloading: boolean;

  This value indicates if a View is being unloaded. It can be used to stop an execution of AJAX
  callbacks.

 Preventing Leaving the Page with Unsaved Changes

     It is supported only in the Screen Flows Client Mode.

  Screen Flows functionality does not track any changes (interaction) on a View automatically. In
  some circumstances, there may be a need to inform the user that the action he wants to perform
  may discard some data he already provided. In such situations, Process Author may configure the
  View to notify the Screen Flows manager that data was provided setting the hasChanges variable as
  below:

$View.hasChanges=true

When a different View tries to submit the Screen, the warning message will be displayed.

Function           HTML Layout Editor       Runtime
Navigation

                   HTML Tab                 The pop-up informing the user about
                                            possibility of loosing changes will be
                                            displayed.

                                            Only one dialog is shown no matter
                                            how many Views are configured with
                                            this functionality.

                   HTML Layout Editor Code
