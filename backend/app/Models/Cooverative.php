<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cooverative extends Model
{
    protected $table = 'cooperatives';
    protected $primaryKey = 'cooperative_id';
    protected $guarded = 'cooperative_id';

    public function managements()
    {
        return $this->hasMany(CooperativeManagement::class, 'cooperativeId', 'cooperative_id');
    }

    public function klus()
    {
        return $this->hasMany(CooperativeKLU::class, 'cooperativeId', 'cooperative_id');
    }

    public function legalStages()
    {
        return $this->hasMany(CooperativeLegalStage::class, 'cooperativeId', 'cooperative_id');
    }

}
