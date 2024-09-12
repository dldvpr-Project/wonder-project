<?php

namespace App\Controller;

use App\Form\QuestionType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/question', name: 'question_')]
class QuestionController extends AbstractController
{
    #[Route('/ask', name: 'form')]
    public function index(Request $request): Response
    {
        $formQuestion = $this->createForm(QuestionType::class);

        $formQuestion->handleRequest($request);

        if ($formQuestion->isSubmitted() && $formQuestion->isValid()) {

        }

        return $this->render('question/index.html.twig', [
            'form' => $formQuestion->createView(),
        ]);
    }
}