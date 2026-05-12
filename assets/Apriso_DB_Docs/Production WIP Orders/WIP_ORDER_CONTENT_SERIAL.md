# WIP_ORDER_CONTENT_SERIAL

**Database:** Operational

**Description:** The “WIP_ORDER_CONTENT_SERIAL” table tracks information about serial allocation, receiving and issuing. If serial is allocated then ToPick filed is set. If serial is received then Processed is set to true, if issued then the flag is set to false.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Processed | BIT | True |  | False |  | 1 or -1 if the Serial has been processed against the specified WIP Order, 0 otherwise. If the Serial has been issued (adjusted with a decrement or debitted) with a  WIP Order reference, this field is -1. If the Serial has been received (adjusted with an i |
| ProductID | INT(10,0) | False |  | True | SERIAL_NO | Reference to a product (product number and product version) |
| SerialNo | NVARCHAR(40) | False |  | True | SERIAL_NO | The serial number to process, allocate or processed |
| ToPick | BIT | True |  | False |  | 1 if the Serial is currently allocated against the WIP Order, 0 otherwise. |
| ToPickReleased | BIT | True |  | False |  | For future use. |
| ToPut | BIT | True |  | False |  | For future use. |
| ToPutReleased | BIT | True |  | False |  | For future use. |
| WipOrderContainerID | INT(10,0) | True |  | False | WIP_ORDER_CONTAINER | When populated, specifies the Container in which the Serial is allocated or from/to which the serial was processed. The field is a reference to WIP_ORDER_CONTAINER.ID. The WIP_ORDER_CONTAINER table in turn stores information about the Container. |
| WipOrderContentID | INT(10,0) | False |  | True | WIP_ORDER_CONTENT | The WIP_ORDER_CONTENT parent of this serial record. Specifies the ID of the parent. The parent record in turn stores information about the inventory that is processed or allocated. |

## Primary Key

- **PK_WIP_ORDER_CONTENT_SERIAL** on `ProductID, SerialNo, WipOrderContentID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_CONTENT_SERIAL_SERIAL_NO** — WIP_ORDER_CONTENT_SERIAL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_ORDER_CONTENT_SERIAL_WIP_ORDER_CONTAINER** — WIP_ORDER_CONTENT_SERIAL -> WIP_ORDER_CONTAINER (`WipOrderContainerID -> ID`)
- **FK_WIP_ORDER_CONTENT_SERIAL_WIP_ORDER_CONTENT** — WIP_ORDER_CONTENT_SERIAL -> WIP_ORDER_CONTENT (`WipOrderContentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_CONTENT_SERIAL_WIP_ORDER_CONTAINER** on `WipOrderContainerID`
- **IF_WIP_ORDER_CONTENT_SERIAL_WIP_ORDER_CONTENT** on `WipOrderContentID`
