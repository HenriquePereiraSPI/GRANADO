# Screen Model

The $ScreenModel variable is used to preserve context of a View/Screen in offline mode.

It is automatically added to HTML Views belonging to the Offline Module and unlike other Inputs it
cannot be deleted. The default value of this variable cannot be changed.

It can be used in scripting context by typing $ScreenModel (similarly to $Context).

$ScreenModel can store any type of data. It is the Process Author's responsibility to keep
$ScreenModel variable value consistent with what a given HTML View expects.

  It is possible to override this variable in the HTML View but this breaks the separation between
  user interface and business logic.

It is not serialized or altered in any way so setting it as reference type allows you to change some
other object (i.e., global variable Apr.Model). It is not stored in the Portal Session.

  $ScreenModel variable is restored after any "back" Screen Flow Action (it is tied to the Screen
  Flow stack).

Setting the Variable

To set this variable, use $ScreenModel Output from an Action Script, examples:

   public static setOrderContext(){
   return { $ScreenModel : Apr.Model.orders};
   }

   public static setCurrentOrder(orderId:number){
   return { $ScreenModel : Apr.Model.orders.filter(function(o){ return o.orderNumber ==
   orderId})[0] };
   }

     For more information on Apr.Model, refer to the "Offline Mode" section of the API
     Documentation .

      public static setDocumentOperations($ScreenModel:string, operationIndex:number){
      return { $ScreenModel : ($ScreenModel as any).operations[operationIndex]};
      }

 Using the Variable in HTML/JavaScript Tabs

  Assuming that $ScreenModel has the following structure:

      [{
           "orderNumber": "100",
           "orderStatus": "new",
           "orderDescription": "Maintenance Order"

      }, {
         "orderNumber": "200",
           "orderStatus": "new",
           "orderDescription": "Maintenance Order"

      }, {
           "orderNumber": "300",
           "orderStatus": "new",
           "orderDescription": "Maintenance Order"

      }]

You can use the following code to display a list of Orders:

<div class="order" data-id="{$ScreenModel[i].orderNumber}" data-flx-
iterate="i,$ScreenModel">
<span class="status status-{$ScreenModel[i].orderStatus}"></span>
<span class="info">
<div>Order: {$ScreenModel[i].orderNumber}</div>
<br/>
<div>{$ScreenModel[i].orderDescription}</div>
</span>
</div>

For more information, refer to Offline Mode Guide.
