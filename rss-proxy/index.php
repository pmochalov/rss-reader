<?php
$currentOrigin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

header('Content-Type: application/json; charset=utf-8'); 

header("Access-Control-Allow-Origin: $currentOrigin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, PUT, PATCH, GET, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, ");

if (!isset($_GET['url'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Параметр "url" не передан'], JSON_UNESCAPED_UNICODE);

    return;
}

$rssUrl = $_GET['url'];

// Проверяем, является ли URL валидным
if (filter_var($rssUrl, FILTER_VALIDATE_URL)) {
    try {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $rssUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);  
        curl_setopt($ch, CURLOPT_TIMEOUT, 10); 

        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            http_response_code(500);
            echo json_encode(['error' => 'Ошибка cURL: ' . curl_error($ch)], JSON_UNESCAPED_UNICODE); 
            curl_close($ch);
            exit;
        }

        curl_close($ch);

        // SimpleXML
        $xml = simplexml_load_string($response);
        
        if ($xml === false) {
            http_response_code(500);
            echo json_encode(['error' => 'Невозможно распарсить RSS-ленту'], JSON_UNESCAPED_UNICODE); 
            exit;
        }
        
        $jsonArray = [
            'title' => (string)$xml->channel->title,
            'link' => (string)$xml->channel->link,
            'description' => (string)$xml->channel->description,
            'items' => []
        ];

        foreach ($xml->channel->item as $item) {
            $jsonArray['items'][] = [
                'title' => (string)$item->title,
                'link' => (string)$item->link,
                'pubDate' => (string)$item->pubDate,
                'description' => (string)$item->description
            ];
        }

        echo json_encode($jsonArray, JSON_UNESCAPED_UNICODE);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Произошла ошибка: ' . $e->getMessage()], JSON_UNESCAPED_UNICODE);
    }

} else {
    http_response_code(400);
    echo json_encode(['error' => 'Неверный URL'], JSON_UNESCAPED_UNICODE); 
}
















