# Getting System Parameters

It is possible to use System Parameters of Static type in the Action Scripts. The System
Parameters are available as functions of SystemParameters object. In the example below, the value
of “Priority” System Parameter is retrieved. Its type is based on the System Parameter's data type:

   var priorityValue = SystemParameters.Priority()
