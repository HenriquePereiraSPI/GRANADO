# EQUIPMENT_CLASS_FEATURE

**Database:** Operational

**Description:** This table contains the user-defined names of the Attributes which belong to the Equipment Class.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EquipmentClassID | INT(10,0) | False |  | False | EQUIPMENT_CLASS | The assignment of an Equipment Feature to a Class. |
| FeatureType | INT(10,0) | True |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Name | NVARCHAR(50) | False |  | False |  | The name of the Equipment Feature (user-defined). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_EQUIPMENT_CLASS_FEATURE** on `ID`

## Foreign Keys (this table -> other)

- **FK_EQUIPMENT_CLASS_FEATURE_EQUIPMENT_CLASS** — EQUIPMENT_CLASS_FEATURE -> EQUIPMENT_CLASS (`EquipmentClassID -> ID`)
- **FK_EQUIPMENT_CLASS_FEATURE_UNIT** — EQUIPMENT_CLASS_FEATURE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_EQUIPMENT_MI_FEATURE_CLASS_FEATURE** — EQUIPMENT_MI_FEATURE -> EQUIPMENT_CLASS_FEATURE (`EquipmentClassFeatureID -> ID`)

## Unique Indexes

- **UX_EQUIPMENT_CLASS_FEATURE_FUID** on `FUID`
- **UX_EQUIPMENT_CLASS_FEATURE_NAME** on `Name, EquipmentClassID`

## Non-Unique Indexes

- **IF_EQUIPMENT_CLASS_FEATURE_EQUIPMENT_CLASS** on `EquipmentClassID`
- **IF_EQUIPMENT_CLASS_FEATURE_UNIT** on `UnitID`
