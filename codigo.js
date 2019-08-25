var store =  {latitude: 243.23, longitude: -23.23};
var store2 = {latitude: 123.73, longitude: -323.2};
var store3 = {latitude: 21.23, longitude: 123.6};
var store4 = {latitude: -180.23, longitude: -1.36};
var store5 = {latitude: 23.12, longitude: 2.353};
var store6 = {latitude: -53.123, longitude: -94.2};

var storeslat = {store4,store6,store3,store5,store2,store};
var storeslong = {store2,store6,store,store4,store5,store3};

var delivery = {latitude: 100, longitude: -50};
var n = 0 ;
n = storeslat.size();
var n2 = storeslong.size();
var latrespos = 0;
var longrespos = 0;
if(delivery[0] > (storeslat[n].latitude + storeslat[0].latitude)/2){
    for(var i = n ; i >= (storeslat[n].latitude + storeslat[0].latitude)/2 ; i--){
        if(delivery[0] <= storeslat[i] && delivery[0] >= storeslat[i-1]){
          latrespos = i;
        }
    }

}
else{
  for(var j = 0 ; j <= (storeslat[n].latitude + storeslat[0].latitude)/2 ; j++){
      if(delivery[0] >= storeslat[j] && delivery[0] <= storeslat[j+1]){
        latrespos = j;
      }
  }
}

if(delivery[1] > (storeslong[n2].longitude + storeslong[0].longitude)/2){
    for(var k = n2 ; k >= (storeslong[n2].longitude + storeslong[0].longitude)/2 ; k--){
        if(delivery[1] <= storeslong[k] && delivery[1] >= storeslong[k-1]){
          longrespos = k;
        }
    }

}
else{
  for(var l = 0 ; l <= (storeslong[n2].longitude + storeslong[0].longitude)/2 ; l++){
      if(delivery[1] >= storeslong[l] && delivery[1] <= storeslong[l+1]){
        longrespos = l;
      }
  }
}
