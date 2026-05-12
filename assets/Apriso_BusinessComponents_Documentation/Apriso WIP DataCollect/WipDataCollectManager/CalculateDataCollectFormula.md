# CalculateDataCollectFormula

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active
**Keywords:** Placeholder

## Description

Calculates and saves the result of a formula type data collect.

*Example JSON used for DSRequirementID_JSON Dynamic Input*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SerialNo | Char | Conditional | Serial Number of the manufactured item for which the measurement was done. |
| Input | ProductID | Integer | Yes | Reference to the product (product number and product version). |
| Input | LotNo | Char | Conditional | Lot Number of the manufactured item for which the measurement was done. |
| Input | WipDataCollectID | Char | Yes | Identifier of the WIP Data Collect for which calculations have to be done. |
| Input | WipOrderNo | Char | Yes | Number of the WIP Order in which the calculation is executed. |
| Input | WipOrderType | Integer | Yes | Type of the WIP Order in which the calculation is executed. |
| Output | WipDataCollectReadingID | List of Integer |  | Identifier of the WIP Data Collect reading. |
| Output | DataType | List of Integer |  | Data type of the formula result. |
| Output | ValueInt | List of Integer |  | Formula result of integer type. |
| Output | ValueDecimal | List of Decimal |  | Formula result of decimal type. |
| Output | ValueChar | List of Char |  | Formula result of char type. |
| Output | ValueBool | List of Boolean |  | Formula result of boolean type. |
| Output | ValueDate | List of DateTime |  | Formula result of date and time type. |
| Output | UomCode | List of Char |  | Standard UOM of the returned value. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DSRequirementID_JSON | Char | JSON string of externally provided DS Requirement IDs input values. See above for example. |
| FilterReadingsByWip | Boolean | If set to true, filters WIP Data Collect reading inputs to formula by Wip Order No and Wip Order Type. |

## Validations

- Validation passes if SerialNo or LotNo is provided and exists. 
- Validation passes if the given Data Collect is of Calculated type. 
- Validation passes if the given WIP Order exists.

## System Processing

- System fetches formula Javascript source code from Formula column in WIP_DATA_COLLECT table. 
- System fetches definition of formula inputs from WIP_DATA_COLLECT_INPUT table. 
- System uses the external values from dynamic input if available and skips fetching input values from database table. 
- System fetches all input values for given formula: 
 
- For "Collected" or “Calculated” input type, the readings are fetched from WIP_DATA_COLLECT_READING table for DSRequirementID, ProductID, Serial number and/or Lot number. If FilterReadingsByWip is set to true, then readings are additionally filtered by Wip Order No and Wip Order Type. 
 
- If more than one set of readings is found, only the latest set is fetched. 
- If no readings are found for current Work Order, system fetches all sub-component Serial and/or Lot numbers using GENEALOGY table based on DSImplementLinkID. The fetched data is used to retrieve all readings measured for given DSRequirementID. If more than one set of readings is found, only the latest set for each Serial and/or Lot is fetched. 
 
- For "Custom” input type, the system fetches the value from WIP_DATA_COLLECT_VALUE table with Origin = “Custom Attribute” basing on the name and DSRequirementID of the input. 
  
- System validates that all inputs to formula have values. 
- System executes the formula. 
- System inserts a row in WIP_DATA_COLLECT_READING for each result of the formula. DataType of the rows inserted in WIP_DATA_COLLECT_READING is the same as DataType of WIP_DATA_COLLECT formula record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_DATA_COLLECT_READING | WipDataCollectID | Copied from the WipDataCollectId input parameter. |
|  | DSDataCollectID | Copied from WIP_DATA_COLLECT.DSDataCollectID. |
|  | DSRequirementID | Copied from WIP_DATA_COLLECT.DSRequirementID. |
|  | DisplayUomCode | Copied from WIP_DATA_COLLECT.DisplayUomCode. |
|  | SequenceNo | Overriden with sequential numbers as output of formula execution. |
|  | WipOrderNo | Copied from the WipOrderNo input parameter. |
|  | WipOrderType | Copied from the WipOrderType input parameter. |
|  | SerialNo | Copied from the SerialNo input parameter. |
|  | ProductID | Copied from the ProductID input parameter. |
|  | LotNo | Copied from the LotNo input parameter. |
|  | DataType | Copied from WIP_DATA_COLLECT.DataType. |
|  | ValueInt | Set to formula result if WIP_DATA_COLLECT.DataType=2, set NULL otherwise. |
|  | ValueDecimal | Set to formula result if WIP_DATA_COLLECT.DataType=3, set NULL otherwise. |
|  | ValueChar | Set to formula result if WIP_DATA_COLLECT.DataType=1, set NULL otherwise. |
|  | ValueBool | Set to formula result if WIP_DATA_COLLECT.DataType=4, set NULL otherwise. |
|  | ValueDate | Set to formula result if WIP_DATA_COLLECT.DataType=5, set NULL otherwise. |
|  | UomCode | Value copied from WIP_DATA_COLLECT.UomCode. |
