
/**
      * @param {org.acme.model.supplychain.DepositedWithWu} deposit_wu
       * @transaction 
 */
function deposit_wu(DepositedWithWu){
	var listing=DepositedWithWu.listing;
  	if(listing.state=='ReadyForDeposit'){
    	listing.state='DepositedWithWu';
    }
  	else if(listing.state=='HARVESTED'){
    	throw new window.alert('Vegetable Already Harvested');
    }
  else if(listing.state=='DELIVERED_W'){
  	throw new window.alert('Vegetable Delivered at the warehouse');
  }
  else if(listing.state=='DELIVERED_C'){
  	throw new window.alert('Vegetable Delivered to the consumer');
  }
  	else{
    	throw new window.alert('Out For Delivery');
    }
  return getAssetRegistry('org.acme.model.supplychain.TransStatus')
        .then(function(transstatusListingRegistry) {
            // save the vegetable listing
            return transstatusListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.supplychain.SentToAggregator} sentto_aggr
       * @transaction 
 */
function sentto_aggr(SentToAggregator){
	var listing=SentToAggregator.listing;
  	if(listing.state=='DepositedWithWu'){
    	listing.state='SentToAggregator';
    }
  	else if(listing.state=='HARVESTED'){
    	throw new window.alert('Vegetable Already Harvested');
    }
  else if(listing.state=='DELIVERED_W'){
  	throw new window.alert('Vegetable Delivered at the warehouse');
  }
  else if(listing.state=='DELIVERED_C'){
  	throw new window.alert('Vegetable Delivered to the consumer');
  }
  	else{
    	throw new window.alert('Out For Delivery');
    }
  return getAssetRegistry('org.acme.model.supplychain.TransStatus')
        .then(function(transstatusListingRegistry) {
            // save the vegetable listing
            return transstatusListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.supplychain.ReceivedByAggregator} Deliver_w
       * @transaction 
 */

function receive_aggr(ReceivedByAggregator){
  var listing=ReceivedByAggregator.listing;

  if(listing.state=='SentToAggregator'){
    listing.state='ReceivedByAggregator';
  }
  else if(listing.state=='DELIVERED_W'){
   throw window.alert('Delivered at the warehouse');
  }
  else {
  	throw window.alert('Order is not for warehouse');
  }
  return getAssetRegistry('org.acme.model.supplychain.TransStatus')
        .then(function(transstatusListingRegistry) {
            // save the vegetable listing
            return transstatusListingRegistry.update(listing);
        });
 
}

/**
      * @param {org.acme.model.supplychain.SentToBank} Deliver_c
       * @transaction 
 */

function sentto_bank(SentToBank){
  var listing=SentToBank.listing;
  if(listing.state=='ReceivedByAggregator'){
    listing.state='SentToBank';
  }
  else if(listing.state=='DELIVERED_C'){
   throw window.alert('Delivered at the consumer');
  }
  else {
  	throw window.alert('Order is not for consumer');
  }
  return getAssetRegistry('org.acme.model.supplychain.TransStatus')
        .then(function(transstatusListingRegistry) {
            // save the vegetable listing
            return transstatusListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.supplychain.ReceivedByBank} Deliver_c
       * @transaction 
 */

function receive_bank(ReceivedByBank){
  var listing=ReceivedByBank.listing;
  if(listing.state=='SentToBank'){
    listing.state='ReceivedByBank';
  }
  else if(listing.state=='DELIVERED_C'){
   throw window.alert('Delivered at the consumer');
  }
  else {
  	throw window.alert('Order is not for consumer');
  }
  return getAssetRegistry('org.acme.model.supplychain.TransStatus')
        .then(function(transstatusListingRegistry) {
            // save the vegetable listing
            return transstatusListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.supplychain.CreditedToReceipient} Deliver_c
       * @transaction 
 */

function credit_recipient(CreditedToReceipient){
  var listing=CreditedToReceipient.listing;
  if(listing.state=='ReceivedByBank'){
    listing.state='CreditedToReceipient';
  }
  else if(listing.state=='DELIVERED_C'){
   throw window.alert('Delivered at the consumer');
  }
  else {
  	throw window.alert('Order is not for consumer');
  }
  return getAssetRegistry('org.acme.model.supplychain.TransStatus')
        .then(function(transstatusListingRegistry) {
            // save the vegetable listing
            return transstatusListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.supplychain.ConfirmedByReceipient} Deliver_c
       * @transaction 
 */

function conf_recipient(ConfirmedByReceipient){
  var listing=ConfirmedByReceipient.listing;
  if(listing.state=='CreditedToReceipient'){
    listing.state='ConfirmedByReceipient';
  }
  else if(listing.state=='DELIVERED_C'){
   throw window.alert('Delivered at the consumer');
  }
  else {
  	throw window.alert('Order is not for consumer');
  }
 return getAssetRegistry('org.acme.model.supplychain.TransStatus')
        .then(function(transstatusListingRegistry) {
            // save the vegetable listing
            return transstatusListingRegistry.update(listing);
        });
}


