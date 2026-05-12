# INVENTORY_COUNT_SERIAL_NO

**Database:** Operational

**Description:** Stores information about counting a serial. he information consists of the a count status, count date, Employee doing the count and counted quantities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustDocumentNumber | NVARCHAR(20) | True |  | False |  | James |
| Container | NVARCHAR(40) | True |  | False |  | <null> |
| CountDate | DATETIME | True |  | False |  | Date and time at which the count was performed. |
| Counted | BIT | True |  | False |  | Flag that indicates whether a count was performed. |
| CountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the count. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee performing the count. |
| ErrorCode | NVARCHAR(255) | True |  | False |  | Literal ID returned by the Business Component when the count was set to fail. |
| InventoryCountID | INT(10,0) | False |  | True | INVENTORY_COUNT | <null> |
| LastContainer | NVARCHAR(40) | True |  | False | CONTAINER | <null> |
| LastCountDate | DATETIME | True |  | False |  | Date and time at which the previous count was done, |
| LastCounted | BIT | True |  | False |  | Flag to indicate if the Serial was counted in a previous count. |
| LastCountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the previous count. |
| LastEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who performed the previous count. |
| LastInventoryCountID | INT(10,0) | True |  | False | INVENTORY_COUNT | <null> |
| LastQuantityCounted | BIT | True |  | False |  | True when a recount was triggered and counted (used to calculate Previous Counted Qty). |
| ProductID | INT(10,0) | False |  | True | SERIAL_NO | Reference to a Product (Product Number and Product Version). |
| QuantityFinal | BIT | True |  | False |  | True if the serial was passed or adjusted into the location (present at the end of the count). |
| QuantityInitial | BIT | True |  | False |  | True if the Serial was already in the location at the start of the count. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code to be used in Change Item Status. |
| ReCountNumber | INT(10,0) | True |  | False |  | Number of times the Container was counted. |
| SerialNo | NVARCHAR(40) | False |  | True | SERIAL_NO | <null> |

## Primary Key

- **PK_INVENTORY_COUNT_SERIAL_NO** on `ProductID, SerialNo, InventoryCountID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY_COUNT_SERIAL_NO_CONTAINER** — INVENTORY_COUNT_SERIAL_NO -> CONTAINER (`LastContainer -> Container`)
- **FK_INVENTORY_COUNT_SERIAL_NO_COUNT_STATUS** — INVENTORY_COUNT_SERIAL_NO -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_SERIAL_NO_COUNT_STATUS1** — INVENTORY_COUNT_SERIAL_NO -> COUNT_STATUS (`LastCountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_SERIAL_NO_EMPLOYEE** — INVENTORY_COUNT_SERIAL_NO -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_EMPLOYEE1** — INVENTORY_COUNT_SERIAL_NO -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_INVENTORY_COUNT** — INVENTORY_COUNT_SERIAL_NO -> INVENTORY_COUNT (`InventoryCountID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_INVENTORY_COUNT1** — INVENTORY_COUNT_SERIAL_NO -> INVENTORY_COUNT (`LastInventoryCountID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_REASON_CODE** — INVENTORY_COUNT_SERIAL_NO -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_INVENTORY_COUNT_SERIAL_NO_SERIAL_NO** — INVENTORY_COUNT_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INVENTORY_COUNT_SERIAL_NO_CONTAINER** on `Container`
- **IF_INVENTORY_COUNT_SERIAL_NO_COUNT_STATUS** on `CountStatus`
- **IF_INVENTORY_COUNT_SERIAL_NO_COUNT_STATUS1** on `LastCountStatus`
- **IF_INVENTORY_COUNT_SERIAL_NO_INVENTORY_COUNT** on `InventoryCountID`
- **IF_INVENTORY_COUNT_SERIAL_NO_INVENTORY_COUNT1** on `LastInventoryCountID`
- **IF_INVENTORY_COUNT_SERIAL_NO_LITERAL** on `ErrorCode`
