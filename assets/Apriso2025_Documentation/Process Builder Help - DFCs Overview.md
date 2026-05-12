# DFCs Overview

For more information on entities backward compatibility, refer to Database Architecture
Transition Guide.

 Main Entities

   Icon Entity Description
           DFC: a data flow control (DFC) is a core entity that help create logic for various applications
           by managing the flow of data using, for example, functions.

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
