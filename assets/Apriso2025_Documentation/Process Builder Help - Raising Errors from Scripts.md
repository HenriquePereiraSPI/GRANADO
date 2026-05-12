# Raising Errors from Scripts

It is possible to display error messages to the user in the following ways:

           By providing a hard-coded message of the error (the message displayed to the user will
           not be localized)
           By providing an error code defined in the Dictionary screen (the message displayed to the
           user will be localized)

The error codes in the Action Scripts are available as functions of the ErrorCodes object.

Code                                      Description
                                          Displays a generic message with the provided text.
throw ErrorCodes.GenericMessage(message:
string, params: any[])                    Displays the YourErrorCodeName error code that
throw ErrorCodes.YourErrorCodeName();     should be defined with the same name as the error
                                          code in the Dictionary Manager.
