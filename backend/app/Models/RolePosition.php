<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RolePosition extends Model
{
    protected $table = 'role_positions';
    protected $primaryKey = 'role_id';
    public $incrementing = false; // karena bukan auto-increment
    public $timestamps = false; // karena tidak pakai created_at & updated_at bawaan Laravel

    protected $fillable = [
        'role_id',
        'roleId',
        'position',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class, 'roleId', 'role_id');
    }

}
