# Scan

Data-scan attributes are used to configure code scanning in mobile applications. The attributes can
be appended to text-type input tags.

  For more information about the attributes described in this topic, as well as possible values, see
  the Data-scan Attributes section in the DELMIA Apriso Mobile Apps Guide.

Data-scan-mode

Data-scan-mode is the only required attribute.

Scanning can happen in two modes: button or auto. If the button mode is selected, the user needs
to press a button to begin scanning. In the auto mode, scanning is initiated when the user
highlights the appropriate text field.

 Data-scan-type

  Sets the code type. For a list of supported code types, see the DELMIA Apriso Mobile Apps
  Guide.

 Data-scan-length

  Sets the code length, which must be an exact value.

 Data-scan-format

  Describes the expected shape of the code.

 Data-scan-sign-substitution

  Specifies which characters of the code should be replaced by other characters. This is especially
  useful when a barcode contains special characters (for example, non-printable ones).

 Data-scan-postfix

  Adds characters to the end of the code displayed in the text field.

Data-scan-area-size

Reduces the size of the scanning area. This is useful when multiple codes are visible in the camera
and you want to scan only one specific code.
