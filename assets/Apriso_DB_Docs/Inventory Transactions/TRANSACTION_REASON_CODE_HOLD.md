# TRANSACTION_REASON_CODE_HOLD

**Database:** Operational

**Description:** This table contains the setting used by the system to define is an inventory movement or adjustment can be done. The system will considere the various entities involved (the lcoation, the partner… in the movement, will considere the reason code assigned to these entities and will compare that list to the reccords persisted in this table for the selected transaction. If the reccords match (no reason code in TRANSACTION_REASON_CODE_HOLD) then it means that any reason code assign stops the flow.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold |
| RestrictContainer | SMALLINT(5,0) | True |  | False | TRANSACTION_RESTRICTION_TYPE | Determines if the transaction code should restrict moving or adjusting containers if the container is on hold for the defined reason code |
| RestrictLocation | SMALLINT(5,0) | True |  | False | TRANSACTION_RESTRICTION_TYPE | Determines if the transaction code should restrict moving or adjusting locations if the location is on hold for the defined reason code |
| RestrictLot | SMALLINT(5,0) | True |  | False | TRANSACTION_RESTRICTION_TYPE | Determines if the transaction code should restrict moving or adjusting lots if the lots is on hold for the defined reason code |
| RestrictPartner | SMALLINT(5,0) | True |  | False | TRANSACTION_RESTRICTION_TYPE | Determines if the transaction code should restrict moving or adjusting partners if the partner is on hold for the defined reason code |
| RestrictProduct | SMALLINT(5,0) | True |  | False | TRANSACTION_RESTRICTION_TYPE | Determines if the transaction code should restrict moving or adjusting products if the product is on hold for the defined reason code |
| RestrictSerial | BIT | True |  | False |  | Determines if the transaction code should restrict moving or adjusting serials if the serial is on hold for the defined reason code |
| RestrictWipOperation | BIT | True |  | False |  | Determines if the transaction code should restrict moving or adjusting WIP Operations if the WIP Operation is on hold for the defined reason code |
| RestrictWipOrder | BIT | True |  | False |  | Determines if the transaction code should restrict moving or adjusting WIP Orders if the WIP Order is on hold for the defined reason code |
| TransactionCode | NVARCHAR(10) | False |  | False | TRANSACTION_ | The transaction code used by the Move and Adjust components |

## Primary Key

- **PK_TRANSACTION_REASON_CODE_HOLD** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_REASON_CODE_HOLD_REASON_CODE** — TRANSACTION_REASON_CODE_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_ (`TransactionCode -> TransactionCode`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictProduct -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE1** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictLot -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE2** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictLocation -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE3** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictContainer -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE4** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictPartner -> RestrictionType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_** on `TransactionCode`
