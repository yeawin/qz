<?php

class InternationalController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        $Params = $this->getAllParams();
        $this->view->controller = $Params["controller"];
        $this->_helper->layout->setLayout('international');
    }

    public function indexAction()
    {
        // action body
    }

    public function chinaAction()
    {
        // 陶瓷产品
    }

    public function serviceAction()
    {
        // action body
    }

    public function otherAction()
    {
        // action body
    }


}







