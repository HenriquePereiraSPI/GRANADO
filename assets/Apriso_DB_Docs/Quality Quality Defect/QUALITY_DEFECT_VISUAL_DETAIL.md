# QUALITY_DEFECT_VISUAL_DETAIL

**Database:** Operational

**Description:** This table stores the occurrences (points) of Visual Quality Defects.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Annotation | NVARCHAR(1000) | True |  | False |  | The annotation added to the Visual Defect. |
| ComponentX | DECIMAL(28,10) | True |  | False |  | The X coordinate of the reported Visual Defect in context of component used (in internal unit of measure for 3D). |
| ComponentY | DECIMAL(28,10) | True |  | False |  | The Y coordinate of the reported Visual Defect in context of component used (in internal unit of measure for 3D). |
| ComponentZ | DECIMAL(28,10) | True |  | False |  | The Z coordinate of the reported Visual Defect in context of component used (in internal unit of measure for 3D). |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| InstancePath | NVARCHAR(100) | True |  | False |  | The occurrence of the Part in 3DXML. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Indicates component the Visual Defect is reported against. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | The Progress Status of the Visual Defect. |
| QualityDefectVisualDetailType | SMALLINT(5,0) | False |  | False | QUALITY_DEFECT_VISUAL_DET_TYPE | The link to the Quality Defect Visual Detail Type. |
| QualityDefectVisualID | INT(10,0) | False |  | False | QUALITY_DEFECT_VISUAL | The identifier of the Quality Defect Visual record. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Indicates Serial Number of the component the Visual Defect is reported against. |
| Status | INT(10,0) | True |  | False |  | The Status of the Visual Defect. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UnitRegionID | INT(10,0) | True |  | False | UNIT_REGION | The region on the document to which the Visual Defect belongs. |
| X | DECIMAL(28,10) | False |  | False |  | The X coordinate of the reported Visual Defect (in pixels for 2D and in internal unit of measure for 3D). |
| Y | DECIMAL(28,10) | False |  | False |  | The Y coordinate of the reported Visual Defect (in pixels for 2D and in internal unit of measure for 3D). |
| Z | DECIMAL(28,10) | True |  | False |  | The Z coordinate of the reported Visual Defect (in internal unit of measure for 3D). |

## Primary Key

- **PK_QUALITY_DEFECT_VISUAL_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_DEFECT_VISUAL_DETAIL_PRODUCT** — QUALITY_DEFECT_VISUAL_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_PROGRESS_STATUS** — QUALITY_DEFECT_VISUAL_DETAIL -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_QUALITY_DEFECT_VISUAL_DET_TYPE** — QUALITY_DEFECT_VISUAL_DETAIL -> QUALITY_DEFECT_VISUAL_DET_TYPE (`QualityDefectVisualDetailType -> QualityDefectVisualDetailType`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_SERIAL_NO** — QUALITY_DEFECT_VISUAL_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_UNIT** — QUALITY_DEFECT_VISUAL_DETAIL -> UNIT (`UnitID -> ID`)
- **FK_QUALITY_DEFECT_VISUAL_DETAIL_UNIT_REGION** — QUALITY_DEFECT_VISUAL_DETAIL -> UNIT_REGION (`UnitRegionID -> ID`)
- **FK_QUALITY_DEFECT_VISUAL_QUALITY_DEFECT_VISUAL_DETAIL** — QUALITY_DEFECT_VISUAL_DETAIL -> QUALITY_DEFECT_VISUAL (`QualityDefectVisualID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_QUALITY_DEFECT_VISUAL_DETAIL_FUID** on `FUID`

## Non-Unique Indexes

- **IF_QUALITY_DEFECT_VISUAL_DETAIL_PRODUCT** on `ProductID`
- **IF_QUALITY_DEFECT_VISUAL_DETAIL_PROGRESS_STATUS** on `ProgressStatus`
- **IF_QUALITY_DEFECT_VISUAL_DETAIL_SERIAL_NO** on `SerialNo, ProductID`
- **IF_QUALITY_DEFECT_VISUAL_DETAIL_UNIT** on `UnitID`
- **IF_QUALITY_DEFECT_VISUAL_DETAIL_UNIT_REGION** on `UnitRegionID`
- **IXD_QualityDefectVisualID** on `QualityDefectVisualID`
