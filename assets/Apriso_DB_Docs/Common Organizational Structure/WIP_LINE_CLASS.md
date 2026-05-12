# WIP_LINE_CLASS

**Database:** Operational

**Description:** WIP_LINE_CLASS is a user-defined classification of production lines, typically used for the type of manufacturing operation performed at the line, such as: assembly line, machining line, etc

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | User-defined classification of production lines, for example, between machining and assembly lines. |
| Name | NVARCHAR(50) | True |  | False |  | User-defined unique class name. Used by process authors for example. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WIP_LINE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WIP_LINE_WIP_LINE_CLASS** — WIP_LINE -> WIP_LINE_CLASS (`WipLineClassID -> ID`)

## Unique Indexes

- **UK_WIP_LINE_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
