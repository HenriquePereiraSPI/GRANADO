# PROCESS_DATA_COLLECT_VALUE

**Database:** Operational

**Description:** Possible values (attributes) for the Data Collect.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Conforming | BIT | True |  | False |  | Information if value is conforming for the Data Collect. |
| DataType | INT(10,0) | False |  | False |  | Data type of the Data Collect: 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| Name | NVARCHAR(100) | False |  | False |  | Name of the Data Collect Value. |
| Origin | SMALLINT(5,0) | False |  | False |  | Origin of the value. 1 - Requirement Attribute, 2 - Custom Attribute. |
| ProcessDataCollectID | INT(10,0) | False |  | False | PROCESS_DATA_COLLECT | Unique identifier of the Process Data Collect. |
| SequenceNo | INT(10,0) | False |  | False |  | Sequence number of the Data Collect Values. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code. |
| ValueBool | BIT | True |  | False |  | Boolean value. |
| ValueChar | NVARCHAR | True |  | False |  | String value. |
| ValueDate | DATETIME | True |  | False |  | Date time value. |
| ValueDecimal | DECIMAL(28,10) | True |  | False |  | Decimal value. |
| ValueInt | INT(10,0) | True |  | False |  | Integer value. |

## Primary Key

- **PK_PROCESS_DATA_COLLECT_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_DATA_COLLECT_VALUE_PROCESS_DATA_COLLECT** — PROCESS_DATA_COLLECT_VALUE -> PROCESS_DATA_COLLECT (`ProcessDataCollectID -> ID`)
- **FK_PROCESS_DATA_COLLECT_VALUE_UOM** — PROCESS_DATA_COLLECT_VALUE -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_PROCESS_DATA_COLLECT_VALUE** on `ProcessDataCollectID, Name, Origin`

## Non-Unique Indexes

- **IF_PROCESS_DATA_COLLECT_VALUE_PROCESS_DATA_COLLECT** on `ProcessDataCollectID`
