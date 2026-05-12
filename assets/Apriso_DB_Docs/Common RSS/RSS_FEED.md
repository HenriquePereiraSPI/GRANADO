# RSS_FEED

**Database:** Operational

**Description:** This table stores the RSS feeds.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR(2000) | True |  | False |  | RSS feed description. |
| Extension | NVARCHAR | True |  | False |  | Serialized optional properties of the RSS feed. |
| FeedName | NVARCHAR(250) | False |  | False |  | Name of the RSS feed category. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Link | NVARCHAR(2000) | True |  | False |  | RSS feed link. |
| Title | NVARCHAR(250) | False |  | False |  | RSS feed title. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_RSS_FEED** on `ID`

## Foreign Keys (this table -> other)

- **FK_RSS_FEED_UNIT** — RSS_FEED -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_RSS_ITEM_RSS_FEED** — RSS_ITEM -> RSS_FEED (`RSSFeedID -> ID`)

## Unique Indexes

- **UK_RSS_FEED** on `FeedName`

## Non-Unique Indexes

- **IF_RSS_FEED_UNIT** on `UnitID`
