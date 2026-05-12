# UpdateDispositionTestAttribute

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestAttributeManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active
**Keywords:** Disposition Test Attribute

## Description

This method is used to update Disposition Test Attribute based on the parameters specified.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestAttributeID | Integer | Yes | ID of an existing Disposition Test Attribute record. |
| Input | Conforming | Boolean | Yes | Flag indicating it the disposition test attribute is conforming. |
| Input | DefectReasonCode | Char | No | Defect Reason Code that the Disposition Test Attribute is to be linked to. |
| Input | Description | Char | No | Description of the Disposition Test Attribute |
| Input | Group | Char | No | Group Name that the Disposition Test Attribute is to be linked to |
| Input | GroupType | Short | No | Group type. |
| Input | GroupClassID | Integer | No | Identifier of the Group Class. |

## Validations

- Disposition Test Attribute record exists in DISPOSITION_TEST_ATTRIBUTE table for the inputted DispositionTestAttributeID  
- Group record exists in GROUP_ table for the inputted Group, GroupType and GroupClassID 
- Reason Code exists in REASON_CODE table for the inputted DefectReasonCode and its type is 'Defect Code' (value of 25) 
- The status of Disposition Test is 'New' (value of 9). Disposition Test is retrieved based on DISPOSITION_TEST_ATTRIBUTE.DispositionTestID.

## System Processing

- System retrieves a record from DISPOSITION_TEST_ATTRIBUTE table. 
- System updates the retrieved record in DISPOSITION_ TEST table with the inputted parameters

## Pre-Conditions

Disposition Test Attribute must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_ATTRIBUTE | Conforming | Inputted Conforming |
|  | DefectReasonCode | Inputted DefectReasonCode or Null if not inputted |
|  | Group | Inputted Group if Group, GroupType and GroupClassID are specified; otherwise Null |
|  | GroupType | Inputted GroupType if Group, GroupType and GroupClassID are specified; otherwise Null |
|  | GroupClassID | Inputted GroupClassID if Group, GroupType and GroupClassID are specified; otherwise Null |
| TEXT_TRANSLATION | Medium | Inputted Description |
