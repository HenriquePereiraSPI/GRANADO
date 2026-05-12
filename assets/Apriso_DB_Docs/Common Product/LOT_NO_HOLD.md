# LOT_NO_HOLD

**Database:** Operational

**Description:** Stores all Holds that have been placed on a Lot Number.  Each Lot Number may have zero to many Holds on it as long as each Hold is defined by a different Reason Code.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildHold | BIT | True |  | False |  | Hold generated because of child. |
| ContainmentID | INT(10,0) | True |  | False |  | The containment that caused the hold. |
| DiscontinueDate | DATETIME | True |  | False |  | Date to discontinue the hold. |
| FutureHoldName | NVARCHAR(80) | True |  | False |  | Name of the future hold record that caused this hold. |
| GenealogyLotNoHoldID | INT(10,0) | True |  | False |  | Lot hold record that caused the hold on the current record. |
| GenealogySerialNoHoldID | INT(10,0) | True |  | False |  | Serial hold record that caused the hold on the current record. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LotNo | NVARCHAR(40) | False |  | False | LOT_NO | Llot on hold (Lot + Product ID) is on hold. |
| ParentHold | BIT | True |  | False |  | Hold generated because of parent. |
| ProductID | INT(10,0) | False |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code indicating why the entity is on Hold. |
| ReleaseAfterDate | DATETIME | True |  | False |  | Indicates the earliest date when the system may automatically remove this hold. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_LOT_NUMBER_HOLDS** on `ID`

## Foreign Keys (this table -> other)

- **FK_LOT_NO_HOLDS_LOT_NO** — LOT_NO_HOLD -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_LOT_NUMBER_HOLDS_REASON_CODES** — LOT_NO_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LOT_NO_HOLDS_LOT_NO** on `LotNo, ProductID`
- **IXD_ProductID_LotNo_ReasonCode** on `ProductID, LotNo, ReasonCode`
