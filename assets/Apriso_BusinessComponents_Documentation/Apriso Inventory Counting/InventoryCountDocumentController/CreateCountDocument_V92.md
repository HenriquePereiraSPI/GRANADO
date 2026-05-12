# CreateCountDocument_V92

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This method is used to create count documents. The document can be created at any location level such as Facility, Warehouse, Zone and WarehouseLocation or a inventory attribute defined by ProductID , GradeID etc.
 Based on count definition the documents will be created per location or just one document.
 

In CreateCountDocument_v92, if the WipOrder is provided then it is updated in all count documents that are created. If the WipOrder is not inputted then the component generates a WipOrder for each of the document created.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility where the counting is to perfomed. |
| Input | ProductID | Integer | No | Product to be counted. |
| Input | GradeID | Integer | No | GradeID of the product to be counted. |
| Input | PartnerID | Integer | No | PartnerID of the product to be counted. |
| Input | InventoryStatus | Integer | No | InventoryStatus of the product to be counted. |
| Input | LotNumber | Char | No | LotNo of the product to be counted. |
| Input | WarehouseLocationID | Integer | No | Warehouse Location to be counted. |
| Input | ZoneNumber | Char | No | Zone to be counted. |
| Input | Warehouse | Char | No | Warehouse to be counted. |
| Input | CountType | Integer | No | Type of count. |
| Input | CountDefinitionID | Integer | No | The count definition ID. |
| Input | Comment | Char | No | The comment for the count document. |
| Input | WipOrderNo | Char | No | Wip Order Number to associate count document with. |
| Input | WipOrderType | Integer | No | WipOrderType of the order with which the count document is associated. |
| Output | CountDocumentNumber | Char | No | Output count document number. |

## Validations

- System validates that all mandatory inputs are populated. 
- System validates that the inputs are compliant with the COUNT_DOCUMENT table constraints; the possible inputs are: 
 
- Case A: A ProductID (With or without GradeID, InventoryStatus and PartnerID) + WarehouseLocationID, or 
- Case A1: A ProductID (With or without GradeID, InventoryStatus and PartnerID) + Facility or Zone or Warehouse, or 
- Case B: A ProductID (With or without GradeID, InventoryStatus and PartnerID) with no Location information, or 
- Case C: No ProductID but a location (Facility, Zone, Warehouse and/or WarehouselocationID). 
 
- User can enter more than one location entities (location, Warehouse&ldots;). 
- System checks the consistency of the inputs: the inputted zone must belong to the inputted warehouse, and the inputted location must belong to the inputted warehouse. 
- The requirement for the counting can be more detailed than ProductID. It can restrict the counting to a Grade, a Status, or a PartnerID. It is possible for the user to generate a counting document for a single Partner or a single Status. 
- Counting document numbering is sequence facility dependant and is unique for a facility in the DB.

## System Processing

- If validation is not successful, then the system generates comprehensive error message. 
- If validation is successful the system populates the COUNT_DOCUMENT table. 
- The system generates as many counting documents as required based on the inputted Products, Locations and Count Task Level (CountTaskLevel retrieved from inputted CountDefinitionID). 
 

 

            

 **Input Case** 
   

 **Inputted Location** 
   

 **Inputted** 
 

 **Product** 
   

 **Count Task Level** 
   

 **Number of Count Docs generated** 
       

A
   

WarehouseLocationID
   

ProductID
   

Any
   

1 Doc per product and warehouse location
     

A1
   

Zone or Warehouse or Facility
   

ProductID
   

1
   

1 Doc per inputted ProductID and per WarehouseLocationID contained in the inputted location
     

A1
   

Zone or Warehouse or Facility
   

ProductID
   

2
   

1 Doc per ProductID and per inputted location
     

B
   

None
   

ProductID
   

1
   

1 Doc per WarehouseLocation where ProductID can be found
     

B
   

None
   

ProductID
   

2
   

1 Doc per Location where ProductID can be found
     

C
   

WarehouseLocationID
   

None
   

Any
   

1 Doc per Warehouse Location
     

C
   

Zone or Warehouse or Facility
   

None
   

1
   

1 document per WarehouseLocationID contained in the inputted location
     

C
   

Zone or Warehouse or Facility
   

None
   

2
   

1 Doc per inputted location
     
 

 

 **Note**: The requirement for the counting can be more detailed than the ProductID. It can restrict the counting to a GradeID, an InventoryStatus, or a PartnerID of a ProductID.
 

It is for example possible for the user to generate a counting document for a single partner or a single status.
 
 
-  The system generates for each created Count Document a count document number (CountDocumentNumber). This number is automatically generated from the sequence &rdquor;CountingDocument" and is facility-dependent. The output of this BC is the generated CountDocumentNumber(s). 
-  If the WipOrder is provided then it is updated in all count documents that are created. If the WipOrder is not inputted then the component generates a WipOrder for each of the document created.

## History Recording in Production

History is created with information containing the document number, the criteria used for counting and the wiporder created for counting task. The history conforms to the template defined in the XSD, FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController.CountDocument.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DOCUMENT | DocumentNumber | Outputted CountDocumentNumber |
|  | Facility | Inputted Facility |
|  | Warehouse | Inputted Warehouse |
|  | ProductID | Inputted ProductID |
|  | GradeID | Inputted GradeID |
|  | PartnerID | Inputted PartnerID |
|  | WipOrderNo | Inputted WipOrderNo or Generated |
|  | WipOrderType | Inputted WipOrderType or Type InventoryCount |
|  | InventoryStatus | Inputted InventoryStatus |
|  | WarehouseLocationID | Inputted WarehouseLocationID, or else the system generates rows for all the WarehouseLocationIDs of the inputted location (Zone, Warehouse or Facility, if any), orElse Null |
|  | Zone | Inputted ZoneNumber, orElse the system retrieves the Zone linked with the inputted WarehousLocationID (if any) in the WAREHOUSE_LOCATION table, or Else Null |
|  | Warehouse | Inputted Warehouse, orElse if WarehouseLocationID is inputted then retrieve Warehouse from the WAREHOUSE_LOCATION table |
|  | CountType | Inputted CountType |
|  | CountDefinition | Inputted CountDefinitionID |
|  | CountNumber | 0 |
|  | TextID | TEXT.ID |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | TextMedium | Inputted Comment |
