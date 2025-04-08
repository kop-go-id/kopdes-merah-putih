<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    //

    protected $primaryKey = 'district_id';
    protected $fillable = ['province_code', 'name', 'code'];

    public function province()
    {
        return $this->belongsTo(Province::class, 'province_code', 'code');
    }

    public function subdistricts()
    {
        return $this->hasMany(Subdistrict::class);
    }
}
