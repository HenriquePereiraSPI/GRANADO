# TRANSACTION_RESTRICTION_TYPE

**Database:** Operational

**Description:** The "TRANSACTION_RESTRICTION_TYPE" table defines all possible restriction types of a transaction.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| RestrictionType | SMALLINT(5,0) | False |  | True |  | Determines what type of restriction to impose when validation a move or adjust can be perfomed based on hold per reason code.  The restriction type are Source, Destination or Both source and Destination. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_TRANSACTION_RESTRICTION_TYPE** on `RestrictionType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictProduct -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE1** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictLot -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE2** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictLocation -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE3** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictContainer -> RestrictionType`)
- **FK_TRANSACTION_REASON_CODE_HOLD_TRANSACTION_RESTRICTION_TYPE4** — TRANSACTION_REASON_CODE_HOLD -> TRANSACTION_RESTRICTION_TYPE (`RestrictPartner -> RestrictionType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
