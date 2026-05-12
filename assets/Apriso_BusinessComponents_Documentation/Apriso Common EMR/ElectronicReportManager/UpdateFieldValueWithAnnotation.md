# UpdateFieldValueWithAnnotation

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** UpdateFieldValueWithAnnotation, Update, Field, Value, Annotation

## Description

This Business Component method updates EMR Field value with annotation attached.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrFieldID | Integer | Yes | ID of the EMR Field to be updated. |
| Input | Annotation | Char | No | Added annotation. |
| Input | EmployeeNo | Char | Yes | Number of the Employee who added the annotation. |
| Input | Password | Char | Yes | Employee's password. |
| Input | UserReference | Char | No | User reference. |
| Input | StringValue | Char | No | String value. |
| Input | IntegerValue | Integer | No | Integer value. |
| Input | DecimalValue | Decimal | No | Decimal value. |
| Input | DateTimeValue | DateTime | No | DateTime value. |
| Input | BooleanValue | Boolean | No | Boolean value. |
| Output | OutputUnitID | Integer | No | Unit ID. |
| Output | UnitAnnotationID | Integer | No | Unit Annotation ID. |

## Validations

- System validates if the EMRField exists in the system. 
- System validates AllowEdit flag which is set for the specified EMR Field.

## System Processing

- System invokes CreateAnnotationWithSignature Business Component method to create annotation with signature for the EMR Record. 
- System updates EMR Field value. 
- System generates the EMR Record report according to the design template. 
- System returns Unit ID. 
- System returns new Unit Annotation ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | StringValue | StringValue |
|  | IntegerValue | IntegerValue |
|  | DecimalValue | DecimalValue |
|  | DateTimeValue | DateTimeValue |
|  | BooleanValue | BooleanValue |
|  | FormInstance |  |
| SIGNATURE_HEADER | ALL but FUID | UserReference |
|  | FUID | System generated. |
| SIGNATURE_DETAIL | ALL but FUID | UserReference |
|  | FUID | System generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System generated. |
