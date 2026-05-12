# SCALE

**Database:** Operational

**Description:** This table contains scales used in the Weighing and Dispensing module.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Connected | BIT | False |  | False |  | When set to true, the weight can be acquired automatically. Otherwise, the weight must be entered manually. |
| Description | NVARCHAR(255) | True |  | False |  | Scale Description. |
| EquipmentID | INT(10,0) | False |  | False | EQUIPMENT | ID of related Equipment. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of a record. |
| ScaleClassID | INT(10,0) | True |  | False | SCALE_CLASS | ID of the Scale Class. |

## Primary Key

- **PK_SCALE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SCALE_EQUIPMENT** — SCALE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_SCALE_SCALE_CLASS** — SCALE -> SCALE_CLASS (`ScaleClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_SCALE** on `FUID`

## Non-Unique Indexes

- **IF_SCALE_EQUIPMENT** on `EquipmentID`
- **IF_SCALE_SCALE_CLASS** on `ScaleClassID`
