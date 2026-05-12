# UpdateFieldValue

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** UpdateFieldValueWithAnnotation, Update, Field, Value, Annotation

## Description

This Business Component method updates EMR Field for EMR Record that is marked for internal use. To update Field value for EMR Record please use UpdateFieldValueWithAnnotation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrFieldID | Integer | Yes | ID of the EMR Field to be updated. |
| Input | StringValue | Char | No | String value. |
| Input | IntegerValue | Integer | No | Integer value. |
| Input | DecimalValue | Decimal | No | Decimal value. |
| Input | DateTimeValue | DateTime | No | DateTime value. |
| Input | BooleanValue | Boolean | No | Boolean value. |

## Validations

- System validates if the EMR Field exists in the system. 
- System validates if the EMR Record associated with the provided EMR Field exists in the system. 
- System validates the InternalUse flag.

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
