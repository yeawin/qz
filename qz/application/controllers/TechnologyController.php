<?php

class TechnologyController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        $Params = $this->getAllParams();
        $this->view->controller = $Params["controller"];
        $this->_helper->layout->setLayout('technology');
    }

    public function indexAction()
    {
        // action body
    }

    public function instructionAction()
    {
        // action body
    }

    public function machineryAction()
    {
        // action body
    }

    public function otherAction()
    {
        // action body
    }


}







