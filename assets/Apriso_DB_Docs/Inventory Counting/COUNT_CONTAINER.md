# COUNT_CONTAINER

**Database:** Operational

**Description:** Stores information about counting inventories in a Container. Information includes: the name of the Container, name of its parent Container (if any), counting status (calculated based on the counting statuses of the inventories in the container). The table does not contain information about counts for a particular inventory in the Container (the INVENTORY_COUNT_CONTAINER is used for that purpose).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | False |  | True |  | Container Number, |
| CountDate | DATETIME | True |  | False |  | Date and time at which the Count was done. |
| CountDocumentFlowID | INT(10,0) | False |  | True | COUNT_DOCUMENT_FLOW | Reference to the Document Number and Count Number. |
| Counted | BIT | True |  | False |  | Flag indicating whether or not a Count was performed. |
| CountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the Count. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee performing the count. |
| InContainerNo | NVARCHAR(40) | True |  | False |  | Parent Container Number. |
| LastCountDate | DATETIME | True |  | False |  | Date and time at which the previous Count was done. |
| LastCounted | BIT | True |  | False |  | Flag to indicating whether or not the Container was counted in a previous Count. |
| LastCountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the previous Count. |
| LastEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who performed the previous Count. |
| ReCountNumber | INT(10,0) | True |  | False |  | Number of times the Container involved was counted. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Location of the Container. |

## Primary Key

- **PK_COUNT_CONTAINER** on `Container, CountDocumentFlowID`

## Foreign Keys (this table -> other)

- **FK_COUNT_CONTAINER_COUNT_DOCUMENT_FLOW** — COUNT_CONTAINER -> COUNT_DOCUMENT_FLOW (`CountDocumentFlowID -> ID`)
- **FK_COUNT_CONTAINER_COUNT_STATUS** — COUNT_CONTAINER -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_CONTAINER_COUNT_STATUS1** — COUNT_CONTAINER -> COUNT_STATUS (`LastCountStatus -> CountStatus`)
- **FK_COUNT_CONTAINER_EMPLOYEE** — COUNT_CONTAINER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_COUNT_CONTAINER_EMPLOYEE1** — COUNT_CONTAINER -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_COUNT_CONTAINER_WAREHOUSE_LOCATION** — COUNT_CONTAINER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_CONTAINER_COUNT_CONTAINER** on `InContainerNo, CountDocumentFlowID`
- **IF_COUNT_CONTAINER_COUNT_DOCUMENT_FLOW** on `CountDocumentFlowID`
- **IF_COUNT_CONTAINER_COUNT_STATUS** on `CountStatus`
- **IF_COUNT_CONTAINER_COUNT_STATUS1** on `LastCountStatus`
- **IXD_WarehouseLocationID_CountDocumentFlowID** on `WarehouseLocationID, CountDocumentFlowID`
