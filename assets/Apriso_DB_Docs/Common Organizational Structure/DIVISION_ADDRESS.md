# DIVISION_ADDRESS

**Database:** Operational

**Description:** The Division's addresses. Specifies one or more physical addresses for a Dvision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record involved. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Division | NVARCHAR(70) | False |  | True | DIVISION | For future use. |

## Primary Key

- **PK_DIVISION_ADDRESS_MASTER** on `Division, AddressID`

## Foreign Keys (this table -> other)

- **FK_DIVISION_ADDRESSES_ADDRESSES** — DIVISION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_DIVISION_ADDRESSES_DIVISION** — DIVISION_ADDRESS -> DIVISION (`Division -> Division`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DIVISION_ADDRESSES_ADDRESSES** on `AddressID`
