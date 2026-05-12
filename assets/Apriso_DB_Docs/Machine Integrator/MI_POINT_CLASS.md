# MI_POINT_CLASS

**Database:** Operational

**Description:** Store point classes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID for the row |
| Name | NVARCHAR(80) | False |  | False |  | Resource Point Class Name, Name is a Unique Key |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_MI_POINT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_RESOURCE_MI_POINT_MI_POINT_CLASS** — RESOURCE_MI_POINT -> MI_POINT_CLASS (`MIPointClassID -> ID`)

## Unique Indexes

- **UK_MI_POINT_CLASS** on `Name`
- **UK_MI_POINT_CLASS2** on `FUID`

## Non-Unique Indexes

- **** on ``
