<?php

class DomesticController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        $Params = $this->getAllParams();
        $this->view->controller = $Params["controller"];
        $this->_helper->layout->setLayout('domestic');
    }

    public function indexAction()
    {
        // action body
    }

    public function mallAction()
    {
        // action body
    }

    public function chainAction()
    {
        // action body
    }

    public function distributionAction()
    {
        // action body
    }


}







