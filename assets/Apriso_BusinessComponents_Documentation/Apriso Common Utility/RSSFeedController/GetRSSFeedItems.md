# GetRSSFeedItems

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.RSSFeedController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** RSS Feed Get Query Items Latest

## Description

This Business Component method allows the user to retrieve specified number of RSS Feed items with the latest Publish Date that belong to a particular RSS Feed. The default number of items is 25. Items with future Publish Dates are ignored.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FeedID | Integer | Yes | ID of a parent RSS Feed that the items will be retrieved for. |
| Input | ItemsCount | Integer | No | Number of the latest RSS Feed items to return. Zero means a default value of 25 items. |
| Output | IDList | ListofInteger | Yes | List of IDs or RSS items records. |
| Output | TitleList | ListofChar | Yes | List of titles of the RSS items. |
| Output | LinkList | ListofChar | Yes | List of links to the RSS items. |
| Output | DescriptionList | ListofChar | Yes | List of descriptions of the RSS items. |
| Output | PublishDateList | ListofDateTime | Yes | List of dates the RSS items were published on. |
| Output | ExtensionList | ListofChar | Yes | List of extended properties of the RSS items in XML format. |

## Validations

- System checks if the given FeedID is greater than 0. Note: System does not check if RSS Feed with provided FeedID exists. 
- System checks if ItemsCount is non-negative.

## System Processing

- System returns the records with the newest PublishDate (but not later than current date and time) from the RSS_ITEM table for a given ID of the parent RSS Feed. The number of records is limited by the value of ItemsCount input. Please be aware that some RSS Readers may have a low limit for items count.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RSS_ITEM | RSSFeedID | FeedID |
|  | ID | IDList |
|  | Title | TitleList |
|  | Link | LinkList |
|  | Description | DescriptionList |
|  | PublishDate | PublishDateList |
|  | ItemExtension | ExtensionList |
