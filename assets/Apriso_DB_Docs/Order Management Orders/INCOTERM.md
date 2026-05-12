# INCOTERM

**Database:** Operational

**Description:** Stores information about Incoterms such as Incoterm codes and a flag indicating if a location is mandatory.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| IncotermCode | NVARCHAR(3) | False |  | True |  | Code for the Incoterm. |
| LocationMandatory | BIT | True |  | False |  | Flagged that indicated whether a location is required in addition to the Incoterm (FOB Long Beach port). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INCOTERM** on `IncotermCode`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ORDER_SHIPMENT_STAGE_INCOTERM** — ORDER_SHIPMENT_STAGE -> INCOTERM (`IncotermCode -> IncotermCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
