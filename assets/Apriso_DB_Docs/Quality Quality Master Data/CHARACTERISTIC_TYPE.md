# CHARACTERISTIC_TYPE

**Database:** Operational

**Description:** Stores all the possible types of Characteristics that are defined.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicType | SMALLINT(5,0) | False |  | True |  | Type of the Characterisitic (Attribute or Variable). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHARACTERISTIC_TYPE** on `CharacteristicType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_CHARACTERISTIC_TYPE** — CHARACTERISTIC -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_RECIPE_CHARACTERISTIC_CHARACTERISTIC_TYPE** — RECIPE_CHARACTERISTIC -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_SPECIFICATION_CHARACTERISTIC_CHARACTERISTIC_TYPE** — SPECIFICATION_CHARACTERISTIC -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_STEP_CHARACTERISTIC_CHARACTERISTIC_TYPE** — STEP_CHARACTERISTIC -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_WIP_OPERATION_STEP_CHAR_CHARACTERISTIC_TYPE** — WIP_OPERATION_STEP_CHAR -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
