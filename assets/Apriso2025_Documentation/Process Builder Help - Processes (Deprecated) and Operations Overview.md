# Processes (Deprecated) and Operations Overview

For more information on entities backward compatibility, refer to Database Architecture
Transition Guide.

 Main Entities

   Icon Entity Description
           Process: the top-level entity in the process model. It is a collection of process operations,
           operations, resources, and materials with links to specifications and sample plans. In
           addition, processes contain roles, skills, work instructions, and other details specifying
           everything that is necessary to perform the activity properly.

              The functionalities related to process authoring are deprecated and will not be further
              developed.

           Process operation: the child entity of a process. It is the unit of manufacturing that is to be
           performed at a work center by resources that consume materials. It usually models one
           activity performed by one person in one place at one time. It is a collection of steps,
           resources, and materials with links to specifications. Process operations are not reusable.
           Operation: a stand-alone entity with the same structure as a process operation. Operations
           might be consumed by processes or used more independently in a specific order explosion
           procedure. It is a collection of steps, required resources, and materials with links to
           specifications. Operations are reusable.

 Entity Components

   Icon Component Description
           Step: the child component of a process operation or operation. It is a collection of resources
           and materials with links to specifications and sample plans. Steps are not reusable, but they
           might be copied.
           Links and task permissions: links are available for processes, process operations,
           operations, and operation steps. Tasks permissions can be added to process operations,
           operations, or their steps.

Processes and Operations in Projects

  Starting with DELMIA Apriso 2025, in PB projects, you can add processes and operations only
  to GPM modules. When upgrading from previous versions, processes and operations from PB
  modules are converted and moved to the automatically created GPM module called
  ImportedProcessesAndOperations. To ensure proper deployment, this module contains
  automatically added references to the source PB modules. To make the relocated operations
  unique and easier to identify, they follow the naming convention: OperationCode_ProjectCode.

In PB projects, processes and operations exist in GPM modules only as links. You can add the
entities using the Add Existing option, but most functionalities – for example, status change or
duplication – are limited in GPM modules and available only in Entity Manager. Removing
processes or operations from projects only unlinks them and does not remove them from the
system. Unlinked entities remain in Entity Manager. Having only non-default revisions of processes
and operations in a GPM module is possible.
