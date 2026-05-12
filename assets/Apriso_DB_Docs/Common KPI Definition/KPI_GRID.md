# KPI_GRID

**Database:** Solution Authoring

**Description:** The Grid definition for the KPI information

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClientName | NVARCHAR(100) | True |  | False |  | The owner of the the grid |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier |
| GridActive | BIT | True |  | False |  | Indicates if the Grid  is active |
| Key10TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key1TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key2TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key3TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key4TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key5TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key6TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key7TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key8TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Key9TextID | INT(10,0) | True |  | False |  | Textual description of the key (localized) |
| Name | NVARCHAR(100) | False |  | True |  | Name of the Grid |
| RefreshRate | BIGINT(19,0) | True |  | False |  | Rate at which the grid is refreshed (in minutes) |
| ScreenID | INT(10,0) | True |  | False | SCREEN | To be able associate security values per KPI grid |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence of the grid in the form |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_KPI_GRID** on `Name`

## Foreign Keys (this table -> other)

- **FK_KPI_GRID_SCREEN** — KPI_GRID -> SCREEN (`ScreenID -> ID`)

## Referenced By (other tables -> this)

- **FK_KPI_GRID_KPI_KPI_GRID** — KPI_GRID_KPI -> KPI_GRID (`KPIGridName -> Name`)

## Unique Indexes

- **UK_KPI_GRID** on `FUID`

## Non-Unique Indexes

- **IF_KPI_GRID_KPI_OWNERSHIP** on `ClientName`
- **IF_KPI_GRID_SCREEN** on `ScreenID`
