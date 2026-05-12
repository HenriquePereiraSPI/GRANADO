# ALERT_DETAIL

**Database:** Operational

**Description:** Contains details about the attributes of an Alert (e.g. specifications/values, order links, alert sources).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlertID | INT(10,0) | False |  | True | ALERT | ID of the Alert involved. |
| Characteristic | NVARCHAR(40) | True |  | False | CHARACTERISTIC | Characteristic associated with the Disposition Test. |
| ConformingToControl | BIT | True |  | False |  | A bit field to specify if the Alert is linked to a Disposition Test that was conforming to specification control limits. |
| ConformingToSpecification | BIT | True |  | False |  | A bit field to specify if the Alert is linked to a Disposition Test that was conforming to specification limits. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | Container related to the given Alert. It is passed to a Business Component as Container (optional). |
| DispositionTestID | BIGINT(19,0) | True |  | False | DISPOSITION_TEST | ID of the Disposition that generated the given Alert. It is passed to a Business Component as DispositionID (optional). |
| ExternalReference | NVARCHAR(255) | True |  | False |  | A text field for variable data to define the source of the given Alert from an external system. It is passed to a Business Component as ExternalReference (optional). |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility related to the given Alert (derived by the system). |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Reference to a Lot in the given Alert. |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | Lower control limit for the Characteristic linked to the Disposition Test. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Lower specification limit for the Characteristic linked to the Disposition Test. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION_STEP | Reference to the WIP Operation sequence (in addition to WIP Order and WIP Order Type information). |
| ProductID | INT(10,0) | True |  | False | LOT_NO | ID of the Product that generated the given Alert. It is passed to a Business Component as ProductID (optional). |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Name of the Resource that generated the given Alert. It is passed to a Business Component as ResourceName (optional). |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Type of Resource that generated the given Alert. ResourceType + Resource uniquely define a Resource. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial no |
| SourceBCMethodFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the BUSINESS_COMPONENT_METHOD table. |
| SourceTaskID | INT(10,0) | True |  | False | TASK | ID of the source task that generated the given Alert. It is passed to a Business Component as SourceTaskID (optional). |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Step sequence number of the WIP Operation. |
| TargetValue | DECIMAL(28,10) | True |  | False |  | Target value for the Characteristic linked to the Disposition Test. |
| TestAttribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UoM code for the Characteristic linked to the Disposition Sample. |
| UpperControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper control limit for the Characteristic linked to the Disposition Test. |
| UpperSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper specification limit for the alert detail. |
| Value_ | DECIMAL(28,10) | True |  | False |  | Actual value. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION_STEP | WIP Order Number related to the given Alert. It is passed to a Business Component as WipOrderNo (optional). |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STEP | Type of WIP Order related to the given Alert. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center related to the given Alert (derived by the system). |

## Primary Key

- **PK_ALERT_DETAIL** on `AlertID`

## Foreign Keys (this table -> other)

- **FK_ALERT_DETAIL_ALERT** — ALERT_DETAIL -> ALERT (`AlertID -> ID`)
- **FK_ALERT_DETAIL_CHARACTERISTIC** — ALERT_DETAIL -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_ALERT_DETAIL_CONTAINER** — ALERT_DETAIL -> CONTAINER (`Container -> Container`)
- **FK_ALERT_DETAIL_DISPOSITION_TEST** — ALERT_DETAIL -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_ALERT_DETAIL_FACILITY** — ALERT_DETAIL -> FACILITY (`Facility -> Facility`)
- **FK_ALERT_DETAIL_LOT_NO** — ALERT_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_ALERT_DETAIL_PRODUCT** — ALERT_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_ALERT_DETAIL_RESOURCE_** — ALERT_DETAIL -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_ALERT_DETAIL_SERIALNO** — ALERT_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_ALERT_DETAIL_STEPSEQUENCENO** — ALERT_DETAIL -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_ALERT_DETAIL_TASK** — ALERT_DETAIL -> TASK (`SourceTaskID -> ID`)
- **FK_ALERT_DETAIL_UNIT** — ALERT_DETAIL -> UNIT (`UnitID -> ID`)
- **FK_ALERT_DETAIL_UOM** — ALERT_DETAIL -> UOM (`UomCode -> UomCode`)
- **FK_ALERT_DETAIL_WIP_OPERATION** — ALERT_DETAIL -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ALERT_DETAIL_WORK_CENTER** — ALERT_DETAIL -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- ALERT_DETAIL -> BUSINESS_COMPONENT_METHOD (`SourceBCMethodFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ALERT_DETAIL_ATTRIBUTE** on `Characteristic, TestAttribute`
- **IF_ALERT_DETAIL_BUSINESS_COMPONENT_METHOD** on `SourceBCMethodFUID`
- **IF_ALERT_DETAIL_CONTAINER** on `Container`
- **IF_ALERT_DETAIL_DISPOSITION_TEST** on `DispositionTestID`
- **IF_ALERT_DETAIL_LOT_NO** on `LotNo, ProductID`
- **IF_ALERT_DETAIL_PRODUCT** on `ProductID`
- **IF_ALERT_DETAIL_RESOURCE_** on `ResourceName, ResourceType`
- **IF_ALERT_DETAIL_SERIALNO** on `SerialNo, ProductID`
- **IF_ALERT_DETAIL_STEPSEQUENCENO** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
- **IF_ALERT_DETAIL_TASK** on `SourceTaskID`
- **IF_ALERT_DETAIL_UNIT** on `UnitID`
- **IF_ALERT_DETAIL_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
