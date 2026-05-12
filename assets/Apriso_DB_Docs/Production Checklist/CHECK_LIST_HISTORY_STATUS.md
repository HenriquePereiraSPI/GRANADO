# CHECK_LIST_HISTORY_STATUS

**Database:** Operational

**Description:** The table contains statuses of the Check List History

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CheckListHistoryStatus | SMALLINT(5,0) | False |  | True |  | Status of the Check List History record: 1 - New, 2 - Started, 3 - Passed, 4 - Failed, 5 - Bypassed, 6 - Cancelled, 7 - Abandoned. |
| Name | NVARCHAR(50) | False |  | False |  | Check List History Status name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHECK_LIST_HISTORY_STATUS** on `CheckListHistoryStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHECK_LIST_HISTORY_CHECK_LIST_HISTORY_STATUS** — CHECK_LIST_HISTORY -> CHECK_LIST_HISTORY_STATUS (`CheckListHistoryStatus -> CheckListHistoryStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
