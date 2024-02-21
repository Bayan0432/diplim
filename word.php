<?php

require_once 'vendor/autoload.php';

$document = new \PhpOffice\PhpWord\TemplateProcessor('Банкротство.docx');

$uploadDir =  __DIR__;
$outputFile = 'doc_full.docx';

$uploadFile = $uploadDir . '\\' . basename($_FILES['file']['name']);
move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile);

$name = $_POST['name'];
$adress = $_POST['adress'];
$tel = $_POST['tel'];
$gmail = $_POST['gmail'];
$birth = $_POST['birth'];
$namesud = $_POST['namesud'];
$adresssud = $_POST['adresssud'];
$cityindex = $_POST['cityindex'];
$namesudii = $_POST['namesudii'];
$summadolga = $_POST['summadolga'];
$creditori = $_POST['creditori'];
$istochnicdochoda = $_POST['istochnicdochoda'];
$nedvigimost = $_POST['nedvigimost'];
$dvigimost = $_POST['dvigimost'];
$about = $_POST['about'];
$file = $_POST['file'];


$document->setValue('name', $name);
$document->setValue('adress', $adress);
$document->setValue('tel', $tel);
$document->setValue('gmail', $gmail);
$document->setValue('birth', $birth);
$document->setValue('namesud', $namesud);
$document->setValue('adresssud', $adresssud);
$document->setValue('cityindex', $cityindex);
$document->setValue('namesudii', $namesudii);
$document->setValue('summadolga', $summadolga);
$document->setValue('creditori', $creditori);
$document->setValue('istochnicdochoda', $istochnicdochoda);
$document->setValue('nedvigimost', $nedvigimost);
$document->setValue('dvigimost', $dvigimost);
$document->setValue('about', $about);
$document->setImageValue('image', array('path' => $uploadFile, 'width' => 120, 'height' => 120, 'ratio' => false));

$document->saveAs($outputFile);


// Имя скачиваемого файла
$downloadFile = $outputFile;

// Контент-тип означающий скачивание
header("Content-Type: application/octet-stream");

// Размер в байтах
header("Accept-Ranges: bytes");

// Размер файла
header("Content-Length: ".filesize($downloadFile));

// Расположение скачиваемого файла
header("Content-Disposition: attachment; filename=".$downloadFile);  

// Прочитать файл
readfile($downloadFile);


unlink($uploadFile);
unlink($outputFile);