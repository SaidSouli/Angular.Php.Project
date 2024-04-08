<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'config/database.php';
 
try {
    // get record ID
    $id = isset($_GET['id']) ? $_GET['id'] : die('ERROR: Record ID not found.');
    header("content-type:text/html; charset=UTF-8");
    // delete query
    $query = "DELETE FROM products WHERE p_id = ?";
    $stmt = $con->prepare($query);
    $stmt->bindParam(1, $id);
     
    if($stmt->execute()){
        // redirect to read records page and 
        // tell the user record was deleted
       echo json_encode(array('result'=>'success'));
    } else {
        echo json_encode(array('result'=>'fail', 'message' => 'Failed to delete the product.'));
    }
}
 
// show error
catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
?>
