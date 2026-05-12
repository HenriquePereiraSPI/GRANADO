# WEIGH_HEADER

**Database:** Operational

**Description:** This table contains Weighing Groups and gathers items that have to be weighed together.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Allocate | BIT | False |  | False |  | When set to true, the weighing module will allocate all materials weighed to a given order. |
| CheckListGroup | NVARCHAR(40) | True |  | False | GROUP_ | Check List Group. |
| CheckListGroupClassID | INT(10,0) | True |  | False | GROUP_ | ID of the Check List Group Class. |
| CheckListGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Check List Group Type. |
| CompletionDate | DATETIME | True |  | False |  | Completion date (UTC). |
| Description | NVARCHAR(510) | True |  | False |  | Description of the Weighing Group. |
| Disposition | NVARCHAR(40) | True |  | False |  | Quality Disposition. |
| DocumentURL | NVARCHAR(1024) | True |  | False |  | When populated, the weighing module will display the link to the document. |
| DueDate | DATETIME | True |  | False |  | Due date (UTC). |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Used to assign a Weighing Group to a specific employee. |
| EnforceSequence | BIT | False |  | False |  | When set to true, the weighing module will force the user to weigh all the lines in the order specified in SequenceNo. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Group Facility. |
| GenealogyRequired | BIT | False |  | False |  | When set to true, the weighing module will add components to the Genealogy. |
| GroupNo | NVARCHAR(80) | False |  | False |  | Weighing Group number. |
| ID | INT(10,0) | False |  | True |  | Unique ID of a record. |
| LineSequenceNo | INT(10,0) | True |  | False |  | Disposition line sequence number. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot for which the components are weighed. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Used to link the Weighing Group to the WIP_OPERATION record. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | ID of the product for which the components will be weighed. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity (i.e. Lot quantity, Order quantity). |
| ReleaseOnComplete | BIT | False |  | False |  | When set to true, the weighing module will release the Container upon completion of the Weighing Group. |
| SafetyInstrGroup | NVARCHAR(40) | True |  | False | GROUP_ | Safety Instruction Group. When populated, the weighing module will display the group safety instructions. |
| SafetyInstrGroupClassID | INT(10,0) | True |  | False | GROUP_ | ID of the Safety Instruction Class. |
| SafetyInstrGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Safety Instruction Group Type. |
| ScaleStationID | INT(10,0) | True |  | False | RESOURCE_ | Scale Station recommended for the Weighing Group, defined in the RESOURCE table. |
| SignatureRequired | BIT | False |  | False |  | When set to true, the weighing module will require an electronic signature upon the completion of the Weighing Group. |
| SingleContainer | BIT | False |  | False |  | When set to true, all lines will have to be placed inside the same Container. |
| SkillID | INT(10,0) | True |  | False | SKILL | The ID of the Skill required for weighing. |
| StartDate | DATETIME | True |  | False |  | Start date (UTC). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM for the quantity field. |
| UserReference | NVARCHAR(80) | True |  | False |  | Optional user reference. |
| ValidateStagingLocation | BIT | False |  | False |  | When set to true, any material used during the weighing must be located at the same location as the Scale Station in use. |
| WeighMechanism | INT(10,0) | False |  | False | WEIGH_MECHANISM | Defines the execution mode for the Weighing Group i.e. User, Automatic (PLCs, Robots, etc). |
| WeighStatus | INT(10,0) | False |  | False | WEIGH_STATUS | Reference to weigh status indicating status of the Weighing Group. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | Used to link the Weighing Group to the WIP_ORDER table. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Used to link the Weighing Group to the WIP_ORDER table. |

## Primary Key

- **PK_WEIGH_HEADER** on `ID`

## Foreign Keys (this table -> other)

- **FK_WEIGH_HEADER_EMPLOYEE** — WEIGH_HEADER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WEIGH_HEADER_FACILITY** — WEIGH_HEADER -> FACILITY (`Facility -> Facility`)
- **FK_WEIGH_HEADER_GROUP** — WEIGH_HEADER -> GROUP_ (`SafetyInstrGroup, SafetyInstrGroupType, SafetyInstrGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_HEADER_GROUP_2** — WEIGH_HEADER -> GROUP_ (`CheckListGroup, CheckListGroupType, CheckListGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_HEADER_LOT_NO** — WEIGH_HEADER -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_WEIGH_HEADER_PRODUCT** — WEIGH_HEADER -> PRODUCT (`ProductID -> ID`)
- **FK_WEIGH_HEADER_RESOURCE2** — WEIGH_HEADER -> RESOURCE_ (`ScaleStationID -> ID`)
- **FK_WEIGH_HEADER_SKILL** — WEIGH_HEADER -> SKILL (`SkillID -> ID`)
- **FK_WEIGH_HEADER_UNIT** — WEIGH_HEADER -> UNIT (`UnitID -> ID`)
- **FK_WEIGH_HEADER_UOM** — WEIGH_HEADER -> UOM (`UomCode -> UomCode`)
- **FK_WEIGH_HEADER_WEIGH_MECHANISM** — WEIGH_HEADER -> WEIGH_MECHANISM (`WeighMechanism -> WeighMechanism`)
- **FK_WEIGH_HEADER_WEIGH_STATUS** — WEIGH_HEADER -> WEIGH_STATUS (`WeighStatus -> WeighStatus`)
- **FK_WEIGH_HEADER_WIP_OPERATION** — WEIGH_HEADER -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WEIGH_HEADER_WIP_ORDER** — WEIGH_HEADER -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_WEIGH_HEADER_CONTAINER_WEIGH_HEADER** — WEIGH_HEADER_CONTAINER -> WEIGH_HEADER (`WeighHeaderID -> ID`)
- **FK_WEIGH_HEADER_WEIGH_LINE** — WEIGH_LINE -> WEIGH_HEADER (`WeighHeaderID -> ID`)
- **FK_WEIGH_HEADER_WEIGH_LINE_1** — WEIGH_LINE -> WEIGH_HEADER (`ChildWeighHeaderID -> ID`)

## Unique Indexes

- **UK_WEIGH_HEADER** on `GroupNo`

## Non-Unique Indexes

- **IF_WEIGH_HEADER_GROUP** on `SafetyInstrGroup, SafetyInstrGroupType, SafetyInstrGroupClassID`
- **IF_WEIGH_HEADER_GROUP_2** on `CheckListGroup, CheckListGroupType, CheckListGroupClassID`
- **IF_WEIGH_HEADER_LOT_NO** on `LotNo, ProductID`
- **IF_WEIGH_HEADER_PRODUCT** on `ProductID`
- **IF_WEIGH_HEADER_RESOURCE2** on `ScaleStationID`
- **IF_WEIGH_HEADER_SKILL** on `SkillID`
- **IF_WEIGH_HEADER_UNIT** on `UnitID`
- **IF_WEIGH_HEADER_WEIGH_MECHANISM** on `WeighMechanism`
- **IF_WEIGH_HEADER_WEIGH_STATUS** on `WeighStatus`
- **IF_WEIGH_HEADER_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
