# DB_WORKSPACE_CLASS

**Database:** Operational

**Description:** This table stores information about the Workspace Classes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | The GUID. |
| ID | INT(10,0) | False |  | True |  | The ID of the Workspace class. |
| Name | NVARCHAR(256) | False |  | False |  | The name of Workspace class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UserBoolean1 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean2 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean3 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean4 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserDate1 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate2 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate3 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate4 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDecimal1 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal2 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal3 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal4 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserInt1 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt2 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt3 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt4 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserString1 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString2 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString3 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString4 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |

## Primary Key

- **PK_DB_WORKSPACE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DB_WORKSPACE_WORKSPACE_CLASS** — DB_WORKSPACE -> DB_WORKSPACE_CLASS (`WorkSpaceClass -> ID`)

## Unique Indexes

- **UK_DB_WORKSPACE_CLASS** on `FUID`
- **UK_DB_WORKSPACE_CLASS_NAME** on `Name`

## Non-Unique Indexes

- **** on ``
