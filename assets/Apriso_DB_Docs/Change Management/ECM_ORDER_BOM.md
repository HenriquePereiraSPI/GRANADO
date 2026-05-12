# ECM_ORDER_BOM

**Database:** Operational

**Description:** Table contains all BOMs affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BOMNumber | NVARCHAR(10) | True |  | False |  | BOM Number. |
| BOMNumberDestination | NVARCHAR(10) | True |  | False |  | Destination BOM Number. |
| DetailsDestination | NVARCHAR | True |  | False |  | Description of a change that was implemented. |
| DetailsSource | NVARCHAR | True |  | False |  | Description of a change to be implemented. |
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility. |
| FacilityDestination | NVARCHAR(40) | True |  | False |  | Destination Facility. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProductDestinationID | INT(10,0) | True |  | False |  | Destination Product ID. |
| ProductID | INT(10,0) | True |  | False |  | Product ID. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |

## Primary Key

- **PK_ECM_ORDER_BOM** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_BOM_ECM_ORDER** — ECM_ORDER_BOM -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_BOM_PROGRESS_STATUS** — ECM_ORDER_BOM -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_BOM_EOID_BOM** on `EcmOrderID, ProductID, Facility, BOMNumber, ProductDestinationID, FacilityDestination, BOMNumberDestination`

## Non-Unique Indexes

- **IF_ECM_ORDER_BOM_PROGRESS_STATUS** on `ProgressStatus`
