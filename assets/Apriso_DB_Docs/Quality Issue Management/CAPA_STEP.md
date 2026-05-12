# CAPA_STEP

**Database:** Operational

**Description:** This table contains CAPA Steps used to execute the CAPA Flow.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAFlowID | INT(10,0) | False |  | False | CAPA_FLOW | The link to the CAPA_FLOW table. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| FirstStep | BIT | False | ((0)) | False |  | The flag that indicates the first step in the flow. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| LastStep | BIT | False | ((0)) | False |  | The flag that indicates the last step in the flow. |
| Name | NVARCHAR(80) | False |  | False |  | The name of the CAPA Step. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| VisualProperties | NVARCHAR(2000) | True |  | False |  | The visual properties of the step on the diagram. |

## Primary Key

- **PK_CAPA_STEP** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_STEP_CAPA_FLOW** — CAPA_STEP -> CAPA_FLOW (`CAPAFlowID -> ID`)
- **FK_CAPA_STEP_UNIT** — CAPA_STEP -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_CAPA_STEP** — CAPA -> CAPA_STEP (`CurrentCAPAStepID -> ID`)
- **FK_CAPA_LINK_CAPA_STEP** — CAPA_LINK -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_STEP_PROPERTY_RESTRICTION_CAPA_STEP** — CAPA_STEP_PROPERTY_RESTRICTION -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_STEP_SEQUENCE_CAPA_STEP_1** — CAPA_STEP_SEQUENCE -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_STEP_SEQUENCE_CAPA_STEP_2** — CAPA_STEP_SEQUENCE -> CAPA_STEP (`NextCAPAStepID -> ID`)
- **FK_CAPA_STEP_STATE_CAPA_STEP** — CAPA_STEP_STATE -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_TASK_CAPA_STEP** — CAPA_TASK -> CAPA_STEP (`CAPAStepID -> ID`)

## Unique Indexes

- **UK_CAPA_STEP_FUID** on `FUID`

## Non-Unique Indexes

- **IDX_CAPA_STEP_CLASSIFICATIONID** on `ClassificationID`
- **IF_CAPA_STEP_CAPA_FLOW** on `CAPAFlowID`
- **IF_CAPA_STEP_UNIT** on `UnitID`
