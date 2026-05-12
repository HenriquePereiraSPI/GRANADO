# DeleteEMR

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** DeleteEMR, Delete, EMR

## Description

This Business Component method deletes an EMR Header record and all the associated EMR Record records and EMR Field records with specified EMR Header ID or EMR Header No.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Conditional | ID of the EMR Header to be deleted. |
| Input | EmrHeaderNo | Char | Conditional | Name of the EMR Header to be deleted. |

## Validations

- Validates if EmrHeaderID or EmrHeaderNo exists in the system.

## System Processing

- Deletes a specified EMR Header record and all the associated EMR Record records and EMR Field records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | All Fields | EmrHeaderID, EmrHeaderNo |
| EMR_RECORD | All Fields | EmrHeaderID, EmrHeaderNo |
| EMR_FIELD | All Fields | EmrHeaderID, EmrHeaderNo |
