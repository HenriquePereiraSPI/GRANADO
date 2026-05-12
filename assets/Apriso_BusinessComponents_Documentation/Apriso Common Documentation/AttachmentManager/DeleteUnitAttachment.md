# DeleteUnitAttachment

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Common.AttachmentManager`
**Assembly:** `FlexNet.BusinessFacade.Common`
**Status:** Active
**Keywords:** attachment, link, unit, unlink, delete

## Description

The purpose of this Business Component method is to remove a link between an Attachment and a Unit. The method deletes an existing record from the UNIT_ATTACHMENT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitAttachmentID | Integer | Yes | The ID of the record to be deleted. |

## Validations

- The system validates that the provided UnitAttachmentID exists.

## System Processing

- The system deletes the record from the UNIT_ATTACHMENT table based on the provided UnitAttachmentID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_ATTACHMENT | ID | UnitAttachmentID |
