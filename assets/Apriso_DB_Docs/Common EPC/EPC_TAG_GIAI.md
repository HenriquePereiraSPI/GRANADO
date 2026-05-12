# EPC_TAG_GIAI

**Database:** Operational

**Description:** Specialized table to store EPC data for the GIAI encoding type

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BitSize | INT(10,0) | True |  | False |  | Tag bit size |
| CompanyPrefix | NVARCHAR(12) | True |  | False |  | Company Prefix |
| EpcTagID | INT(10,0) | False |  | True | EPC_TAG | EPC Tag ID for GIAI encoding type |
| Filter | INT(10,0) | True |  | False |  | Filter |
| IndividualAssetReference | NVARCHAR(24) | True |  | False |  | Individual Asset Reference |
| Partition | INT(10,0) | True |  | False |  | Partition |

## Primary Key

- **PK_EPC_TAG_GIAI** on `EpcTagID`

## Foreign Keys (this table -> other)

- **FK_EPC_TAG_GIAI_EPC_TAG** — EPC_TAG_GIAI -> EPC_TAG (`EpcTagID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
