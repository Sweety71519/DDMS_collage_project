<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Models\Master\StockistMaster;
use App\Models\Master\EmployeeMaster;
class User extends Model implements AuthenticatableContract, AuthorizableContract, JWTSubject
{
    use Authenticatable, Authorizable;
    protected $table="userinformation";
    protected $primaryKey="id";
    protected $hidden = [
        'password',
      
    ];
    
     /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
    public function getUserTypeAttribute($value)
      {
        $value=strtolower($value);
        return ucfirst($value);
      }
     public function getIsactiveAttribute($value)
      {
        if($value)
        {
          return 'Active';
        }
        else
        {
          return 'In-Active';
        }
    
    }
    public function getEmployeecodeAttribute($value)
    {

     $name= @StockistMaster::where('distributorcode',$value)->first()->name;
     if(!$name)
     {
      $name= @EmployeeMaster::where('employeecode',$value)->first()->employeename;
     }
    return $name;

    }

 
}
