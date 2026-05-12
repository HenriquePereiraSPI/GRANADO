# CreateNotice

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Creates a new Notice that will be displayed to the user upon logon.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Name | Char | Yes | Notice name. |
| Input | Revision | Char | Yes | Notice revision. |
| Input | Type | Integer | Yes | Notice type. It should be 1- Policy or 2- Information. |
| Output | NoticeID | Integer | Yes | Notice ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| AcknowledgeType | Integer | Notice Acknowledgement type. It should be 1-Once or 2-Always. |
| BlockLogin | Boolean | If set to true, the user cannot continue without acknowledging the fact of reading the Notice (checking the Confirmation check box) during login. |
| ConfirmationList | ListofChar | List of Notice confirmation texts for each language. |
| LanguageIDList | ListofInteger | List of Notice language IDs. |
| MessageList | ListofChar | List of Notice message HTMLs for each language. |
| ValidFromLocal | DateTime | The Notice will be displayed to the users beginning on this date. |
| ValidToLocal | DateTime | The Notice will be displayed to the users until this date. |

## Validations

- Validation fails if a Notice with the same name and revision already exists. 
- Validation fails in Notice Type is not in the range from -32768 to 32767. 
- Validation fails if AcknowledgeType is other than 1-Once or 2-Always.

## System Processing

- System adds a new entry in the 1-New status to the NOTICE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE | ID | New record ID. |
|  | Type | Notice type. |
|  | Name | Notice name. |
|  | Revision | Notice revision. |
|  | TextID | Reference to the TEXT table entry which holds the Notice's HTML message. |
|  | PolicyConfirmationTextID | Reference to the TEXT table entry which holds the Notice's confirmation HTML message. |
|  | AcknowledgeType | Notice Aknowledgement type. |
|  | ValidDateFromLocal | Notice validity start. |
|  | ValidDateToLocal | Notice validity end. |
|  | BlockLogin | If set to true, the user is not allowed to continue until they acknowledge the Notice. |
| TEXT | ID | Text entry which holds localizable content. |
| TEXT_TRANSLATION | Text | Confirmation message which will be displayed to the user. |
