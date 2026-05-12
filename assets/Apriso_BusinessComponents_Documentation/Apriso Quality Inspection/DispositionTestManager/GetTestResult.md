# GetTestResult

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Retrieves test results for the specified Disposition Test (by DispositionTestID) or Disposition Test Sample (be DispositionTestSampleID).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Unique identifier of a Disposition Test for which the result is to be retrieved. |
| Input | DispositionTestSampleID | Integer | No | Unique identifier of a Disposition Test Sample for which the result is to be retrieved. |
| Output | ReadingIDs | ListofInteger | No | List of unique reading IDs for the specified Disposition Test. |
| Output | SequenceNos | ListofInteger | No | List of unique reading sequence numbers for the specified Disposition Test. |
| Output | Attributes | ListofChar | No | List of unique reading attribures for the specified Disposition Test. |
| Output | Values | ListofDecimal | No | List of unique reading values for the specified Disposition Test. |
| Output | Uoms | ListofChar | No | List of unique reading UOMs for the specified Disposition Test. |
| Output | Conformings | ListofBool | No | List of unique reading conforming informations for the specified Disposition Test. |
| Output | InspectorNOs | ListofChar | No | List of unique reading inspectors (inspector numbers) for the specified Disposition Test. |
| Output | InspectorIDs | ListofInteger | No | List of unique reading inspectors (inspector IDs) for the specified Disposition Test. |
| Output | Comments | ListofChar | No | List of unique reading descriptions for the specified Disposition Test. |
| Output | ResourceNames | Char | No | List of unique reading resource names for the specified Disposition Test. |
| Output | ResourceTypes | ListofInteger | No | List of unique reading resource types for the specified Disposition Test. |
| Output | ResourceIDs | ListofInteger | No | List of unique reading resources (resource IDs) for the specified Disposition Test. |
| Output | SerialNo | ListofChar | No | List of unique reading serial numbers for the specified Disposition Test. |
| Output | Containers | ListofChar | No | List of unique reading containers for the specified Disposition Test. |
| Output | LotNos | ListofChar | No | List of unique reading Lot numbers for the specified Disposition Test. |
| Output | SampleNos | ListofChar | No | List of unique reading sample numbers for the specified Disposition Test. |
| Output | ProductNos | ListofChar | No | List of unique reading product numbers for the specified Disposition Test. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table.

## System Processing

- System validates that the specified DispositionTestSmpleID matches the DispositionTestID. 
- For each active Disposition Reading (DISPOSITION_READING) defined for the inputted DispositionTestID or DispositionTestSampleID System performs the following logic: 
 
- System tetrieves employee (EMPLOYEE) based on DISPOSITION_READING.InspectorID. 
 
- If inspector is defined then inserts its ID into InspectorIDs output parameter and EMPLOYEE.EmployeeNo into InspectorNOs. 
- Else inserts an empty string into IspectorNOs 
 
- System retrieves resource (RESOURCE) based on DISPOSITON_READING.ResourceID: 
 
- If resource is defined then inserts RESOURCE.ResourceName into ResourceNames output parameter and RESOURCE.ResourceType into ResourceTypes. 
- Else inserts an empty string into ResourceNames and 0 into ResourceTypes 
 
- System retrieves product (PRODUCT) based on DISPOSITION_READING.ProductID: 
 
- If product is defined then inserts PRODUCT.ProductNo into ProductNOs output parameter. 
- Else inserts an empty string into ProductNOs 
 
- System inserts DISPOSITION_READING.ProductID into ProductIDs output parameter 
- System inserts DISPOSITION_READING.ID into ReadingIDs output pareamter. 
- System insertsDISPOSITION_READING.InspectorID into InspectorIDs output parameter. 
- System insertsDISPOSITION_READING.Comment into Comments output parameter. 
- System insertsDISPOSITION_READING.CollectedAttribute into Attributes output parameter. 
- System insertsDISPOSITION_READING.ReadingSequenceNo into SequenceNOs output parameter. 
- System insertsDISPOSITION_READING.UomCode into Uoms output parameter. 
- System insertsDISPOSITION_READING.Conforming into Conformings output parameter. 
- System insertsDISPOSITION_READING.CollectedValue into Values output parameter. 
- System insertsDISPOSITION_READING.SerialNo into SerialNo output parameter. 
- System insertsDISPOSITION_READING.Container into Containers output parameter. 
- System insertsDISPOSITION_READING.LotNo into LotNos output parameter. 
- System insertsDISPOSITION_READING.SampleNo into SampleNos output parameter.
