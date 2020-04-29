<?php
header('Content-Type: application/json');
$aResult = array();

if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function name!'; }

if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

if( !isset($aResult['error']) ) {

    switch($_POST['functionname']) {
        case 'readConnectionIDS':
               $aResult['result'] = readConnectionIDS();
           break;
        default:
           $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
           break;
    }

}
echo json_encode($aResult);

$FILENAME = "connectID.txt";
// create or clear connections file.
function initFile(){
    global $FILENAME;
    $file = fopen($FILENAME, "w");
    fclose($file);
}
function readConnections(){
    global $FILENAME;
    $file = fopen($FILENAME, "r+") or die ("Unable to open connections file!");
    
    fclose($file);
}
function readConnectionIDS(){
    $array = file($FILENAME);
    return $array;
}

function writeConnectionID($id){
    global $FILENAME;
    $file = fopen($FILENAME, "r+") or die ("Unable to open connections file!");
    fseek($file, filesize($FILENAME));
    fwrite($file, $id);
    fclose($file);
}
?>