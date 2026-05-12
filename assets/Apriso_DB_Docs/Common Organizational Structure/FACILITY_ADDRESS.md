# FACILITY_ADDRESS

**Database:** Operational

**Description:** Contains links between Facilities and their Address records.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record. |
| DefaultAddressFlag | BIT | True | ((0)) | False |  | The flag indicates a default address of the Facility. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Link to the Facility involved. |

## Primary Key

- **PK_FACILITY_ADDRESSES** on `Facility, AddressID`

## Foreign Keys (this table -> other)

- **FK_FACILITY_ADDRESSES_ADDRESSES** — FACILITY_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_FACILITY_ADDRESSES_FACILITY** — FACILITY_ADDRESS -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
