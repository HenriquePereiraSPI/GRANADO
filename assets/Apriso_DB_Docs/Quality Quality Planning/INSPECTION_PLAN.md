# INSPECTION_PLAN

**Database:** Operational

**Description:** This table is required to support Inspection Plan configuration.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Long text comment. |
| DiscontinueDate | DATETIME | True |  | False |  | Inspection Plan discontinue date. |
| EffectiveDate | DATETIME | True |  | False |  | Inspection Plan effective date. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Inspection Plan. |
| ID | INT(10,0) | False |  | True |  | Unique ID of Inspection Plan. |
| InspectionPlan | NVARCHAR(40) | False |  | False |  | Inspection Plan name. |
| InspectionPlanClassID | INT(10,0) | True |  | False | INSPECTION_PLAN_CLASS | Inspection Plan Class. |
| InspectionPlanType | SMALLINT(5,0) | False |  | False |  | Inspection Plan Type: 1 - General, 2 - Master, 3 - Prototype, 4 - Template. |
| QualityGateID | INT(10,0) | True |  | False | QUALITY_GATE | Link to QUALITY_GATE. |
| QualityGateSeqItemID | INT(10,0) | True |  | False | QUALITY_GATE_SEQ_ITEM | Link to QUALITY_GATE_SEQ_ITEM. |
| Revision | NVARCHAR(20) | False |  | False |  | Revision code (e.g. '1.0', 'Initial' etc.). |
| Status | SMALLINT(5,0) | False |  | False |  | Inspection Plan Status: 1 - New, 2 - Released, 3 - Hold, 4 - Cancelled. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_INSPECTION_PLAN** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_PLAN_INSPECTION_PLAN_CLASS** — INSPECTION_PLAN -> INSPECTION_PLAN_CLASS (`InspectionPlanClassID -> ID`)
- **FK_INSPECTION_PLAN_QUALITY_GATE** — INSPECTION_PLAN -> QUALITY_GATE (`QualityGateID -> ID`)
- **FK_INSPECTION_PLAN_QUALITY_GATE_SEQ_ITEM** — INSPECTION_PLAN -> QUALITY_GATE_SEQ_ITEM (`QualityGateSeqItemID -> ID`)
- **FK_INSPECTION_PLAN_UNIT** — INSPECTION_PLAN -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_INSPECTION_PLAN** — DISPOSITION -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_INSPECTION_DET_INSPECTION_PLAN_INSPECTION_DET_INSPECTION_PLAN** — INSPECTION_DET_INSPECTION_PLAN -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_INSPECTION_LINE_INSPECTION_PLAN** — INSPECTION_LINE -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_INSPECTION_PLAN_GROUP_INSPECTION_PLAN** — INSPECTION_PLAN_GROUP -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_INSPECTION_PLAN_RESOURCE_INSPECTION_PLAN** — INSPECTION_PLAN_RESOURCE -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_RESOURCE_MAINT_TASK_D_INSPECTION_PLAN** — RESOURCE_MAINT_TASK_D -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_RESOURCE_MAINT_TASK_INSPECTION_PLAN** — RESOURCE_MAINT_TASK -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_UNIT_USAGE_INSPECTION_PLAN** — UNIT_USAGE -> INSPECTION_PLAN (`InspectionPlanID -> ID`)

## Unique Indexes

- **UK_INSPECTION_PLAN** on `InspectionPlan, Revision`
- **UK_INSPECTION_PLAN_FUID** on `FUID`

## Non-Unique Indexes

- **IDX_INSPECTION_PLAN_CLASSIFICATIONID** on `ClassificationID`
- **IF_INSPECTION_PLAN_INSPECTION_PLAN_CLASS** on `InspectionPlanClassID`
- **IF_INSPECTION_PLAN_QUALITY_GATE** on `QualityGateID`
- **IF_INSPECTION_PLAN_QUALITY_GATE_SEQ_ITEM** on `QualityGateSeqItemID`
- **IF_INSPECTION_PLAN_UNIT** on `UnitID`
