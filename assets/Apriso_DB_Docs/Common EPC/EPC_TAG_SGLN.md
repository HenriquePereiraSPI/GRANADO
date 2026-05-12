# EPC_TAG_SGLN

**Database:** Operational

**Description:** Specialized table to store EPC data for the SGLN encoding type

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BitSize | INT(10,0) | True |  | False |  | Tag bit size |
| CompanyPrefix | NVARCHAR(12) | True |  | False |  | Company Prefix |
| EpcTagID | INT(10,0) | False |  | True | EPC_TAG | EPC Tag ID for SGLN encoding type |
| ExtensionComponent | NVARCHAR(20) | True |  | False |  | Extension Component |
| Filter | INT(10,0) | True |  | False |  | Filter |
| LocationReference | NVARCHAR(6) | True |  | False |  | Location Reference |
| Partition | INT(10,0) | True |  | False |  | Partition |

## Primary Key

- **PK_EPC_TAG_SGLN** on `EpcTagID`

## Foreign Keys (this table -> other)

- **FK_EPC_TAG_SGLN_EPC_TAG** — EPC_TAG_SGLN -> EPC_TAG (`EpcTagID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
