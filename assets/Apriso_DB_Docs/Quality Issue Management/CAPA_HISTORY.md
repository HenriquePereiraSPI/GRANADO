# CAPA_HISTORY

**Database:** Operational

**Description:** This table contains the flow execution history of CAPA records.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAID | INT(10,0) | False |  | False | CAPA | The ID of the parent record from the CAPA table. |
| ChangeDate | DATETIME | False |  | False |  | The time when the change was performed. |
| ChangeFUID | NVARCHAR(36) | False |  | False |  | The unique ID of the change. |
| ChangeLineNo | INT(10,0) | True |  | False |  | A number ordering changed properties (and grouping multi-value properties). |
| CurrentStepName | NVARCHAR(80) | True |  | False |  | The name of the current CAPA Step. |
| DataType | INT(10,0) | True |  | False |  | The data type of the property: 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| EmployeeNo | NVARCHAR(50) | False |  | False |  | The number of the employee who performed the change. |
| FlowName | NVARCHAR(80) | True |  | False |  | The name of the source CAPA Flow. |
| FlowRevision | NVARCHAR(80) | True |  | False |  | The revision of the CAPA Flow. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Property | NVARCHAR(40) | True |  | False |  | The name of the property (or a part of the multi-value property). |
| PropertyIndex | INT(10,0) | True |  | False |  | The index of a property of a list type. For For future use... |
| PropertyType | NVARCHAR(40) | True |  | False |  | The type of the property, i.e. Standard, Custom, Link, Annotation, Document. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | The ID of the Signature Header used for signing the change. |
| StepName | NVARCHAR(80) | True |  | False |  | The name of the CAPA Step associated with the change. |
| TaskName | NVARCHAR(80) | True |  | False |  | The name of the CAPA Task associated with the change. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| ToValueBool | BIT | False | ((0)) | False |  | The Boolean value of the property after the change. |
| ToValueChar | NVARCHAR(2000) | True |  | False |  | The string value of the property after the change. |
| ToValueDateTime | DATETIME | True |  | False |  | The date time value of the property after the change. |
| ToValueDecimal | DECIMAL(28,10) | True |  | False |  | The decimal value of the property after the change. |
| ToValueInt | INT(10,0) | True |  | False |  | The integer value of the property after the change. |
| ValueBool | BIT | False | ((0)) | False |  | The Boolean value of the property before the change. |
| ValueChar | NVARCHAR(2000) | True |  | False |  | The string value of the property before the change. |
| ValueDateTime | DATETIME | True |  | False |  | The date time value of the property before the change. |
| ValueDecimal | DECIMAL(28,10) | True |  | False |  | The decimal value of the property before the change. |
| ValueInt | INT(10,0) | True |  | False |  | The integer value of the property before the change. |

## Primary Key

- **PK_CAPA_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_HISTORY_CAPA** — CAPA_HISTORY -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_HISTORY_SIGNATURE_HEADER** — CAPA_HISTORY -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CAPA_HISTORY_CAPA** on `CAPAID`
- **IF_CAPA_HISTORY_SIGNATURE_HEADER** on `SignatureHeaderID`
