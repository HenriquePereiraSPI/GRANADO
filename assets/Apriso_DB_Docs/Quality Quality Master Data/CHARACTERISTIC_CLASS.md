# CHARACTERISTIC_CLASS

**Database:** Operational

**Description:** Contains user defined classes of characteristic for the grouping purposes

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of Characteristic Class |
| Name | NVARCHAR(50) | False |  | False |  | Unique name of Characteristic Class |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHARACTERISTIC_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_CHARACTERISTIC_CLASS** — CHARACTERISTIC -> CHARACTERISTIC_CLASS (`CharacteristicClassID -> ID`)

## Unique Indexes

- **UK_CHARACTERISTIC_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
