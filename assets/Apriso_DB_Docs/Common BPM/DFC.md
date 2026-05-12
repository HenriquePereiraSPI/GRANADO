# DFC

**Database:** Solution Authoring

**Description:** Stores a header information of a data flow control (DFC).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Code | NVARCHAR(80) | False |  | False |  | Internal name of a DFC. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a DFC revision. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| ProjectID | INT(10,0) | True |  | False | PB_PROJECT | Link to the PB_PROJECT table. |

## Primary Key

- **PK_DFC** on `ID`

## Foreign Keys (this table -> other)

- **FK_DFC_PB_PROJECT** — DFC -> PB_PROJECT (`ProjectID -> ID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_DFC** — BUSINESS_OBJECT -> DFC (`DFCID -> ID`)
- **FK_DET2_DFC** — DET2 -> DFC (`VerifyDFCID -> ID`)
- **FK_DET2_FIELD_DFC** — DET2_FIELD -> DFC (`VerifyDFCID -> ID`)
- **FK_DFC_REVISION_DFC** — DFC_REVISION -> DFC (`DFCID -> ID`)
- **FK_DFC_STEP_INVOKE_DFC** — DFC_STEP_INVOKE -> DFC (`InvokeDFCID -> ID`)
- **FK_KPI_TERM_DFC** — KPI_TERM -> DFC (`DFCID -> ID`)
- **FK_SF_SCREEN_PANEL_ACTION_DFC** — SF_SCREEN_PANEL_ACTION -> DFC (`OnActionDFCID -> ID`)
- **FK_SF_SCREEN_REVISION_DFC_ONINIT** — SF_SCREEN_REVISION -> DFC (`OnInitializeDFCID -> ID`)
- **FK_SF_SCREEN_REVISION_DFC_ONLOAD** — SF_SCREEN_REVISION -> DFC (`OnLoadDFCID -> ID`)
- **FK_SF_VIEW_ACTION_DFC** — SF_VIEW_ACTION -> DFC (`OnActionDFCID -> ID`)
- **FK_SF_VIEW_FORM_CONTROL_DFC** — SF_VIEW_FORM_CONTROL -> DFC (`OnChangeDFCID -> ID`)
- **FK_SF_VIEW_REVISION_DFC** — SF_VIEW_REVISION -> DFC (`ViewDFCID -> ID`)
- **FK_WEBSERVICE_DFC** — WEBSERVICE -> DFC (`DFCID -> ID`)

## Business Keys (other -> this table)

- JOB_ACTION -> DFC (`DFCFUID -> FUID`)
- MI_ACTION -> DFC (`DFCFUID -> FUID`)
- COUNT_PROCEDURE -> DFC (`ApproveDiscrDFCFUID, CountDFCFUID, LocationDFCFUID, PostResultDFCFUID, ReconcileDFCFUID -> FUID`)
- EQUIPMENT_MACH_COMM_CONFIG -> DFC (`DFCFUID -> FUID`)
- SEQUENCE_QUEUE_DEFINITION -> DFC (`EnqueueDFCFUID, DequeueDFCFUID -> FUID`)
- UOM_CONVERSION -> DFC (`DFCFUID -> FUID`)
- PRODUCT_UOM_CONVERSION -> DFC (`DFCFUID -> FUID`)
- PROGRESS_TRANSITION_RULES -> DFC (`DFCFUID -> FUID`)
- TRANSACTION_HISTORY -> DFC (`DFCCode -> Code`)
- TRANSACTION_HISTORY_FUNCTION -> DFC (`DFCCode -> Code`)

## Unique Indexes

- **UX_DFC** on `Code, ProjectID`
- **UX_DFC_FUID** on `FUID`

## Non-Unique Indexes

- **IF_DFC_PB_PROJECT** on `ProjectID`
