# CAPA_FLOW_CLASS

**Database:** Operational

**Description:** This table contains classes of CAPA Flows. It may be used to categorize the flows.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Name | NVARCHAR(50) | False |  | False |  | The name of the CAPA Flow Class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CAPA_FLOW_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPA_FLOW_CAPA_FLOW_CLASS** — CAPA_FLOW -> CAPA_FLOW_CLASS (`CAPAFlowClassID -> ID`)

## Unique Indexes

- **UK_CAPA_FLOW_CLASS_FUID** on `FUID`
- **UK_CAPA_FLOW_CLASS_NAME** on `Name`

## Non-Unique Indexes

- **** on ``
