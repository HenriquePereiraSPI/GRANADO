# WIP_LINE

**Database:** Operational

**Description:** The “WIP_LINE” table stores information about production line such as its number, revision, effective date, discontinue date, etc.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Codes System and its Attributes unique identifier |
| DiscontinueDate | DATETIME | True | (getutcdate()) | False |  | End of validity of the entity |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attributes unique identifier |
| EffectiveDate | DATETIME | True | (getutcdate()) | False |  | Validity date (start) of the entity in UTC |
| ExternalID | NVARCHAR(240) | True |  | False |  | This column store unique identifier from external system. |
| FixedThroughput | BIT | True | (0) | False |  | For future use. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| MaxRate | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| MinRate | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| OwnedFacility | NVARCHAR(40) | True |  | False | FACILITY | For future use. |
| ParentProductionLineNo | NVARCHAR(40) | True |  | False | WIP_LINE | The final line for sub-segments or sub-assembly lines. |
| ProductionLineNo | NVARCHAR(40) | False |  | True |  | For future use. |
| Revision | NVARCHAR(20) | True |  | False |  | For future use. |
| StartTime | DATETIME | True | (getutcdate()) | False |  | For future use. |
| StopTime | DATETIME | True | (getutcdate()) | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WipLineClassID | INT(10,0) | True |  | False | WIP_LINE_CLASS | User-defined classification of production lines. |

## Primary Key

- **PK_WIP_LINES** on `ProductionLineNo`

## Foreign Keys (this table -> other)

- **FK_WIP_LINE_CODE_DOMAIN_MANAGER** — WIP_LINE -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_WIP_LINE_CODE_FORMAT_TYPE** — WIP_LINE -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_WIP_LINE_FACILITY** — WIP_LINE -> FACILITY (`OwnedFacility -> Facility`)
- **FK_WIP_LINE_WIP_LINE** — WIP_LINE -> WIP_LINE (`ParentProductionLineNo -> ProductionLineNo`)
- **FK_WIP_LINE_WIP_LINE_CLASS** — WIP_LINE -> WIP_LINE_CLASS (`WipLineClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_WIP_LINE** — CAPA_LINK -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_CODE_CLASS_NUMBER_WIP_LINE** — CODE_CLASS_NUMBER -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_CODE_SERIAL_NUMBER_WIP_LINE** — CODE_SERIAL_NUMBER -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_CODE_ULC_WIP_LINE** — CODE_ULC -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_LITE_LABOR_WIP_LINE** — LITE_LABOR -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_LOCATION_PARTNER_WIP_LINE** — LOCATION_PARTNER -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_RESOURCE__WIP_LINE** — RESOURCE_ -> WIP_LINE (`ProductionLine -> ProductionLineNo`)
- **FK_RESOURCE_LABOR_WIP_LINE** — RESOURCE_LABOR -> WIP_LINE (`ProductionLine -> ProductionLineNo`)
- **FK_SEQUENCE_QUEUE_WIP_LINE** — SEQUENCE_QUEUE -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_WIP_LINE_ADDRESSES_WIP_LINES** — WIP_LINE_ADDRESS -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_WIP_LINE_CONTACTS_WIP_LINES** — WIP_LINE_CONTACT -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_WIP_LINE_SCHEDULE_WIP_LINE** — WIP_LINE_SCHEDULE -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_WIP_LINE_WIP_LINE** — WIP_LINE -> WIP_LINE (`ParentProductionLineNo -> ProductionLineNo`)
- **FK_WIP_LINE_WORK_CENTER_WIP_LINE** — WIP_LINE_WORK_CENTER -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_WIP_ORDER_WIP_LINES** — WIP_ORDER -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_LINE_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_WIP_LINE_WIP_LINE** on `ParentProductionLineNo`
- **IF_WIP_LINE_WIP_LINE_CLASS** on `WipLineClassID`
