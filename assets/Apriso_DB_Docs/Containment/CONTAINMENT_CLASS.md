# CONTAINMENT_CLASS

**Database:** Operational

**Description:** User definable class attribute for the containment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| Name | NVARCHAR(50) | True |  | False |  | The containment class name of the status. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINMENT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CONTAINMENT_CONTAINMENT_CLASS** — CONTAINMENT -> CONTAINMENT_CLASS (`ContainmentClassID -> ID`)

## Unique Indexes

- **UK_CONTAINMENT_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
