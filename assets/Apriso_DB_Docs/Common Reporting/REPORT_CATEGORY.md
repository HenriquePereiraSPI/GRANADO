# REPORT_CATEGORY

**Database:** Solution Authoring

**Description:** The table keeps hierarchical tree of the reports.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the Report Category |
| ParentID | INT(10,0) | True |  | False | REPORT_CATEGORY | Identifier of the parent category (hierarchy) |
| ReportTypeID | INT(10,0) | True |  | False | REPORT_TYPE | Link to REPORT_TYPE, allows to create different types of hierarchy for reports or labels. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REPORT_CATEGORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_REPORT_CATEGORY_REPORT_CATEGORY** — REPORT_CATEGORY -> REPORT_CATEGORY (`ParentID -> ID`)
- **FK_REPORT_CATEGORY_REPORT_TYPE** — REPORT_CATEGORY -> REPORT_TYPE (`ReportTypeID -> ID`)

## Referenced By (other tables -> this)

- **FK_REPORT_CATEGORY_REPORT_CATEGORY** — REPORT_CATEGORY -> REPORT_CATEGORY (`ParentID -> ID`)
- **FK_REPORT_REPORT_CATEGORY** — REPORT -> REPORT_CATEGORY (`ReportCategoryID -> ID`)

## Unique Indexes

- **UK_REPORT_CATEGORY** on `FUID`

## Non-Unique Indexes

- **IF_REPORT_CATEGORY_REPORT_CATEGORY** on `ParentID`
- **IXD_ReportTypeID** on `ReportTypeID`
