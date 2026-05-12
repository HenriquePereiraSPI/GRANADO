# WIP_CONTENT_CLASS

**Database:** Operational

**Description:** The "WIP_CONTENT_CLASS" table defines all possible WIP conent classes. This list can be modified by the users

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WipContentClass | SMALLINT(5,0) | False |  | True |  | WIP Class ( 0 and 1 are reserved) |

## Primary Key

- **PK_WIP_CONTENT_CLASS** on `WipContentClass`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_LABOR_DETAIL_WIP_CONTENT_CLASS** — LABOR_DETAIL -> WIP_CONTENT_CLASS (`FromContentClass -> WipContentClass`)
- **FK_LABOR_DETAIL_WIP_CONTENT_CLASS1** — LABOR_DETAIL -> WIP_CONTENT_CLASS (`ToContentClass -> WipContentClass`)
- **FK_PROCESS_SEQUENCE_WIP_CONTENT_CLASS** — PROCESS_SEQUENCE -> WIP_CONTENT_CLASS (`WIPContentClassID -> WipContentClass`)
- **FK_RESOURCE_LABOR_DETAIL_WIP_CONTENT_CLASS** — RESOURCE_LABOR_DETAIL -> WIP_CONTENT_CLASS (`FromContentClass -> WipContentClass`)
- **FK_RESOURCE_LABOR_DETAIL_WIP_CONTENT_CLASS1** — RESOURCE_LABOR_DETAIL -> WIP_CONTENT_CLASS (`ToContentClass -> WipContentClass`)
- **FK_WIP_CONTENT_WIP_CONTENT_CLASS** — WIP_CONTENT -> WIP_CONTENT_CLASS (`WipContentClass -> WipContentClass`)
- **FK_WIP_OPERATION_SEQUENCE_WIP_CONTENT_CLASS** — WIP_OPERATION_SEQUENCE -> WIP_CONTENT_CLASS (`WipContentClass -> WipContentClass`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
