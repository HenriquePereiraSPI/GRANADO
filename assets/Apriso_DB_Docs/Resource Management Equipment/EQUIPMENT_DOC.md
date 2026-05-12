# EQUIPMENT_DOC

**Database:** Operational

**Description:** This table contains links between Equipment and documents.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | The order in which to display the entity to the user. |
| DocumentID | INT(10,0) | False |  | False | DOCUMENT | Link to Document. |
| EquipmentID | INT(10,0) | False |  | False | EQUIPMENT | Link to Equipment. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |

## Primary Key

- **PK_EQUIPMENT_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_EQUIPMENT_DOC_DOCUMENT** — EQUIPMENT_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_EQUIPMENT_DOC_EQUIPMENT** — EQUIPMENT_DOC -> EQUIPMENT (`EquipmentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EQUIPMENT_DOC_DOCUMENT** on `DocumentID`
- **IF_EQUIPMENT_DOC_EQUIPMENT** on `EquipmentID`
