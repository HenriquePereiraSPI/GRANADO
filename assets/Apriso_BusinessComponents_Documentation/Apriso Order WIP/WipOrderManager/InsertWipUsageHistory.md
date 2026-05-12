# InsertWipUsageHistory

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing`
**Status:** Active
**Keywords:** WIP Order Usage History Serial Lot

## Description

The purpose of this Business Component method is to insert a header record for the history of entity usage by a WIP Order. If the header record already exists, the method returns its ID. The header record contains the context of entity usage (WIP Order, Serial Number, etc.). The Output from this BC method can be passed to other methods like InsertWipUsageHistoryResource and InsertWipUsageHistoryWIRevision in order to create the usage history of Resources and Work Instructions, respectively.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number. |
| Input | WipOrderType | Integer | Yes | The WIP Order type. |
| Input | OprSequenceNo | Integer | Conditional | The WIP Operation Sequence number. |
| Input | StepSequenceNo | Integer | No | The WIP Operation Step Sequence number. |
| Input | SerialNo | Char | No | The serial number. |
| Input | ProductNo | Char | Conditional | The product number. |
| Input | ProductRevision | Char | No | The product revision. |
| Input | LotNo | Char | No | The lot number. |
| Output | WipUsageHistoryID | Integer | Yes | The ID of the created or found record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ProductionLineNo | Char | The production line. |
| ResourceName | Char | The name of the Resource. |
| ResourceType | Integer | The type of the Resource. |
| Facility | Char | The Facility. |
| Warehouse | Char | The Warehouse. |
| Department | Char | The Department. |
| WorkCenter | Char | The Work Center. |
| WarehouseLocationID | Integer | The ID of the Warehouse location. |
| Zone | Char | The Zone. |
| Process | Char | The name of the Process. |
| ProcessRevision | Char | The revision of the Process. |
| RecipeID | Integer | The ID of the Recipe. |

## Validations

- The system validates if the provided Inputs are consistent. The values of the following Inputs must be provided together: 
 
- StepSequenceNo with OprSequenceNo  
- ProductRevision with ProductNo  
- SerialNo with ProductNo  
- LotNo with ProductNo  
- ResourceName and ResourceType  
- Warehouse with Facility  
- ProcessRevision with Process

## System Processing

- The system tries to read a record from the WIP_USAGE_HISTORY table containing the provided parameters. If the record is not found, a new record is inserted. 
- The system returns the ID of the created or found record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_USAGE_HISTORY | ID | WipUsageHistoryID |
|  | (all other) | Populated with the Inputs of matching names. |
