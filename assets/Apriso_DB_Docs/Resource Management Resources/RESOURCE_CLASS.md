# RESOURCE_CLASS

**Database:** Operational

**Description:** This table contains the user-defined classes of Resources.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Link to CLASSIFICATION table. |
| CostAccrualMethod | NVARCHAR(50) | True |  | False |  | For future use. |
| CostingUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | The unique identifier of the domain manager and its attributes. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Resource class record. |
| LocationHistoryFrequency | DATETIME | True |  | False |  | The minimum time interval for updating the entity's geographic location history. |
| MobilityFlag | BIT | True | (0) | False |  | For future use. |
| Name | NVARCHAR(80) | False |  | False |  | The name of the Resource class. |
| PlanningUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_TYPE | The type of Resource. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TrackAttendanceFlag | BIT | True |  | False |  | For future use. |
| TrackingUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| TrackLaborFlag | BIT | True |  | False |  | For future use. |
| TrackResourceLaborFlag | BIT | True |  | False |  | The default value for each class to determine if the labor should be tracked for that class of Resource. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_RESOURCE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_CLASS_CODE_DOMAIN_MANAGER** — RESOURCE_CLASS -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_RESOURCE_CLASS_RESOURCE_TYPE** — RESOURCE_CLASS -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_RESOURCE_CLASS_SPECIFICATION** — RESOURCE_CLASS -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_RESOURCE_CLASS_UNIT** — RESOURCE_CLASS -> UNIT (`UnitID -> ID`)
- **FK_RESOURCE_CLASS_UOM** — RESOURCE_CLASS -> UOM (`PlanningUomCode -> UomCode`)
- **FK_RESOURCE_CLASS_UOM1** — RESOURCE_CLASS -> UOM (`TrackingUomCode -> UomCode`)
- **FK_RESOURCE_CLASS_UOM2** — RESOURCE_CLASS -> UOM (`CostingUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_ALERT_RECIPIENT_RESOURCE_CLASS** — ALERT_RECIPIENT -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_ALERT_RESPONSE_RESOURCE_CLASS** — ALERT_RESPONSE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_CHARACTERISTIC_REVISION_RESOURCE_CLASS** — CHARACTERISTIC_REVISION -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_CODE_CLASS_NUMBER_RESOURCE_CLASS** — CODE_CLASS_NUMBER -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_COST_DETAIL_RESOURCE_CLASS** — COST_DETAIL -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_COST_RESOURCE_CLASS** — COST -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_DISPOSITION_TEST_RESOURCE_CLASS** — DISPOSITION_TEST -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_EQUIPMENT_CLASS_RESOURCE_CLASS** — EQUIPMENT_CLASS -> RESOURCE_CLASS (`ResourceClassId -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_RESOURCE_CLASS** — INSPECTION_CHARACTERISTIC -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_INSPECTION_DETERMINATION_RESOURCE_CLASS** — INSPECTION_DETERMINATION -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_NOTICE_ASSIGNMENT_RESOURCE_CLASS** — NOTICE_ASSIGNMENT -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_OPERATION_REQ_RESOURCE_RESOURCE_CLASS** — OPERATION_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_RESOURCE_CLASS** — PACKAGING_INSTR_USAGE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_RESOURCE_CLASS** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE_CLASS** — PROCESS_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_PRODUCT_ROUTING_REQ_RESOURCE_RESOURCE_CLASS** — PRODUCT_ROUTING_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_QUALITY_DEFECT_RESOURCE_CLASS** — QUALITY_DEFECT -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_RESOURCE_CLASS_DOC_RESOURCE_CLASS** — RESOURCE_CLASS_DOC -> RESOURCE_CLASS (`ResourceClassId -> ID`)
- **FK_RESOURCE_RESOURCE_CLASS** — RESOURCE_ -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_RESOURCE_ROUTING_REQ_RESOURCE_RESOURCE_CLASS** — RESOURCE_ROUTING_REQ_RESOURCE -> RESOURCE_CLASS (`ReqResourceClassID -> ID`)
- **FK_SAFETY_INSTRUCTION_USAGE_RESOURCE_CLASS** — SAFETY_INSTRUCTION_USAGE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_TASK_RESOURCE_CLASS** — TASK -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_UNIT_USAGE_RESOURCE_CLASS** — UNIT_USAGE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE_CLASS** — WIP_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_CLASS** — WIP_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WORK_CENTER_REQ_RESOURCE_RESOURCE_CLASS** — WORK_CENTER_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WORK_CENTER_RESOURCE_CLASS** — WORK_CENTER -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WORK_CENTER_RESOURCE_LOAD_RESOURCE_CLASS** — WORK_CENTER_RESOURCE_LOAD -> RESOURCE_CLASS (`ResourceClassID -> ID`)

## Unique Indexes

- **UK_RESOURCE_CLASS** on `Name, ResourceType`

## Non-Unique Indexes

- **IDX_RESOURCE_CLASS_CLASSIFICATIONID** on `ClassificationID`
- **IF_RESOURCE_CLASS_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_RESOURCE_CLASS_DSID** on `DSID`
- **IF_RESOURCE_CLASS_SPECIFICATION** on `SpecificationID`
- **IF_RESOURCE_CLASS_UNIT** on `UnitID`
- **IXD_ResourceType** on `ResourceType`
