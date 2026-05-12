# ALERT_STATUS

**Database:** Operational

**Description:** Contains the various values used to track the life cycle of an Alert.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | SMALLINT(5,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ALERT_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ALERT_ALERT_STATUS** — ALERT -> ALERT_STATUS (`AlertStatusID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
