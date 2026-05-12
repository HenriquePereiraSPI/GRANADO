# ManageWeighHeader

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Header Create Update Manage

## Description

This method creates or updates a Weigh Header record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WeighHeaderID | Integer | No | ID of existing Weigh Header record. If provided, the record is updated. |
| Input | GroupNo | Char | Conditional | The Weigh Group number, required for new record. |
| Output | CreatedWeighHeaderID | Integer | Yes | ID of a created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Description | Char | Description of the Group. |
| EmployeeID | Integer | Employee assigned to the Group. |
| SkillID | Integer | Employee Skill ID. |
| ScaleStationID | Integer | Resource ID of the Scale Station. |
| CheckListGroup | Char | Check List group. |
| CheckListGroupType | Integer | Check List group type. |
| CheckListGroupClassID | Integer | Check List group class ID. |
| SafetyInstrGroup | Char | Safety Instructions group. |
| SafetyInstrGroupType | Integer | Safety Instructions group type. |
| SafetyInstrGroupClassID | Integer | Safety Instructions group class ID. |
| LotNo | Char | Lot number. |
| ProductID | Integer | ID of the Product. |
| Quantity | Decimal | Required quantity of the Product. |
| UomCode | Char | Unit of measure of the quantity. |
| WipOrderNo | Char | WIP Order Number. |
| WipOrderType | Integer | WIP Order Type. |
| OprSequenceNo | Char | Operation Sequence Number. |
| UserReference | Char | Field for user reference. |
| DocumentURL | Char | URL of document describing the Group. |
| SignatureRequired | Boolean | Indicates if Header signature is required. The default value for new record is FALSE. |
| GenealogyRequired | Boolean | Indicates if genealogy tracking is required. The default value for new record is FALSE. |
| WeighMechanism | Integer | Weigh mechanism (1 - User, 2 - Automatic). The default value for new record is 1. |
| EnforceSequence | Boolean | Indicates if sequence of weighing the Lines should be enforced. The default value for new record is FALSE. |
| ValidateStagingLocation | Boolean | Indicates if Staging Location validation is required. The default value for new record is FALSE. |
| Allocate | Boolean | Indicates if allocation of materials is required. The default value for new record is FALSE. |
| SingleContainer | Boolean | Indicates if a single Container should be used. The default value for new record is FALSE. |
| ReleaseOnComplete | Boolean | Indicates releasing the Container after completion of the Group. The default value for new record is FALSE. |
| WeighStatus | Integer | The status of Group (1 - New, 2 - Started, 3 - Completed, 4 - Closed, 5 - Blocked, 6 - Weighed). The default value for new record is 1. |
| DueDate | DateTime | Due date of the Group. |
| StartDate | DateTime | Start date of weighing. |
| CompletionDate | DateTime | Completion date of weighing. |
| Facility | Char | Facility of Weigh Header. |
| Disposition | Char | Disposition related to the Weigh Header. |
| DispositionLineSequenceNo | Integer | Disposition line sequence number related to the Group. |

## Validations

- System validates if Weigh Header record exists (when WeighHeaderID is provided). 
- System validates if the Group Number is specified and unique for a new record (when WeighHeaderID is not provided). 
- System validates if a different Group Number is not provided in update mode (when WeighHeaderID is provided). 
- System validates if appropriate Dynamic Inputs are provided together: 
 
- Safety Instructions Group, its Type and Class ID 
- Check List Group, its Type and Class ID 
- WIP Order Number and Type 
- WIP Operation with WIP Order 
- Lot No. with Product 
- Disposition, Line Sequence Number with Facility 
 
- System validates if provided Weigh Mechanism is proper. 
- System validates if provided Weigh Status is proper. 
- System validates if provided Employee and the Skill exist. 
- System validates if provided Scale Station exists. 
- System validates if provided Check List Group and Safety Instructions Group exist. 
- System validates if provided Product exists. 
- System validates if provided Lot Number exists. 
- System validates if provided UOM exists. 
- System validates if provided WIP Order and WIP Operation exist. 
- System validates if provided Facility exists. 
- System validates if provided Disposition Line exists.

## System Processing

- If WeighHeaderID is provided (a non-zero value), the system updates the fields of existing record in the WEIGH_HEADER table according to the used Inputs. 
- If WeighHeaderID is not provided, the system creates a new record in the WEIGH_HEADER table: 
 
- All fields are populated according to the used Inputs. 
- All Boolean fields are set to FALSE by default (if an Input is not created). 
- The Weigh Mechanism is set to 1 (User) by default (if an Input is not created). 
- The Weigh Status is set to 1 (New) by default (if an Input is not created). 
- The new UNIT record is created for the Weigh Header record. 
 
- The empty values of Inputs (respectively: an empty string, zero integer or DateTime.MinValue) are changed to the null values in the Weigh Header record. (Except for all Boolean fields, GroupNo, WeighMechanism and WeighStatus). 
- The Quantity less or equal zero is converted to null (if relevant Dynamic Input is used). 
- When Dynamic Output named UnitID (of type Integer) is present, it is populated with the ID of the UNIT record related to the Weigh Header.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID/CreatedWeighHeaderID |
|  | GroupNo | GroupNo |
|  | Description | Description |
|  | EmployeeID | EmployeeID |
|  | SkillID | SkillID |
|  | ScaleStationID | ScaleStationID |
|  | CheckListGroup | CheckListGroup |
|  | CheckListGroupType | CheckListGroupType |
|  | CheckListGroupClassID | CheckListGroupClassID |
|  | SafetyInstrGroup | SafetyInstrGroup |
|  | SafetyInstrGroupType | SafetyInstrGroupType |
|  | SafetyInstrGroupClassID | SafetyInstrGroupClassID |
|  | LotNo | LotNo |
|  | ProductID | ProductID |
|  | Quantity | Quantity |
|  | UomCode | UomCode |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | UserReference | UserReference |
|  | DocumentUrl | DocumentUrl |
|  | SignatureRequired | SignatureRequired |
|  | GenealogyRequired | GenealogyRequired |
|  | WeighMechanism | WeighMechanism |
|  | EnforceSequence | EnforceSequence |
|  | ValidateStagingLocation | ValidateStagingLocation |
|  | Allocate | Allocate |
|  | SingleContainer | SingleContainer |
|  | ReleaseOnComplete | ReleaseOnComplete |
|  | WeighStatus | WeighStatus |
|  | DueDate | DueDate |
|  | DueDateProvided | DueDateProvided |
|  | StartDate | StartDate |
|  | StartDateProvided | StartDateProvided |
|  | CompletionDate | CompletionDate |
|  | CompletionDateProvided | CompletionDateProvided |
|  | Facility | Facility |
|  | Disposition | Disposition |
|  | LineSequenceNo | DispositionLineSequenceNo |
|  | UnitID | Link to a new record in the UNIT table. |
| UNIT | ID | New record created for new Weigh Header. |
