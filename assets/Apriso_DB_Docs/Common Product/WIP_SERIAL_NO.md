# WIP_SERIAL_NO

**Database:** Operational

**Description:** This table stores the status of the Serial Numbers during production.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False |  | The reference to the Serial Number |
| ProductID | INT(10,0) | False |  | True | SERIAL_NO | The reference to a product (product number and product version). |
| SerialNo | NVARCHAR(40) | False |  | True | SERIAL_NO | The Serial Number in production. |
| WipSerialStatus | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STATUS | The status of the Serial Number that is currently in WIP. |

## Primary Key

- **PK_WIP_SERIAL_NO** on `ProductID, SerialNo`

## Foreign Keys (this table -> other)

- **FK_WIP_SERIAL_NO_SERIAL_NO** — WIP_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_SERIAL_NO_WIP_OPERATION_STATUS** — WIP_SERIAL_NO -> WIP_OPERATION_STATUS (`WipSerialStatus -> OperationStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_SERIAL_NO_WIP_OPERATION_STATUS** on `WipSerialStatus`
- **IXD_Container** on `Container`
