# SEQUENCE_DETAIL

**Database:** Operational

**Description:** The sequence detail is a child table of the Sequence table and is used to create sub-sequences of any given sequence. These sub-sequences are created on the fly whenever they are requested. I.e. If you want to have a separate sequence to create product specific lots, you would have one sequence for "LOTNO", and then when the sequence provider is called, you would pass in a sequence detail of the product.  This would dynamically create one sequence per product/lot combination.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CachedSize | INT(10,0) | False |  | False |  | The number of values that are cached into memory for faster retrieval |
| DetailName | NVARCHAR(80) | False |  | True |  | Name of the subsequence. |
| Format | NVARCHAR(50) | True |  | False |  | The output format. Allows the use of String.Format(). 0 - prefix, 1 - value, 2 - suffix. |
| Increment_ | SMALLINT(5,0) | True |  | False |  | The increment of the sequence |
| IsCycled | BIT | True |  | False |  | The next value is set to the min value when the max value is reached, otherwise an exception is thrown |
| LastRefresh | DATETIME | True |  | False |  | The last time the sequence was refreshed |
| Max_ | BIGINT(19,0) | True |  | False |  | The maximum value in the sequence |
| Min_ | BIGINT(19,0) | True |  | False |  | The minimum value in the sequence |
| Next_ | BIGINT(19,0) | True |  | False |  | The next integer value in the sequence |
| PaddedLength | SMALLINT(5,0) | True |  | False |  | The length in which the numerical value is padded with zeros |
| Prefix_ | NVARCHAR(10) | True |  | False |  | The prefix for the sequence |
| SequenceID | INT(10,0) | False |  | True | SEQUENCE_ | The unique identifier of the subsequence. |
| Start_ | BIGINT(19,0) | True |  | False |  | The starting value for the sequence |
| Suffix | NVARCHAR(10) | True |  | False |  | The suffix for the sequence |

## Primary Key

- **PK_SEQUENCE_DETAIL** on `SequenceID, DetailName`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_DETAIL_SEQUENCE** — SEQUENCE_DETAIL -> SEQUENCE_ (`SequenceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
