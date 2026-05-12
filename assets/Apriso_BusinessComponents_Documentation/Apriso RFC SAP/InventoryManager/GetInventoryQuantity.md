# GetInventoryQuantity

**Category:** Apriso/RFC/SAP
**Class:** `FlexNet.BusinessFacade.RFC.SAP.InventoryManager`
**Assembly:** `FlexNet.BusinessFacade.RFC.SAP.dll`
**Status:** Active
**Keywords:** RFC SAP Query Database

## Description

This Business Component method queries the SAP system using the RFC_READ_TABLE function to get a sum of inventory from the LQUA table.
 

 **Important: **This method requires the third-party *sapnco.dll *and *sapnco_utils.dll *from the SAP .Net Connector. Refer to the *DELMIA Apriso Installation Guide*for details.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AdapterName | Char | No | Name of the adapter configuration to use to connect to the SAP system. |
| Input | ProductNoList | ListofChar | Yes | The product numbers to get an inventory count against. |
| Input | LotNoList | ListofChar | No | A filter condition to limit the query by lot number. |
| Input | StorageLocationList | ListofChar | No | A filter condition to limit the query by storage location. |
| Output | QuantityAvailableList | ListofDecimal | No | The resultant list of inventory quantity. |

## Validations

- System validates if the ProductNoList, LotNoList, and StorageLocationList are the same length.

## System Processing

- System reads in the RFC configuration if it has not already been read. 
- System connects to the SAP system using the specified connection parameters. If no parameters are given, the default parameters are used. 
- System queries the SAP database LQUA table using the RFC_READ_TABLE function for each product number: 
 
- Quantity is taken from the VERME column. 
- If not blank or empty, LotNo is compared to the CHARG column. 
- If not blank or empty, StorageLocation is compared to the LGORT column. 
 
- System collates all rows in the resultant dataset, summing the data. 
- System returns the sum.
