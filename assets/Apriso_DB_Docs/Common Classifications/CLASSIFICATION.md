# CLASSIFICATION

**Database:** Operational

**Description:** This table stores classification identifiers that can be assigned to various data entities, such as Product, Process, WIP, Resource, Work Center, and other. These identifiers are linking data entities with classification definitions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the classification. Currently supported for the maximum INT value. |

## Primary Key

- **PK_CLASSIFICATION** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CLASSIFICATION_ITEM_CLASSIFICATION** — CLASSIFICATION_ITEM -> CLASSIFICATION (`ClassificationID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
