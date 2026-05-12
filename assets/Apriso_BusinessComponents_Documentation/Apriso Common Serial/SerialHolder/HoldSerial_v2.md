# HoldSerial_v2

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Common.SerialHolder`
**Assembly:** `FlexNet.BusinessFacade`
**Status:** Deprecated

## Description

The purpose of this Business Component is to place a serial on hold. Depending on the input, multiple hold may be placed on a serial at any one time. The method is extension of the existing method HoldSerial_v94 with additional features to use the component from Containment module:
 
 
- Keep track of the ContainmentID in the Serial Hold record. 
- Put On Hold the parent items in Geneology if required. 
- Put On Hold the child items in Geneology if required. 
 

The unique key for the Serial Hold is SerialNo, ProductID, ReasonCode, ContainmentID, GenealogySerialHoldID or GenealogyLotHoldID, where ContainmentID, GenealogySerialHoldID and GenealogyLotHoldID can be null. This is tallow multiple hold for the same reason code in different containments or hold caused by a parent or child and other such combinations.
 

The purpose of this Business Component is to place a serial on hold. Depending on the input, multiple hold may be placed on a serial at any one time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | ProductID of the item to put on Hold |
| Input | SerialNo | Char | Yes | Serial Number of the item to put on Hold |
| Input | HoldReasonCode | Char | Yes | Reason code for the hold |
| Input | AllowMultipleHolds | Boolean | Yes | To indicate that if there can be multiple hold on serial when the unique key is satisfied. If false only one Hold can exist for the serial. |
| Input | Comment | Char | No | To add information regarding the hold |
| Input | LanguageID | Integer | No | Language in which to store the comment |
| Input | ContainmentID | Integer | No | ID of the Containment |
| Input | HoldParent | Boolean | No | To indicate if the parent items is be put on Hold recursively. |
| Input | HoldChild | Boolean | No | To indicate if the Child items is to be put on Hold recursively. |
| Input | ReleaseAfterDate | DateTime | No | To indicate the earliest date when system may automatically remove this hold |
| Input | ReleaseAfterDateDefined | Boolean | No | If false, ReleaseAfterDate input is ignored. |
| Output | SerialNoHoldID | Integer | No | ID of the Serial Hold Record |

## Validations

- System validates that the inputted ProductID and SerialNo are valid in the System. 
- System validates that the inputted ReasonCode is of a Hold Reason Type. 
- System validates that the serial may be placed on hold.

## System Processing

- System checks if more than one Hold is allowed for the Serial: 
 
- If not (i.e if inputted AllowMultipleHolds.= FALSE), system checks to see if the Serial is already on Hold, by searching for a Hold Reason Code for that Serial: 
 
- If not, system places the Serial on Hold with the entered reason code. A new record is generated for in the SERIAL_NO_HOLD table. 
- If yes, system returns an error message. 
 
- If more than one Hold is allowed, system checks to see if the inputted Hold ReasonCode already exists for the Serial: 
 
- If not, system places the Serial on Hold with the entered reason code. A new record is generated for in the SERIAL_NO_HOLD table. 
- If yes, system succeeds. 
 
 
- System records the transaction history each time a new record is created in the SERIAL_NO_HOLD table. 
- If comment is inputted, the system will persist this value in the TEXT_TRANSLATION table for the corresponding SERIAL_NO_HOLD.TextID 
- The Containment ID if input is validated by checking if the Containment exists. If the item is not in containment then it shows an error. In the Serial Hold record the input ContainmentID is set (only for the input serial). 
- If the HoldParent is true then the parents of the input item are also put on hold recursively. In the SERIAL_NO_HOLD record of the parents, the ChildHold is set to true to indicate that the item was put on hold by child and GenealogySerialHoldID or GenealogyLotHoldID holds the link to hold record of the input Serial which caused the hold. 
- If the HoldChild is true then the children of the input item are also put on hold recursively. In the SERIAL_NO_HOLD record of the children, the ParentHold is set to true to indicate that the item was put on hold by parent and GenealogySerialHoldID or GenealogyLotHoldID holds the link to hold record of the input Serial which caused the hold. 
- If the ReleaseAfterDate is specified then this value is stored in ReleaseAfterDate field of the SERIAL_NO_HOLD table. The comment is stored in CONTAINMENT_SERIAL_NO.Comment and the TEXT_TRANSLATION associated with SERIAL_NO_HOLD. The ContainmentID is set in the SERIAL_NO_HOLD.ContainmentID.

## Pre-Conditions

- Product, Serial and reason code must exist. 
- Reason code must be of type 'Hold'.

## History Recording in Production

Following optional information is added to the history.
 
 
- Comment 
- Parent LotN 
- Parent SerialNo 
- Child LotNo 
- Child SerialNo 
- Containment Name

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO_HOLD | ProductID | Inputted ProductID |
|  | SerialNo | Inputted SerialNo |
|  | ReasonCode | Inputted HoldReasonCode |
