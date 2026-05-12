# ManageWeighLine

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Line Create Update Manage

## Description

This method creates or updates a Weigh Line record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WeighLineID | Integer | No | ID of existing Weigh Line record. If provided, the record is updated. |
| Input | WeighHeaderID | Integer | Conditional | The ID of a parent Weigh Header record, required for new record. |
| Input | SequenceNo | Integer | No | Line sequence number. |
| Output | CreatedWeighLineID | Integer | Yes | ID of created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Description | Char | Description of the line. |
| ProductID | Integer | ID of the Product to weigh. |
| RequiredQuantity | Decimal | Required quantity of the product. |
| WeighedQuantity | Decimal | Quantity already weighed. |
| UomCode | Char | Unit of measure of the quantity. |
| ChildWeighHeaderID | Integer | ID of child Weigh Header. |
| DirectIntroduction | Boolean | Indicates direct introduction weighing. The default value for new record is FALSE. |
| WeighStatus | Integer | The status of Line (1 - New, 2 - Started, 3 - Completed, 4 - Closed, 5 - Blocked, 6 - Weighed). The default value for new record is 1. |
| CheckListGroup | Char | Check List group. |
| CheckListGroupType | Integer | Check List group type. |
| CheckListGroupClassID | Integer | Check List group class ID. |
| SafetyInstrGroup | Char | Safety Instructions group. |
| SafetyInstrGroupType | Integer | Safety Instructions group type. |
| SafetyInstrGroupClassID | Integer | Safety Instructions group class ID. |
| WipOrderNo | Char | WIP Order Number. |
| WipOrderType | Integer | WIP Order Type. |
| OprSequenceNo | Char | Operation Sequence Number. |
| WipComponentID | Integer | ID of WIP Component. |
| LotNo | Char | Lot number of source material. |
| WarehouseLocationID | Integer | Warehouse Location of Container. |
| Container | Char | Container number (source of the material). |
| AllowMixingProduct | Boolean | Indicates if Line content can be mixed with other Products. The default value for new record is FALSE. |
| AllowMixingLot | Boolean | Indicates if Line content can be mixed with different Lot numbers. The default value for new record is FALSE. |
| AllowOverweight | Boolean | Indicates if overweight is allowed. The default value for new record is FALSE. |
| UserReference | Char | Field for user reference. |
| SignatureRequired | Boolean | Indicates if Line signature is required. The default value for new record is FALSE. |
| PositiveTolerance | Decimal | Positive tolerance of quantity to weigh. |
| NegativeTolerance | Decimal | Negative tolerance of quantity to weigh. |
| UseScaleTolerance | Boolean | Indicates if Scale tolerance should be used. The default value for new record is FALSE. |
| MaxAdjustQuantity | Decimal | Max. adjusted quantity. |
| MaxAdjustQuantityUomCode | Char | Max. adjusted quantity UOM. |
| ZeroQuantity | Decimal | Zero quantity of the Line. |
| ZeroQuantityUomCode | Char | Zero quantity UOM. |
| TrackExposure | Boolean | Indicates if HazMat exposure of Employee should be tracked. The default value for new record is FALSE. |
| HazMatGroup | Char | Hazardous material group. |
| HazMatGroupType | Integer | Hazardous material group type. |
| HazMatGroupClassID | Integer | Hazardous material group class ID. |
| LotRequired | Boolean | Indicates of Lot number is required. The default value for new record is FALSE. |
| ContainerRequired | Boolean | Indicates if Container number is required. The default value for new record is FALSE. |
| ProductRequired | Boolean | Indicates if Product number is required. The default value for new record is FALSE. |
| WarehouseLocationRequired | Boolean | Indicates if Warehouse Location is required. The default value for new record is FALSE. |
| ScaleStationID | Integer | Resource ID of the Scale Station. |
| ScaleID | Integer | Resource ID of the Scale. |
| Disposition | Char | Disposition related to the Weigh Line. |
| DispositionLineSequenceNo | Integer | Disposition line sequence number related to the Weigh Line. |
| NonInventoryItem | Boolean | Allows to weigh components that do not exist in the inventory. The default value for new record is FALSE. |
| NonInventorySource | Boolean | When set to true, it indicates that the source inventory does not exist in the inventory. The default value for new record is FALSE. |
| NonInventoryDestination | Boolean | When set to true, it indicates that the quantity weighed will not create an inventory record. The default value for new record is FALSE. |

## Validations

- System validates if Weigh Line record exists (when WeighLineID is provided). 
- System validates if Weigh Header is specified and exists for a new record (when WeighLineID is not provided). 
- System validates if a different Weigh Header is not provided in update mode (when WeighLineID is provided). 
- System validates if appropriate Dynamic Inputs are provided together: 
 
- Safety Instructions Group, its Type and Class ID 
- Check List Group, its Type and Class ID 
- HazMat Group, its Type and Class ID 
- WIP Order Number and Type 
- WIP Operation with WIP Order 
- Disposition with Line Sequence Number 
- ZeroQuantity with ZeroQuantityUomCode 
- MaxAdjustQuantity with MaxAdjustQuantityUomCode 
- Lot No. with Product 
 
- System validates if provided Sequence number does not exist. 
- System validates if provided Weigh Status is proper. 
- System validates if provided Child Weigh Header exists. 
- System validates if provided Scale Station and the Scale exist. 
- System validates if provided Check List Group and Safety Instructions Group exist. 
- System validates if provided HazMat group exists. 
- System validates if provided Product exists. 
- System validates if provided Lot Number exists. 
- System validates if provided WIP Order and WIP Operation exist. 
- System validates if provided WIP Component exists. 
- System validates if provided Warehouse Location exists. 
- System validates if provided Container exists. 
- System validates if all provided UOMs exist. 
- System validates if provided Disposition Line exists (the Facility is read from the parent Weigh Header).

## System Processing

- If WeighLineID is provided (a non-zero value), the system updates the fields of existing record in the WEIGH_LINE table according to the used Inputs. 
- If WeighLineID is not provided, the system creates a new record in the WEIGH_LINE table: 
 
- All fields are populated according to the used Inputs. 
- All Boolean fields are set to FALSE by default (if an Input is not created). 
- The Weigh Status is set to 1 (New) by default (if an Input is not created). 
- The new UNIT record is created for the Weigh Line record. 
- If a Sequence number is not specified, it is generated basing on existing Lines. 
 
- The empty values of Inputs (respectively: an empty string or zero integer) are changed to the null values in the Weigh Line record. (Except for all Boolean fields, WeighHeaderID, WeighStatus and SequenceNo). 
- When Dynamic Output named UnitID (of type Integer) is present, it is populated with the ID of the UNIT record related to the Weigh Line.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_LINE | ID | WeighLineID/CreatedWeighLineID |
|  | WeighHeaderID | WeighHeaderID |
|  | SequenceNo | SequenceNo |
|  | Description | Description |
|  | ProductID | ProductID |
|  | RequiredQuantity | RequiredQuantity |
|  | WeighedQuantity | WeighedQuantity |
|  | UomCode | UomCode |
|  | ChildWeighHeaderID | ChildWeighHeaderID |
|  | DirectIntroduction | DirectIntroduction |
|  | WeighStatus | WeighStatus |
|  | CheckListGroup | CheckListGroup |
|  | CheckListGroupType | CheckListGroupType |
|  | CheckListGroupClassID | CheckListGroupClassID |
|  | SafetyInstrGroup | SafetyInstrGroup |
|  | SafetyInstrGroupType | SafetyInstrGroupType |
|  | SafetyInstrGroupClassID | SafetyInstrGroupClassID |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | WipComponentID | WipComponentID |
|  | LotNo | LotNo |
|  | WarehouseLocationID | WarehouseLocationID |
|  | Container | Container |
|  | AllowMixingProduct | AllowMixingProduct |
|  | AllowMixingLot | AllowMixingLot |
|  | AllowOverweight | AllowOverweight |
|  | UserReference | UserReference |
|  | SignatureRequired | SignatureRequired |
|  | PositiveTolerance | PositiveTolerance |
|  | NegativeTolerance | NegativeTolerance |
|  | UseScaleTolerance | UseScaleTolerance |
|  | MaxAdjustQuantity | MaxAdjustQuantity |
|  | MaxAdjustQuantityUomCode | MaxAdjustQuantityUomCode |
|  | ZeroQuantity | ZeroQuantity |
|  | ZeroQuantityUomCode | ZeroQuantityUomCode |
|  | TrackExposure | TrackExposure |
|  | HazMatGroup | HazMatGroup |
|  | HazMatGroupType | HazMatGroupType |
|  | HazMatGroupClassID | HazMatGroupClassID |
|  | LotRequired | LotRequired |
|  | ContainerRequired | ContainerRequired |
|  | ProductRequired | ProductRequired |
|  | WarehouseLocationRequired | WarehouseLocationRequired |
|  | ScaleStationID | ScaleStationID |
|  | ScaleID | ScaleID |
|  | Disposition | Disposition |
|  | LineSequenceNo | DispositionLineSequenceNo |
|  | NonInventoryItem | NonInventoryItem |
|  | NonInventorySource | NonInventorySource |
|  | NonInventoryDestination | NonInventoryDestination |
|  | UnitID | Link to a new record in the UNIT table. |
| UNIT | ID | New record created for new Weigh Line. |
