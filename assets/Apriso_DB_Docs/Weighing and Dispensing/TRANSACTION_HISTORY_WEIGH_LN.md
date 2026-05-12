# TRANSACTION_HISTORY_WEIGH_LN

**Database:** Operational

**Description:** This table contains transaction history of the Weighing Lines.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowMixingLot | BIT | True |  | False |  | When set to true, different Lots can be used during the weighing of the material. Otherwise, mixing of Lots will require supervisor approval with an electronic signature. |
| AllowMixingProduct | BIT | True |  | False |  | When set to false, the line must be weighed in a separate Container. Otherwise, the line can be mixed with other lines in a Container. |
| AllowOverweight | BIT | True |  | False |  | When set to false, overweiging of material is forbidden. Otherwise, overweighing will be allowed but the line and the Container will require supervisor approval. |
| CheckListGroup | NVARCHAR(40) | True |  | False |  | Check List Group. |
| CheckListGroupClassID | INT(10,0) | True |  | False |  | Check List Group Class ID. |
| CheckListGroupType | SMALLINT(5,0) | True |  | False |  | Check List Group Type. |
| ChildGroupNo | NVARCHAR(80) | True |  | False |  | It is populated when a line is a placeholder for other Weighing Group. |
| Container | NVARCHAR(40) | True |  | False |  | Required Container of material. |
| ContainerRequired | BIT | True |  | False |  | When set to true, the weighing module will prompt users to enter the Container number for the material. |
| Description | NVARCHAR(1000) | True |  | False |  | Description of the line. |
| DirectIntroduction | BIT | True |  | False |  | When set to true, the line will not be weighed, and will be introduced directly. |
| Disposition | NVARCHAR(40) | True |  | False |  | Quality Disposition. |
| GroupNo | NVARCHAR(80) | True |  | False |  | Weighing Group number. |
| HazMatGroup | NVARCHAR(40) | True |  | False |  | Group for which the exposure will be tracked when TrackExposure is enabled. |
| HazMatGroupClassID | INT(10,0) | True |  | False |  | HazMat Group Class ID. |
| HazMatGroupType | SMALLINT(5,0) | True |  | False |  | HazMat Group Type. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of a record. |
| LineSequenceNo | INT(10,0) | True |  | False |  | Disposition line sequence number. |
| LotNo | NVARCHAR(40) | True |  | False |  | Required Lot number of material. |
| LotRequired | BIT | True |  | False |  | When set to true, the weighing module will prompt users to enter the Lot No. for the material. |
| MaxAdjustQuantity | DECIMAL(28,10) | True |  | False |  | Maximum quantity allowed to be automatically adjusted in the inventory if the weighed quantity is greater than the inventory quantity. |
| MaxAdjustQuantityUomCode | NVARCHAR(10) | True |  | False |  | UOM code of the MaxAdjustQuantity value. |
| NegativeTolerance | DECIMAL(28,10) | True |  | False |  | Negative tolerance in the same unit of measure as other quantities. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Link to WIP Operation. |
| PositiveTolerance | DECIMAL(28,10) | True |  | False |  | Positive tolerance in the same unit of measure as other quantities. |
| ProductDescription | NVARCHAR(1000) | True |  | False |  | Description of the Product. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Product that will be weighed. |
| ProductRequired | BIT | True |  | False |  | When set to true, the weighing module will prompt users to enter the Product number for the material. |
| RequiredQuantity | DECIMAL(28,10) | True |  | False |  | Quantity to be weighed in order to complete the line. |
| SafetyInstrGroup | NVARCHAR(40) | True |  | False |  | Safety Instruction Group. |
| SafetyInstrGroupClassID | INT(10,0) | True |  | False |  | Safety Instruction Class ID. |
| SafetyInstrGroupType | SMALLINT(5,0) | True |  | False |  | Safety Instruction Group Type. |
| Scale | NVARCHAR(80) | True |  | False |  | Scale recommend for the line. |
| ScaleStation | NVARCHAR(80) | True |  | False |  | Scale station recommended for the line. |
| SequenceNo | INT(10,0) | True |  | False |  | Line sequence number. |
| SignatureRequired | BIT | True |  | False |  | Indicates if an electronic signature is required for all weighing operations and on completion of the line. |
| TrackExposure | BIT | True |  | False |  | Indicates if tracking of Employee HazMat exposure must be tracked. |
| Transaction_ | NVARCHAR(40) | True |  | False |  | Transaction name. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | ID of the Transaction History record. |
| UomCode | NVARCHAR(10) | True |  | False |  | Unit of measure for the quantity fields. |
| UserReference | NVARCHAR(80) | True |  | False |  | Optional user reference. |
| UseScaleTolerance | BIT | True |  | False |  | When set to true, scale tolerances will be used instead of line tolerances. |
| WarehouseLocation | NVARCHAR(80) | True |  | False |  | Required Warehouse Location of material. |
| WarehouseLocationRequired | BIT | True |  | False |  | When set to true, the weighing module will prompt users to enter the Warehouse Location for the material. |
| WeighedQuantity | DECIMAL(28,10) | True |  | False |  | Quantity already weighed. |
| WeighStatus | NVARCHAR(80) | True |  | False |  | Weigh Status indicating status of the line. |
| WipComponentID | INT(10,0) | True |  | False |  | Link to WIP_COMPONENT record. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | Link to WIP Order. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Link to WIP Order. |
| ZeroQuantity | DECIMAL(28,10) | True |  | False |  | Threshold below which the user is asked if there is any remaining quantity that should be adjusted to zero. |
| ZeroQuantityUomCode | NVARCHAR(10) | True |  | False |  | UOM code of the ZeroQuantity value. |

## Primary Key

- **PK_TRANSACTION_HISTORY_WEIGH_LN** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_WEIGH_LN_T** — TRANSACTION_HISTORY_WEIGH_LN -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_GroupNo** on `GroupNo`
- **IXD_TransactionHistoryID** on `TransactionHistoryID`
