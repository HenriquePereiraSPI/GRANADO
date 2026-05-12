# Available Apriso Entities

Available DELMIA Apriso Entities

DELMIA Apriso Process Builder facilitates interaction with entities from two large domains:
Operational and Solution Authoring. For more information, refer to Database Architecture
Transition Guide.

Operational Entities

Operational entities ensure efficient manufacturing operations and optimizing production
processes. Such entities include, for example: work centers, bills of materials (BOM), processes,
production orders, inventory, inspection plans, or maintenance procedures.

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

Solution Authoring Entities

Solution Authoring entities ensure streamlining development processes and enabling rapid
deployment of solutions. Such entities contain, for example, user interfaces, business rules,
integrations, and API connections.

Main Entities

Icon Entity Description

        DFC: a data flow control (DFC) is a core entity that help create logic for various applications
        by managing the flow of data using, for example, functions.

        Screen Displaying up-to-date user interface in DELMIA Apriso requires using several DFCs
                   (for example, header, context, and footer). Dividing the UI per DFC is a good
                   practice because it enables reusing the parts that are shared between the different
                   screens (for example, the header or footer). This approach is the basic concept for
                   screen flows.

        Layout
                   Each screen in a screen flow consists of:

View               A list of views that are displayed in the screen.
                   Definition of a layout – the positions and sizes of the panels on which views
                   are linked.

                   Definitions of views, layouts, and screens are the elements responsible for how the
                   end-user UI is displayed.

           Project: supports the development and delivery of DELMIA Apriso solutions. Projects
           enable easier maintenance, versioning, execution, and upgrading of the product. Treated as
           separate entities inside Process Builder, projects are used as containers for entities that
           should be grouped together.

           Action script: a simple piece of code that can replace DFCs in certain scenarios. The
           language used for action scripts is TypeScript.

 Entity Components

Icon Component Description

        Step: the child component of a DFC. It is a container for functions and allows for building
        routing between different DFC steps. The steps are not reusable, but they might be copied.

        Function: the child component of a DFC step with the capability to create and use business
        logic. It consists of inputs and outputs (linked to business logic) that perform specific
        business functions. They may be used to perform data collection, data transformation,
        control DFC step navigation, invoke business logic, and more.

        Input: the child component of a function. It incorporates the data received by a function to
        be used when processing the function's logic.

        Output: the child component of a function. It incorporates the data sent by a function to be
        used further down the data flow.

        Module: the child component of a project. It organizes project into discrete functional units
        that group other entities.
