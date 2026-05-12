# SEQUENCE_

**Database:** Operational

**Description:** The “SEQUENCE_” table stores information about sequences used in Apriso. A sequence is defined by its name and facility and has additional attributes such as prefix and suffix, next, minimum, maximum, start an increment value, format, cache size, etc. The content of the table is displayed through maitneance screen

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CachedSize | INT(10,0) | False |  | False |  | The size of the cache for the sequence before the system will have to go back to the database to retrieve the next sequence list |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of a sequence to a facility |
| Format | NVARCHAR(50) | True |  | False |  | The format the sequence is to be returned in |
| FUID | NVARCHAR(36) | True |  | False |  | Apriso object unique Identifier for SEQUENCE. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Increment_ | SMALLINT(5,0) | True |  | False |  | The increment for the sequence when getting the next valid value |
| IsCycled | BIT | True |  | False |  | Determine if the sequence should re-cycle back to the min value when the max is reached |
| LastRefresh | DATETIME | True |  | False |  | For future use. |
| Max_ | BIGINT(19,0) | True |  | False |  | The maximum value for the given sequence |
| Min_ | BIGINT(19,0) | True |  | False |  | The minimum value for the sequence, used when the sequence is re-cycled |
| Name | NVARCHAR(50) | False |  | False |  | Name of the entity |
| Next_ | BIGINT(19,0) | True |  | False |  | The next value for the given sequence |
| PaddedLength | SMALLINT(5,0) | True |  | False |  | The length the sequence will be padded to |
| Prefix_ | NVARCHAR(10) | True |  | False |  | The prefix for the sequence |
| Start_ | BIGINT(19,0) | True |  | False |  | The start of the sequence |
| Suffix | NVARCHAR(10) | True |  | False |  | The suffix for the sequence |

## Primary Key

- **PK_SEQUENCE_** on `ID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE__FACILITY** — SEQUENCE_ -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **FK_PACKAGING_INSTR_DETAIL_SEQUENCE** — PACKAGING_INSTR_DETAIL -> SEQUENCE_ (`SequenceID -> ID`)
- **FK_PACKAGING_INSTR_HEADER_SEQUENCE** — PACKAGING_INSTR_HEADER -> SEQUENCE_ (`SequenceID -> ID`)
- **FK_SEQUENCE_DETAIL_SEQUENCE** — SEQUENCE_DETAIL -> SEQUENCE_ (`SequenceID -> ID`)
- **FK_SEQUENCE_WIP_ORDER_TYPE_SEQUENCE_** — SEQUENCE_WIP_ORDER_TYPE -> SEQUENCE_ (`SequenceID -> ID`)

## Unique Indexes

- **UK_SEQUENCE** on `FUID`

## Non-Unique Indexes

- **IXD_Name_Facility** on `Name, Facility`
