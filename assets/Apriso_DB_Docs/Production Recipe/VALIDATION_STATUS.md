# VALIDATION_STATUS

**Database:** Operational

**Description:** This table is used to persist the validation status of en entity. This concept apply to all entities that could be submitted to validation (recipe, process, operation, functions).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | This is non-mandatory link to a Apriso revision StatusID (Design in progress, prototype, active, on hold). |
| ValidationEntityType | SMALLINT(5,0) | True |  | False | VALIDATION_ENTITIY_TYPE | The validation entity type for the status |

## Primary Key

- **PK_VALIDATION_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **FK_VALIDATION_STATUS_VALIDATION_ENTITIY_TYPE** — VALIDATION_STATUS -> VALIDATION_ENTITIY_TYPE (`ValidationEntityType -> Type`)

## Referenced By (other tables -> this)

- **FK_ASSET_VALIDATION_STATUS** — ASSET -> VALIDATION_STATUS (`ValidationStatus -> ID`)
- **FK_RECIPE_VALIDATION_STATUS** — RECIPE -> VALIDATION_STATUS (`ValidationStatus -> ID`)
- **FK_VALIDATION_STATUS_FLOW_VALIDATION_STATUS** — VALIDATION_STATUS_FLOW -> VALIDATION_STATUS (`FromValidationStatusID -> ID`)
- **FK_VALIDATION_STATUS_FLOW_VALIDATION_STATUS1** — VALIDATION_STATUS_FLOW -> VALIDATION_STATUS (`ToValidationStatusID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_VALIDATION_STATUS_REVISION_STATUS** on `RevisionStatusID`
