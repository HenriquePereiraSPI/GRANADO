# UpdateDataCollectReading

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active
**Keywords:** Data Collect, Wip Data Collect, Updater

## Description

Updates existing WipDataCollectReading.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipDataCollectReadingID | Integer | Yes | ID of existing WipDataCollectReading. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Container | Char | Container identification. |
| LotNo | Char | Lot Number of the product. |
| ProductID | Integer | Unique identifier of the product. |
| ResourceID | Integer | Unique identifier of the resource. |
| SerialNo | Char | Serial Number of the product. |
| ValueBool | Boolean | Recorded value of boolean type. |
| ValueChar | Char | Recorded value of char type. |
| ValueDate | DateTime | Recorded value of dateTime type. |
| ValueDecimal | Decimal | Recorded value of type decimal type. |
| ValueInt | Integer | Recorded value of integer type. |

## Validations

- Validation passes if WipDataCollectReading exists. 
- Validation passes if SerialNo exists (if provided). 
- Validation passes if Product exists (if provided). 
- Validation passes if LotNo exists (if provided). 
- Validation passes if Resource exists (if provided). 
- Validation passes if Container exists (if provided).

## System Processing

- System updates values for the given reading in the WIP_DATA_COLLECT_READINGS table according to the specified dynamic inputs (if provided).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_DATA_COLLECT_READING | ValueInt | Copied from the ValueInt Input parameter. |
|  | ValueDecimal | Copied from the ValueDecimal Input parameter. |
|  | ValueChar | Copied from the ValueChar Input parameter. |
|  | ValueBool | Copied from the ValueBool Input parameter. |
|  | ValueDate | Copied from the ValueDate Input parameter. |
|  | SerialNo | Copied from the SerialNo Input parameter. |
|  | ProductID | Copied from the ProductID Input parameter. |
|  | LotNo | Copied from the LotNo Input parameter. |
|  | ResourceID | Copied from the ResourceID Input parameter. |
|  | Container | Copied from the Container Input parameter. |
