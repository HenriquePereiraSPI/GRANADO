# GetDataCollectReading

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active
**Keywords:** Data Collect, Wip Data Collect, Data Collect Reading

## Description

Retrieves WIP Data Collect reading for a given ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipDataCollectReadingID | Integer | Yes | Unique identifier of WIP Data Collect reading. |
| Output | WipDataCollectID | Integer |  | Dynamic Output. Unique identifier of WIP Data Collect. |
| Output | WipOrderNo | Char |  | Dynamic Output. WIP Order number for which the reading was saved. |
| Output | WipOrderType | Integer |  | Dynamic Output. WIP Order type for which the reading was saved. |
| Output | WipOperationSequenceNo | Char |  | Dynamic Output. Operation sequence for which the reading was saved. |
| Output | WipOperationStepSequenceNo | Integer |  | Dynamic Output. Step sequence for which the reading was saved. |
| Output | DataType | Integer |  | Data type of the returned value. |
| Output | ValueInt | Integer |  | Stored value of integer type, null if empty. |
| Output | ValueDecimal | Decimal |  | Stored value of decimal type, null if empty. |
| Output | ValueChar | Char |  | Stored value of char type, null if empty. |
| Output | ValueBool | Boolean |  | Stored value of boolean type, null if empty. |
| Output | ValueDate | DateTime |  | Stored value of date and time type, null if empty. |
| Output | DisplayUomCode | Char |  | Unit of measure of the returned numeric value. |
| Output | UomCode | List of Char |  | Unit of measure. |
| Output | SerialNo | Char |  | Dynamic Output. Stored context serial number, null if empty. |
| Output | ProductID | Integer |  | Dynamic Output. Stored context product, null if empty. |
| Output | LotNo | Char |  | Dynamic Output. Stored context lot, null if empty. |
| Output | ResourceID | Integer |  | Dynamic Output. Stored context resource, null if empty. |
| Output | Container | Char |  | Dynamic Output. Stored context container, null if empty. |

## Validations

Validation passes if WipDataCollectReadingID exists.

## System Processing

System returns Data Collect reading for the given WipDataCollectReadingID.
