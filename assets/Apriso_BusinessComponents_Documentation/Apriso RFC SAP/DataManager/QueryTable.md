# QueryTable

**Category:** Apriso/RFC/SAP
**Class:** `FlexNet.BusinessFacade.RFC.SAP.DataManager`
**Assembly:** `FlexNet.BusinessFacade.RFC.SAP.dll`
**Status:** Active
**Keywords:** RFC SAP Query Database

## Description

This Business Component method queries the SAP system with the RFC_READ_TABLE function using the specified Input parameters.
 

 **Important: **This method requires the third-party *sapnco.dll *and *sapnco_utils.dll *from the SAP .Net Connector. Refer to the *DELMIA Apriso Installation Guide*for details.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AdapterName | Char | No | The name of the adapter configuration used to connect to the SAP system. |
| Input | Select | ListofChar | No | The columns of the table Input. |
| Input | Table | Char | Yes | The SAP database table. |
| Input | Where | ListofChar | No | Conditions to filter the table data. |
| Input | Limit | Integer | No | The maximum number of table rows to return. |
| Input | Offset | Integer | Yes | The number of rows to skip in the result set before outputting. |
| Output | Data | ListofChar | No | A list of table rows that satisfy the Input and filter conditions. |

## Validations

- System validates if Table is not empty or blank.

## System Processing

- System reads the RFC configuration if it has not already been read. 
- System connects to the SAP system using the specified connection parameters. If no parameters are given, the default parameters are used. 
- System creates an SAP RFC object to query the provided table: 
 
- Using the RFC_READ_TABLE SAP function. 
- Selecting the provided columns, or all columns if none are provided. 
- Filtering the data based on the provided WHERE condition. 
- Limits the data if the provided limit is a positive integer. 
- Offsets the result set if the provided offset is a positive integer. 
 
- System collates the results for each row into a single string, separating column data with the pipe "|" character. 
- System collates all rows into a dataset. 
- System returns the resultant dataset.
