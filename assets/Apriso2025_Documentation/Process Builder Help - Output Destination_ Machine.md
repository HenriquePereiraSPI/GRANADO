# Output Destination_ Machine

Output Destination: Machine

The general properties available for all outputs are described in the Output Properties topic.

The Machine Output functionality is supported in the Screen Flows client mode. For more
information, refer to Screen Flows client code.

Field              Description

Machine                       Client (Browser) – The value is written directly from the Client’s
Integrator                    Browser to the Machine Integrator Connector. This Connector can be
Processing                    running on the same computer as the browser or on a remote one.

                   Web Server – The value is written by the Web Server to the Machine
                   Integrator Connector after submitting the page.

Machine Source     The source of the value that links the Output to the Machine Integrator Point
                   may be:

                              Point Alias
                              Equipment

Point Alias        The point alias linking this Output to DELMIA Apriso Machine Integrator. The
Source             list of Point Alias Sources is:

                              None
                              Constant
                              Session Variable
                              Previous Function Output
                              System Parameter

Machine Source: Equipment

  The link between Equipment, its Attribute and MI Point can be configured within Machine Integrator
  Configuration or Equipment Explorer Screens.

The time needed to reflect changes in configuration (linking another Machine Integrator Point to
equipment) depends on time set using "CacheValidationDelay" key located in the "Framework"
section of the Central Configuration file (for details, see Central Configuration
Documentation ).
