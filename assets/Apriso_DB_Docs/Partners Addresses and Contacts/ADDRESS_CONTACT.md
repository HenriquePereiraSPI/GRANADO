# ADDRESS_CONTACT

**Database:** Operational

**Description:** Links contacts to addresses. This tables allows the user to define multiple contacts per address and in what order they are to be used.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | For future use. |
| ContactID | INT(10,0) | False |  | True | CONTACT | For future use. |
| DisplayNo | INT(10,0) | False |  | False |  | For future use. |

## Primary Key

- **PK_ADDRESS_CONTACTS** on `AddressID, ContactID`

## Foreign Keys (this table -> other)

- **FK_ADDRESS_CONTACTS_ADDRESSES** — ADDRESS_CONTACT -> ADDRESS (`AddressID -> ID`)
- **FK_ADDRESS_CONTACTS_CONTACTS** — ADDRESS_CONTACT -> CONTACT (`ContactID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ADDRESS_CONTACTS_CONTACTS** on `ContactID`
