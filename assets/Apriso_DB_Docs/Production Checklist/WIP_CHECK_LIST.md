# WIP_CHECK_LIST

**Database:** Operational

**Description:** This table contains links between WIP Orders, Operations or Steps and Checklists.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CheckListID | INT(10,0) | False |  | False | CHECK_LIST | The ID of linked Checklist. |
| CreatePerEmployee | BIT | True |  | False |  | A flag indicating if the Check List History should be created per each employee |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot Number. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation sequence number. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a product (product number and product version). |
| SerialNo | NVARCHAR(40) | True |  | False |  | Serial Number. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | The WIP Operation Step sequence number. |
| UsageContext | TINYINT(3,0) | True |  | False |  | Checklist usage context (0 = no context, 1 = execute Check List before the linked object, 2 = execute Check List after the linked object). |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | The WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | The WIP Order Type. |

## Primary Key

- **PK_WIP_CHECK_LIST** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_CHECK_LIST_CHECK_LIST** — WIP_CHECK_LIST -> CHECK_LIST (`CheckListID -> ID`)
- **FK_WIP_CHECK_LIST_PRODUCT** — WIP_CHECK_LIST -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_CHECK_LIST_WIP_OPERATION** — WIP_CHECK_LIST -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_CHECK_LIST_WIP_OPERATION_STEP** — WIP_CHECK_LIST -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_CHECK_LIST_WIP_ORDER** — WIP_CHECK_LIST -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_CHECK_LIST_HISTORY_WIP_CHECK_LIST** — CHECK_LIST_HISTORY -> WIP_CHECK_LIST (`WipCheckListID -> ID`)

## Unique Indexes

- **UK_WIP_CHECK_LIST** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, CheckListID`

## Non-Unique Indexes

- **IF_WIP_CHECK_LIST_CHECK_LIST** on `CheckListID`
- **IF_WIP_CHECK_LIST_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_CHECK_LIST_PRODUCT** on `ProductID`
- **IF_WIP_CHECK_LIST_SERIAL_NO** on `SerialNo, ProductID`
