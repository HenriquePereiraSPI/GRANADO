# ZONE_CLASS

**Database:** Operational

**Description:** Contain the Zone user defined zone classes used to categortized the Zones

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Class | NVARCHAR(5) | False |  | False |  | Class of the zone (user-defined). |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ZONE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ZONE_ZONE_CLASS** — ZONE -> ZONE_CLASS (`ZoneClassID -> ID`)

## Unique Indexes

- **UK_ZONE_CLASS_1** on `Class`

## Non-Unique Indexes

- **** on ``
