# Data Protection

## Overview

The documentation outlines safeguards for DELMIA Apriso customizations during version upgrades.

## Key Protection Strategies

**FUID-Managed Tables:** "Each entity is uniquely identified by an FUID" for processes and operations. Users can duplicate entities starting with APR\_ or FLX\_ to new revisions.

**ID-Managed Tables:** The Database Upgrader inserts records in ranges 1–100,000,000, avoiding customer data within these bounds.

**Integer Key Tables:** "Create records with a value higher than 100,000,000" to prevent overwriting by the upgrader.

**Character Field Key Tables:** Two approaches recommended:
- Establish naming conventions avoiding APR\_ and FLX\_ prefixes (three-letter prefixes recommended)
- Query system tables to identify protected objects using database queries like SQL's `information_schema.tables`

## Summary

Protecting customizations requires understanding table management types and following prefix conventions to ensure data persistence across DELMIA Apriso upgrades.
