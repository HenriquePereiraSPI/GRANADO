# CHECK_LIST

**Database:** Operational

**Description:** Contains the header (name and class) of the Checklist.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CheckListClassID | INT(10,0) | True |  | False | CHECK_LIST_CLASS | ID for the Class of the Checklist. |
| CheckListCode | NVARCHAR(100) | False |  | False |  | The unique code of the Checklist. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Revision | NVARCHAR(100) | False |  | False |  | Revision of the Check List. |
| SequenceNo | INT(10,0) | True |  | False |  | Check List Sequence Number derived from the Global Sequence Number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False |  | Unique identifier of the Unit. |

## Primary Key

- **PK_CHECK_LIST** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHECK_LIST_CHECK_LIST_CLASS** — CHECK_LIST -> CHECK_LIST_CLASS (`CheckListClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_CHECK_LIST_CHECK_POINT_CHECK_LIST** — CHECK_LIST_CHECK_POINT -> CHECK_LIST (`CheckListID -> ID`)
- **FK_CHECK_LIST_HISTORY_CHECK_LIST** — CHECK_LIST_HISTORY -> CHECK_LIST (`CheckListID -> ID`)
- **FK_MAINT_ORDER_TASK_CHECK_LIST** — MAINT_ORDER_TASK -> CHECK_LIST (`CheckListID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_CHECK_LIST** — MAINT_TEMPLATE_TASK -> CHECK_LIST (`CheckListID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_CHECK_LIST** — PROCESS_OPERATION_CHECK_LIST -> CHECK_LIST (`CheckListID -> ID`)
- **FK_RESOURCE_MAINT_TASK_CHECK_LIST** — RESOURCE_MAINT_TASK -> CHECK_LIST (`CheckListID -> ID`)
- **FK_WIP_CHECK_LIST_CHECK_LIST** — WIP_CHECK_LIST -> CHECK_LIST (`CheckListID -> ID`)

## Unique Indexes

- **UX_CHECK_LIST_CheckListCodeRevision** on `CheckListCode, Revision`

## Non-Unique Indexes

- **IDX_CHECK_LIST_CLASSIFICATIONID** on `ClassificationID`
- **IF_CHECK_LIST_CHECK_LIST_CLASS** on `CheckListClassID`
- **IXD_DSID** on `DSID`
