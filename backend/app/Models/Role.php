<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $primaryKey = 'role_id';

    protected $fillable = [
        'name',
    ];

    public function rolePositions()
    {
        return $this->hasMany(RolePosition::class, 'roleId', 'role_id');
    }

}
