# CAPA_TASK

**Database:** Operational

**Description:** This table contains tasks defined within CAPA Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAStepID | INT(10,0) | False |  | False | CAPA_STEP | The ID of the step defined in the CAPA_STEP table. |
| CAPATaskType | INT(10,0) | False |  | False | CAPA_TASK_TYPE | The type of the task. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Name | NVARCHAR(80) | False |  | False |  | The name of the CAPA Task. |
| NextCAPATaskID | INT(10,0) | True |  | False | CAPA_TASK | The ID of the subsequent task within the step. |
| Required | BIT | False | ((1)) | False |  | The flag indicating if the task completion is required. |
| SignatureHeaderDefinitionID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | The ID of the Signature Header Definition required for completing the task. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| VisualProperties | NVARCHAR(2000) | True |  | False |  | The visual properties of the task on the diagram. |

## Primary Key

- **PK_CAPA_TASK** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_TASK_CAPA_STEP** — CAPA_TASK -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_TASK_CAPA_TASK** — CAPA_TASK -> CAPA_TASK (`NextCAPATaskID -> ID`)
- **FK_CAPA_TASK_CAPA_TASK_TYPE** — CAPA_TASK -> CAPA_TASK_TYPE (`CAPATaskType -> CAPATaskType`)
- **FK_CAPA_TASK_SIGNATURE_HEADER_DEFINITION** — CAPA_TASK -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_CAPA_TASK_UNIT** — CAPA_TASK -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_CAPA_TASK** — CAPA_LINK -> CAPA_TASK (`CAPATaskID -> ID`)
- **FK_CAPA_TASK_CAPA_TASK** — CAPA_TASK -> CAPA_TASK (`NextCAPATaskID -> ID`)
- **FK_CAPA_TASK_STATE_CAPA_TASK** — CAPA_TASK_STATE -> CAPA_TASK (`CAPATaskID -> ID`)

## Unique Indexes

- **UK_CAPA_TASK_FUID** on `FUID`

## Non-Unique Indexes

- **IDX_CAPA_TASK_CLASSIFICATIONID** on `ClassificationID`
- **IF_CAPA_TASK_CAPA_STEP** on `CAPAStepID`
- **IF_CAPA_TASK_CAPA_TASK** on `NextCAPATaskID`
- **IF_CAPA_TASK_SIGNATURE_HEADER_DEFINITION** on `SignatureHeaderDefinitionID`
- **IF_CAPA_TASK_UNIT** on `UnitID`
