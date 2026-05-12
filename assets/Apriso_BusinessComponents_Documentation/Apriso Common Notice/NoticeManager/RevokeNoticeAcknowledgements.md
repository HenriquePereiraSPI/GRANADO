# RevokeNoticeAcknowledgements

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Voids a previously acknowledged Notice. If a Notice Acknowledgement is voided, the Employee will have to acknowledge the Notice again.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AcknowledgementIDList | ListofInteger | Yes | IDs of Notice Acknowledgements to be voided. |

## System Processing

- For every Acknowledgement from the AcknowledgementIDList, the Voided column is set to true.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE_ACKNOWLEDGEMENT | Voided | Indicates if an Acknowledgement was voided. |
