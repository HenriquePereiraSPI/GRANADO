# UpdatePartnerProduct

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PartnerProductRelationController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Partner Product Number ProductNo External Update

## Description

This Business Component method updates a record in the PARTNER_PRODUCT table using input values. The table is used to assigns an external Product Number (used by a Partner) to the DELMIA Apriso Product. Such assignment may be used to exchange data with other systems.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PartnerProductID | Integer | Yes | ID of a record in the PARTNER_PRODUCT table to be updated. |
| Input | PartnerID | Integer | Conditional | Partner ID. |
| Input | PartnerProductNo | Char | Conditional | Product Number used in the Partner's system. |
| Input | PartnerGrade | Char | No | Partner Grade. |
| Input | ProductID | Integer | Conditional | ID of Product in DELMIA Apriso. |
| Input | Facility | Char | No | Facility. |
| Input | GradeID | Integer | No | Grade ID. |
| Input | ExternalProductType | Short | No | External Product Type. |
| Input | ExternalUomCode | Char | No | External unit of measure code. |
| Input | PreferenceRank | Integer | No | Preference Rank. |
| Input | Description | Char | No | User description. |
| Input | OverwriteOnlySpecifiedParameters | Boolean | Yes | The flag indicates which columns will be updated: all columns or only the specified ones. |

## Validations

- System validates if a record to update exists in the PARTNER_PRODUCT table. 
- System validates if any changes are required.  
- If OvewriteOnlySpecifiedParameters flag is false then system validates if: 
 
- PartnerID is provided and exists in the PARTNER table. 
- ProductID is provided and exists in the PRODUCT table. 
- PartnerProductNo is provided. 
 
- If OverwriteOnlySpecifiedParameters flag is true then system validates if: 
 
- PartnerID exists in the PARTNER table if it is provided. 
- ProductID exists in the PRODUCT table if it is provided. 
 
- System validates if: 
 
- Facility exists in the FACILITY table if it is provided. 
- GradeID exists in the GRADE table if it is provided. 
- ExternalProductType exists in the EXTERNAL_PRODUCT_TYPE table if it is provided. 
- ExternalUomCode exists in the UOM table if it is provided.

## System Processing

System updates a record in the PARTNER_PRODUCT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ID | PartnerProductID; ID of the record to be updated. |
|  | PartnerID | PartnerID, link to the PARTNER table. |
|  | PartnerProductNo | PartnerProductNo |
|  | PartnerGrade | PartnerGrade |
|  | ProductID | ProductID, link to the PRODUCT table. |
|  | Facility | Facility, link to the FACILITY table. |
|  | GradeID | GradeID, link to the GRADE table. |
|  | ExternalProductType | ExternalProductType, link to the EXTERNAL_PRODUCT_TYPE table. |
|  | ExternalUomCode | ExternalUomCode, link to the UOM table. |
|  | PreferenceRank | PreferenceRank |
| TEXT_TRANSLATION | Extended | Description |
