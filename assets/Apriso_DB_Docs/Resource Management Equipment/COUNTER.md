# COUNTER

**Database:** Operational

**Description:** This table contains all possible Equipment counters.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CounterClassID | INT(10,0) | True |  | False | COUNTER_CLASS | ID of the Counter Class. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Name | NVARCHAR(120) | False |  | False |  | Name of the Counter. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code. |

## Primary Key

- **PK_COUNTER** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNTER_COUNTER_CLASS** — COUNTER -> COUNTER_CLASS (`CounterClassID -> ID`)
- **FK_COUNTER_UOM** — COUNTER -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_COUNTER_GROUP_COUNTER** — COUNTER_GROUP -> COUNTER (`CounterID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_SC_COUNTER_COUNTER** — MAINT_TEMPLATE_TASK_SC_COUNTER -> COUNTER (`CounterID -> ID`)
- **FK_RESOURCE_COUNTER_COUNTER** — RESOURCE_COUNTER -> COUNTER (`CounterID -> ID`)

## Unique Indexes

- **UK_COUNTER** on `Name`

## Non-Unique Indexes

- **IF_COUNTER_COUNTER_CLASS** on `CounterClassID`
