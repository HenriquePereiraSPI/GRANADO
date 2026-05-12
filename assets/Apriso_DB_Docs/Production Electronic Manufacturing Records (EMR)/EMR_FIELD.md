# EMR_FIELD

**Database:** Operational

**Description:** This table stores information about fields for a given electronic record. If there is any annotation attached to the EMR record, it will be linked through UnitID and from UnitID linked to UNIT_ANNOTATION.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowEdit | BIT | False |  | False |  | Indicates if the field can be edited in the EMR screen. When true, content can be edited and an annotation with the previous value will be automatically generated. |
| BooleanValue | BIT | True |  | False |  | Value of the EMR Field when Field type is Boolean. |
| DateTimeValue | DATETIME | True |  | False |  | Value of the EMR Field when Field type is Date Time. |
| DecimalValue | DECIMAL(28,10) | True |  | False |  | Value of the EMR Field when Field type is Decimal. |
| Description | NVARCHAR(256) | True |  | False |  | Field description. |
| EmrRecordID | INT(10,0) | True |  | False | EMR_RECORD | Unique identifier of EMR Record, associated with EMR Field. |
| FieldType | SMALLINT(5,0) | False |  | False | FIELD_TYPE | Type of the Field. |
| FieldValue | NVARCHAR(256) | True |  | False |  | Value of the EMR Field. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | BIGINT(19,0) | False |  | True |  | Primary Key. |
| IntegerValue | INT(10,0) | True |  | False |  | Value of the EMR Field when Field type is Integer. |
| Name | NVARCHAR(18) | True |  | False |  | Name of the EMR Field. EmrRecordID + Name must be unique. |
| StringValue | NVARCHAR(256) | True |  | False |  | Value of the EMR Field when Field type is String. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UserReference | NVARCHAR(256) | True |  | False |  | Used for user reference. |

## Primary Key

- **PK_EMR_FIELD** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMR_FIELD_EMR_RECORD** — EMR_FIELD -> EMR_RECORD (`EmrRecordID -> ID`)
- **FK_EMR_FIELD_FIELD_TYPE** — EMR_FIELD -> FIELD_TYPE (`FieldType -> FieldType`)
- **FK_EMR_FIELD_UNIT** — EMR_FIELD -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMR_FIELD_EMR_RECORD** on `EmrRecordID`
- **IF_EMR_FIELD_UNIT** on `UnitID`
