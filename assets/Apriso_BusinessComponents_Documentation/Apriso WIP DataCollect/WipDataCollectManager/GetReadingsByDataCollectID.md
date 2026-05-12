# GetReadingsByDataCollectID

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active
**Keywords:** GetReadings, Data Collect, Wip Data Collect

## Description

Retrieves Data Collect Readings for a given WipDataCollectID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipDataCollectID | Integer | Yes | Unique identifier of WipDataCollectID. |
| Input | ProductID | Integer | Yes | Unique identifier of the product. |
| Input | SerialNo | Char | Yes | Serial number of the product. |
| Input | LotNo | Char | Yes | Lot number of the product. |
| Output | WipDataCollectReadingID | List of Integer |  | Unique identifier of the WIP Data Collect reading. |
| Output | WipOrderNo | List of Char |  | Dynamic Output. WIP Order number for which the reading was saved. |
| Output | WipOrderType | List of Integer |  | Dynamic Output. WIP Order type for which the reading was saved. |
| Output | WipOperationSequenceNo | List of Char |  | Dynamic Output. Operation sequence for which the reading was saved. |
| Output | WipOperationStepSequenceNo | List of Integer |  | Dynamic Output. Step sequence for which the reading was saved. |
| Output | DataType | List of Integer |  | Data type of the returned value. |
| Output | ValueInt | List of Integer |  | Stored value of integer type, null if empty. |
| Output | ValueDecimal | List of Decimal |  | Stored value of decimal type, null if empty. |
| Output | ValueChar | List of Char |  | Stored value of char type, null if empty. |
| Output | ValueBool | List of Boolean |  | Stored value of boolean type, null if empty. |
| Output | ValueDate | List of DateTime |  | Stored value of date and time type, null if empty. |
| Output | DisplayUomCode | List of Char |  | Unit of measure of the returned numeric value. |
| Output | UomCode | List of Char |  | Unit of measure. |
| Output | ResourceID | List of Integer |  | Dynamic Output. Stored context resource, null if empty. |
| Output | Container | List of Char |  | Dynamic Output. Stored context container, null if empty. |

## Validations

Validation passes if WipDataCollectID exists.
 

Validation passes if SerialNo or LotNo exists for the given ProductID.

## System Processing

System returns Data Collect Readings for the given WipDataCollectID and for the specified SerialNo or LotNo (if the SerialNo was specified, the LotNo is ignored).
