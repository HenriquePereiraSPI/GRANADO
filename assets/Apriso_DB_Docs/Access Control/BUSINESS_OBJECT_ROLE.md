# BUSINESS_OBJECT_ROLE

**Database:** Solution Authoring

**Description:** This table contains security settings for FlexParts.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BusinessObjectID | INT(10,0) | False |  | True | BUSINESS_OBJECT | Reference to a FlexPart in BUSINESS_OBJECT table. |
| Role | NVARCHAR(40) | False |  | True |  | Reference to the Role column in the ROLE table. |

## Primary Key

- **PK_BUSINESS_OBJECT_ROLE** on `BusinessObjectID, Role`

## Foreign Keys (this table -> other)

- **FK_BUSINESS_OBJECT_ROLE_BUSINESS_OBJECT** — BUSINESS_OBJECT_ROLE -> BUSINESS_OBJECT (`BusinessObjectID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- BUSINESS_OBJECT_ROLE -> ROLE (`Role -> Role`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_BUSINESS_OBJECT_ROLE_ROLE** on `Role`
