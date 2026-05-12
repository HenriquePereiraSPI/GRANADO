# InsertPartnerProduct

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PartnerProductRelationController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Partner Product Number ProductNo External Insert

## Description

This Business Component method assigns an external Product Number (used by a Partner) to the DELMIA Apriso Product. Such assignment may be used to exchange data with other systems. This method populates the PARTNER_PRODUCT table using input values.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PartnerID | Integer | Yes | Partner ID. |
| Input | PartnerProductNo | Char | Yes | Product Number used in Partner's system. |
| Input | PartnerGrade | Char | No | Partner Grade. |
| Input | ProductID | Integer | Yes | ID of Product in DELMIA Apriso. |
| Input | Facility | Char | No | Facility. |
| Input | GradeID | Integer | No | Grade ID. |
| Input | ExternalProductType | Short | No | External Product Type. |
| Input | ExternalUomCode | Char | No | External unit of measure code. |
| Input | PreferenceRank | Integer | No | Preference Rank. |
| Input | Description | Char | No | User description. |
| Output | ID | Integer | Yes | ID of created record. |

## Validations

- System validates if record for PartnerID exits in PARTNER table. 
- System validates if ProductID exists in PRODUCT table. 
- System validates if PartnerProductNo is provided. 
- System validates if Facility exists in FACILITY table when it is provided. 
- System validates if GradeID exists in GRADE table when it is provided. 
- System validates if ExternalProductType exists in EXTERNAL_PRODUCT_TYPE table when it is provided. 
- System validates if ExternalUomCode exists in UOM table when it is provided.

## System Processing

System creates a record in the PARTNER_PRODUCT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ID | ID of the created record. |
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
