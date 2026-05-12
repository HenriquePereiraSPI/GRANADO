# COUNTER_CLASS

**Database:** Operational

**Description:** This table contains user-defined classes of Equipment counters.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Name | NVARCHAR(120) | False |  | False |  | Name of the Counter Class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNTER_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNTER_COUNTER_CLASS** — COUNTER -> COUNTER_CLASS (`CounterClassID -> ID`)

## Unique Indexes

- **UK_COUNTER_CLASS** on `FUID`
- **UK_COUNTER_CLASS_Name** on `Name`

## Non-Unique Indexes

- **** on ``
