# CreateLabelContent

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Common.LabelContentController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

Creates a Label Content record based on the input parameters.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LabelNumber | Char | Yes | The label number. |
| Input | ParentLabelID | Integer | No | The parent label ID. |
| Input | ReportClassId | Integer | No | The report class ID. |
| Input | ReportID | Integer | No | The report ID. |
| Input | ParentID | Integer | No | The parent ID. |
| Input | ParentAddressID | Integer | No | The parent address ID. |
| Input | Facility | Char | No | The Facility number. |
| Input | Container | Char | No | The Container number. |
| Input | SerialNo | Char | No | The serial number. |
| Input | LotNo | Char | No | The lot number. |
| Input | ProductId | Integer | No | The product ID. |
| Input | Quantity | Decimal | No | The quantity. |
| Input | UomCode | Char | No | The UOM Code |
| Input | ProductionDate | DateTime | No | The production date/time stamp. |
| Input | DispatchDate | DateTime | No | The dispatch date. |
| Input | ExpirationDate | DateTime | No | The expiration date. |
| Input | LabelStatus | Integer | Yes | The label status. |
| Input | UnitId | Integer | No | The unit ID. |
| Input | LanguageId | Integer | No | The language ID. |
| Input | OrderNo | Char | No | The order number. |
| Input | OrderLineNo | Char | No | The order line number. |
| Input | OrderType | Integer | No | The order type. |
| Input | PackagingInstructionId | Integer | No | The packaging instruction ID. |
| Input | GrossWeight | Decimal | No | The gross weight. |
| Input | NetWeight | Decimal | No | The net weight. |
| Input | WeightUomCode | Char | No | The weight UOM Code. |
| Input | NumberOfUnits | Integer | No | The number of units. |
| Input | UserField1 | Char | No | A user-defined field. |
| Input | UserField2 | Char | No | A user-defined field. |
| Input | UserField3 | Char | No | A user-defined field. |
| Input | UserField4 | Char | No | A user-defined field. |
| Input | UserField5 | Char | No | A user-defined field. |
| Input | UserField6 | Char | No | A user-defined field. |
| Input | UserField7 | Char | No | A user-defined field. |
| Input | UserField8 | Char | No | A user-defined field. |
| Input | UserField9 | Char | No | A user-defined field. |
| Input | UserField10 | Char | No | A user-defined field. |
| Input | UserField11 | Char | No | A user-defined field. |
| Input | UserField12 | Char | No | A user-defined field. |
| Input | UserField13 | Char | No | A user-defined field. |
| Input | UserField14 | Char | No | A user-defined field. |
| Input | UserField15 | Char | No | A user-defined field. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReportClassName | Char | The name of report class. |
| ReportFUID | Char | The FUID of report. |

## Validations

- If ReportClassName not found, ReportClassID is a valid ID in the REPORT_CLASS table. If ReportClassID is 0 then NULL value is set. 
- If ReportFUID not found, ReportID is a valid ID in the REPORT table. If ReportID is 0 then NULL value is set.

## System Processing

- The system creates a record in the LABEL_CONTENT table and returns the ID of the created record

## Pre-Conditions

Creates a new record in the LABEL_CONTENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | LabelNumber | Copied from the LabelNumber input parameter. |
|  | ParentLabelID | Copied from the ParentLabelID input parameter. |
|  | ReportClassName | Copied from the ReportClassName input parameter. |
|  | ReportFUID | Copied from the ReportFUID input parameter. |
|  | PartnerID | Copied from the PartnerID input parameter. |
|  | PartnerAddressID | Copied from the PartnerAddressID input parameter. |
|  | Facility | Copied from the Facility input parameter. |
|  | Container | Copied from the Container input parameter. |
|  | SerialNo | Copied from the SerialNo input parameter. |
|  | LotNo | Copied from the LotNo input parameter. |
|  | ProductID | Copied from the ProductId input parameter. |
|  | Quantity | Copied from the Quantity input parameter. |
|  | UomCode | Copied from the UomCode input parameter. |
|  | ProductionDate | Copied from the ProductionDate input parameter. |
|  | DispatchDate | Copied from the DispatchDate input parameter. |
|  | ExpirationDate | Copied from the ExpirationDate input parameter. |
|  | LabelStatus | Copied from the LabelStatus input parameter. |
|  | UnitID | Copied from the UnitId input parameter. |
|  | LanguageID | Copied from the LanguageId input parameter. |
|  | OrderNo | Copied from the OrderNo input parameter. |
|  | OrderType | Copied from the OrderType input parameter. |
|  | OrderLineNo | Copied from the OrderLineNo input parameter. |
|  | PackagingInstructionID | Copied from the PackagingInstructionId input parameter. |
|  | GrossWeight | Copied from the GrossWeight input parameter. |
|  | NetWeight | Copied from the NetWeight input parameter. |
|  | WeightUomCode | Copied from the WeightUomCode input parameter. |
|  | NumberOfUnits | Copied from the NumberOfUnits input parameter. |
|  | UserField1 | Copied from the UserField1 input parameter. |
|  | UserField2 | Copied from the UserField2 input parameter. |
|  | UserField3 | Copied from the UserField3 input parameter. |
|  | UserField4 | Copied from the UserField4 input parameter. |
|  | UserField5 | Copied from the UserField5 input parameter. |
|  | UserField6 | Copied from the UserField6 input parameter. |
|  | UserField7 | Copied from the UserField7 input parameter. |
|  | UserField8 | Copied from the UserField8 input parameter. |
|  | UserField9 | Copied from the UserField9 input parameter. |
|  | UserField10 | Copied from the UserField10 input parameter. |
|  | UserField11 | Copied from the UserField11 input parameter. |
|  | UserField12 | Copied from the UserField12 input parameter. |
|  | UserField13 | Copied from the UserField13 input parameter. |
|  | UserField14 | Copied from the UserField14 input parameter. |
|  | UserField15 | Copied from the UserField15 input parameter. |
