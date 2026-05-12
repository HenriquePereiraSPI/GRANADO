# PAPER_FORMAT

**Database:** Operational

**Description:** Contains the various paper formats defined in the system. Linked to printer capabilities and the label definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PAPER_FORMAT** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PRINTER_PAPER_FORMAT_PAPER_FORMAT** — PRINTER_PAPER_FORMAT -> PAPER_FORMAT (`PaperFormatID -> ID`)
- **FK_REPORT_FORMAT_PAPER_FORMAT** — REPORT_FORMAT -> PAPER_FORMAT (`PaperFormatID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
