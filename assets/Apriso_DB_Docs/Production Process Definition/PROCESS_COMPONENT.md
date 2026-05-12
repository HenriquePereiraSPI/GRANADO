# PROCESS_COMPONENT

**Database:** Operational

**Description:** This table contains the bills of materials (BOMs) for Processes and Process Operations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ComponentID | INT(10,0) | True |  | False | COMPONENT | The unique identifier of the Component. |
| ComponentIntegrMethodID | INT(10,0) | True |  | False | COMPONENT_INTEGR_METHOD | The column to link an integration method to the Component linked to the Process, Process Operation, or Process Operation Step. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Process Component and its attributes. |
| OwnerFacility | NVARCHAR(40) | True |  | False | FACILITY | The identifier for the Facility that controls the Process Component |
| ProcessID | INT(10,0) | True |  | False | PROCESS | The unique identifier of the Process and its attributes. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | The unique identifier of the Process Operation and its attributes. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | The unique identifier of the Process Operation Step and its attributes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_BOM_COMPONENTS** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_COMPONENT_COMPONENT** — PROCESS_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_PROCESS_COMPONENT_COMPONENT_INTEGR_METHOD** — PROCESS_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)
- **FK_PROCESS_COMPONENT_FACILITY** — PROCESS_COMPONENT -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PROCESS_COMPONENT_PROCESS** — PROCESS_COMPONENT -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_COMPONENT_PROCESS_OPERATION** — PROCESS_COMPONENT -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_COMPONENT_PROCESS_OPERATION_STEP** — PROCESS_COMPONENT -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_COMPONENT_UNIT_ID** — PROCESS_COMPONENT -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_PROCESS_COMPONENT_FACILITY_PROCESS_COMPONENT** — PROCESS_COMPONENT_FACILITY -> PROCESS_COMPONENT (`ProcessComponentID -> ID`)
- **FK_QUALITY_DEFECT_PROCESS_COMPONENT** — QUALITY_DEFECT -> PROCESS_COMPONENT (`ProcessComponentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_COMPONENT_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_COMPONENT_COMPONENT** on `ComponentID`
- **IF_PROCESS_COMPONENT_COMPONENT_INTEGR_METHOD** on `ComponentIntegrMethodID`
- **IF_PROCESS_COMPONENT_PROCESS** on `ProcessID`
- **IF_PROCESS_COMPONENT_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_COMPONENT_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
- **IF_PROCESS_COMPONENT_UNIT_ID** on `UnitID`
