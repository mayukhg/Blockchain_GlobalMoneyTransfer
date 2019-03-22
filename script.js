/**
      * @param {org.acme.model.supplychain.SentToAggregator} makeOrderw
       * @transaction 
 */
function makeOrderw(SentToAggregator) 
{
    var listing = SentToAggregator.listing;
    if (listing.state == 'HARVEST') {
        throw new window.alert('Vegetable not ready for delivery !!');
    }
  	else if(listing.state=='DepositedWithWu'){
    	listing.state='SentToAggregator';
    }
  	else if(listing.state=='IN_DELIVER_W'){
    	throw new window.alert('Arriving soon at warehouse !!');
    }
  else if(listing.state=='DELIVERED_W'){
  		throw new window.alert('Already delivered at warehouse');
  }
    
   return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            // save the vegetable listing
            return vegetableListingRegistry.update(listing);
        });
   
}

/**
      * @param {org.acme.model.supplychain.Orderc} makeOrderc
       * @transaction 
 */
function makeOrderc(Orderc) 
{
    var listing = Orderc.listing;
  	if(listing.state=='IN_DELIVER_C'){
    	throw new window.alert('About to deliver to consumer !!');
    }
  
  	else if(listing.state=='DELIVERED_W' ){
   		listing.state='IN_DELIVER_C';
    }
  else{
  	throw new window.alert('Out of Stock !!');
  }
    
   return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            // save the vegetable listing
            return vegetableListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.supplychain.DepositedWithWu} harvest
       * @transaction 
 */
function harvest(DepositedWithWu){
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
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            // save the vegetable listing
            return vegetableListingRegistry.update(listing);
        });
}

/**
      * @param {org.acme.model.supplychain.ReceivedByAggregator} Deliver_w
       * @transaction 
 */

function Deliver_w(ReceivedByAggregator){
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
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            return vegetableListingRegistry.update(listing);
        });
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(assetRegistry) {
            return assetRegistry.update(vege);
        });
}

/**
      * @param {org.acme.model.supplychain.SentToBank} Deliver_c
       * @transaction 
 */

function Deliver_c(SentToBank){
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
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            return vegetableListingRegistry.update(listing);
        });
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(assetRegistry) {
            return assetRegistry.update(vege);
        });
}

/**
      * @param {org.acme.model.supplychain.ReceivedByBank} Deliver_c
       * @transaction 
 */

function Deliver_c(ReceivedByBank){
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
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            return vegetableListingRegistry.update(listing);
        });
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(assetRegistry) {
            return assetRegistry.update(vege);
        });
}

/**
      * @param {org.acme.model.supplychain.CreditedToReceipient} Deliver_c
       * @transaction 
 */

function Deliver_c(CreditedToReceipient){
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
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            return vegetableListingRegistry.update(listing);
        });
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(assetRegistry) {
            return assetRegistry.update(vege);
        });
}

/**
      * @param {org.acme.model.supplychain.ConfirmedByReceipient} Deliver_c
       * @transaction 
 */

function Deliver_c(ConfirmedByReceipient){
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
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            return vegetableListingRegistry.update(listing);
        });
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(assetRegistry) {
            return assetRegistry.update(vege);
        });
}


