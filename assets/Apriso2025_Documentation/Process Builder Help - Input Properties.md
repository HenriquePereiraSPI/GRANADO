# Input Properties

Field        Description
Name
             The name of the Input. It can be up to 255 characters long, must begin with a
             letter or an underscore, and the subsequent characters must be letters, numbers,
             or underscores. Input names are not case-sensitive.

             Including the word "password" in the input name will mask the input value in
             DELMIA Apriso logs, Job Scheduler, and Job Executor.

Description  The description of the Input (localizable).
Data Type
             Data type of the Input. The list of valid data types is as follows:

                        Char – character string,
                        Integer – integer values (to know the range of this Input type, refer to
                        Int32 Struct at Microsoft Docs),
                        Decimal – decimal values (to know the range of this Input type, refer to
                        Decimal Struct at Microsoft Docs),
                        Boolean – true or false value,
                        Date Time – date and time (to know the range of this Input type, refer to
                        DateTime Struct at Microsoft Docs),
                        Complex – an object that can contain any number of properties. Each
                        property can be of a different type (all types are supported, e.g., Char,
                        Integer, List Of). It is also possible that the Complex data type will not
                        have a value (can be treated as null or undefined).

             You can combine the above types with the ones below:

                   Scalar – a single data value,
                   List – a list of values,

                   List (Iterate) – iterate through the elements of the list. It is marked with
                   in the Function Navigation Workspace (many DELMIA Apriso Business
                   Components are not executed against lists; therefore, they must be
                   configured to iterate through the list, one execution at a time.),
                   List (Duplicate) – duplicate the value of Input during iterated invocation of

                   the Function (it is marked with, in Function Navigation Workspace).

                   The List (Duplicate) type cannot be combined with the Complex data
                   type.

Use Source         When the checkbox is selected, the system passes a copy of the value to the
Value Copy         Function. For simple data types this option cannot be changed. For more
                   information see Complex Types Technical Architecture.
Input Source
                   Inputs may be obtained from one of several sources. The list of valid source is as
                   follows:

                              User
                              Previous Function
                              Session Variable
                              Constant
                              Machine
                              System Parameter

                     The Complex/List of Complex data type Input can be obtained only from
                     Previous Function or Session Variable Input sources.

                   For more information, see Input Source. Each Function Input source will render a
                   property sheet specific to the Function Input source.
