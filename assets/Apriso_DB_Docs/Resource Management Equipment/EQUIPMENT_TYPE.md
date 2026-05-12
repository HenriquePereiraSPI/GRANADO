# EQUIPMENT_TYPE

**Database:** Operational

**Description:** Stores all the valid types of Equipment that are added into the system. The types defines whether the Equipment is mobile, used for transportation or requires a license to operate.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EquipmentType | SMALLINT(5,0) | False |  | True |  | Type of the Equipment (user-defined). |
| MobileFlag | BIT | True | (0) | False |  | For future use. |
| RequiredLicense | NVARCHAR(20) | True |  | False | EQUIPMENT_LICENSE | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TransportationFlag | BIT | True | (0) | False |  | For future use. |

## Primary Key

- **PK_EQUIPMENT_TYPE** on `EquipmentType`

## Foreign Keys (this table -> other)

- **FK_EQUIPMENT_TYPE_EQUIPMENT_LICENSE** — EQUIPMENT_TYPE -> EQUIPMENT_LICENSE (`RequiredLicense -> License`)

## Referenced By (other tables -> this)

- **FK_EQUIPMENT_EQUIPMENT_TYPE** — EQUIPMENT -> EQUIPMENT_TYPE (`EquipmentType -> EquipmentType`)
- **FK_EQUIPMENT_TYPE_DIMENSIONS_EQUIPMENT_TYPE** — EQUIPMENT_TYPE_DIMENSION -> EQUIPMENT_TYPE (`EquipmentType -> EquipmentType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EQUIPMENT_TYPE_EQUIPMENT_LICENSE** on `RequiredLicense`
