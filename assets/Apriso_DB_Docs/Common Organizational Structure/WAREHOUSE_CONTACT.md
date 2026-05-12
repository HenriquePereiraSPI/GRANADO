# WAREHOUSE_CONTACT

**Database:** Operational

**Description:** For future use.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContactID | INT(10,0) | False |  | True | CONTACT | For future use. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Facility | NVARCHAR(40) | False |  | True | WAREHOUSE | For future use. |
| Warehouse | NVARCHAR(10) | False |  | True | WAREHOUSE | For future use. |

## Primary Key

- **PK_WAREHOUSE_CONTACT** on `Facility, Warehouse, ContactID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_CONTACTS_CONTACTS** — WAREHOUSE_CONTACT -> CONTACT (`ContactID -> ID`)
- **FK_WAREHOUSE_CONTACTS_WAREHOUSE1** — WAREHOUSE_CONTACT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_CONTACTS_CONTACTS** on `ContactID`
