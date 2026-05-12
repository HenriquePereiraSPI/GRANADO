# EQUIPMENT_CLASS

**Database:** Operational

**Description:** This table contains the user-defined Classes of the Equipment. It is used to categorize Equipment records, e.g., engine, scales, etc.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Name | NVARCHAR(50) | False |  | False |  | The name of the Equipment Class (user-defined). |
| ResourceClassId | INT(10,0) | True |  | False | RESOURCE_CLASS | The referenced Resource Class record. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EQUIPMENT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_EQUIPMENT_CLASS_RESOURCE_CLASS** — EQUIPMENT_CLASS -> RESOURCE_CLASS (`ResourceClassId -> ID`)

## Referenced By (other tables -> this)

- **FK_EQUIPMENT_CLASS_FEATURE_EQUIPMENT_CLASS** — EQUIPMENT_CLASS_FEATURE -> EQUIPMENT_CLASS (`EquipmentClassID -> ID`)
- **FK_EQUIPMENT_D_EQUIPMENT_CLASS** — EQUIPMENT_D -> EQUIPMENT_CLASS (`EquipmentClassID -> ID`)
- **FK_EQUIPMENT_EQUIPMENT_CLASS** — EQUIPMENT -> EQUIPMENT_CLASS (`EquipmentClassID -> ID`)

## Unique Indexes

- **UX_EQUIPMENT_CLASS_NAME** on `Name`
- **UX_EQUIPMENT_FUID** on `FUID`

## Non-Unique Indexes

- **IF_EQUIPMENT_CLASS_RESOURCE_CLASS** on `ResourceClassId`
