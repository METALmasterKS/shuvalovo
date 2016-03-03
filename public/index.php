<?php

require '../app/bootstrap.php';
$twigView = new \Slim\Views\Twig();
// Configure Twig
$twigView->parserOptions = array(
  'autoescape'       => true,
  'auto_reload'      => true,
  'cache'            => realpath('../app/tmp'),
  'charset'          => 'utf-8',
  'optimizations'    => -1,
  'strict_variables' => false,
);
// Configure Slim
$app = new \Slim\Slim(array(
  'debug'          => true,
  'log.enabled'    => true,
  'log.level'      => \Slim\Log::WARN,
  'templates.path' => '../app/views',
  'view'           => $twigView
));

$app->view->appendData(['base_href' => $app->request()->getScheme().'://'.$app->request()->getHost(), 'uri' => $app->request()->getResourceUri()]);
$app->view->appendData(require '../app/config/navigation.php');


//routes
$app->get('/', function () use ($app) {
  $app->render('index.html');
});

$app->group('/html', function () use ($app) {
    $pagePaths = glob("../app/views/*.html");
    foreach ($pagePaths as $pagePath){
        $document = basename($pagePath);
        if ($document == 'index.html')
            continue;
        $app->get('/'.$document, function () use ($app, $document) {
            $app->render($document);
        });
    }
    
    $app->post('/contacts.html', function () use ($app) {
        $errors = array();
        $name = $app->request->post('n585');
        $email = $app->request->post('m585');
        $text = $app->request->post('t585');
        $post = $app->request->post();
        if (!preg_match("/^(([A-Za-zабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]+[\s\-]{0,2})+)+$/", $name))
            $errors[] = "Проверьте правильность ввода имени";
        if (!filter_var($email, FILTER_VALIDATE_EMAIL))
            $errors[] = "Проверьте правильность ввода адреса электронной почты";
        if (trim($text) == null)
            $errors[] = "Ваше сообщение не должно быть пустым";
        $text = strip_tags(trim($text));
        if (count($errors) == 0) {
            $mail = new PHPMailer;
            $mail->CharSet = 'UTF-8';
            $mail->setFrom("noreply@".$app->request()->getHost(), 'Усадьба у озера');
            $mail->addAddress('9991934@mail.ru');     
            $mail->addReplyTo($email, $name);
            $mail->isHTML(true);                          
            $mail->Subject = 'Обратная связь с сайта'.$app->request()->getHost();
            //$mail->Body = "$name</br>$text";
            $mail->msgHTML("$name</br>$text");
            $mail->AltBody = "$name - $text";

            if (!$mail->send()) {
                $app->flashNow('error', 'Что то пошло не так, не удалось отправить сообщение. '.$mail->ErrorInfo);
            } else {
                $post = array();
                $app->flash('success', 'Ваше сообщение отправлено.');
                $app->redirect($app->request->getPath());
            }

        } else {
            $app->flashNow('error', '<li>'.implode('<li>',$errors));
        }
        
        $app->render('contacts.html', array('post' => $post));
    });
});



// Run it
$app->run();