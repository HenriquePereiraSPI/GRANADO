# CAPA_CLASS

**Database:** Operational

**Description:** This table contains classes of CAPA records. It may be used to categorize the records.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Name | NVARCHAR(50) | False |  | False |  | The name of the CAPA Class. |
| ParentCAPAClassID | INT(10,0) | True |  | False | CAPA_CLASS | ID of parent CAPA class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CAPA_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_CLASS_CAPA_CLASS** — CAPA_CLASS -> CAPA_CLASS (`ParentCAPAClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_CAPA_CLASS** — CAPA -> CAPA_CLASS (`CAPAClassID -> ID`)
- **FK_CAPA_CLASS_CAPA_CLASS** — CAPA_CLASS -> CAPA_CLASS (`ParentCAPAClassID -> ID`)

## Unique Indexes

- **UK_CAPA_CLASS_FUID** on `FUID`
- **UK_CAPA_CLASS_NAME** on `Name`

## Non-Unique Indexes

- **IF_CAPA_CLASS_CAPA_CLASS** on `ParentCAPAClassID`
