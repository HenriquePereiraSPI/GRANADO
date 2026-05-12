# PUTAWAY_CONTROL_STRATEGY

**Database:** Operational

**Description:** This table stores the Putaway Control Strategies.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowCrossDocking | BIT | False | ((1)) | False |  | Specifies if cross docking is allowed. |
| AllowInventorySplit | BIT | False | ((1)) | False |  | Specifies if inventory split is allowed. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Name | NVARCHAR(40) | False |  | False |  | Name of the Strategy. |
| SortBy | NVARCHAR | True |  | False |  | XML with the sorting configuration. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_PUTAWAY_CONTROL_STRATEGY** on `ID`

## Foreign Keys (this table -> other)

- **FK_PUTAWAY_CONTROL_STRATEGY_UNIT** — PUTAWAY_CONTROL_STRATEGY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_PUTAWAY_CONTROL_STRATEGY** on `Name`
- **UK_PUTAWAY_CONTROL_STRATEGY_1** on `FUID`

## Non-Unique Indexes

- **IF_PUTAWAY_CONTROL_STRATEGY_UNIT** on `UnitID`
