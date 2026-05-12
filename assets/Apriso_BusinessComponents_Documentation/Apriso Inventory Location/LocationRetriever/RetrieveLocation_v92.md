# RetrieveLocation_v92

**Category:** Apriso/Inventory/Location
**Class:** `FlexNet.BusinessFacade.Inventory.LocationRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

The purpose of this component is to retrieve the location ID that contains an X, Y, Z position as inputted for the given facility.
 

 **Assumptions:** 
 
 
-  

Same referential (axes and origin) is used for all locations.
  
-  

Two corners positions are defined for each location.
  
-  

All the corner positions are defined in the same UOM.
  
-  

The first corner as smaller X and Y and Z that the second

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | Facility to retrieve warehouse location id for. |
| Input | PositionX | Decimal | No | Decimal, X coordinate of the warehouse location position. |
| Input | PositionY | Decimal | No | Decimal, Y coordinate of the warehouse location position. |
| Input | PositionZ | Decimal | No | Decimal, Z coordinate of the warehouse location position. |
| Input | UomCode | Char | No | Unit of measure of the specified coordinates. |
| Output | LocationID | Integer | No | Warehouse location id of the warehouse location for the specified coordinates. |

## Validations

- Validates that more than one active warehouse exists 
- Validate that warehouses with XCoordinate1 populated, also have UomCodeXcoordinate1 populated 
- Validate that input UOM exists.

## System Processing

- System converts the inputs in the location UOM of the facility retrieving a location of the facility with at least a corner defined and then using the convert UOM UCS 
- System retrieves first location that has: 
 
- Xcoordinate1 =< PositionX < Xcoordinate2 
- Ycoordinate1 =< PositionY < Ycoordinate2 
- Zcoordinate1 =< PositionZ < Zcoordinate2 
 
- System stops once he has found the first location or looks for all the locations of the facility.

## Pre-Conditions

Locations must be defined, position of the 2 corners of the location are defined.
