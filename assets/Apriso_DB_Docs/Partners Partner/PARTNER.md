# PARTNER

**Database:** Operational

**Description:** Contains information about Partners. Partners can be internal (e.g. facility, warehouse) or external (e.g. customer, carriers, supplier, sub contractors).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Code System and its Attribute's unique identifier. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attribute's unique identifier. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| PartnerNo | NVARCHAR(40) | False |  | False |  | Partner number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_PARTNER** on `ID`

## Foreign Keys (this table -> other)

- **FK_PARTNER_CODE_DOMAIN_MANAGER** — PARTNER -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_PARTNER_CODE_FORMAT_TYPE** — PARTNER -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_PARTNER_UNIT** — PARTNER -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_BARCODE_PREFIX_PARTNER** — BARCODE_PREFIX -> PARTNER (`PartnerID -> ID`)
- **FK_CAPA_LINK_PARTNER** — CAPA_LINK -> PARTNER (`PartnerID -> ID`)
- **FK_CERTIFICATION_PARTNER** — CERTIFICATION -> PARTNER (`PartnerID -> ID`)
- **FK_CODE_CLASS_NUMBER_PARTNER** — CODE_CLASS_NUMBER -> PARTNER (`PartnerID -> ID`)
- **FK_CODE_DOMAIN_MANAGER_PARTNER** — CODE_DOMAIN_MANAGER -> PARTNER (`PartnerID -> ID`)
- **FK_CODE_ULC_PARTNER** — CODE_ULC -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_PARTNER** — COUNT_DISPOSITION_LINE -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_DOCUMENT_PARTNER** — COUNT_DOCUMENT -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_LOCK_PARTNER** — COUNT_LOCK -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_RECORD_PARTNER** — COUNT_RECORD -> PARTNER (`PartnerID -> ID`)
- **FK_DISPOSITION_CONTENT_PARTNER** — DISPOSITION_CONTENT -> PARTNER (`PartnerID -> ID`)
- **FK_DISPOSITION_PARTNER** — DISPOSITION -> PARTNER (`PartnerID -> ID`)
- **FK_EXCHANGE_RATE_PARTNER** — EXCHANGE_RATE -> PARTNER (`PartnerID -> ID`)
- **FK_EXTERNAL_SEQUENCE_PARTNER** — EXTERNAL_SEQUENCE -> PARTNER (`PartnerID -> ID`)
- **FK_FLAT_FILE_DEFINITION_PARTNER** — FLAT_FILE_DEFINITION -> PARTNER (`PartnerID -> ID`)
- **FK_FLAT_FILE_ENTITY_PARTNER** — FLAT_FILE_ENTITY -> PARTNER (`PartnerID -> ID`)
- **FK_INSPECTION_DETERMINATION_PARTNERID** — INSPECTION_DETERMINATION -> PARTNER (`PartnerID -> ID`)
- **FK_INVENTORY_CONTAINER_PARTNER** — INVENTORY_CONTAINER -> PARTNER (`LastPartnerID -> ID`)
- **FK_INVENTORY_COUNT_PARTNER** — INVENTORY_COUNT -> PARTNER (`PartnerID -> ID`)
- **FK_INVENTORY_PARTNER** — INVENTORY -> PARTNER (`PartnerID -> ID`)
- **FK_INVENTORY_SERIAL_NO_PARTNER** — INVENTORY_SERIAL_NO -> PARTNER (`LastPartnerID -> ID`)
- **FK_INVENTORY2_PARTNER** — INVENTORY2 -> PARTNER (`PartnerID -> ID`)
- **FK_KANBAN_CARD_FromPartnerID** — KANBAN_CARD -> PARTNER (`FromPartnerID -> ID`)
- **FK_KANBAN_CARD_ToPartnerID** — KANBAN_CARD -> PARTNER (`ToPartnerID -> ID`)
- **FK_LABEL_CONTENT_PartnerID** — LABEL_CONTENT -> PARTNER (`PartnerID -> ID`)
- **FK_LOCATION_PARTNER_PARTNER** — LOCATION_PARTNER -> PARTNER (`PartnerID -> ID`)
- **FK_LOT_NO_PARTNER** — LOT_NO -> PARTNER (`PartnerID -> ID`)
- **FK_ORDER_DETAIL_PARTNER** — ORDER_DETAIL -> PARTNER (`FromPartnerID -> ID`)
- **FK_ORDER_DETAIL_PARTNER1** — ORDER_DETAIL -> PARTNER (`ToPartnerID -> ID`)
- **FK_ORDER_PARTNER_PARTNER** — ORDER_PARTNER -> PARTNER (`PartnerID -> ID`)
- **FK_ORDER_SCHEDULE_PARTNER** — ORDER_SCHEDULE -> PARTNER (`PartnerID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_PARTNER** — PACKAGING_INSTR_USAGE -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_ADDRESS_PARTNER** — PARTNER_ADDRESS -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_CODE_PARTNER** — PARTNER_CODE -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_CONTACT_PARTNER** — PARTNER_CONTACT -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_HOLD_PARTNER** — PARTNER_HOLD -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_PRODUCT_PARTNER** — PARTNER_PRODUCT -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_RELATIONSHIP_PARTNER** — PARTNER_RELATIONSHIP -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_SEQUENCE_STATUS_PARTNER** — PARTNER_SEQUENCE_STATUS -> PARTNER (`PartnerID -> ID`)
- **FK_PRODUCT_MIN_MAX_LEVEL_PARTNER** — PRODUCT_MIN_MAX_LEVEL -> PARTNER (`PartnerID -> ID`)
- **FK_QUALITY_DEFECT_PARTNER** — QUALITY_DEFECT -> PARTNER (`PartnerID -> ID`)
- **FK_REPLENISH_STRATEGY_FromPartnerID** — REPLENISH_STRATEGY -> PARTNER (`FromPartnerID -> ID`)
- **FK_REPLENISH_STRATEGY_ToPartnerID** — REPLENISH_STRATEGY -> PARTNER (`ToPartnerID -> ID`)
- **FK_SAMPLE_PARTNER** — SAMPLE -> PARTNER (`PartnerID -> ID`)
- **FK_SEQUENCE_QUEUE_PARTNER** — SEQUENCE_QUEUE -> PARTNER (`PartnerID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_PARTNER** — SEQUENCE_SHIP_CONFIG -> PARTNER (`PartnerID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_PARTNER** — SOFT_INVENTORY2_ALLOCATION -> PARTNER (`PartnerID -> ID`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_PARTNER** — TRANSACTION_PRODUCT_INV_TYPE -> PARTNER (`DestinationPartnerID -> ID`)
- **FK_WIP_ORDER_CONTENT_PARTNER** — WIP_ORDER_CONTENT -> PARTNER (`PartnerID -> ID`)

## Unique Indexes

- **UK_PARTNER_FUID** on `FUID`

## Non-Unique Indexes

- **IF_PARTNER_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_PARTNER_UNIT** on `UnitID`
