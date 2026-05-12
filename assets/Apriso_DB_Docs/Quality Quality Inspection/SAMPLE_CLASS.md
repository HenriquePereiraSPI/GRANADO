# SAMPLE_CLASS

**Database:** Operational

**Description:** This table contains Sample Class definitions

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The sample class identifier |
| Name | NVARCHAR(50) | True |  | False |  | The name of the sample class |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SAMPLE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SAMPLE_SAMPLE_CLASS** — SAMPLE -> SAMPLE_CLASS (`SampleClassID -> ID`)

## Unique Indexes

- **UK_SAMPLE_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
