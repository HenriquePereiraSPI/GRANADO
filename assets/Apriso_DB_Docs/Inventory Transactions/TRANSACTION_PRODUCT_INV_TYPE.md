# TRANSACTION_PRODUCT_INV_TYPE

**Database:** Operational

**Description:** The “TRANSACTION_PRODUCT_INV_TYPE” defines valid operations against transaction performed on a particular product inventory type. The operation specifies if inventory increment, decrement or movement is allowed and if it is allowed to change partner, grade, inventory status, facility, warehouse, location, product and lot.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowChangeFacility | BIT | True |  | False |  | Defines if cross facility transfer is allowed (move component) |
| AllowChangeGrade | BIT | True |  | False |  | Defines if Grade modification is allowed (move component) |
| AllowChangeInventoryStatus | BIT | True |  | False |  | Defines if Inventory status modification is allowed (move component) |
| AllowChangeLocation | BIT | True |  | False |  | Defines if Inventory location modification is allowed (move component) |
| AllowChangePartner | BIT | True |  | False |  | Defines if Partner ( = owner of the inventory) is allowed (move component) |
| AllowChangeWarehouse | BIT | True |  | False |  | Defines if cross warehouse transfer is allowed (move component) |
| ChangeLotAllowed | BIT | True |  | False |  | Lot can be changed for this transaction and product inventory type by the Move component |
| ChangeProductAllowed | BIT | True |  | False |  | Product number or version can be changed for this transaction and product inventory type by the Move component |
| DestinationInventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | For future use. |
| DestinationPartnerID | INT(10,0) | True |  | False | PARTNER | For future use. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of the definition of the product inventory type to a facility, valid for all facilities if not populated |
| HostIndicator1 | NVARCHAR(10) | True |  | False |  | User fields passed to in the interface to external system when Adjust or move are used. |
| HostIndicator2 | NVARCHAR(10) | True |  | False |  | User fields passed to in the interface to external system when Adjust or move are used. |
| HostMovementCode | NVARCHAR(10) | True |  | False |  | Movement code in SAP (301…) |
| HostReverseLocation | BIT | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| InventoryChange | NVARCHAR(1) | True |  | False |  | Indicate if the transaction is a move or an adjust for a give product inventory type |
| ProductInventoryType | SMALLINT(5,0) | True |  | False | PRODUCT_INVENTORY_TYPE | Type of product for inventory management purpose. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TransactionCode | NVARCHAR(10) | True |  | False | TRANSACTION_ | The transaction code used by the Move and Adjust components |

## Primary Key

- **PK_TRANSACTION_PRODUCT_INV_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_PRODUCT_INV_TYPE_FACILITY** — TRANSACTION_PRODUCT_INV_TYPE -> FACILITY (`Facility -> Facility`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_INVENTORY_STATUS** — TRANSACTION_PRODUCT_INV_TYPE -> INVENTORY_STATUS (`DestinationInventoryStatus -> InventoryStatus`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_PARTNER** — TRANSACTION_PRODUCT_INV_TYPE -> PARTNER (`DestinationPartnerID -> ID`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_PRODUCT_INVENTORY_TYPE** — TRANSACTION_PRODUCT_INV_TYPE -> PRODUCT_INVENTORY_TYPE (`ProductInventoryType -> ProductInventoryType`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_TRANSACTION_** — TRANSACTION_PRODUCT_INV_TYPE -> TRANSACTION_ (`TransactionCode -> TransactionCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_PRODUCT_INV_TYPE_INVENTORY_STATUS** on `DestinationInventoryStatus`
- **IF_TRANSACTION_PRODUCT_INV_TYPE_PARTNER** on `DestinationPartnerID`
- **IXD_TransactionCode_ProductInventoryType_Facility** on `TransactionCode, ProductInventoryType, Facility`
