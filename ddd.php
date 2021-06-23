
<?php

$conn = mysql_connect("192.168.248.4", "root", "delta");
mysql_select_db("impact", $conn);
$articleid = '135037223';


$deltesql = "Select * from wm_article where id=$articleid";
$excteQueryUpd = mysql_query($deltesql);


require '/usr/share/php/MongoDB/autoload.php';

//$client = new MongoDB\Client("mongodb://192.168.248.61:27017");
$ctx = array(
    "ssl" => array(
        "verify_peer" => false,
        "verify_peer_name" => false,
        "verify_expiry" => false,
    )
);
$context = stream_context_create($ctx);
try {
    $client = new MongoDB\Client(
        'mongodb://aamadmin:Rix2Jag8@irmpl-shard-00-00-zame7.mongodb.net:27017,irmpl-shard-00-01-zame7.mongodb.net:27017,irmpl-shard-00-02-zame7.mongodb.net:27017/test?ssl=true&replicaSet=IRMPL-shard-0&authSource=admin&retryWrites=true&w=majority',
        array("ssl" => true),
        array("context" => $context)
    );
} catch (Exception $e) {
    echo 'Message: ' . $e->getMessage();
}


$ids = array("");

$collection = $client->impact->impactliveupdated;

for ($i = 0; $i < count($ids); $i++) {
    $collection->deleteMany(['articleid' => $ids[$i]]);
}


// echo json_encode($_POST['articleid']);

echo "Article Deleted successfully Thanks for your Time!";
