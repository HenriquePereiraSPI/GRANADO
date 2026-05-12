# Connect to_Disconnect from a Server

Connect to/Disconnect from a Server

To Connect to a Server

       1. Go to the Main Menu and select: File > Connect...

2. The system will display the standard Process Builder login box. Choose a DELMIA

   Apriso server from the Server list, or press the button to add, change, or remove
   servers from the list (see Manage Available Server Connections for more information).

          3. Enter the appropriate Login and Password for the server chosen. Select the Remember
              password box to save the password for future logins.

                It is possible to disable the Remember password check box with use of the
                "AllowRememberPassword" key located in the "SystemServices.Security" section of
                the Central Configuration file (for details see Central Configuration Documentation ).
          4. Click the Log In button to connect to the chosen server. If the system successfully
              establishes a connection, the dialog box will disappear, and the Connected ( ) icon along
              with the server and login information will be displayed in the Status bar (and depending on
              what was set in Options, the Entity Manager window may also appear). If the connection is
              unsuccessful, the system will show an error message and display the dialog box once
              more.
          5. Alternatively, you can choose another authentication method based on the DELMIA Apriso
              configuration:

                         When 3DPassport Authentication is enabled, click the 3DPassport option and
                         provide your Username or email and Password in the 3DPassport login window:

                            Depending on the 3DPassport configuration, logging in with email may not be
                            supported.
                         When OpenId Connect Authentication is enabled, click OpenID Connect option
                         and provide your credentials. The authentication method depends on the external
                         identity provider configuration.

     Some features of Process Builder may not be available, depending on the Security Roles
     assigned to the user. For more information on Security Roles, refer to the Role and Skill
     Configuration Help .

 To Disconnect from a Server

  Go to the Main Menu and select: File > Disconnect
