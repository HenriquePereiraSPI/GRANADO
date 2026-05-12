# ADDRESS_TYPE

**Database:** Operational

**Description:** Stores all the possible types of addresses available.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressTypeCode | NVARCHAR(60) | False |  | True |  | XML Manager uses the "present Address" for partners. For resources, it is possible to use multiple types of addresses. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ADDRESS_TYPE** on `AddressTypeCode`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ADDRESS_ADDRESS_TYPE** — ADDRESS -> ADDRESS_TYPE (`AddressTypeCode -> AddressTypeCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
