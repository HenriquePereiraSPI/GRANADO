# MaintainRSSFeed

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.RSSFeedController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** RSS Feed Maintain Add Update Create

## Description

This Business Component method adds new RSS Feed record or updates the record if it exists.
 

Please note that on Oracle Database it is possible to create RSS feeds with names that differ in letter case, however not all RSS readers will be able to process such parameters therefore it is recommended to avoid such practices and maintain case sensitivity on both Oracle and MSSQL Database.
 

To specify extended properties of the RSS Feed, the user must create additional dynamic Inputs to the BC. The names (case sensitive) and types of possible dynamic Inputs are listed in 'Dynamic Inputs' section.
 

For the meaning of above mentioned Inputs, please read the specification under the following address:   http://validator.w3.org/feed/docs/rss2.html  . 
 

The flag ClearMissingDynamicInputs decides if existing extended properties of the RSS Feed are removed, if they are not provided as the BC Inputs.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FeedName | Char | Yes | The unique RSS feed name. |
| Input | FeedTitle | Char | Yes | The RSS feed title. |
| Input | FeedLink | Char | No | The RSS feed link. |
| Input | FeedDescription | Char | No | The RSS feed description. |
| Input | ClearMissingDynamicInputs | Boolean | Conditional | This flag is used when updating the existing RSS feed record. If this flag is set to true, all the extended properties that are already in the database will be removed and be entirely replaced with a new set of values from dynamic Inputs. If the flag is set to false, then the extended properties of the RSS feed will be updated with the set of values from the Dynamic Inputs. |
| Output | RSSFeedID | Integer | Yes | The ID of the created or updated RSS feed. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Language | Char | The language in which the channel is written. |
| Copyright | Char | The copyright notice for content in the channel. |
| ManagingEditor | Char | The email address for the person responsible for editorial content. |
| WebMaster | Char | The email address for the person responsible for technical issues relating to the channel. |
| PubDate | DateTime | The publication date for the content in the channel. |
| LastBuildDate | DateTime | The last time the content of the channel changed. |
| Category | Char | Specifies one or more categories to which the channel belongs. |
| Generator | Char | The string indicating the program used to generate the channel. |
| Docs | Char | The URL that points to the documentation for the format used in the RSS file. |
| Cloud | Char | Allows processes to register with a cloud to be notified of updates to the channel. |
| TTL | Integer | "Time to live." |
| Image | Char | Specifies a GIF, JPEG, or PNG image that can be displayed with the channel. |
| Rating | Char | The PICS rating for the channel. |
| TextInput | Char | Specifies a text input box that can be displayed with the channel. |
| SkipHours | Char | A hint for aggregators telling them which hours they can skip. |
| SkipDays | Char | A hint for aggregators telling them which days they can skip. |

## Validations

System checks if: 
 
 
- FeedName and FeedTitle are provided.  
- The dynamic Inputs (described above) have correct types.

## System Processing

- System checks if the RSS Feed record with the provided FeedName exists in the database. If the record exists, it will be updated. Otherwise a new record will be created. 
- System collects all dynamic Inputs added by the user and serializes them (in the XML format) to the Extension property of the RSS Feed. 
- System creates or updates the RSS Feed record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RSS_FEED | FeedName | FeedName |
|  | Title | FeedTitle |
|  | Link | FeedLink |
|  | Description | FeedDescription |
|  | Extension | Additional dynamic Inputs created by the user, serialized in XML format. |
