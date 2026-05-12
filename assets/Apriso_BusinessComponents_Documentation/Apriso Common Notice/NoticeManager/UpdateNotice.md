# UpdateNotice

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice Login

## Description

Updates properties of a Notice.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | ID of the Notice to be updated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| AcknowledgeType | Integer | Notice Acknowledgement type. It should be 1-Once or 2-Always. |
| BlockLogin | Boolean | If set to true, the user cannot continue the login process without acknowledging the Notice (by checking the Confirmation check box). |
| ConfirmationList | ListofChar | List of Notice confirmation texts for each language. |
| LanguageIDList | ListofInteger | List of Notice language IDs. |
| MessageList | ListofChar | List of Notice message HTMLs for each language. |
| ValidFromLocal | DateTime | The Notice will be displayed to the users beginning on this date. |
| ValidToLocal | DateTime | The Notice will be displayed to the users until this date. |

## Validations

- Validation fails if the Notice is in the 3-Closed status.  
- Validation fails if AcknowledgeType other than 1-Once or 2-Always.

## System Processing

- System updates the entries in the NOTICE, TEXT, and TEXT_TRANSLATION tables corresponding to the provided NoticeID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE | TextID | Reference to the TEXT table entry which holds the Notice's HTML message. |
|  | PolicyConfirmationTextID | Reference to the TEXT table entry which holds the Notice's confirmation HTML message. |
|  | AcknowledgeType | Notice Acknowledgement type. |
|  | ValidDateFromLocal | The start time of the Notice display to the user. |
|  | ValidDateToLocal | The end time of the Notice display to the user. |
|  | BlockLogin | If set to true, the user is not allowed to continue until they acknowledge the Notice. |
| TEXT | ID | Text entry which holds localizable content. |
| TEXT_TRANSLATION | Text | Confirmation and Message texts which will be displayed to the user. |
