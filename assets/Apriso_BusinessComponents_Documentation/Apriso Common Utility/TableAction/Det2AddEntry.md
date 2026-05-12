# Det2AddEntry

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Active

## Description

This Business Component method is used to add a record to Determination 2.0.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Determination | Char | Yes | The Determination code. |
| Input | Revision | Char | Yes | The revision. |
| Input | ParentID | Integer | Yes | The ID of Parent entry. |
| Input | EmployeeNo | Char | Yes | The employee number. |
| Input | UTC | DateTime | Yes | The UTC time. |
| Input | Validate | Boolean | Yes | The execute validation. |

## Validations

- The Determination from the Determination Input must exist 
- The Determination must have an active revision

## System Processing

- The system inserts the values into DET2_ENTRY_VALUE 
- If Validate is set, the system checks that no duplicates exist 
- If the Determination from the Determination Input has no fields, DET2_ENTRY_VALUE table will not be updated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DET2_ENTRY_VALUE | Det2FieldCode | The field code from the Dynamic Inputs. |
|  | Value | The value to be inserted. |
|  | ParentDet2EntryID | The ID of the parent Determination provided in the ParentID input. |
|  | CreatedBy | The user provided in the EmloyeeNo input. |
|  | CreatedOn | The UTC time provided in the UTC input. |
|  | LastUpdateOn | The UTC time provided in the UTC input. |
| DET2_ENTRY | Sequence | The next sequence. |
|  | FUID | The unique entry ID. |
|  | CreatedBy | The user provided in the EmloyeeNo input. |
|  | CreatedOn | The UTC time provided in the UTC input. |
|  | LastUpdateOn | The UTC time provided in the UTC input. |
