# CAPA_FLOW

**Database:** Operational

**Description:** This table contains CAPA Flows used to solve CAPA issues.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAFlowClassID | INT(10,0) | True |  | False | CAPA_FLOW_CLASS | The Class ID of the CAPA Flow. |
| DiscontinueDate | DATETIME | True |  | False |  | The date at which the flow is no longer valid. |
| EffectiveDate | DATETIME | False |  | False |  | The date from which the flow is valid. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| Name | NVARCHAR(80) | False |  | False |  | The name of the CAPA Flow. |
| OriginCAPAFlowID | INT(10,0) | True |  | False | CAPA_FLOW | The ID of the original CAPA Flow. |
| Revision | NVARCHAR(80) | False |  | False |  | The revision of the CAPA Flow. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | INT(10,0) | False |  | False |  | The type of the CAPA Flow (1 - Template, 2 - Runtime). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| VisualProperties | NVARCHAR(2000) | True |  | False |  | The visual properties of flow elements on the diagram. |
| WarningPeriod | INT(10,0) | True |  | False |  | The warning period in hours. |

## Primary Key

- **PK_CAPA_FLOW** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPA_FLOW_CAPA_FLOW** — CAPA_FLOW -> CAPA_FLOW (`OriginCAPAFlowID -> ID`)
- **FK_CAPA_FLOW_CAPA_FLOW_CLASS** — CAPA_FLOW -> CAPA_FLOW_CLASS (`CAPAFlowClassID -> ID`)
- **FK_CAPA_FLOW_UNIT** — CAPA_FLOW -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_CAPA_FLOW** — CAPA -> CAPA_FLOW (`CAPAFlowID -> ID`)
- **FK_CAPA_FLOW_CAPA_FLOW** — CAPA_FLOW -> CAPA_FLOW (`OriginCAPAFlowID -> ID`)
- **FK_CAPA_STEP_CAPA_FLOW** — CAPA_STEP -> CAPA_FLOW (`CAPAFlowID -> ID`)

## Unique Indexes

- **UK_CAPA_FLOW_FUID** on `FUID`
- **UK_CAPA_FLOW_NAME_REVISION** on `Name, Revision`

## Non-Unique Indexes

- **IF_CAPA_FLOW_CAPA_FLOW** on `OriginCAPAFlowID`
- **IF_CAPA_FLOW_CAPA_FLOW_CLASS** on `CAPAFlowClassID`
- **IF_CAPA_FLOW_UNIT** on `UnitID`
