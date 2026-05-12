# WAREHOUSE_LOCATION_CONTACT

**Database:** Operational

**Description:** For future use.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContactID | INT(10,0) | False |  | True | CONTACT | For future use. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| LocationID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION | For future use. |

## Primary Key

- **PK_WAREHOUSE_LOCATION_CONTACTS** on `LocationID, ContactID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_CONTACTS_CONTACTS** — WAREHOUSE_LOCATION_CONTACT -> CONTACT (`ContactID -> ID`)
- **FK_WAREHOUSE_LOCATION_CONTACTS_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_CONTACT -> WAREHOUSE_LOCATION (`LocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_CONTACTS_CONTACTS** on `ContactID`
