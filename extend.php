<?php

namespace Duzhenye\HelloPages;

use Duzhenye\HelloPages\Controllers\HelloWorld;
use Forumkit\Extend;

return [
    (new Extend\Frontend('site'))
        ->js(__DIR__.'/js/dist/site.js')
         ->css(__DIR__.'/less/site.less')
         ->route('/about-us', 'about-us')
         ->route('/troubleshooting', 'Troubleshooting'),

    new Extend\Locales(__DIR__.'/locale'),

    /*
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    */

    /*

    (new Extend\View())
        ->namespace('duzhenye-hellos', __DIR__.'/views'),

    (new Extend\Routes('site'))
        ->get('/HelloWorld', 'duzhenye-hellos.helloworld', HelloWorld::class),
    */
];
