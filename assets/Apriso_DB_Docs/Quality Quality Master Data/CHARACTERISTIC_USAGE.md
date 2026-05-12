# CHARACTERISTIC_USAGE

**Database:** Operational

**Description:** Contains system defeined usage of the characteristic used to distuinguish characteristic used as extension of entities from characteristics used for quality inspection

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicUsage | SMALLINT(5,0) | False |  | True |  | Unique identifier of characteristic usage record |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHARACTERISTIC_USAGE** on `CharacteristicUsage`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_CHARACTERISTIC_USAGE** — CHARACTERISTIC -> CHARACTERISTIC_USAGE (`Usage_ -> CharacteristicUsage`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
