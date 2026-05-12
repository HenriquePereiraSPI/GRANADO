# EndCountDocument

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

The purpose of this Business Component is to end the count task:
 

This business component is called once the count task has been completed.
 

This business component returns a number of outputs. These outputs are a sum of all the count statuses of all inventory records underneath this document.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDocumentNumber | Char | Yes | Doucment to end count. |
| Output | Passed | Integer | No | No of items passed counting. |
| Input | Adjusted | Integer | No | No of items adjusted while counting. |
| Output | New | Integer | No | No of items still in new status . |
| Output | ReCount | Integer | No | No of items requiring recount. |
| Output | Moved | Integer | No | No of items not available in location |
| Output | InProgress | Integer | No | No of items with counting in progress |
| Output | Failed | Integer | No | No of items failed counting |

## Validations

System verifies that the Document Count Status is "In Progress" (CountStatus=3).

## System Processing

- If the current inventory shows that the products are no longer in inventory at Count End time, the corresponding rows with CountStatus "NEW" (1) are changed to "Move" (=11). 
- System changes the status of rows with status Passed or Adjusted: the status of these rows is changed to Completed. 
- The BC counts the number of rows in each status and outputs these results. 
- If the numbers of rows with status New and Recount are 0 then the status is set to Closed. 
- The WipOrder status is changed to "Completed" in order for the counting task not to appear in the task list after the end of count. 
- The counting locks are removed.

## History Recording in Production

History is created with information containing the document number and document status. The history conforms to the template defined in the XSD, FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController.CountDocument.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DOCUMENT | CountNumber | Inputted CountDocumentNumber |
|  | CountStatus | SEE SYSTEM PROCESSING |
| Values not stored in a DB table. Just passed as a BC output. | New | The number of rows with status New |
|  | ReCount | The number of rows with status Recount. |
|  | Failed | The number of rows with status Fail. |
|  | Moved | The number of rows with status Move |
|  | InProgress | The number of rows with status InProgress. |
|  | Passed | The number of rows with status Passed. |
|  | Adjusted | The number of rows with status Adjusted |
