# Extract

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.DataExtractor`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This BC will extract the data either defined in system via the inputted transaction name o by the given query and send this via "Business Integrator" to the configured clients (either inputted or configured in the EXTRACT_FORMAT_CLIENT table.
 

For more information on prerequisites required for this functionality to work and on extracting data using Extract BC, see COE Data Replication Using Data Extractor Business Component Guide.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ExtractionName | Char | Yes | Name that defines the extracted data |
| Input | Query | Char | No | Query used to extract the data |
| Input | Clients | ListofChar | No | Clients to send the extract data to |
| Input | AllClients | Boolean | No | Determines whether or not to send the data to all clients in the CLIENT table |
| Input | Count | Integer | No | The number of records the extraction processed |

## Validations

System must have one and only one master client configured (CLIENT.Master = True)

## System Processing

-  System first ensures that there is one and only one "Master" client configured.  
-  The system then ensures that this master client is allowed to "Export Data" (CLIENT.ExportDataAllowed = True)  
-  Either the inputted "ExtractionName" must be valid in the EXTRACT_FORMAT with a valid query, or a query must be inputted.  
-  The system ensures that there are some clients configured to send the information to  
 
-  "AllClients" input is true or  
-  "Clients" input is populated  
-  EXTRACT_FORMAT.AllClients is true  
-  EXTRACT_FORMAT_CLIENT is defined for the inputed "ExtractionName"  
 
-  If the "ExtractionName" matches a given EXTRACT_FORMAT record, then system will only extract the number of records equal to EXTRACT_FORMAT.MaxRecords (if null, infinite is assumed)  
-  The system will then replace the one valid Query Parameter (@LastRunTime) with a datetime many years past, or with the last run time of the matching EXTRACT_FORMAT record.  
-  The system executes the query and creates an XML of NVP with all its data and sends this to BI.

## Published Events

An XML that represents the data retrieved by the query.
