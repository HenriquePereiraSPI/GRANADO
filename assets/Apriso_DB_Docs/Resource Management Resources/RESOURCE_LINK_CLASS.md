# RESOURCE_LINK_CLASS

**Database:** Operational

**Description:** The "RESOURCE_LINK_CLASS" table defines all possible classes of a resource link.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Name | NVARCHAR(40) | True |  | False |  | Name of the entity |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RESOURCE_LINK_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_RESOURCE_RESOURCE_LINK_RESOURCE_LINK_CLASS** — RESOURCE_RESOURCE_LINK -> RESOURCE_LINK_CLASS (`ResourceLinkClassID -> ID`)

## Unique Indexes

- **UK_RESOURCE_LINK_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
