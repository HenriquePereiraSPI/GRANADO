# SaveDataCollectReading

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active

## Description

Saves Data Collect measurement during WIP Order execution.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SerialNo | Char | Conditional | Serial Number of the manufactured item for which the measurement was done. |
| Input | LotNo | Char | Conditional | Lot Number of the manufactured item for which the measurement was done. |
| Input | ProductID | Integer | Yes | Reference to the product (product number and product version). |
| Input | WipDataCollectID | Integer | Yes | Unique identifier of WIP Data Collect for which the measurement was done. |
| Input | ValueInt | Integer | Conditional | Measured value of integer type. |
| Input | ValueDecimal | Decimal | Conditional | Measured value of decimal type. |
| Input | ValueChar | Char | Conditional | Measured value of character data type. |
| Input | ValueBool | Boolean | Conditional | Measured value of boolean type. |
| Input | ValueDate | DateTime | Conditional | Measured value of date and time type. |
| Output | WipDataCollectReadingID | Integer |  | Identifier of the saved measurement. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Container | Char | Container identification. |
| ResourceID | Integer | Identifier of the Resource. |

## Validations

- Validation passes if WIP DC exists. 
- Validation passes if provided value (ValueInt, ValueDecimal, ValueChar, ValueBool or ValueDate) corresponds with WIP DC DataType. The matching value is stored and the others are skipped. 
- Validation passes if SerialNo or LotNo exists (if provided). 
- Validation passes if product exists. 
- Validation passes if resource exists (if provided). 
- Validation passes if container exists (if provided).

## System Processing

- System inserts record in WIP_DATA_COLLECT_READINGS table. 
- System saves only the Value of the type defined in the DataType column in WIP_DATA_COLLECT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_DATA_COLLECT_READING | ID | Autoincremented. |
|  | WipDataCollectID | Copied from the WipDataCollectID input parameter. |
|  | DSDataCollectID | Copied from WIP_DATA_COLLECT.DSDataCollectID. |
|  | DSRequirementID | Copied from WIP_DATA_COLLECT.DSRequirementID. |
|  | DisplayUomCode | Copied from WIP_DATA_COLLECT.DisplayUomCode. |
|  | SequenceNo | Increased within WipDataCollect readings set. |
|  | WipOrderNo | Copied from WIP_DATA_COLLECT_PLAN.WipOrderNo. |
|  | WipOrderType | Copied from WIP_DATA_COLLECT_PLAN.WipOrderType. |
|  | SerialNo | Copied from the SerialNo dynamic input parameter. |
|  | ProductID | Copied from the ProductId dynamic input parameter. |
|  | LotNo | Copied from the LotNo dynamic input parameter. |
|  | ResourceID | Copied from the ResourceId dynamic input parameter. |
|  | Container | Copied from the Container dynamic input parameter. |
|  | DataType | Copied from WIP_DATA_COLLECT.DataType. |
|  | ValueInt | Copied from the ValueInt input parameter. |
|  | ValueDecimal | Copied from the ValueDecimal input parameter. |
|  | ValueChar | Copied from the ValueChar input parameter. |
|  | ValueBool | Copied from the ValueBool input parameter. |
|  | ValueDate | Copied from the ValueDate input parameter. |
|  | OprSequenceNo | Copied from WIP_DATA_COLLECT_PLAN.OprSequenceNo. |
|  | StepSequenceNo | Copied from WIP_DATA_COLLECT_PLAN.StepSequenceNo. |
|  | UomCode | Value copied from WIP_DATA_COLLECT.UomCode. |
