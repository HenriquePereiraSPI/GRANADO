# Output Properties

Field        Description
Name
             The name of the Output. It can be up to 255 characters long, must begin with a
Description  letter or an underscore, and the subsequent characters must be letters, numbers,
Data Type    or underscores. Output names are not case-sensitive.

             The description of the Output (localizable).

             The data type of the Output. The list of valid data types is the following:

                        Char – character string,
                        Integer – integer values (to know the range of this Input type, refer to
                        Int32 Struct at Microsoft Docs),
                        Decimal – decimal values (to know the range of this Input type, refer to
                        Decimal Struct at Microsoft Docs),
                        Boolean – true or false value,
                        Date Time – Date and Time (to know the range of this Input type, refer to
                        DateTime Struct at Microsoft Docs),
                        Complex – an object that can contain any number of properties. Each
                        property can be of a different type (all types are supported, e.g., Char,
                        Integer, List Of). It is also possible that the Complex data type will not
                        have a value (can be treated as null or undefined).

             You can combine the above types with the ones below:

                        Scalar – a single data value,

                   List – a list of values.

Default Value      The Default Value is used when a Function does not set the value of the Output.
                   This option is disabled when a Composition Group is used.
Routing
Dispositions       Outputs may be sent to one or more destinations. The list of valid destinations is
                   as follows:

                              User
                              Machine
                              External Output
                              Session Variable

                     The Complex/List of Complex data type of the Output can be sent only to
                     Session or External Output destinations.

                   When a Routing Disposition is selected on the list, its properties are displayed
                   below the grid. The Remove Button – removes the selected destination from the
                   field below.
