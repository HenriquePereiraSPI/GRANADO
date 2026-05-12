# CreateUnitForPartner

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this method is to generate or retrieve a UnitID for a given Partner. This UnitID can then be used to link characteristics to the given Partner.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PartnerID | Integer | Yes | The Partner to create the unit for. |
| Output | UnitID | Integer | No | Created Unit ID |

## Validations

System verifies that a Partner record is found for the inputted PartnerID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Partner record from PARTNER table using the input. 
- System checks if a UnitID is linked to this Partner: 
 
- if a UnitID is already linked to the Partner, then this UnitID is outputted. 
- else system generates a UnitID for this Partner: system creates a record in UNIT table and updates the PARTNER.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Partner exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PARTNER | ID | Inputted PartnerID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
