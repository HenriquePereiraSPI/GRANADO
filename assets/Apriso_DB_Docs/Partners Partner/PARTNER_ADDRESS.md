# PARTNER_ADDRESS

**Database:** Operational

**Description:** Stores information about addresses assigned to a Partner.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| PartnerID | INT(10,0) | False |  | True | PARTNER | Relation to the Partner. |

## Primary Key

- **PK_PARTNER_ADDRESS** on `PartnerID, AddressID`

## Foreign Keys (this table -> other)

- **FK_PARTNER_ADDRESS_ADDRESS** — PARTNER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_PARTNER_ADDRESS_PARTNER** — PARTNER_ADDRESS -> PARTNER (`PartnerID -> ID`)

## Referenced By (other tables -> this)

- **FK_LABEL_CONTENT_PartnerAddressID** — LABEL_CONTENT -> PARTNER_ADDRESS (`PartnerID, PartnerAddressID -> PartnerID, AddressID`)
- **FK_ORDER_PARTNER_PARTNER_ADDRESS** — ORDER_PARTNER -> PARTNER_ADDRESS (`PartnerID, AddressID -> PartnerID, AddressID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PARTNER_ADDRESS_ADDRESS** on `AddressID`
