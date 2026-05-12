# Input Source_ Machine

Input Source: Machine

The general properties available for all inputs are described in the Input Properties topic.

The Machine Input functionality is supported in the Screen Flows client mode. For more
information, refer to Screen Flows client mode.

Machine Input of type List (Iterate) is iterated by its values (array of Points values read from
machine) and not by properties settings of FI DFC/Step.

Field              Description

Machine                       Client (Browser) – Value is read directly from the Machine Integrator
Integrator                    Connector by the Client’s Browser. This Connector can be running on
Processing                    the same computer as the browser or on a remote one.
                              Web Server – Value is read from Machine Integrator Connector by the
                              Web server when processing DFC.

   Machine Source  Usage details are explained in the Machine Integrator Guide.
   Point Alias
                   The user may reference an actual MI Point by its Point Alias or by providing
                   Equipment and its Attribute to which the Point is mapped.

                   The alias of a point configured with DELMIA Apriso Machine Integrator. Point
                   Alias:

                              None
                              Constant
                              Session Variable
                              Previous Function Output
                              System Parameter

Machine Integrator Processing: Web Server

 Machine Integrator Processing: Client (Browser)

  Make sure that the DELMIA Apriso Client with the Client Machine Integrator is installed in order
  to be able to use this functionality. For more information, see the DELMIA Apriso Installation
  Guide.

General Tab

Field              Description

User Control Type of User Control Visibility. The user can choose between: Hidden, Read Only,
Visibility or Editable. Usage details are explained in the Machine Integrator Guide.

Initial Value The Initial Value can be chosen from different sources and is displayed depending
                    on the chosen Input data type (the system suggests an example of the data
                    format).

                   To keep backward compatibility, the Initial Value will also be used when no
                   value is present in the Input (this works like a default value).

Input Value        Input Mode – sets the Input mode based on the options below:
Mode
                              Current – Machine Integrator returns current point value
                              After Change – Machine Integrator returns point value after it has changed
                              After Change or From Buffer – Machine Integrator returns the point value
                              after it has changed or from the buffer (previous value)

Value is           Populate on startup check box – Check box becomes active, after setting Input
Required           Mode to After Change or After Change or From Buffer. When selected, the current
check box          value from the source will be read as soon as a client connects to Machine
                   Integrator. Usage details are explained in the Machine Integrator Guide.

                   If this check box is selected, a value must be entered.

User Input Properties Tab

   Field           Description
   User Interface
   Prompts         The prompts associated with the Function Input you are defining.

                              Desktop – the prompt string (text) to be used with this Input as
                              rendered on a desktop browser
                              Mobile – the prompt string (text) to be used with this Input as rendered
                              on a mobile browser

                   Mobile and Text platforms are no longer supported.

Control            If Desktop or Mobile is selected, the following options are available:
properties for
device                        Hide Prompt check box – if selected, the prompt will not be displayed
                              Attributes button – opens a pop-up window for the configuration of
                              additional HTML attributes
                              Formatting

                                         Direct – enables the defining of fonts, colors, etc. for the
                                         prompt for the user of a desktop or mobile device:

                                                     Prompt – the formatting that applies to the desktop
                                                     prompt string
                                                     Value – the formatting that applies to the desktop
                                                     value field
                                         CSS-based – the user can specify a CSS class to be used for
                                         an Input:

                                                     Prompt
                                                     Value

Layout and icon Layout – defines the layout of the values will be. There are three types of
                        layouts:

                                   Simple
                                   Tabular
                                   Horizontal

                        Icon – an icon that is displayed to the immediate left of the input prompt on
                        desktop and mobile devices. Available icons include:

                                   Information
                                   Question
                                   Warning
                                   Error

Navigation         Navigation – used to control the submission of the screen:

                              Auto Submit – auto submit the page
                              Hide OK button

Position           If the Absolute Position check box is selected, the user may change the
                   position of the control in Layout Editor. The user specifies the offset (in pixels)
                   and the alignment of the control.

Machine Source: Equipment

  The user may reference an actual MI Point by providing Equipment with Facility and its Attribute to
  which the Point is mapped.
  The Facility Input is optional except from the situation when there are two Equipment entities
  The link between Equipment, its Attribute and MI Point can be configured within Machine Integrator
  Configuration or Equipment Explorer Screens.

The time needed to reflect changes in configuration (linking another Machine Integrator Point to
equipment) depends on time set in "CacheValidationDelay" key located in the "Framework"
section of the Central Configuration file (for details, see Central Configuration
Documentation ).
