# PLM_ENTITY

**Database:** Operational

**Description:** PLM Entity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| Name | NVARCHAR(100) | False |  | False |  | The name of the PLM Entity. |
| Revision | NVARCHAR(20) | False |  | False |  | The revision of the PLM Entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_PLM_ENTITY** on `ID`

## Foreign Keys (this table -> other)

- **FK_PLM_ENTITY_UNIT** — PLM_ENTITY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_PRODUCT_PLM_ENTITY** — PRODUCT -> PLM_ENTITY (`PLMEntityID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PLM_ENTITY_UNIT** on `UnitID`
