# CreateUnitNote

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.NoteManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks`
**Status:** Active
**Keywords:** Create, Unit, Note, UnitNote, CreateUnitNote, Task

## Description

Creates a link between a UNIT and a NOTE record through the UNIT_NOTE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitID | Integer | Yes | ID of an existing unit. |
| Input | NoteID | Integer | Yes | ID of an existing note. |
| Output | UnitNoteID | Integer | Yes | ID of the generated UNIT_NOTE record. |

## Validations

Validation passes if the provided UnitID and NoteID exist in the database. If a UNIT_NOTE record already exists for the provided UnitID and NoteID combination, the existing UnitNoteID is returned and a new record is not created.

## System Processing

A UNIT_NOTE record is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_NOTE | UnitID | Parameter UnitID |
|  | NoteID | Parameter NoteID |
