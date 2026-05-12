# DATA_COLLECT_TYPE

**Database:** Operational

**Description:** Dictionary table for data collect types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | NVARCHAR(200) | False |  | False |  | Describes the origin of the Data Collect values. Possible types are Collected and Calculated. |

## Primary Key

- **PK_DATA_COLLECT_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PROCESS_DATA_COLLECT_DATA_COLLECT_TYPE** — PROCESS_DATA_COLLECT -> DATA_COLLECT_TYPE (`DataCollectType -> ID`)
- **FK_WIP_DATA_COLLECT_DATA_COLLECT_TYPE** — WIP_DATA_COLLECT -> DATA_COLLECT_TYPE (`DataCollectType -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
