# UpdateRecordFieldValue

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** UpdateRecordFieldValue, Update, Record, Field, Value

## Description

This Business Component method updates EMR Field for EMR Record that is marked for internal use by specifying EMR Record and Field name.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of the EMR Record associated with the updated Field. |
| Input | FieldName | Char | Yes | Name of the EMR Field to be updated. |
| Input | StringValue | Char | No | String value. |
| Input | IntegerValue | Integer | No | Integer value. |
| Input | DecimalValue | Decimal | No | Decimal value. |
| Input | DateTimeValue | DateTime | No | DateTime value. |
| Input | BooleanValue | Boolean | No | Boolean value. |

## Validations

- System validates if EMR Record exists in the system. 
- System validates InternalUse flag. 
- System validates if EMR Field exists in the system.

## System Processing

- System updates EMR Field value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_FIELD | StringValue | StringValue |
|  | IntegerValue | IntegerValue |
|  | DecimalValue | DecimalValue |
|  | DateTimeValue | DateTimeValue |
|  | BooleanValue | BooleanValue |
