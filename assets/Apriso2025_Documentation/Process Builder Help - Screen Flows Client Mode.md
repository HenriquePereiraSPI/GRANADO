# Screen Flows Client Mode

These are some example improvements enabled through the client mode (as compared to the
server mode): the validation of field values without a server round trip; the refreshing of only part of
a screen and only when necessary; and the loading and initialization of all scripts only once per
screen flow (FlexPart). The screen flows client mode helps to make DELMIA Apriso a solution with
cutting-edge UI and UX that is resistant to network problems and that provides developers with a
powerful tool to build functionality.

Switching to the Client Mode

To execute screen flow on the browser side, set its FlexPart as "client side," which will enable the
client mode. In addition, build the screen flow with the client capabilities in mind.

The next section presents the set of supported functionalities and business controls that can be
executed on the browser (the server is called asynchronously).

Client Mode Details

These are the differences between the client mode and the server mode:

           Only the Grid 1.0, Tree 1.0, Visualization, Quality Defects Visualization (vQDT), and Work
           Instructions business controls are supported in the client mode (for details, see Business
           Controls).
           No User Inputs or User Outputs are supported in the client mode.

           To use the File Picker User Input, add an <input type="file"/> element in the HTML
           Layout Editor (this is not supported in the server mode).

           The Layout Editor functionality for DFCs of the View type is not supported in client mode,
           so the UI steps must be converted to the HTML Layout Editor.
           The Work Instructions Display Mode settings (only when linked to the step) are not
           supported, so you must use Work Instructions Business Control.
           No task support.
           A new JavaScript API is provided in the client mode.
           The Go to Screen navigation action does not refresh the screen when the action does not
           have a screen linked (in the server mode, the refresh action is performed).
           Submitting the view does not refresh the screen when no action was returned from any
           view (in the server mode, the refresh action is performed).
           Displaying PDF files in pop-ups in Mozilla Firefox requires setting the Portable Document
           Format to Preview in Firefox (in Options > Applications).

Screen flows engine sends additional debugging data when running client mode FlexParts with
the following roles: Process Functional Author, Process Technical Author, Process Tester, and
Process User Interface Author. This might increase resources usage on DELMIA Apriso server.
