# EndTransaction

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** EndTransaction, End, Transaction

## Description

This Business Component method cleans the session values in the EMR Context and sets transaction information to EMR Records.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
|  |  |  |  |  |

## Validations

- System validates if an EMR Header exists in the system.

## System Processing

- System retrieves all the EMR Records which are related to the EMR Header in the current transaction by the same transaction token in EMR Context. 
- System sets transaction time, transaction location and transaction time zone for each EMR Record. 
- System regenerates each EMR Record report. 
- System resets the session values in the EMR Context.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | CreateOn | Current UTC time |
|  | TransactionLocalTime | Current Local time |
|  | TransactionTimeZone | session value |
|  | TransactionLocation | session value(EmployeeContext.Facility) |
|  | FormInstance |  |
