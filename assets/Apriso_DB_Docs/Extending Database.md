# Extending DELMIA Apriso Database

## Overview

Starting with DELMIA Apriso 2025, the database divides into Operational and Solution Authoring databases. "Modifying the Solution Authoring database is not recommended."

## General Rules

Extensible database objects include:
- Tables
- Views
- Stored Procedures
- Functions
- Indexes

**Critical requirement:** "Standard schema objects should not be renamed, modified, or deleted" to prevent Database Upgrader failure. Only standard indexes may be removed.

## Creating Custom Tables

### Required Columns

Each custom table must include:

- **ID** (first column, auto-increment, initial value: 100,000,000)
- **FUID** (nvarchar(36), not null—GUID column)
- **ReferenceID** (int)
- **LastUpdateOn** (datetime)
- **LastUpdatedBy** (nvarchar(50))
- **CreatedOn** (datetime)
- **CreatedBy** (nvarchar(50))
- **Active** (bit, default 1)
- **LastDeleteOn** (datetime)
- **LastDeletedBy** (nvarchar(50))
- **LastReactivateOn** (datetime)
- **LastReactivateBy** (nvarchar(50))
- **ArchiveID** (int)
- **LastArchiveOn** (datetime)
- **LastArchivedBy** (nvarchar(50))
- **LastRestoreOn** (datetime)
- **LastRestoredBy** (nvarchar(50))
- **RowVersionStamp** (int, default 1)

Unique columns determining each row are required. User records must have IDs exceeding 100,000,000; lower IDs are reserved for Dassault Systèmes.

### Foreign Key Constraints

- Columns ending with **TextID** automatically reference TEXT_TRANSLATION; avoid foreign key constraints.
- **UnitID** columns automatically link to UNIT table.
- Child tables with foreign constraints to standard DELMIA tables may cause upgrade problems requiring manual resolution.

## Creating Indexes and Triggers

Custom indexes improve query performance on standard and custom tables. Standard indexes may be removed.

Triggers are permitted but discouraged: "Triggers perform actions implicitly in the background and therefore make the diagnosis of potential problems in the system more complicated."

## Creating Stored Procedures

### Validation

Procedures should validate parameters and optionally apply custom business rules.

### Handling NULL Parameters

Since DELMIA Apriso cannot pass NULL values, treat these as nulls:
- Integer: 0
- Decimal: 0
- Char: empty string
- DateTime: 2000/01/01 12:00 AM
- Boolean: cannot be null

### Concurrency Control

UPDATE and DELETE procedures receive `@Original_ID` and `@Original_RowVersionStamp` parameters. If no records match, either the record was deleted elsewhere or its RowVersionStamp changed.

Use optimistic concurrency control: check RowVersionStamp before updating and return "Table XYZ concurrency violation" error if changes are detected.

## Naming Convention for Custom Database Objects

Avoid conflicts with SQL reserved words; append underscore if necessary (e.g., JOIN_, PROCEDURE_).

### Reusable Objects

Format: **AX_ObjectName_[Internal]**

- **A** = first letter (always A)
- **X** = object type (P=Procedure, F=Function, T=Table, V=View, I=Index)
- **ObjectName** = functionality description
- **Internal** = optional suffix for framework-only objects

Examples:
- AP_MoveMultilevelContainer
- AT_InventoryCountHeader

Do not modify existing AX_ objects to maintain version compliance.

### Project-Specific Objects

Format: **PPP_ObjectName_[Internal]**

- **PPP** = project name abbreviation
- **ObjectName** = functionality description
- **Internal** = optional framework-only indicator

Examples:
- ACME_CreateOrder
- ACME_Report_Production

### Oracle Objects

"When creating a custom database object in Oracle, it is essential to specify its name" to ensure script reusability and consistent naming across schema restorations.
