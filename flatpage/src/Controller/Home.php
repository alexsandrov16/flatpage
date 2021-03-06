<?php
namespace FlatPage\App\Controller;

defined('FLATPAGE') || die;

use FlatPage\Core\File\Json;

/**
 * Site Controller class
 */
class Home 
{
    public function index()
    {
        view(__FUNCTION__, [
            'title'       => env('title'),
            'description' => env('description'),
            'content'     => Json::get(FP_PAGES . 'home'),
            'menu'        => Json::get(FP_CFG.'data')['menu']
        ]);
    }
}
