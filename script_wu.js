/**
      * @param {org.acme.model.test.DepositWithWU} depositToWu
       * @transaction 
 */
function depositToWu(Orderw) 
{
    var listing = Orderw.listing;
    if (listing.state == 'HARVEST') {
        throw new window.alert('Vegetable not ready for delivery !!');
    }
  	else if(listing.state=='ReadyToDeposit'){
    	listing.state='DepositedWithWU';
    }
  	else if(listing.state=='IN_DELIVER_W'){
    	throw new window.alert('Arriving soon at warehouse !!');
    }
  else if(listing.state=='DELIVERED_W'){
  		throw new window.alert('Already delivered at warehouse');
  }
    
   return getAssetRegistry('org.acme.model.test.TransMon')
        .then(function(transmonListingRegistry) {
            // save the vegetable listing
            return transmonListingRegistry.update(listing);
        });
   
}

/**
      * @param {org.acme.model.test.ReceivedByAggregator} ReceivedByAggregator
       * @transaction 
 */
function ReceivedByAggregator(ReceivedByAggregator) 
{
    var listing = ReceivedByAggregator.listing;
  	if(listing.state=='IN_DELIVER_C'){
    	throw new window.alert('About to deliver to consumer !!');
    }
  
  	else if(listing.state=='DepositedWithWU' ){
   		listing.state='ReceivedByAggregator';
    }
  else{
  	throw new window.alert('Out of Stock !!');
  }
    
   return getAssetRegistry('org.acme.model.test.TransMon')
        .then(function(transmonListingRegistry) {
            // save the vegetable listing
            return transmonListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.test.SentToBank} SentToBank
       * @transaction 
 */
function SentToBank(SentToBank) 
{
    var listing = SentToBank.listing;
  	if(listing.state=='IN_DELIVER_C'){
    	throw new window.alert('About to deliver to consumer !!');
    }
  
  	else if(listing.state=='ReceivedByAggregator' ){
   		listing.state='SentToBank';
    }
  else{
  	throw new window.alert('Out of Stock !!');
  }
    
   return getAssetRegistry('org.acme.model.test.TransMon')
        .then(function(transmonListingRegistry) {
            // save the vegetable listing
            return transmonListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.test.ReceivedByBank} ReceivedByBank
       * @transaction 
 */
function ReceivedByBank(ReceivedByBank) 
{
    var listing = ReceivedByBank.listing;
  	if(listing.state=='IN_DELIVER_C'){
    	throw new window.alert('About to deliver to consumer !!');
    }
  
  	else if(listing.state=='SentToBank' ){
   		listing.state='RecievedByBank';
    }
  else{
  	throw new window.alert('Out of Stock !!');
  }
    
   return getAssetRegistry('org.acme.model.test.TransMon')
        .then(function(transmonListingRegistry) {
            // save the vegetable listing
            return transmonListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.test.SentToReceiver} SentToReceiver
       * @transaction 
 */
function SentToReceiver(SentToReceiver) 
{
    var listing = SentToReceiver.listing;
  	if(listing.state=='IN_DELIVER_C'){
    	throw new window.alert('About to deliver to consumer !!');
    }
  
  	else if(listing.state=='RecievedByBank' ){
   		listing.state='SentToReceiver';
    }
  else{
  	throw new window.alert('Out of Stock !!');
  }
    
   return getAssetRegistry('org.acme.model.test.TransMon')
        .then(function(transmonListingRegistry) {
            // save the vegetable listing
            return transmonListingRegistry.update(listing);
        });
}