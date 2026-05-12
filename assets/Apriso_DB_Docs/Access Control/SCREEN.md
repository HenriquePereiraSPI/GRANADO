# SCREEN

**Database:** Solution Authoring

**Description:** Table keeps definition of all Apriso UI Screens.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AssemblyName | VARCHAR(500) | True |  | False |  | Name of the assembly Screen is implemented in |
| ClassName | VARCHAR(500) | True |  | False |  | Full name of class Screen is implemented in |
| Configuration | NVARCHAR | True |  | False |  | Screen configuration. |
| ConfigurationFile | NVARCHAR(255) | True |  | False |  | Configuration file. |
| ConfigurationID | NVARCHAR(255) | True |  | False |  | Identifier of the screen configuration. |
| DescriptorAssemblyName | VARCHAR(500) | True |  | False |  | Name of the assembly document descriptor is implemented in |
| DescriptorClassName | VARCHAR(500) | True |  | False |  | Full name of class document descriptor is implemented in |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Screen |
| IsStartup | BIT | True |  | False |  | Indicates if a browser can be invoke as a startup control |
| LastPopulatedOn | DATETIME | True |  | False |  | Date when the screen was last refreshed from assembly |
| ParentScreenID | INT(10,0) | True |  | False | SCREEN | Link to parent screen for munti edytors |
| ScreenType | INT(10,0) | True |  | False |  | Type of the screen: 1-List , 2- Edytor, 3-MultiEdytor |
| Standard | BIT | True |  | False |  | Origin of the screen e.g. Standard or Custom. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SCREEN** on `ID`

## Foreign Keys (this table -> other)

- **FK_SCREEN_SCREEN** — SCREEN -> SCREEN (`ParentScreenID -> ID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_SCREEN** — BUSINESS_OBJECT -> SCREEN (`ScreenID -> ID`)
- **FK_KPI_GRID_SCREEN** — KPI_GRID -> SCREEN (`ScreenID -> ID`)
- **FK_SCREEN_AUTH_RULE_SCREEN** — SCREEN_AUTH_RULE -> SCREEN (`ScreenID -> ID`)
- **FK_SCREEN_PROFILE_SCREEN** — SCREEN_PROFILE -> SCREEN (`ScreenID -> ID`)
- **FK_SCREEN_SCREEN** — SCREEN -> SCREEN (`ParentScreenID -> ID`)

## Unique Indexes

- **UK_SCREEN** on `FUID`

## Non-Unique Indexes

- **IF_SCREEN_SCREEN** on `ParentScreenID`
