# DISPOSITION_CLASS

**Database:** Operational

**Description:** This table contains the Class of the Disposition (Inspection): 1 - Inspection against Master Specification, 2 - Inspection against Inspection Order

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Disposition class. |
| Name | NVARCHAR(50) | False |  | False |  | The code of the Disposition class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_DISPOSITION_CLASS** — DISPOSITION -> DISPOSITION_CLASS (`DispositionClassID -> ID`)

## Unique Indexes

- **UK_DISPOSITION_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
