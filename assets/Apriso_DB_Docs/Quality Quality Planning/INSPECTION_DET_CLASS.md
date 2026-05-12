# INSPECTION_DET_CLASS

**Database:** Operational

**Description:** This table contains the master information about inspection determination classes available in the system

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the inspection determination class |
| Name | NVARCHAR(50) | False |  | False |  | Name of the inspection determination class |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INSPECTION_DET_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_INSPECTION_DETERMINATION_INSPECTION_DET_CLASS** — INSPECTION_DETERMINATION -> INSPECTION_DET_CLASS (`DeterminationClassID -> ID`)

## Unique Indexes

- **UK_INSPECTION_DET_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
