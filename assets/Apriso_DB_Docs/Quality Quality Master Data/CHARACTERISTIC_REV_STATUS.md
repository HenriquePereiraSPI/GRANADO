# CHARACTERISTIC_REV_STATUS

**Database:** Operational

**Description:** none

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the characteristic revision status |
| Name | NVARCHAR(50) | False |  | False |  | Unique name of the characteristic revision status |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHARACTERISTIC_REV_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_REVISION_CHARACTERISTIC_REV_STATUS** — CHARACTERISTIC_REVISION -> CHARACTERISTIC_REV_STATUS (`CharacteristicStatusID -> ID`)

## Unique Indexes

- **UK_CHARACTERISTIC_REV_STATUS** on `Name`

## Non-Unique Indexes

- **** on ``
