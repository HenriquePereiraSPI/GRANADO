# SERIAL_NO_HOLD

**Database:** Operational

**Description:** Contains the list of the hold code (reason Code) that are preventing the Serial to be used.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildHold | BIT | True |  | False |  | Hold generated because of child. |
| ContainmentID | INT(10,0) | True |  | False |  | The containment that caused the hold. |
| DiscontinueDate | DATETIME | True |  | False |  | Date to discontinue the hold. |
| FutureHoldName | NVARCHAR(80) | True |  | False |  | Name of the future hold record that caused this hold. |
| GenealogyLotNoHoldID | INT(10,0) | True |  | False |  | Lot hold record that caused the hold on the current record. |
| GenealogySerialNoHoldID | INT(10,0) | True |  | False |  | Serial hold record that caused the hold on the current record. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ParentHold | BIT | True |  | False |  | Hold generated because of parent. |
| ProductID | INT(10,0) | True |  | False | SERIAL_NO | Reference to a product (product number and product version) |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold |
| ReleaseAfterDate | DATETIME | True |  | False |  | Indicates the earliest date when the system may automatically remove this hold. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Reference to the Serial number |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SERIAL_NO_HOLDS** on `ID`

## Foreign Keys (this table -> other)

- **FK_SERIAL_NO_HOLDS_REASON_CODES** — SERIAL_NO_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_SERIAL_NO_HOLDS_SERIAL_NO1** — SERIAL_NO_HOLD -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_SerialNo_ProductID_ReasonCode** on `SerialNo, ProductID, ReasonCode`
