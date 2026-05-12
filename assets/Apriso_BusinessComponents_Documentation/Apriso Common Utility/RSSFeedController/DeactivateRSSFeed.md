# DeactivateRSSFeed

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.RSSFeedController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated
**Keywords:** RSS Feed Maintain Update Remove

## Description

This Business Component method allows the user to set specified RSS Feed as inactive (the Active flag set to false).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | RSSFeedID | Integer | Yes | ID of the RSS Feed that will be deactivated. |

## Validations

- System checks if a record of the given RSSFeedID exists in the RSS_FEED table.

## System Processing

- System sets the Active flag to false in the RSS Feed record with provided ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RSS_FEED | ID | RSSFeedID |
|  | Active | Active flag will be set to false. |
