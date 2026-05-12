# Logging Debug, Info, and Error Messages

It is possible to log messages when Action Scripts are executed in runtime. These messages are
logged based on the Logging Configuration of the DELMIA Apriso server. When executing the
script in the Action Script test mode, the messages are logged in the Action Script Output tool pane.

The available message types are:

           Debug
           Info
           Error

Code                                                          Description
                                                              Logs Debug messages.
DebugConsole.LogDebug(message: string, params: any[]) : void  Logs Info messages.
DebugConsole.LogInfo(message: string, params: any[]) : void   Logs Error messages.
DebugConsole.LogError(message: string, params: any[]) : void

Sample Usage

The below sample code logs an Info message with 3 parameters defined:

DebugConsole.LogInfo("Info: Three parameters {0}, {1}, {2} message", 1, "2", "another");
