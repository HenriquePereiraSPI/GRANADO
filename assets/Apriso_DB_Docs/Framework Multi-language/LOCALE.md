# LOCALE

**Database:** Solution Authoring

**Description:** Distinguishes sub-languages within a code (like US english vs UK english).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocaleCode | NVARCHAR(10) | False |  | True |  | Value that describes the Locale. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_LOCALE** on `LocaleCode`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_LANGUAGE_LOCALE** — LANGUAGE -> LOCALE (`LocaleCode -> LocaleCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
