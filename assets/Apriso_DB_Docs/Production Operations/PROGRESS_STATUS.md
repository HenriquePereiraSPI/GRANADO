# PROGRESS_STATUS

**Database:** Operational

**Description:** This table contains various prime and custom progress statuses used in different areas: WIP Orders, Work Instructions and Change Management.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassId | INT(10,0) | False |  | False | PROGRESS_STATUS_CLASS | Progress Status Class unique identifier. |
| Name | NVARCHAR(50) | False |  | False |  | Progress Status unique name |
| ProgressStatus | INT(10,0) | False |  | True |  | Progress status |
| SequenceNo | INT(10,0) | True |  | False |  | Progress Status' order |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PROGRESS_STATUS** on `ProgressStatus`

## Foreign Keys (this table -> other)

- **FK_PROGRESS_STATUS_PROGRESS_STATUS_CLASS** — PROGRESS_STATUS -> PROGRESS_STATUS_CLASS (`ClassId -> ID`)

## Referenced By (other tables -> this)

- **FK_ATTACHMENT_PROGRESS_STATUS** — ATTACHMENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CAPA_PROGRESS_STATUS** — CAPA -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CAPA_STEP_STATE_PROGRESS_STATUS** — CAPA_STEP_STATE -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CAPA_TASK_STATE_PROGRESS_STATUS** — CAPA_TASK_STATE -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CONTAINER_PROGRESS_STATUS** — CONTAINER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_DOCUMENT_PROGRESS_STATUS** — DOCUMENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_BOM_PROGRESS_STATUS** — ECM_ORDER_BOM -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_CHARACTERISTIC_REV_PROGRESS_STATUS** — ECM_ORDER_CHARACTERISTIC_REV -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_DOCUMENT_PROGRESS_STATUS** — ECM_ORDER_DOCUMENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_OPERATION_PROGRESS_STATUS** — ECM_ORDER_OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_PROCESS_PROGRESS_STATUS** — ECM_ORDER_PROCESS -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_PRODUCT_PROGRESS_STATUS** — ECM_ORDER_PRODUCT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_PROGRESS_STATUS** — ECM_ORDER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_WIP_ORDER_PROGRESS_STATUS** — ECM_ORDER_WIP_ORDER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_WORK_INSTR_REVISION_PROGRESS_STATUS** — ECM_ORDER_WORK_INSTR_REVISION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_EMR_HEADER_PROGRESS_STATUS** — EMR_HEADER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_KANBAN_CARD_ProgressStatus** — KANBAN_CARD -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_NOTE_PROGRESS_STATUS** — NOTE -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_OPERATION_PROGRESS_STATUS** — OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_OPERATION_STEP_PROGRESS_STATUS** — OPERATION_STEP -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ORDER_DETAIL_CONTENT_PROGRESS_STATUS** — ORDER_DETAIL_CONTENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ORDER_DETAIL_PROGRESS_STATUS** — ORDER_DETAIL -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ORDER_HEADER_PROGRESS_STATUS** — ORDER_HEADER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_PROCESS_OPERATION_PROGRESS_STATUS** — PROCESS_OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_PROCESS_OPERATION_STEP_PROGRESS_STATUS** — PROCESS_OPERATION_STEP -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_PROGRESS_TRANSITION_RULES_PROGRESS_STATUS** — PROGRESS_TRANSITION_RULES -> PROGRESS_STATUS (`SourceProgressStatus -> ProgressStatus`)
- **FK_PROGRESS_TRANSITION_RULES_PROGRESS_STATUS1** — PROGRESS_TRANSITION_RULES -> PROGRESS_STATUS (`DestinationProgressStatus -> ProgressStatus`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_PROGRESS_STATUS** — QUALITY_DEFECT_VISUAL_DETAIL -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_SHIPMENT_STAGE_PROGRESS_STATUS** — SHIPMENT_STAGE -> PROGRESS_STATUS (`StageStatus -> ProgressStatus`)
- **FK_TASK_PROGRESS_STATUS** — TASK -> PROGRESS_STATUS (`TaskProgressStatus -> ProgressStatus`)
- **FK_WIP_DATA_COLLECT_READING_PROGRESS_STATUS** — WIP_DATA_COLLECT_READING -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_LOT_NO_STATUS_PROGRESS_STATUS** — WIP_LOT_NO_STATUS -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_OPERATION_PROGRESS_STATUS** — WIP_OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_OPERATION_STEP_PROGRESS_STATUS** — WIP_OPERATION_STEP -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_ORDER_PROGRESS_STATUS** — WIP_ORDER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_SERIAL_NO_STATUS_PROGRESS_STATUS** — WIP_SERIAL_NO_STATUS -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WORK_INSTR_REVISION_PROGRESS_STATUS** — WORK_INSTR_REVISION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Unique Indexes

- **PROG_STAT_NAME_CLASS_UNIQ** on `Name, ClassId`

## Non-Unique Indexes

- **IF_PROGRESS_STATUS_PROGRESS_STATUS_CLASS** on `ClassId`
