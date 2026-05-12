# GetNotice

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Retrieves Notice properties.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | Notice ID. |
| Output | Name | Char | Yes | Notice name. |
| Output | Revision | Char | Yes | Notice revision. |
| Output | Type | Integer | Yes | Notice type. |
| Output | AcknowledgementType | Integer | Yes | Notice Acknowledgement type. |
| Output | LanguageIDList | ListofInteger | Yes | List of Notice language IDs. |
| Output | MessageList | ListofChar | Yes | List of Notice message HTMLs for each language. |
| Output | ConfirmationList | ListofChar | Yes | List of Notice confirmations for each language. |
| Output | ValidFromLocal | DateTime | Yes | The Notice will be displayed to the users beginning on this date. |
| Output | ValidToLocal | DateTime | Yes | The Notice will be displayed to the users until this date. |
| Output | Status | Integer | Yes | Notice status. |
| Output | ActiveDate | DateTime | Yes | Date when the Notice changed status to 2-Active. |
| Output | ActivatedBy | Char | Yes | Name of the user who changed the Notice's status to 2-Active. |
| Output | ClosedDate | DateTime | Yes | Date when the Notice changed status to 3-Closed. |
| Output | ClosedBy | Char | Yes | Name of the user who changed the Notice's status to 3-Closed. |
| Output | BlockLogin | Boolean | Yes | If set to true, the user is not allowed to continue until they acknowledge the Notice. |
| Output | CreatedBy | Char | Yes | Date when the Notice was created. |
| Output | CreatedOn | DateTime | Yes | Name of the user who created the Notice. |

## Validations

-  Validation fails if no record with the provided NoticeID exists in the NOTICE table.

## System Processing

-  System returns entries in the NOTICE and TEXT_TRANSLATION tables linked to the provided NoticeID.
