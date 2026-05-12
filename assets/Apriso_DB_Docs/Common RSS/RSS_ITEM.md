# RSS_ITEM

**Database:** Operational

**Description:** This table stores the RSS items.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR | False |  | False |  | RSS item description. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ItemExtension | NVARCHAR | True |  | False |  | Serialized optional properties of the RSS item. |
| Link | NVARCHAR(2000) | True |  | False |  | RSS item link. |
| PublishDate | DATETIME | False |  | False |  | Date when the item was published. |
| RSSFeedID | INT(10,0) | False |  | False | RSS_FEED | Link to the RSS_FEED table. |
| Title | NVARCHAR(250) | False |  | False |  | RSS item title. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_RSS_ITEM** on `ID`

## Foreign Keys (this table -> other)

- **FK_RSS_ITEM_RSS_FEED** — RSS_ITEM -> RSS_FEED (`RSSFeedID -> ID`)
- **FK_RSS_ITEM_UNIT** — RSS_ITEM -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RSS_ITEM_RSS_FEED** on `RSSFeedID`
- **IF_RSS_ITEM_UNIT** on `UnitID`
