# ExecuteFunction

**Category:** Apriso/RFC/SAP
**Class:** `FlexNet.BusinessFacade.RFC.SAP.DataManager`
**Assembly:** `FlexNet.BusinessFacade.RFC.SAP.dll`
**Status:** Active
**Keywords:** RFC SAP Function Call

## Description

This Business Component method calls the specified RFC function using the Input parameters and returning the Output parameters. Valid parameters are limited to scalar data types. Object such as table structure parameter is not supported.
 

 **Important: **This method requires the third-party *sapnco.dll *and *sapnco_utils.dll *files from the SAP .Net Connector. Refer to the *DELMIA Apriso Installation Guide *for details.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AdapterName | Char | No | Name of the adapter configuration used to connect to the SAP system. |
| Input | FunctionName | Char | Yes | The SAP function to be invoked. |
| Input | InputNameList | ListofChar | No | Names of the Function Input parameters. |
| Input | InputTypeList | ListofChar | No | Types of the Function Input parameters. |
| Input | InputValueList | ListofChar | No | Values of the Function Input parameters. |
| Input | OutputNameList | ListofChar | No | Names of the Function Output parameters. |
| Input | OutputTypeList | ListofChar | No | Types of the Function Output parameters. |
| Output | OuputValueList | ListofChar | No | Values of the Function Output parameters. |

## Validations

- System validates if FunctionName is not blank or empty. 
- System validates if InputNameList, InputTypeList, and InputValueList have the same length. 
- System validates if InputNameList or OutputNameList are populated and they contain no blank or empty fields. 
- System validates if InputTypeList and OutputTypeList contain only valid entries: 
 
- Character: byte, bytearray, char, chararray, string 
- Numeric: decimal, double, float, short, int, long

## System Processing

- System reads in the RFC configuration if it has not already been read. 
- System connects to the SAP system using the specified connection parameters. If no parameters are given, the default parameters are used. 
- System validates the Input values. 
- System creates a set of Inputs objects: 
 
- Named from InputNameList. 
- Converting their InputValueList representation to their respective InputValueType. 
 
- System creates a set of Output objects: 
 
- Named from OutputTypeList. 
 
- System creates a SAP RFC object with the provided FunctionName. 
- System iterates through the set of Input objects and appends the RFC object's Input parameters with each value in the set. 
- System invokes the RFC call. 
- System iterates through the set of Output objects grabbing values from the RFC object. 
- System collates the set Output values into a dataset. 
- System returns the resultant dataset.
