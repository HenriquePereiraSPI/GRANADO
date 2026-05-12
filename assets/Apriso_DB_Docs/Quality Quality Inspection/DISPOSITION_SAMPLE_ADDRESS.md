# DISPOSITION_SAMPLE_ADDRESS

**Database:** Operational

**Description:** (Future use) Sample address lists

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Address and its attributes unique identifier |
| DisplayNo | INT(10,0) | True |  | False |  | The order in which to display the entity to the user |
| Disposition | NVARCHAR(40) | False |  | True |  | Disposition and its Attributes |
| Facility | NVARCHAR(40) | False |  | True |  | Identifier for the Facility |
| LineSequenceNo | INT(10,0) | False |  | True |  | The disposition sequence number |
| SampleSequenceNo | INT(10,0) | False |  | True |  | The unique identifier for a sample within a disposition |

## Primary Key

- **PK_DISPOSITION_SAMPLE_ADDRESS** on `Facility, Disposition, LineSequenceNo, SampleSequenceNo, AddressID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_SAMPLE_ADDRESS_ADDRESS** — DISPOSITION_SAMPLE_ADDRESS -> ADDRESS (`AddressID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_SAMPLE_ADDRESS_ADDRESS** on `AddressID`
- **IF_DISPOSITION_SAMPLE_ADDRESS_DISPOSITION_SAMPLE** on `Disposition, SampleSequenceNo, Facility, LineSequenceNo`
