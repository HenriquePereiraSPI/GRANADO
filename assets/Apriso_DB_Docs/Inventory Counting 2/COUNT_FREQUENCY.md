# COUNT_FREQUENCY

**Database:** Operational

**Description:** This table stores Inventory Count frequency configuration.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DaysInterval | INT(10,0) | True |  | False |  | Interval between subsequent cycle counts (in days). |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| LastCycleCountDate | DATETIME | True |  | False |  | The date when the last cycle count was performed. |
| MaxDaysLate | INT(10,0) | True |  | False |  | Maximum acceptable delay after NextCycleCountDate (in days). |
| Name | NVARCHAR(40) | False |  | False |  | Unique name of the configuration record. |
| NextCycleCountDate | DATETIME | True |  | False |  | The date when the next cycle count should be performed. |
| Percentage | DECIMAL(28,10) | True |  | False |  | Percentage of inventory or products to count. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_COUNT_FREQUENCY** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_FREQUENCY_UNIT** — COUNT_FREQUENCY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_COUNT_FREQ_LINK_COUNT_FREQ** — COUNT_FREQUENCY_LINK -> COUNT_FREQUENCY (`CountFrequencyID -> ID`)

## Unique Indexes

- **UK_COUNT_FREQUENCY** on `Name`

## Non-Unique Indexes

- **IF_COUNT_FREQUENCY_UNIT** on `UnitID`
