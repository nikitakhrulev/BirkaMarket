<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require phpmailer/src/Exception.php;
    require phpmailer/src/PHPMailer.php;

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);



    $mail->setFrom('nikita.khrulev00@gmail.com', 'Nikita');
    $mail->addAddress('dubblerner.2@gmail.com');
    $mail->Subject = 'Тестовое письмо';



    $body = '<h1>Это наше первое письмо</h1>';

    if(trim(!empty($_POST['name']))) {
        $body.= '<p><strong>Имя:</strong> ' .$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body.= '<p><strong>E-mail:</strong> ' .$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['phone']))) {
        $body.= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p>';
    }
    if(trim(!empty($_POST['question']))) {
        $body.= '<p><strong>Вопрос:</strong> ' . $_POST['question'] . '</p>';
    }


    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка отправки формы';
    } else {
        $message = 'Форма отправлена успешно';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>