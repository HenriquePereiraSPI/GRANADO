# EMR_RECORD

**Database:** Operational

**Description:** This table stores information about Electronic Manufacturing Records. If there is any annotation attached to the EMR record, it will be linked through UnitID and from UnitID linked to UNIT_ANNOTATION.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BreakdownStructureCode | NVARCHAR(256) | True |  | False |  | Breakdown Structure Code. It is used for sorting and configuring the hierarchy of the report. |
| Cancelled | BIT | False |  | False |  | Indicates if the Record has been cancelled. |
| DecimalValue1 | DECIMAL(28,10) | True |  | False |  | Decimal key value 1. |
| DecimalValue10 | DECIMAL(28,10) | True |  | False |  | Decimal key value 10. |
| DecimalValue11 | DECIMAL(28,10) | True |  | False |  | Decimal key value 11. |
| DecimalValue12 | DECIMAL(28,10) | True |  | False |  | Decimal key value 12. |
| DecimalValue13 | DECIMAL(28,10) | True |  | False |  | Decimal key value 13. |
| DecimalValue14 | DECIMAL(28,10) | True |  | False |  | Decimal key value 14. |
| DecimalValue15 | DECIMAL(28,10) | True |  | False |  | Decimal key value 15. |
| DecimalValue16 | DECIMAL(28,10) | True |  | False |  | Decimal key value 16. |
| DecimalValue17 | DECIMAL(28,10) | True |  | False |  | Decimal key value 17. |
| DecimalValue18 | DECIMAL(28,10) | True |  | False |  | Decimal key value 18. |
| DecimalValue19 | DECIMAL(28,10) | True |  | False |  | Decimal key value 19. |
| DecimalValue2 | DECIMAL(28,10) | True |  | False |  | Decimal key value 2. |
| DecimalValue20 | DECIMAL(28,10) | True |  | False |  | Decimal key value 20. |
| DecimalValue3 | DECIMAL(28,10) | True |  | False |  | Decimal key value 3. |
| DecimalValue4 | DECIMAL(28,10) | True |  | False |  | Decimal key value 4. |
| DecimalValue5 | DECIMAL(28,10) | True |  | False |  | Decimal key value 5. |
| DecimalValue6 | DECIMAL(28,10) | True |  | False |  | Decimal key value 6. |
| DecimalValue7 | DECIMAL(28,10) | True |  | False |  | Decimal key value 7. |
| DecimalValue8 | DECIMAL(28,10) | True |  | False |  | Decimal key value 8 |
| DecimalValue9 | DECIMAL(28,10) | True |  | False |  | Decimal key value 9. |
| Description | NVARCHAR(256) | True |  | False |  | Description of EMR Record. |
| EmrHeaderID | INT(10,0) | False |  | False | EMR_HEADER | Unique identifier of EMR Header, associated with EMR Record. |
| Exception | BIT | False |  | False |  | Indicates if the Record was created because of an exception case in the process. |
| FormInstance | NVARCHAR | True |  | False |  | Form instance of the EMR Record. |
| FormTemplate | NVARCHAR | True |  | False |  | Form template of the EMR Record |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| FunctionName | NVARCHAR(256) | True |  | False |  | Name of the Function recorded by EMR. |
| HeaderDefinitionName | NVARCHAR(5) | True |  | False |  | Name of the EMR Header Definition associated with this EMR Record. |
| ID | INT(10,0) | False |  | True |  | Primary Key |
| InternalUse | BIT | False |  | False |  | Indicates if this record will be visible in the EMR screen. |
| Name | NVARCHAR(30) | True |  | False |  | Name of the EMR Record. EmrHeaderID + Name must be unique. |
| OperationCode | NVARCHAR(80) | True |  | False |  | Code of the Operation recorded by EMR. |
| OperationHeaderID | INT(10,0) | True |  | False | OPERATION_HEADER | Link to the OPERATION_HEADER table. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | Revision of the Operation recorded by EMR. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Sequence number of the Operation recorded by EMR. |
| ProcessName | NVARCHAR(80) | True |  | False |  | Name of the Process recorded by EMR. |
| ProcessOperationSequenceNo | NVARCHAR(20) | True |  | False |  | Sequence number of the Process Operation recorded by EMR. |
| ProcessRevision | NVARCHAR(80) | True |  | False |  | Revision of the Process recorded by EMR. |
| RecordDefinitionName | NVARCHAR(20) | True |  | False |  | Name of the EMR Record Definition associated with this EMR Record. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | Unique identifier of Signature Header, used for linking with Signature entity. |
| StepSequenceNo | INT(10,0) | True |  | False |  | Sequence number of the Step recorded by EMR. |
| StringValue1 | NVARCHAR(256) | True |  | False |  | String key value 1. |
| StringValue10 | NVARCHAR(256) | True |  | False |  | String key value 10. |
| StringValue11 | NVARCHAR(256) | True |  | False |  | String key value 11. |
| StringValue12 | NVARCHAR(256) | True |  | False |  | String key value 12. |
| StringValue13 | NVARCHAR(256) | True |  | False |  | String key value 13. |
| StringValue14 | NVARCHAR(256) | True |  | False |  | String key value 14. |
| StringValue15 | NVARCHAR(256) | True |  | False |  | String key value 15. |
| StringValue16 | NVARCHAR(256) | True |  | False |  | String key value 16. |
| StringValue17 | NVARCHAR(256) | True |  | False |  | String key value 17. |
| StringValue18 | NVARCHAR(256) | True |  | False |  | String key value 18. |
| StringValue19 | NVARCHAR(256) | True |  | False |  | String key value 19. |
| StringValue2 | NVARCHAR(256) | True |  | False |  | String key value 2. |
| StringValue20 | NVARCHAR(256) | True |  | False |  | String key value 20. |
| StringValue3 | NVARCHAR(256) | True |  | False |  | String key value 3. |
| StringValue4 | NVARCHAR(256) | True |  | False |  | String key value 4. |
| StringValue5 | NVARCHAR(256) | True |  | False |  | String key value 5. |
| StringValue6 | NVARCHAR(256) | True |  | False |  | String key value 6. |
| StringValue7 | NVARCHAR(256) | True |  | False |  | String key value 7. |
| StringValue8 | NVARCHAR(256) | True |  | False |  | String key value 8. |
| StringValue9 | NVARCHAR(256) | True |  | False |  | String key value 9. |
| Text | NVARCHAR | True |  | False |  | Free text. |
| TransactionLocalTime | DATETIME | True |  | False |  | Local time at the location where the user has performed the transaction (User Local Time). |
| TransactionLocation | NVARCHAR(256) | True |  | False |  | Location where the transaction was performed. |
| TransactionTimeZone | INT(10,0) | True |  | False |  | Time zone at the location where the user has performed the transation. |
| TransactionToken | NVARCHAR(256) | True |  | False |  | EMR Transaction Token. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UserReference | NVARCHAR(256) | True |  | False |  | Used for user reference. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | Number of the WIP Order recorded by EMR. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Type of the WIP Order recorded by EMR. |

## Primary Key

- **PK_EMR_RECORD** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMR_RECORD_EMR_HEADER** — EMR_RECORD -> EMR_HEADER (`EmrHeaderID -> ID`)
- **FK_EMR_RECORD_OPERATION_HEADER** — EMR_RECORD -> OPERATION_HEADER (`OperationHeaderID -> ID`)
- **FK_EMR_RECORD_SIGNATURE_HEADER** — EMR_RECORD -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_EMR_RECORD_UNIT** — EMR_RECORD -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_EMR_FIELD_EMR_RECORD** — EMR_FIELD -> EMR_RECORD (`EmrRecordID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_EMR_RECORD_OperationCode_OperationRevision** on `OperationCode, OperationRevision`
- **IDX_EmrHeaderID_Name** on `EmrHeaderID, Name`
- **IDX_EmrHeaderID_TransactionToken** on `EmrHeaderID, TransactionToken`
- **IDX_Name** on `Name`
- **IF_EMR_RECORD_OPERATION_HEADER** on `OperationHeaderID`
- **IF_EMR_RECORD_SIGNATURE_HEADER** on `SignatureHeaderID`
- **IF_EMR_RECORD_UNIT** on `UnitID`
- **IXD_EmrHeaderID_Exception_InternalUse** on `EmrHeaderID, Exception, InternalUse`
