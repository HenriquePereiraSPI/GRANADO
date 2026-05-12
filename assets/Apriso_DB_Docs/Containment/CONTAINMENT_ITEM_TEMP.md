# CONTAINMENT_ITEM_TEMP

**Database:** Operational

**Description:** This table contains temporary Containment items to be created, added, deleted, held or released. It is used internally by Business Compoments.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddItemState | INT(10,0) | True |  | False |  | The flag used to create Transaction History of adding action. |
| AddItemStatusCode | NVARCHAR(20) | True |  | False |  | Status code of the item after adding it to Containment. |
| ChildHold | BIT | True |  | False |  | Indicates that the item is on hold due to hold operation done on its parent. |
| ChildLotNo | NVARCHAR(40) | True |  | False |  | Child Lot Number of the Containment item. |
| ChildProductID | INT(10,0) | True |  | False |  | Child Product ID of the Containment item. |
| ChildProductNo | NVARCHAR(80) | True |  | False |  | Child Product Number of the Containment item. |
| ChildSerialNo | NVARCHAR(40) | True |  | False |  | Child Serial Number of the Containment item. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment of the item used for Transaction History. |
| ContainmentID | INT(10,0) | True |  | False |  | Containment ID the item belongs to. |
| ContainmentName | NVARCHAR(80) | True |  | False |  | Containment name the item belongs to. |
| CreateItemState | INT(10,0) | True |  | False |  | The flag used to create Transaction History of create action. |
| CreateItemStatusCode | NVARCHAR(20) | True |  | False |  | Status code of the item after creating Lot and Serial. |
| CreationTime | DATETIME | True |  | False |  | Creation time of data set. |
| DeleteItemState | INT(10,0) | True |  | False |  | The flag used to create Transaction History of deletion action. |
| DeleteItemStatusCode | NVARCHAR(20) | True |  | False |  | Status code of the item after deleting it from Containment. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility. |
| HoldItemState | INT(10,0) | True |  | False |  | The flag used to create Transaction History of hold action. |
| HoldItemStatusCode | NVARCHAR(20) | True |  | False |  | Status code of the item after hold operation. |
| HoldReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code for holding items. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot Number. |
| LotNoHoldID | INT(10,0) | True |  | False |  | ID of LOT_NO_HOLD record, used to release the item. |
| ParentHold | BIT | True |  | False |  | Indicates that the Containment item is on hold due to hold operation done on its child. |
| ParentLotNo | NVARCHAR(40) | True |  | False |  | Parent Lot Number of the Containment item. |
| ParentProductID | INT(10,0) | True |  | False |  | Parent Product ID of the Containment item. |
| ParentProductNo | NVARCHAR(80) | True |  | False |  | Parent Product Number of the Containment item. |
| ParentSerialNo | NVARCHAR(40) | True |  | False |  | Parent Serial Number of the Containment item. |
| ProductID | INT(10,0) | True |  | False |  | ID of Product. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Product Number. |
| ReleaseItemState | INT(10,0) | True |  | False |  | The flag used to create Transaction History of release action. |
| ReleaseItemStatusCode | NVARCHAR(20) | True |  | False |  | Status code of the item after release operation. |
| ReleaseReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code for releasing items. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Serial Number. |
| SerialNoHoldID | INT(10,0) | True |  | False |  | ID of SERIAL_NO_HOLD record, used to release the item. |
| SessionFUID | NVARCHAR(36) | False |  | False |  | Unique identifier of Containment data set. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINMENT_ITEM_TEMP** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINMENT_ITEM_TEMP_1** on `SerialNo, LotNo, ProductID, SessionFUID`
- **IF_SessionFUID** on `SessionFUID`
