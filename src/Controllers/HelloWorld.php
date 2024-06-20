<?php

namespace Duzhenye\HelloPages\Controllers;

use Illuminate\Contracts\View\Factory;
use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class HelloWorld implements RequestHandlerInterface
{
    protected $viewRenderer;

    /**
     * @var Factory
     */
    protected $view;

    public function __construct(Factory $view)
    {
        $this->view = $view;
    }

    public function handle(Request $request): ResponseInterface
    {
        $title = '世界您好！';
        $content = '这是页面的内容。';

        $html = $this->view->make('duzhenye-hellos::page',compact('title', 'content'))->render();
        //$html = "<h1>Hello World</h1>";

        return new HtmlResponse($html);
    }
}
