# CreateLotAndSerialForContainmentList

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is used to create Serials and Lots. It is dedicated for bulk operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductIDList | ListofInteger | Conditional | List of Product IDs. |
| Input | ProductNoList | ListofChar | Conditional | List of Products. |
| Input | SerialNoList | ListofChar | Conditional | List of Serials. |
| Input | LotNoList | ListofChar | Conditional | List of Lots. |
| Input | FacilityList | ListofChar | Conditional | List of Facilities. |
| Input | Mode | Integer | Yes | Indicates if non-existing Serials/Lots should be created. |
| Input | DeleteContainmentSessionData | Char | Yes | Indicates if Session Data should be removed. |
| Input | SessionFUID | Char | Conditional | Unique Session identifier. |
| Output | SessionFUID | Char | No | Created or reused Unique Session identifier. |
| Output | OutProductIDList | ListofChar | No | Output list of Product IDs. |
| Output | OutProductNoList | ListofChar | No | Output list of Products. |
| Output | OutSerialNoList | ListofChar | No | Output list of Serials. |
| Output | OutLotNoList | ListofChar | No | Output list of Lots. |
| Output | OutFacilityList | ListofChar | No | Output list of Facilities. |
| Output | OutStatusCodeList | ListofChar | No | Output list of Status Codes. |
| Output | OutStatusList | ListofInteger | No | Output list of Statuses. |

## Validations

- System checks if SessionFUID is provided. If it is not inputted the System validates if all input list parameters are of the same size.

## System Processing

System inserts the provided lists of Items (Serials or Lots) into the **CONTAINMENT_ITEM_TEMP** table if SessionFUID is not provided. This insert generates a new SessionFUID which is used to identify transferred data. **CONTAINMENT_ITEM_TEMP **table is used as temporary data storage. In the case when SessionFUID is provided the System does not use inputted lists (even when they are provided) and processes using data already present in the **CONTAINMENT_ITEM_TEMP** table. 
 

When data is transferred, the entire System processing is done on the server side (all validations and data manipulations).
 

The BC operates in two modes. When Mode is set to 0 then the System only checks the provided Serials and Lots to validate if their creation is possible. If Mode is set to 1 then any proper and missing item will be created. 
 

If ProductID value for an item is inputted the System omits ProductNo value.
 

If Facility is not set on an item then the default Facility is used. It is taken from the current context.
 

If DeleteContainmentSessionData parameter is set to True, the System deletes Session data from the database on exit from the BC. The temporary data can also be deleted using the **DeleteContainmentSessionData **Business Component.
 

The Transaction History is not generated during the BC execution. There is a dedicated BC (**WriteContainmentTransactionHistory**) which is used to generate Transaction History from the specified SessionFUID temporary data.
 

 

The output lists contain provided Serials and Lots (not necessarily in the same order) along with the corresponding Status values and Status Codes. The Status Codes are localized. The following Statuses and Status Codes are returned:
 
 
- 0 - No Lot and no Serial were provided. 
- 1 - Product does not exist. 
- 2 - Facility does not exist. 
- 3 - Product is not active. 
- 4 - Product is on hold. 
- 5 - Lot is on hold. 
- 6 - Product Lot tracking flag mismatch. 
- 7 - Product is not Serial tracked. 
- 8 - Item was validated (note that Serial/Lot already exists). 
- 9 - Item was validated (note that the same Lot already exists). 
- 10 - Item was validated (note that the same Serial already exists). 
- 11 - Item was validated (note that Lot must be created). 
- 12 - Item was validated (note that a Lot must be created and the same Serial already exists). 
- 13 - Item was validated (note that Serial must be created). 
- 14 - Item was validated (note that the same Lot already exists and Serial must be created). 
- 15 - Item was validated (note that Lot and Serial must be created). 
- 16 - Item was validated (note that the same Lot and Serial already exist). 
- 17 - Lot was created. 
- 18 - Serial was created. 
- 19 - Lot and Serial were created. 
- 20 - Lot was created but the same Serial already exists. 
- 21 - Serial was created but the same Lot already exists. 
- 22 - Lot is not active.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP | ProductID | Item from ProductIDList. |
|  | ProductNo | Item from ProductNoList. |
|  | SerialNo | Item from SerialNoList. |
|  | LotNo | Item from LotNoList. |
|  | Facility | Item from FacilityList. |
| SERIAL_NO | SerialNo | Item from SerialNoList. |
|  | ProductID | Item from ProductIDList. |
|  | LotNo | Item from LotNoList. |
| LOT_NO | LotNo | Item from LotNoList. |
|  | ProductID | Item from PartnerIDList. |
|  | Facility | Item from FacilityList. |
