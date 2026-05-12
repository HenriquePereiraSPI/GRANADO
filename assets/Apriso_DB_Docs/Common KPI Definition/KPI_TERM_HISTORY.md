# KPI_TERM_HISTORY

**Database:** Operational

**Description:** The KPI_TERM_HISTORY table stores the history for each value for each KPI calculated

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Identity of the KPI Term history |
| KPIValueHistoryID | INT(10,0) | True |  | False | KPI_VALUE_HISTORY | FK to KPI Value History |
| Name | NVARCHAR(100) | True |  | False |  | Reference to the Name column in the KPI_TERM table. |
| ParentTermHistoryID | INT(10,0) | True |  | False |  | FK KPI Term history |
| RefKPITermHistoryID | INT(10,0) | True |  | False |  | The reference KPI Value Term History ID obtained from the external client system |
| UomCode | NVARCHAR(10) | True |  | False | UOM | FK to UomCode |
| Value_ | DECIMAL(28,10) | True |  | False |  | Value of the KPI term |

## Primary Key

- **PK_KPI_TERM_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_KPI_TERM_HISTORY_KPI_VALUE_HISTORY** — KPI_TERM_HISTORY -> KPI_VALUE_HISTORY (`KPIValueHistoryID -> ID`)
- **FK_KPI_TERM_HISTORY_UOM** — KPI_TERM_HISTORY -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_TERM_HISTORY_KPI_TERM** on `Name`
- **IF_KPI_TERM_HISTORY_KPI_TERM_HISTORY** on `ParentTermHistoryID`
- **IF_KPI_TERM_HISTORY_KPI_VALUE_HISTORY** on `KPIValueHistoryID`
