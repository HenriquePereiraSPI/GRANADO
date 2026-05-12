# COUNT_DOCUMENT

**Database:** Operational

**Description:** Defines the area within which the counting is to be performed. The counting area can be limited to any location level, such as Facility, Warehouse, Zone and Warehouse Location.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountDefinition | INT(10,0) | True |  | False | COUNT_DEFINITION | Attribute to define the count. |
| CountNumber | INT(10,0) | True |  | False |  | Number of times the Count was performed. |
| CountStatus | SMALLINT(5,0) | False |  | False | COUNT_STATUS | Status of the count. |
| CountType | INT(10,0) | True |  | False | COUNT_TYPE | Type of the count. |
| DocumentNumber | NVARCHAR(40) | False |  | True |  | Number of the Count Document. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility to be counted. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Status of the inventory to be counted. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot Number of the inventory to be counted. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Partner of the inventory to be counted. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a Product (Product Number and Product Version). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse to be counted. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Location to be counted. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_ORDER | WipOrder created to count |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER | Link to the WIP Order type. |
| Zone | NVARCHAR(20) | True |  | False | ZONE | Zone to be counted. |

## Primary Key

- **PK_COUNT_DOCUMENT** on `DocumentNumber`

## Foreign Keys (this table -> other)

- **FK_COUNT_DOCUMENT_COUNT_DEFINITION** — COUNT_DOCUMENT -> COUNT_DEFINITION (`CountDefinition -> CountDefinition`)
- **FK_COUNT_DOCUMENT_COUNT_STATUS** — COUNT_DOCUMENT -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_DOCUMENT_COUNT_TYPE** — COUNT_DOCUMENT -> COUNT_TYPE (`CountType -> CountType`)
- **FK_COUNT_DOCUMENT_FACILITY** — COUNT_DOCUMENT -> FACILITY (`Facility -> Facility`)
- **FK_COUNT_DOCUMENT_GRADE** — COUNT_DOCUMENT -> GRADE (`GradeID -> ID`)
- **FK_COUNT_DOCUMENT_INVENTORY_STATUS** — COUNT_DOCUMENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_COUNT_DOCUMENT_PARTNER** — COUNT_DOCUMENT -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_DOCUMENT_PRODUCT** — COUNT_DOCUMENT -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_DOCUMENT_WAREHOUSE** — COUNT_DOCUMENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COUNT_DOCUMENT_WAREHOUSE_LOCATION** — COUNT_DOCUMENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_DOCUMENT_WIP_ORDER** — COUNT_DOCUMENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COUNT_DOCUMENT_ZONE** — COUNT_DOCUMENT -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **FK_COUNT_DOCUMENT_FLOW_COUNT_DOCUMENT** — COUNT_DOCUMENT_FLOW -> COUNT_DOCUMENT (`DocumentNumber -> DocumentNumber`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_DOCUMENT_COUNT_DEFINITION** on `CountDefinition`
- **IF_COUNT_DOCUMENT_COUNT_STATUS** on `CountStatus`
- **IF_COUNT_DOCUMENT_GRADE** on `GradeID`
- **IF_COUNT_DOCUMENT_INVENTORY_STATUS** on `InventoryStatus`
- **IF_COUNT_DOCUMENT_PARTNER** on `PartnerID`
- **IF_COUNT_DOCUMENT_PRODUCT** on `ProductID`
- **IF_COUNT_DOCUMENT_WIP_ORDER** on `WipOrderNo, WipOrderType`
- **IF_COUNT_DOCUMENT_ZONE** on `Zone`
