# DISPATCH_SEQUENCE_TYPE

**Database:** Operational

**Description:** This table specifies the valid types of DISPATCH_SEQUENCE. The contents of this table cannot be changed by the user.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DispatchSequenceType | SMALLINT(5,0) | False |  | True |  | The type of Dispatch Sequence. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPATCH_SEQUENCE_TYPE** on `DispatchSequenceType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DB_ACTIVITY_DEPENDENCY_DST** — DB_ACTIVITY_DEPENDENCY -> DISPATCH_SEQUENCE_TYPE (`DispatchSequenceType -> DispatchSequenceType`)
- **FK_DISPATCH_SEQUENCE_DISPATCH_SEQUENCE_TYPE** — DISPATCH_SEQUENCE -> DISPATCH_SEQUENCE_TYPE (`DispatchSequenceType -> DispatchSequenceType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
