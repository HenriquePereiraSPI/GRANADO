# COST_CENTER_ADDRESS

**Database:** Operational

**Description:** Cost center address lists

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Address and its attributes unique identifier |
| CostCenter | NVARCHAR(70) | False |  | True | COST_CENTER | Cost Center name and attributes |
| DisplayNo | INT(10,0) | True |  | False |  | The order in which to display the entity to the user |
| Division | NVARCHAR(70) | False |  | True | COST_CENTER | Division and its Attributes unique name |

## Primary Key

- **PK_COST_CENTER_ADDRESSES** on `Division, CostCenter, AddressID`

## Foreign Keys (this table -> other)

- **FK_COST_CENTER_ADDRESSES_ADDRESSES** — COST_CENTER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_COST_CENTER_ADDRESSES_COST_CENTER** — COST_CENTER_ADDRESS -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COST_CENTER_ADDRESSES_ADDRESSES** on `AddressID`
