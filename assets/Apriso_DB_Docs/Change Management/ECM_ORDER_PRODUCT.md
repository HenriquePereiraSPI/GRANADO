# ECM_ORDER_PRODUCT

**Database:** Operational

**Description:** Table contains all Products affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DetailsDestination | NVARCHAR | True |  | False |  | Description of a change that was implemented. |
| DetailsSource | NVARCHAR | True |  | False |  | Description of a change to be implemented. |
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProductDestinationID | INT(10,0) | True |  | False | PRODUCT | Destination Product ID. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Product ID. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |

## Primary Key

- **PK_ECM_ORDER_PRODUCT** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_PRODUCT_ECM_ORDER** — ECM_ORDER_PRODUCT -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_PRODUCT_PRODUCT_DESTINATION_ID** — ECM_ORDER_PRODUCT -> PRODUCT (`ProductDestinationID -> ID`)
- **FK_ECM_ORDER_PRODUCT_PRODUCT_ID** — ECM_ORDER_PRODUCT -> PRODUCT (`ProductID -> ID`)
- **FK_ECM_ORDER_PRODUCT_PROGRESS_STATUS** — ECM_ORDER_PRODUCT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_PRODUCT_EOID_PID** on `EcmOrderID, ProductID, ProductDestinationID`

## Non-Unique Indexes

- **IF_ECM_ORDER_PRODUCT_PRODUCT_DESTINATION_ID** on `ProductDestinationID`
- **IF_ECM_ORDER_PRODUCT_PRODUCT_ID** on `ProductID`
- **IF_ECM_ORDER_PRODUCT_PROGRESS_STATUS** on `ProgressStatus`
