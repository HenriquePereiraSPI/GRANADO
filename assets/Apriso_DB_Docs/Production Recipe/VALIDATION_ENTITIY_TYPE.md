# VALIDATION_ENTITIY_TYPE

**Database:** Operational

**Description:** This table list the various entities that are using validation status.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | True |  | Type of the entity (process, operation, recipe). |

## Primary Key

- **PK_VALIDATION_ENTITIY_TYPE** on `Type`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_VALIDATION_STATUS_FLOW_VALIDATION_ENTITIY_TYPE** — VALIDATION_STATUS_FLOW -> VALIDATION_ENTITIY_TYPE (`ValidationEntityTypeID -> Type`)
- **FK_VALIDATION_STATUS_VALIDATION_ENTITIY_TYPE** — VALIDATION_STATUS -> VALIDATION_ENTITIY_TYPE (`ValidationEntityType -> Type`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
