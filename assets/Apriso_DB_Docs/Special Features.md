# Special Features

## Text Management

DELMIA Apriso enables multilingual data support through a structured approach. The system includes a TextID field in entities containing localized descriptions, which references the TEXT table. The TEXT_TRANSLATION table stores language-specific information with multiple text size options and the capacity to link icons and URLs.

## Text from SAP

Integrating SAP text requires mapping through a hierarchical structure:
- Entities connect to TEXT table records
- Multiple Text.Detail records exist per Text (one per SAP text type)
- Multiple Text_Detail_Translation records support each text line and language

## Time Zone Management

**General Areas:** "DELMIA Apriso persists data in most of the tables in UTC time and prompts/displays the data in the user time." The presentation layer manages conversions, while business components assume UTC inputs/outputs.

**Background Users:** Time zones for background processes can be overwritten in configuration files.

**ERP Downloads:** XML manager performs time conversion based on the external system's time zone, defined in configuration settings.

**Labor/Attendance Data:** These specialized tables persist both local and UTC times, though some tables like SCHEDULE store only local time.

## Table Triggers

Triggers cannot modify RowVersionStamp column values. The concurrency check engine exclusively controls this field through DELMIA Apriso components.
