# Use the File Picker Input Control in the Client Mode

To use the File Picker in the Screen Flows client mode add an <input type="file"/> element in the
HTML Layout Editor or HTML Editor (HTML View). Upload of a file is asynchronous in the client
mode.

     The <input type="file"/> element is not supported in the server mode.

 Enabling the File Upload

  By default, uploading files is disabled. To enable uploading, edit the AllowedUploadedFileExtensions
  key in central configuration:

              Set it to "*" to accept all file types.
              Set it to a list of specific file types separated by semicolons to accept only the listed types.
              Leave it empty to block all file types.

 Configuring the File Size

  To configure the file size limits, change the following IIS settings in the IIS Manager:
              IIS setting of Request Filtering - section maxAllowedContentLength
              For details, see Request Limits <requestLimits> at Microsoft Docs.
              IIS Configuration Editor - section system.web/httpRuntime:maxRequestLength
              For details, see the HttpRuntimeSection.MaxRequestLength Propert article at Microsoft
              Docs.

 Using Events

  When adding the File Picker control it is possible to use the events which are triggered when the
  file upload is successful or when it fails, for example:

      document.addEventListener("apr-file-uploaded", function(event) {your code})

      document.addEventListener("apr-upload-failed", function(event) {your code})

 Examples

 File Picker Configuration (URL Output)

  The files are uploaded to the following location by default: <drive>\Program Files\Dassault
  Systemes\DELMIA Apriso 2025\WebSite\Portal\Uploads. To receive an URL instead of a path, a view
  DFC needs to be configured as follows:

          1. Add a File Picker control and bind it with some other control in the HTML Layout Editor, for
              example:

2. Create a User Formula Function and link it with a Screen Interface Output:
   In the User Formula Editor add the following:

           The code in the User Formula Editor replaces a path with an URL and leaves the name of
           the file as it was.

File Picker Configuration (Paths of Last Uploaded Files)

In order to see paths for all of the last uploaded files, you need to use iterate attribute in the HTML
Layout Editor.
