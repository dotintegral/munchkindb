<?php
namespace AppBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends Controller
{
    public function indexAction(Request $request)
    {

        $response = new Response();
        $response->setPublic();
        $response->setMaxAge($this->container->getParameter('short_cache'));

        // decklist of the week
        $dbh = $this->getDoctrine()->getConnection();
        $rows = $dbh->executeQuery("SELECT decklist from highlight where id=?", array(1))->fetchAll();
        $decklist = count($rows) ? json_decode($rows[0]['decklist']) : null;

        // recent decklists
        $decklists_recent = $this->get('decklists')->recent(0, 10, FALSE)['decklists'];

        return $this->render('AppBundle:Default:index.html.twig',
                array(
                        'pagetitle' => "Munchkin CCG Cards and Deckbuilder",
                        'pagedescription' => "Build your deck for the Munchkin Collectible Card Game, the CCG by Steve Jackson Games. Browse the cards and the thousand of decklists submitted by the community. Publish your own decks and get feedback.",
                        'decklists' => $decklists_recent,
                        'dotw' => $decklist,
                        'url' => $request->getRequestUri()
                ), $response);


    }
}
