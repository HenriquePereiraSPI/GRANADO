# INVENTORY_COUNT_CONTAINER

**Database:** Operational

**Description:** Stores information about the counting of inventory in a container. The information consists of the a count status, count date, Employee doing the count and counted quantities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustDocumentNumber | NVARCHAR(20) | True |  | False |  | James |
| Container | NVARCHAR(40) | False |  | True |  | <null> |
| CountDate | DATETIME | True |  | False |  | Date and time at which the count was performed. |
| CountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | <null> |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | <null> |
| ErrorCode | NVARCHAR(255) | True |  | False |  | Literal ID returned by the Business Component when the count was set to fail. |
| InContainer | NVARCHAR(40) | True |  | False | CONTAINER | <null> |
| InventoryCountID | INT(10,0) | False |  | True | INVENTORY_COUNT | <null> |
| LastCountDate | DATETIME | True |  | False |  | Date and time at which the previous count was done. |
| LastCountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the previous count. |
| LastEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who performed the previous count. |
| LastInContainer | NVARCHAR(40) | True |  | False | CONTAINER | <null> |
| LastQuantityCounted | DECIMAL(28,10) | True |  | False |  | Previous count quantity. |
| QuantityCounted | DECIMAL(28,10) | True |  | False |  | <null> |
| QuantityFinal | DECIMAL(28,10) | True |  | False |  | <null> |
| QuantityInitial | DECIMAL(28,10) | True |  | False |  | <null> |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code to be used in Change Item Status. |
| ReCountNumber | INT(10,0) | True |  | False |  | Number of times the inventory was counted. |

## Primary Key

- **PK_INVENTORY_COUNT_CONTAINER** on `Container, InventoryCountID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY_COUNT_CONTAINER_CONTAINER** — INVENTORY_COUNT_CONTAINER -> CONTAINER (`InContainer -> Container`)
- **FK_INVENTORY_COUNT_CONTAINER_CONTAINER1** — INVENTORY_COUNT_CONTAINER -> CONTAINER (`LastInContainer -> Container`)
- **FK_INVENTORY_COUNT_CONTAINER_COUNT_STATUS** — INVENTORY_COUNT_CONTAINER -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_CONTAINER_COUNT_STATUS1** — INVENTORY_COUNT_CONTAINER -> COUNT_STATUS (`LastCountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_CONTAINER_EMPLOYEE** — INVENTORY_COUNT_CONTAINER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_INVENTORY_COUNT_CONTAINER_EMPLOYEE1** — INVENTORY_COUNT_CONTAINER -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_INVENTORY_COUNT_CONTAINER_INVENTORY_COUNT** — INVENTORY_COUNT_CONTAINER -> INVENTORY_COUNT (`InventoryCountID -> ID`)
- **FK_INVENTORY_COUNT_CONTAINER_REASON_CODE** — INVENTORY_COUNT_CONTAINER -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INVENTORY_COUNT_CONTAINER_CONTAINER** on `InContainer`
- **IF_INVENTORY_COUNT_CONTAINER_CONTAINER1** on `LastInContainer`
- **IF_INVENTORY_COUNT_CONTAINER_COUNT_STATUS** on `CountStatus`
- **IF_INVENTORY_COUNT_CONTAINER_COUNT_STATUS1** on `LastCountStatus`
- **IF_INVENTORY_COUNT_CONTAINER_INVENTORY_COUNT** on `InventoryCountID`
- **IF_INVENTORY_COUNT_CONTAINER_LITERAL** on `ErrorCode`
