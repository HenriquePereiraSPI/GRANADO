# LABOR_RESOURCE_USED

**Database:** Operational

**Description:** Contains a Labor distribution breakdown by Non-Employee resource.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LaborID | INT(10,0) | False |  | True | LABOR | ID of the Labor record the table is associated with. |
| ResourceLaborID | BIGINT(19,0) | False |  | True |  | For future use. |

## Primary Key

- **PK_LABOR_RESOURCES_USED** on `ResourceLaborID, LaborID`

## Foreign Keys (this table -> other)

- **FK_LABOR_RESOURCES_USED_LABOR** — LABOR_RESOURCE_USED -> LABOR (`LaborID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LABOR_RESOURCES_USED_LABOR** on `LaborID`
