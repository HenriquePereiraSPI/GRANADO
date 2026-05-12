# UnlinkResourceSerial

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.ResourceCreator`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

The purpose of this Business Component is to delete the specified linking records between resource and serial no.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceSerialNoID | Integer | Yes | ResourceSerialNo ID |

## Validations

System Validate the ResourceSerialNo with the inputted ResourceSerialNoID is exist.

## System Processing

System find the record with the ResourceSerialNoID and delete it.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_SERIAL_NO | All fields |  |
