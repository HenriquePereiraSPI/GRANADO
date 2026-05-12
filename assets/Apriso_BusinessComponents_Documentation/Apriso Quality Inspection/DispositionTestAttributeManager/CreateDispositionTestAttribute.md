# CreateDispositionTestAttribute

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestAttributeManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Creates disposition test attribute for the inputs specified.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Reference to Disposition Test record for which the attribute is to be created. |
| Input | Attribute | Char | No | Value of the attribute. |
| Input | Description | Char | No | Medium level description of the attribute. |
| Input | Group | Char | No | Unique identifier of a group of attributes the one being created is assigned to. |
| Input | GroupType | Integer | No | Unique identifier of a group type of attributes the one being created is assigned to. NULL if less or equal 0. |
| Input | GroupClassID | Integer | No | Unique identifier of a group class of attributes the one being created is assigned to. NULL if less or equal 0. |
| Input | DefectReasonCode | Char | No | Defect Code of the quality defect to be created when the characteristic is inspected and the test results is equal to the current attribute. |
| Input | Conforming | Boolean | Yes | Flag indicating if the value of the attribute is conforming to the specification. |
| Output | DispositionTestAttributeID | Integer | No | Unique identifier of the newly created attribute. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- Group, GroupType and GroupClassID must exist in GROUP table. 
- DefectReasonCode must exist in REASON_CODE table.

## System Processing

- Validates that the Disposition Test status is 'New' (DISPOSITION_TEST_STATUS). 
- Validates that the Disposition Test Characteristic is of 'Attribute' type (CHARACTERISTIC_TYPE - value of 1). 
- Validates that the Disposition Test Attribute record doesn't exist for the inputted DispositionTestID and Attribute. 
- If DefectReasonCode is specified then its type is being set to 'DefectCode' (REASON_TYPE - value of 25). 
- Creates a record in DISPOSITION_TEST_ATTRIBUTE table and populates it with the inputted parameters.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_ATTRIBUTE | DispositionTestID | Inputted DispositionTestID |
|  | Attribute | Inputted Attribute |
|  | Conforming | Inputted Conforming |
|  | Group | Inputted Group or NULL if Group, GroupType or GroupClassID are not specified |
|  | GroupType | Inputted GroupType or NULL if Group, GroupType or GroupClassID are not specified |
|  | GroupClassID | Inputted GroupClassID or NULL if Group, GroupType or GroupClassID are not specified |
|  | DefectReasonCode | Inputted DefectReasonCode or NULL if not specified |
| TEXT_TRANSLATION | Medium | Inputted Description |
