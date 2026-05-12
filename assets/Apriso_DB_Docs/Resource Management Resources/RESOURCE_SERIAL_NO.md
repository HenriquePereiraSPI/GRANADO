# RESOURCE_SERIAL_NO

**Database:** Operational

**Description:** This table stores the links of Resources to Serial Numbers and products.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Resource Serial Number. |
| ProductID | INT(10,0) | True |  | False | SERIAL_NO | The reference to a product (product number and product version). |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The assignment of the Resource to a Serial Number (e.g., when producing Equipment). |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | The type of Resource. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Reference to the Serial Number linked to the Resource. |

## Primary Key

- **PK_RESOURCE_SERIAL_NO** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_SERIAL_NO_RESOURCE_** — RESOURCE_SERIAL_NO -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_SERIAL_NO_SERIAL_NO** — RESOURCE_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_SERIAL_NO_RESOURCE_** on `ResourceName, ResourceType`
- **IF_RESOURCE_SERIAL_NO_SERIAL_NO** on `SerialNo, ProductID`
