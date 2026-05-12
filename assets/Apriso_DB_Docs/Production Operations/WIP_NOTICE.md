# WIP_NOTICE

**Database:** Operational

**Description:** Information about links between notice and WIP Order/Operation/Step.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| NoticeID | INT(10,0) | False |  | False | NOTICE | Unique identifier of the linked notice. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Unique identifier of the WIP Operation's linked to the notice. |
| SequenceNo | INT(10,0) | False |  | False |  | Alert's order. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Unique identifier of the WIP Operation's step linked to the notice. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | Unique identifier of the WIP Order linked to the notice. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | Unique identifier of the WIP Order's type linked to the notice. |

## Primary Key

- **PK_WIP_NOTICE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_NOTICE_NOTICE** — WIP_NOTICE -> NOTICE (`NoticeID -> ID`)
- **FK_WIP_NOTICE_WIP_OPERATION** — WIP_NOTICE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_NOTICE_WIP_OPERATION_STEP** — WIP_NOTICE -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_NOTICE_WIP_ORDER** — WIP_NOTICE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_NOTICE_DSInstanceID** on `DSInstanceID`
- **IF_WIP_NOTICE_NOTICE** on `NoticeID`
- **IF_WIP_NOTICE_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
