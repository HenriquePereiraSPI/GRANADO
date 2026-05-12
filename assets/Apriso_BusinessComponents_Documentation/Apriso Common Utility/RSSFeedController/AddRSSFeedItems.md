# AddRSSFeedItems

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.RSSFeedController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** RSS Feed Add Items Item Create

## Description

This Business Component method is used to add new RSS items to a particular RSS feed. To specify the extended properties of the RSS feed items, the user must create additional Inputs for the BC. The names (case-sensitive) and types of possible dynamic Inputs are listed in the **Dynamic Inputs **section below. For details on these Inputs, read the specification here:   http://www.rssboard.org/rss-specification  .

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FeedID | Integer | Yes | The ID of the parent RSS feed for which items will be created. |
| Input | Title | ListofChar | Yes | The list of titles of the new RSS items. |
| Input | Link | ListofChar | No | The list of links to the new RSS items. |
| Input | Description | ListofChar | Yes | The list of descriptions of the RSS items. |
| Input | PublishDate | ListofDateTime | Yes | The list of dates on which the RSS items were published. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Author | ListofChar | The email address of the author of the item. |
| Category | ListofChar | Includes the item in one or more categories. |
| Comments | ListofChar | The URL of the page for comments relating to the item. |
| Enclosure | ListofChar | Describes a media object that is attached to the item. |
| EnclosureType | ListofChar | The string that uniquely identifies the item. |
| EnclosureSize | ListofInteger | Indicates when the item was published. |
| Source | ListofChar | The RSS channel from which the item came. |

## Validations

- The system checks if the RSS feed of the given FeedID exists.  
- The system checks if the provided lists are not empty and that the lists have the same length or the length equals 1.

## System Processing

- The system collects all the dynamic Inputs added by the user and serializes them (in the XML format) to the ItemExtension property of the adequate RSS Feed item. If any of the Input lists have a length of 1, the element of the list is duplicated for all the RSS items. 
- The system creates records in the RSS_ITEM table for each set of values provided in the lists and for the same index. If any of the Input lists have a length of 1, the element of the list is duplicated for all the RSS items.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RSS_ITEM | RSSFeedID | FeedID |
|  | Title | Title |
|  | Link | Link |
|  | Description | Description |
|  | PublishDate | PublishDate |
|  | ItemExtension | Additional dynamic Inputs created by the user, serialized in the XML format. |
