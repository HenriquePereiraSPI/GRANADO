# WEIGH_LINE

**Database:** Operational

**Description:** This table stores Lines (items) to be weighed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowMixingLot | BIT | False |  | False |  | When set to true, different Lots can be used during the weighing of the material. Otherwise, mixing of Lots will require supervisor approval with an electronic signature. |
| AllowMixingProduct | BIT | False |  | False |  | When set to false, the line must be weighed in a separate Container. Otherwise, the line can be mixed with other lines in a Container. |
| AllowOverweight | BIT | False |  | False |  | When set to false, overweiging of material is forbidden. Otherwise, overweighing will be allowed but the line and the Container will require supervisor approval. |
| CheckListGroup | NVARCHAR(40) | True |  | False | GROUP_ | Check List Group. |
| CheckListGroupClassID | INT(10,0) | True |  | False | GROUP_ | Check List Group Class ID. |
| CheckListGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Check List Group Type. |
| ChildWeighHeaderID | INT(10,0) | True |  | False | WEIGH_HEADER | Populated when a line is a placeholder for another Weighing Group. |
| Container | NVARCHAR(40) | True |  | False |  | When populated, it tells the weighing module which Container must be used for weighing the line. |
| ContainerRequired | BIT | False |  | False |  | When set to true, the weighing module will prompt users to enter the Container number for the material. |
| Description | NVARCHAR(510) | True |  | False |  | Description of the line. |
| DirectIntroduction | BIT | False |  | False |  | When set to true, the line will not be weighed, and will be introduced directly. |
| Disposition | NVARCHAR(40) | True |  | False |  | Quality Disposition. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | A user is working on a line. It is used to avoid multiple users weighing the same line. |
| HazMatGroup | NVARCHAR(40) | True |  | False | GROUP_ | Group for which the exposure will be tracked when TrackExposure is enabled. |
| HazMatGroupClassID | INT(10,0) | True |  | False | GROUP_ | HazMat Group Class ID. |
| HazMatGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | HazMat Group Type. |
| ID | INT(10,0) | False |  | True |  | Unique ID of a record. |
| LineSequenceNo | INT(10,0) | True |  | False |  | Disposition Line Sequence Number. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | When populated, it tells the weighing module which lot must be used for weighing the line. |
| LotRequired | BIT | False |  | False |  | When set to true, the weighing module will prompt users to enter the Lot no for the material. |
| MaxAdjustQuantity | DECIMAL(28,10) | True |  | False |  | Maximum quantity that the weighing module will be allowed to adjust the inventory in case the weighed quantity is greater than the inventory quantity. |
| MaxAdjustQuantityUomCode | NVARCHAR(10) | True |  | False | UOM | UOM code of the MaxAdjustQuantity value. |
| NegativeTolerance | DECIMAL(28,10) | True |  | False |  | Negative tolerance in the same unit of measure as other quantities. |
| NonInventoryDestination | BIT | True |  | False |  | When set to true, it indicates that the quantity weighed will not create inventory in Apriso. |
| NonInventoryItem | BIT | False | ((0)) | False |  | Allows the weigh operation to weigh components that do not exist in the inventory. |
| NonInventorySource | BIT | True |  | False |  | When set to true, it indicates that the source inventory item used during the weighing operation does not exist in the inventory. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Used to link the Weighing Line to the WIP_OPERATION record. |
| PositiveTolerance | DECIMAL(28,10) | True |  | False |  | Positive tolerance in the same unit of measure as other quantities. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Product that will be weighed. |
| ProductRequired | BIT | False |  | False |  | When set to true, the weighing module will prompt users to enter the Product number for the material. |
| RequiredQuantity | DECIMAL(28,10) | True |  | False |  | Quantity to be weighed in order to complete the line. |
| SafetyInstrGroup | NVARCHAR(40) | True |  | False | GROUP_ | Safety Instruction Group. |
| SafetyInstrGroupClassID | INT(10,0) | True |  | False | GROUP_ | Safety Instruction Class ID. |
| SafetyInstrGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Safety Instruction Group Type. |
| ScaleID | INT(10,0) | True |  | False | RESOURCE_ | Scale Recommend for the line. |
| ScaleStationID | INT(10,0) | True |  | False | RESOURCE_ | Weigh Station recommended for the line. |
| SequenceNo | INT(10,0) | False |  | False |  | When EnforceSequence is true, the weighing module will force weighing of the lines in accordance with the order defined in the SequnceNo column. |
| SignatureRequired | BIT | False |  | False |  | When set to true, the weighing module will require electronic signature when executing every weighing operation and upon the completion of the line. |
| TrackExposure | BIT | True |  | False |  | Indicates if tracking of Employee HazMat exposure must be tracked. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure for the quantity fields. |
| UserReference | NVARCHAR(80) | True |  | False |  | Optional user reference. |
| UseScaleTolerance | BIT | False |  | False |  | When set to true, scale tolerances will be used instead of line tolerances. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | When populated, it tells the weighing module the location from where the material must be used for weighing the line. |
| WarehouseLocationRequired | BIT | False |  | False |  | When set to true, the weighing module will prompt users to enter the warehouse location for the material. |
| WeighedQuantity | DECIMAL(28,10) | True |  | False |  | Quantity already weighed. |
| WeighHeaderID | INT(10,0) | False |  | False | WEIGH_HEADER | ID of the Weigh Header to which the line belongs to. |
| WeighStatus | INT(10,0) | False |  | False | WEIGH_STATUS | Reference to weigh status indicating status of the line. |
| WipComponentID | INT(10,0) | True |  | False | WIP_COMPONENT | Used to link the Weighing Line to the WIP_COMPONENT record. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | Used to link the Weighing Line to the WIP_ORDER table. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Used to link the Weighing Line to the WIP_ORDER table. |
| ZeroQuantity | DECIMAL(28,10) | True |  | False |  | This is the threshold quantity that will be used by the weighing module to ask the user if there is any remaining quantity. |
| ZeroQuantityUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure for the zero quantity field. |

## Primary Key

- **PK_WEIGH_LINE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WEIGH_HEADER_WEIGH_LINE** — WEIGH_LINE -> WEIGH_HEADER (`WeighHeaderID -> ID`)
- **FK_WEIGH_HEADER_WEIGH_LINE_1** — WEIGH_LINE -> WEIGH_HEADER (`ChildWeighHeaderID -> ID`)
- **FK_WEIGH_LINE_EMPLOYEE** — WEIGH_LINE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WEIGH_LINE_GROUP** — WEIGH_LINE -> GROUP_ (`SafetyInstrGroup, SafetyInstrGroupType, SafetyInstrGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_LINE_GROUP_** — WEIGH_LINE -> GROUP_ (`CheckListGroup, CheckListGroupType, CheckListGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_LINE_GROUP_2** — WEIGH_LINE -> GROUP_ (`HazMatGroup, HazMatGroupType, HazMatGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_LINE_LOT_NO** — WEIGH_LINE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WEIGH_LINE_PRODUCT** — WEIGH_LINE -> PRODUCT (`ProductID -> ID`)
- **FK_WEIGH_LINE_RESOURCE_** — WEIGH_LINE -> RESOURCE_ (`ScaleStationID -> ID`)
- **FK_WEIGH_LINE_RESOURCE_2** — WEIGH_LINE -> RESOURCE_ (`ScaleID -> ID`)
- **FK_WEIGH_LINE_UNIT** — WEIGH_LINE -> UNIT (`UnitID -> ID`)
- **FK_WEIGH_LINE_UOM** — WEIGH_LINE -> UOM (`UomCode -> UomCode`)
- **FK_WEIGH_LINE_UOM2** — WEIGH_LINE -> UOM (`ZeroQuantityUomCode -> UomCode`)
- **FK_WEIGH_LINE_UOM3** — WEIGH_LINE -> UOM (`MaxAdjustQuantityUomCode -> UomCode`)
- **FK_WEIGH_LINE_WAREHOUSE_LOCATION** — WEIGH_LINE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WEIGH_LINE_WEIGH_STATUS** — WEIGH_LINE -> WEIGH_STATUS (`WeighStatus -> WeighStatus`)
- **FK_WEIGH_LINE_WIP_COMPONENT** — WEIGH_LINE -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_WEIGH_LINE_WIP_OPERATION** — WEIGH_LINE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WEIGH_LINE_WIP_ORDER** — WEIGH_LINE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_WEIGH_LINE_DETAIL_WEIGH_LINE** — WEIGH_LINE_DETAIL -> WEIGH_LINE (`WeighLineID -> ID`)

## Unique Indexes

- **UK_WEIGH_LINE** on `WeighHeaderID, SequenceNo`

## Non-Unique Indexes

- **IF_WEIGH_HEADER_WEIGH_LINE_1** on `ChildWeighHeaderID`
- **IF_WEIGH_LINE_GROUP** on `SafetyInstrGroup, SafetyInstrGroupType, SafetyInstrGroupClassID`
- **IF_WEIGH_LINE_GROUP_** on `CheckListGroup, CheckListGroupType, CheckListGroupClassID`
- **IF_WEIGH_LINE_GROUP_2** on `HazMatGroup, HazMatGroupType, HazMatGroupClassID`
- **IF_WEIGH_LINE_LOT_NO** on `LotNo, ProductID`
- **IF_WEIGH_LINE_PRODUCT** on `ProductID`
- **IF_WEIGH_LINE_RESOURCE_** on `ScaleStationID`
- **IF_WEIGH_LINE_RESOURCE_2** on `ScaleID`
- **IF_WEIGH_LINE_UNIT** on `UnitID`
- **IF_WEIGH_LINE_WEIGH_STATUS** on `WeighStatus`
- **IF_WEIGH_LINE_WIP_COMPONENT** on `WipComponentID`
- **IF_WEIGH_LINE_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
