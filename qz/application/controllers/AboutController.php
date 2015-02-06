<?php

class AboutController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        $Params = $this->getAllParams();
        $this->view->controller = $Params["controller"];
        $this->_helper->layout->setLayout('about');
    }

    public function indexAction()
    {
        // action body
    }


}

