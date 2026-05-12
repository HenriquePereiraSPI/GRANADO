# CONTACT_ADDRESS

**Database:** Operational

**Description:** For Future Use

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | For future use. |
| ContactID | INT(10,0) | False |  | True | CONTACT | For future use. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |

## Primary Key

- **PK_CONTACT_ADDRESSES** on `ContactID, AddressID`

## Foreign Keys (this table -> other)

- **FK_CONTACT_ADDRESSES_ADDRESSES** — CONTACT_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_CONTACT_ADDRESSES_CONTACTS** — CONTACT_ADDRESS -> CONTACT (`ContactID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTACT_ADDRESSES_ADDRESSES** on `AddressID`
