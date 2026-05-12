# MaintainOrderPartner

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to maintain the Order Partner Data. This Business Component allows releasing a Partner from an Order. This is done by setting the inputted Delete flag to TRUE. This business component also allows assigning uniquely a Partner of a given PartnerRole to an Order. To ensure that only one (1) partner of a given PartnerRole is assigned to an Order, set the Overwrite flag to TRUE.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No |  |
| Input | OrderType | Integer | No |  |
| Input | OrderLineNo | Integer | No |  |
| Input | PartnerID | Integer | No |  |
| Input | PartnerRole | Integer | No |  |
| Input | PartnerOrderNo | Char | No |  |
| Input | AddressID | Integer | No |  |
| Input | TextLong | Char | No |  |
| Input | LanguageID | Integer | No |  |

## Validations

- System validates that the Order Header, Order Detail (if order line entered) and Partner exist in the system. 
- If an AddressID is entered, system verifies that this address exists for the partner. 
- If TextLong is inputted, system checks that LanguageID is inputted as well. If not, system displays an error message.

## System Processing

- Based on the input (whether or not order line is entered) and Partner information, system retrieves a record in the ORDER_PARTNER table: 
 
- If inputs include OrderNo + OrderType + PartnerID + PartnerRole, system retrieves the partner linked to the Order. 
- If inputs include OrderNo + OrderType + OrderLineNo + PartnerID + PartnerRole, system retrieves the partner linked to the Order Line. 
 
- If inputted Delete flag is set to TRUE, system deletes the record. 
- If the inputted Delete flag is set to FALSE: 
 
- System updates the inputted PartnerOrderNo, and AddressID of the retrieved record in ORDER_PARTNER table. 
- If TextLong is inputted (with LanguageID), system updates the Partner text if a record already exists in TEXT_TRANSLATION, else it creates a new record in TEXT_TRANSLATION. 
 
- The Overwrite Flag means that only one record can exist for a given partnerRole. If the Overwrite flag is set to TRUE, system overwrites the existing Partner connected to the Order/OrderLine with the same Partner Role as the one entered. System generates an error if multiple Partners are defined for this given PartnerRole. A simple insert is done if no Partner is found with this Partner Role.

## Pre-Conditions

- An order must exist. 
- A partner must exist. 
- The partner must already be assigned to the order.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_PARTNER | OrderNo | Inputted OrderNo (Required) |
| ORDER_PARTNER | OrderType | Inputted OrderType (Required) |
| ORDER_PARTNER | OrderLineNo | Inputted OrderLineNo |
| ORDER_PARTNER | PartnerID | Inputted PartnerID (Required) |
| ORDER_PARTNER | ParnerRole | Inputted ParnerRole (Required) |
| ORDER_PARTNER | PartnerOrderNo | PartnerOrderNo |
| ORDER_PARTNER | AddressID | Inputted AddressID |
| ORDER_PARTNER | TextID | TEXT_TRANSLATION.ID |
| TEXT_TRANSLATION | ID | System generated unique identifier for Text |
| TEXT_TRANSLATION | Extended | Inputted TextLong -Text to be stored for the Partner |
| TEXT_TRANSLATION | LanguageID | Inputted LanguageID -Language of the text (required if TextLong is inputted) |
