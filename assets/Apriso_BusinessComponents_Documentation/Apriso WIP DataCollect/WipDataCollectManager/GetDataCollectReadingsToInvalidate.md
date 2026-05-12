# GetDataCollectReadingsToInvalidate

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active
**Keywords:** datacollect wipdatacollect wip

## Description

Returns all readings that should be invalidated if one or more parts were disassembled.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentProductID | Integer | Yes | Reference to the product from which a part was disassembled. |
| Input | ParentSerialNo | Char | Conditional | Serial number of the product from which a part was disassembled. |
| Input | ParentLotNo | Char | Conditional | Lot number of the product from which a part is was disassembled. |
| Input | ProductID | Integer | Yes | Reference to the product of the disassembled part. |
| Input | SerialNo | Char | Conditional | Serial number of the disassembled part. |
| Input | LotNo | Char | Conditional | Lot number of the disassembled part. |
| Output | WipDataCollectReadingID | List of Integer |  | List of IDs of readings that should be invalidated if one or more parts were disassembled. |

## Validations

- Validation passes if the parent SerialNo or LotNo exists. 
- Validation passes if SerialNo or LotNo of the disassembled part exists.

## System Processing

- System fetches all readings collected or calculated for ProductID, SerialNo, and LotNo of the disassembled part. 
- System fetches all readings collected or calculated for the components of the disassembled part using GENEALOGY table. 
- System returns all readings that were calculated using fetched readings.
