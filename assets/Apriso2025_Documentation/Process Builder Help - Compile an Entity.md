# Compile an Entity

Compile/Validate an Entity

Compilation and validation functionalities are available for entities in Entity Manager or Project
Entity Manager and for action scripts in Action Script Manager.

Compilation

Compilation is available only for DFCs in the prototype, development in progress, or active status
and for action scripts.

   To Compile a DFC
   To Compile an Action Script

Validation

The system validates if the selected entity is designed correctly and can be properly executed. The
validation includes verifying the correctness of (among others):

           Codes, names, and revisions of entities and their elements (and their uniqueness).
           Step navigation elements.
           Functions and their dependencies, inputs, and outputs.
           The structure of screen flow entities.
           Session variables linked to DFCs.
           Location of linked entities based on references (for example, if all dependent entities are
           located within the same or referenced project revision).

The validation results are displayed:
           In the Entity Validation Result window – when the entity validation runs in Entity Manager
           or Project Entity Manager.
           In the Validation Messages tool pane – when the entity validation runs in an open entity.

Validating processes and operations is impossible in projects.

 To Validate an Entity
 To Validate Default Entities in Projects or Modules
 To Validate an Action Script
