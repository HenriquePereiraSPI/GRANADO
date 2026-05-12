# GetRSSFeed

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.RSSFeedController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** RSS Feed Get Select

## Description

This Business Component method allows the user to retrieve the RSS Feed information from the database.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ID | Integer | Yes | ID of the RSS Feed to get the information for. |
| Output | FeedName | Char | Yes | RSS Feed name. |
| Output | Title | Char | Yes | RSS Feed title. |
| Output | Link | Char | Yes | RSS Feed link. |
| Output | Description | Char | Yes | RSS Feed description. |
| Output | Extension | Char | Yes | RSS Feed extended properties in XML format. |

## Validations

- System checks if a record of the given ID exists in the RSS_FEED table.

## System Processing

- System returns values from a record of the RSS_FEED table for the given ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RSS_FEED | ID | ID |
|  | FeedName | FeedName |
|  | Title | Title |
|  | Link | Link |
|  | Description | Description |
|  | Extension | Extension |
