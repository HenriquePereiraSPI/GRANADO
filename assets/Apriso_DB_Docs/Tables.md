# Tables

## Overview

Records in tables may be added or modified, but deletion is restricted. As noted, "Table records can be added and modified but should not be removed." For additional context, consult the Data Protection documentation.

The User tables maintain live customer data that Dassault Systèmes does not update through standard upgrades.

## Type of Keys/Unique Identifier

Customer data remains protected across system upgrades through three identifier approaches:

**ID (Incremental Identifier)**
- Released DELMIA Apriso databases use IDs exceeding 100,000,001
- System-required data uses IDs between 1 and 100,000,000
- The Database Upgrader inserts records in the unused customer range (1-100,000,000)

**FUID (DELMIA Apriso Unique Identifier)**
- A permanent identifier assigned when entities are created
- Attributes applied to specific DELMIA Apriso tables
- Table keys may be IDs or other entity types
- Unique across the entire network

**Usual Data Element Key**
- Combinations of character or integer type elements serve as composite keys

## Table Structure

Beyond keys and data, tables include tracking fields (called WHO columns):

- REFERENCEID (unused)
- LASTUPDATEON (UTC timestamp of last modification)
- LASTUPDATEDBY (person who modified the record)
- CREATEDON (UTC timestamp of creation)
- CREATEDBY (record creator)
- ACTIVE (Boolean status flag)
- LASTDELETEON, LASTDELETEDBY (unused)
- LASTREACTIVATEON, LASTREACTIVATEDBY (unused)
- ARCHIVEID, LASTARCHIVEON, LASTARCHIVEDBY (unused)
- LASTRESTOREON, LASTRESTOREDBY (unused)
- ROWVERSIONSTAMP (version identifier for concurrency control)
