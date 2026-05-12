# MAINT_TEMPLATE

**Database:** Operational

**Description:** This table stores Maintenance Templates.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique identifier. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the row |
| Name | NVARCHAR(256) | False |  | False |  | Template Name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_MAINT_TEMPLATE** on `ID`

## Foreign Keys (this table -> other)

- **FK_MAINT_TEMPLATE_UNIT** — MAINT_TEMPLATE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_MAINT_TEMPLATE_TASK_MAINT_TEMPLATE** — MAINT_TEMPLATE_TASK -> MAINT_TEMPLATE (`MaintTemplateID -> ID`)
- **FK_RESOURCE_MAINT_TASK_D_MAINT_TEMPLATE** — RESOURCE_MAINT_TASK_D -> MAINT_TEMPLATE (`MaintTemplateID -> ID`)
- **FK_RESOURCE_MAINT_TASK_MAINT_TEMPLATE** — RESOURCE_MAINT_TASK -> MAINT_TEMPLATE (`MaintTemplateID -> ID`)

## Unique Indexes

- **UK_MAINT_TEMPLATE** on `Name`
- **UK_MAINT_TEMPLATE_FUID** on `FUID`

## Non-Unique Indexes

- **IF_MAINT_TEMPLATE_UNIT** on `UnitID`
