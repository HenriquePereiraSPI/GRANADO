# COUNT_DISPOSITION_STATUS_HISTORY

**Database:** Operational

**Description:** This table stores the status history of the Count Disposition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountDispositionID | INT(10,0) | False |  | False | COUNT_DISPOSITION | The link to the COUNT_DISPOSITION table. |
| CountDispositionLineID | INT(10,0) | True |  | False | COUNT_DISPOSITION_LINE | The link to the COUNT_DISPOSITION_LINE table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | The link to the RESOURCE_ table. |
| Status | SMALLINT(5,0) | False |  | False |  | The reported status: 1-Started, 2-Completed. |

## Primary Key

- **PK_COUNT_DISPOSITION_STATUS_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_DISPOSITION_STATUS_HISTORY_COUNT_DISPOSITION** — COUNT_DISPOSITION_STATUS_HISTORY -> COUNT_DISPOSITION (`CountDispositionID -> ID`)
- **FK_COUNT_DISPOSITION_STATUS_HISTORY_COUNT_DISPOSITION_LINE** — COUNT_DISPOSITION_STATUS_HISTORY -> COUNT_DISPOSITION_LINE (`CountDispositionLineID -> ID`)
- **FK_COUNT_DISPOSITION_STATUS_HISTORY_RESOURCE** — COUNT_DISPOSITION_STATUS_HISTORY -> RESOURCE_ (`ResourceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_DISPOSITION_STATUS_HISTORY_COUNT_DISPOSITION** on `CountDispositionID`
- **IF_COUNT_DISPOSITION_STATUS_HISTORY_COUNT_DISPOSITION_LINE** on `CountDispositionLineID`
- **IF_COUNT_DISPOSITION_STATUS_HISTORY_RESOURCE** on `ResourceID`
