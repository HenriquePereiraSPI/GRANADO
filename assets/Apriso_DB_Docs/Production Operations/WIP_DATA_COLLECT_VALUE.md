# WIP_DATA_COLLECT_VALUE

**Database:** Operational

**Description:** Possible values (attributes) for data collect.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Conforming | BIT | True |  | False |  | Information if value is conforming for the Data Collect. |
| DataType | INT(10,0) | False |  | False |  | Data type of the Data Collect: 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| Name | NVARCHAR(100) | False |  | False |  | Name of the Data Collect Value. |
| Origin | SMALLINT(5,0) | False |  | False |  | Origin of the value. 1 - Requirement Attribute, 2 - Custom Attribute. |
| SequenceNo | INT(10,0) | False |  | False |  | Sequence number of the Data Collect Values. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code. |
| ValueBool | BIT | True |  | False |  | Boolean value. |
| ValueChar | NVARCHAR | True |  | False |  | String value. |
| ValueDate | DATETIME | True |  | False |  | Date time value. |
| ValueDecimal | DECIMAL(28,10) | True |  | False |  | Decimal value. |
| ValueInt | INT(10,0) | True |  | False |  | Integer value. |
| WipDataCollectID | BIGINT(19,0) | False |  | False | WIP_DATA_COLLECT | Unique identifier of the WIP Data Collect. |

## Primary Key

- **PK_WIP_DATA_COLLECT_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_DATA_COLLECT_VALUE_UOM** — WIP_DATA_COLLECT_VALUE -> UOM (`UomCode -> UomCode`)
- **FK_WIP_DATA_COLLECT_VALUE_WIP_DATA_COLLECT** — WIP_DATA_COLLECT_VALUE -> WIP_DATA_COLLECT (`WipDataCollectID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_WIP_DATA_COLLECT_VALUE** on `WipDataCollectID, Name, Origin`

## Non-Unique Indexes

- **IF_WIP_DATA_COLLECT_VALUE_WIP_DATA_COLLECT** on `WipDataCollectID`
