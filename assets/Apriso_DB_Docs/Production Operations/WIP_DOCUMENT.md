# WIP_DOCUMENT

**Database:** Operational

**Description:** Information about links between documents and wip order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DisplayNo | INT(10,0) | True |  | False |  | Display no |
| DocumentID | INT(10,0) | False |  | False | DOCUMENT | Unique identifier of the linked document. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Unique identifier of the WIP Operation's linked to the document. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Unique identifier of the WIP Operation's step linked to the document. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | Unique identifier of the WIP Order linked to the document. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | Unique identifier of the WIP Order's type linked to the document. |

## Primary Key

- **PK_WIP_DOCUMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_DOCUMENT_DOCUMENT** — WIP_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)
- **FK_WIP_DOCUMENT_WIP_OPERATION** — WIP_DOCUMENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_DOCUMENT_WIP_OPERATION_STEP** — WIP_DOCUMENT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_DOCUMENT_WIP_ORDER** — WIP_DOCUMENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_WIP_DOCUMENT_CLASSIFICATIONID** on `ClassificationID`
- **IF_WIP_DOCUMENT_DOCUMENT** on `DocumentID`
- **IF_WIP_DOCUMENT_DSInstanceID** on `DSInstanceID`
- **IF_WIP_DOCUMENT_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
