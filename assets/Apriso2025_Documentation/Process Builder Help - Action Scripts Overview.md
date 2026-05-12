# Action Scripts Overview

According to the data gathered from various DELMIA Apriso projects, most DFCs that contain
business logic use one of these two functions: User Formula or SQL Query. Action Scripts can be
used as replacements for these types of DFCs, as they enable getting rid of design and runtime
overhead during execution.

Action Scripts are simple pieces of code that can replace DFCs in certain situations. The language
used for Action Scripts is TypeScript. This is a Microsoft programming language and a strict
superset of JavaScript with optional static typing and class-based object-oriented programming.

Action Scripts are available only at the level of Screens and Views, but they do not support display
output. They can be used to validate the data in forms, parsing, or other strictly back-end actions.
Even if there is a user interface displayed in an Action Script, it will not be supported. Each Action
Script “file” is kept in the DELMIA Apriso database, so it is not a physical file.

Action Scripts Usage

It is possible to use Action Scripts in the following places:

           Screen "On Load" Property
           Screen "On Initialize" Property
           View Actions "On Action" Property
           View Forms "On Change" Property
           Offline Module "Initialization Script" Property

     It is possible to use (link) only Action Script Functions that belong to Action Scripts in the Active,
     Prototype or Development in Progress status and in the default revision. To use Action Script
     Functions in runtime, they need to be compiled.

  Whenever an Action Script is used, it becomes a part of the DFC and is included in the transaction
  stack.

  Limitations

              Action Scripts are not moved with entities that use them. You need to link the Action Script
              manually after moving the entity.
              After duplicating a project with a linked initialization script, the link is removed and the
              status of the script changes to Design in Progress. You need to manually change the script
              status to Prototype and link it again.

 Action Scripts on the Client Side and Server Side

  Action Scripts can be run on the client side (without a call to the server) or on the server side (each
  Action Script execution reaches the server for additional data). Action Scripts that are executed
  only in a Web browser are usually simple validation scripts of data on the displayed Web page, or
  they are data modifications or conversions.

  It is impossible to manually specify that Action Scripts should be executed without callback to the
  server. Depending on whether the Action Script is client-side or server-side, the system decides by
  itself what to do during the compilation of the Action Script.

To make sure that an Action Script is client-side, use only the classes that perform the following:

Call only methods and functions from standard JavaScript objects (for example, Number,
String, Array, Date, Math, RegExp)
Use only global functions and properties (for example, isNaN, decodeURI, encodeURI,
isFinite, parseFloat, parseInt)
Use only functions for raising errors or logging debug, information, and error messages
from the DELMIA Apriso Action Script API
