<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['middleware' => ['auth'],'prefix' => 'api'], function ($router) 
{
     $router->get('me', 'AuthController@me');
     $router->post('refresh', 'AuthController@refresh');

     $router->post('getMenus', 'AuthController@getAllMenus');
     $router->post('testAccess', 'AuthController@testAccess');

   $router->group(['middleware' => 'authorised'], function($router) {
    $router->get('country', 'Master\CountryController@index');
    $router->get('zone', 'Master\zoneController@index');
    $router->get('state', 'Master\stateController@index');
    $router->get('area', 'Master\areaController@index');
    $router->get('district', 'Master\districtController@index');
    $router->get('city', 'Master\cityController@index');
    $router->get('product', 'Master\productController@index');
    $router->get('model', 'Master\modelController@index');
    $router->get('employee', 'Master\employeeController@index');
    $router->get('stockist', 'Master\stockController@index');
    $router->get('transport', 'Master\TransportController@index');
    $router->get('vehicle', 'Master\VehicleController@index');
    $router->get('tehsil', 'Master\TehsilController@index');
    $router->get('user', 'Master\UserController@index');
    $router->get('user_privilage', 'Master\UserPrivilageController@index');
    $router->get('dobooking', 'Transaction\DistOrderBooking@index');
    $router->get('dlrbooking', 'Transaction\DlrOrderBooking@index');
    $router->get('dispatch', 'Transaction\Dispatch@index');
    $router->get('distributor-dispatch-receiving', 'Transaction\DistributoDispatchReceiving@index');
    $router->get('distributor-dispatch', 'Transaction\DistributorDispatch@index');
    $router->get('dealer-dispatch-receiving', 'Transaction\DealerDispatchReceiving@index');

     $router->post('country/create', 'Master\CountryController@create');
     $router->get('country/edit/{id}', 'Master\CountryController@edit');
     $router->post('country/edit/{id}', 'Master\CountryController@update');
    
     $router->post('zone/create', 'Master\zoneController@create');
     $router->get('zone/edit/{id}', 'Master\zoneController@edit');
     $router->post('zone/edit/{id}', 'Master\zoneController@update');

     $router->get('state/create', 'Master\stateController@create');
     $router->post('state/create','Master\stateController@save');
     $router->get('state/edit/{id}', 'Master\stateController@edit');
     $router->post('state/update', 'Master\stateController@update');

     $router->get('area/create', 'Master\areaController@create');
     $router->post('area/save','Master\areaController@save');
     $router->get('area/edit/{id}', 'Master\areaController@edit');
     $router->post('area/update', 'Master\areaController@update');

    $router->get('district/create', 'Master\districtController@create');
    $router->post('district/create','Master\districtController@save');
    $router->get('district/edit/{id}', 'Master\districtController@edit');
    $router->post('district/update', 'Master\districtController@update');

    $router->get('city/create', 'Master\cityController@create');
    $router->post('city/create','Master\cityController@save');
    $router->get('city/edit/{id}', 'Master\cityController@edit');
    $router->post('city/update', 'Master\cityController@update');

    $router->post('product/create','Master\productController@save');
    $router->get('product/edit/{id}', 'Master\productController@edit');
    $router->post('product/update', 'Master\productController@update');

    $router->get('model/create', 'Master\modelController@create');
    $router->post('model/create','Master\modelController@save');
    $router->get('model/edit/{id}', 'Master\modelController@edit');
    $router->post('model/update', 'Master\modelController@update');


    $router->get('employee/create', 'Master\employeeController@create');
    $router->post('employee/create','Master\employeeController@save');
    $router->get('employee/edit/{id}', 'Master\employeeController@edit');
    $router->post('employee/update', 'Master\employeeController@update');

    $router->get('stockist/create', 'Master\stockController@create');
    $router->get('stockist/getdealer', 'Master\stockController@getdealerdata');
    $router->get('stockist/getdistributor', 'Master\stockController@getdistributordata');
    $router->get('stockist/getstates/{id}', 'Master\stockController@getstatesdata');
    $router->get('stockist/getDistrict/{id}', 'Master\stockController@getdistrictData');
    $router->get('stockist/getCity/{id}', 'Master\stockController@getcityData');
    $router->get('stockist/getTehsil/{id}', 'Master\stockController@getTehsilData');
    $router->post('stockist/create','Master\stockController@save');
    $router->get('stockist/edit/{id}', 'Master\stockController@edit');
    $router->post('stockist/update', 'Master\stockController@update');

    $router->get('transport/create', 'Master\TransportController@create');
    $router->post('transport/create', 'Master\TransportController@save');
    $router->get('transport/edit/{id}', 'Master\TransportController@edit');
    $router->post('transport/update', 'Master\TransportController@update');

    $router->get('vehicle/create', 'Master\VehicleController@create');
    $router->post('vehicle/create', 'Master\VehicleController@save');
    $router->get('vehicle/edit/{id}', 'Master\VehicleController@edit');
    $router->post('vehicle/update', 'Master\VehicleController@update');

    $router->get('tehsil/create', 'Master\TehsilController@create');
    $router->post('tehsil/create', 'Master\TehsilController@save');
    $router->get('edit-tehsil/{id}', 'Master\TehsilController@edit');
    $router->post('UpdateTehsilMaster', 'Master\TehsilController@update');

    $router->get('user/getUserName/{id}', 'Master\UserController@getUserData');
    $router->post('user/save', 'Master\UserController@save');
    $router->get('user/edit/{id}', 'Master\UserController@edit');
    $router->post('user/edit/{id}', 'Master\UserController@update');
  
    $router->post('user_privilage/save', 'Master\UserPrivilageController@save');
    $router->post('user_privilage/populate', 'Master\UserPrivilageController@populate');
   
   $router->get('dobooking/getState', 'Transaction\DistOrderBooking@getState');
   $router->get('dobooking/getModel/{pcode}', 'Transaction\DistOrderBooking@getModel');
   $router->get('dobooking/getdistributor/{stcode}', 'Transaction\DistOrderBooking@getDistributor');
   $router->post('dobooking/save', 'Transaction\DistOrderBooking@store');
   $router->get('dobooking/edit/{id}', 'Transaction\DistOrderBooking@edit');
   $router->post('dobooking/update', 'Transaction\DistOrderBooking@update');

   $router->get('dlrbooking/getDlrDist/{stcode}', 'Transaction\DlrOrderBooking@getDlrDist');
   $router->post('dlrbooking/save', 'Transaction\DlrOrderBooking@store');
   $router->get('dlrbooking/edit/{id}', 'Transaction\DlrOrderBooking@edit');
   $router->post('dlrbooking/edit/{head_id}', 'Transaction\DlrOrderBooking@update');
  
  $router->get('dispatch/getDistributor', 'Transaction\Dispatch@getDistributors');
  $router->get('dispatch/getDistOrder/{code}', 'Transaction\Dispatch@getDistOrder');
  $router->get('dispatch/geVehicle/{code}', 'Transaction\Dispatch@geVehicle');
  $router->get('dispatch/getDistOrderDtls/{order_no}', 'Transaction\Dispatch@getDistOrderDtls');
  $router->post('dispatch/save', 'Transaction\Dispatch@store');
  $router->get('dispatch/edit/{id}', 'Transaction\Dispatch@edit');
  $router->post('dispatch/edit/{head_id}', 'Transaction\Dispatch@update');

  $router->get('distributor-dispatch-receiving/getDistributor', 'Transaction\DistributorDispatchReceiving@getDistributors');
  $router->get('distributor-dispatch-receiving/getInvoices/{distcode}', 'Transaction\DistributorDispatchReceiving@getInvoices');
  $router->get('distributor-dispatch-receiving/getDispDtls/{invoice}', 'Transaction\DistributorDispatchReceiving@getDispDtls');
  $router->post('distributor-dispatch-receiving/save', 'Transaction\DistributorDispatchReceiving@update');

  $router->get('distributor-dispatch/getDistributor', 'Transaction\DistributorDispatch@getDistributors');
  $router->get('distributor-dispatch/getDealers/{code}', 'Transaction\DistributorDispatch@getDealers');
  $router->get('distributor-dispatch/getDlrOrdrs/{code}', 'Transaction\DistributorDispatch@getDlrOrdrs');
  $router->get('distributor-dispatch/getDlrOrdrdtls/{order_no}', 'Transaction\DistributorDispatch@getDlrOrdrdtls');
  $router->post('distributor-dispatch/save', 'Transaction\DistributorDispatch@store');
  $router->get('distributor-dispatch/edit/{id}', 'Transaction\DistributorDispatch@edit');
  $router->post('distributor-dispatch/edit/{head_id}', 'Transaction\DistributorDispatch@update');


  $router->get('dealer-dispatch-receiving/getDealers', 'Transaction\DealerDispatchReceiving@getDealers');
  $router->get('dealer-dispatch-receiving/getInvoices/{dlrcode}', 'Transaction\DealerDispatchReceiving@getInvoices');
  $router->get('dealer-dispatch-receiving/getDispDtls/{invoice}', 'Transaction\DealerDispatchReceiving@getDispDtls');
   $router->post('/dealer-dispatch-receiving/save', 'Transaction\DealerDispatchReceiving@update');

});
});



$router->group(['prefix' => 'api'], function () use ($router) 
{
   $router->post('register', 'AuthController@register');
   $router->post('login', 'AuthController@login');
   $router->post('logout', 'AuthController@logout');

});
