# LABOR_ACTION_FLAG

**Database:** Operational

**Description:** Stores all the valid actions in regards to modification of time that has occurred against a given Labor record. Each record in the table will be associated with a Labor record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionFlagType | SMALLINT(5,0) | True |  | False | ACTION_FLAG_TYPE | Type of the Action Flag that will be associated with the Labor. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LaborID | INT(10,0) | True |  | False | LABOR | ID of the Labor record the table is associated with. |

## Primary Key

- **PK_LABOR_ACTION_FLAG** on `ID`

## Foreign Keys (this table -> other)

- **FK_LABOR_ACTION_FLAG_ACTION_FLAG_TYPE** — LABOR_ACTION_FLAG -> ACTION_FLAG_TYPE (`ActionFlagType -> ActionFlagType`)
- **FK_LABOR_ACTION_FLAG_LABOR** — LABOR_ACTION_FLAG -> LABOR (`LaborID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LABOR_ACTION_FLAG_LABOR** on `LaborID`
