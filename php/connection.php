<?php
header('Content-Type: application/json');
$aResult = array();
$FILENAME = "connectID.txt";
if( !isset($_POST['funcName']) ) { $aResult['error'] = 'No function name!'; }
if( !isset($aResult['error']) ) {

    switch($_POST['funcName']) {
        case 'initFile':
            initFile();
            $aResult['result'] = True;
        break;
        case 'writeConnectionID':
            if(!isset($_POST['ID'])){$aResult['error'] = 'no ID given'; break;}
            writeConnectionID($_POST['ID']);
            $aResult['result'] = True;
        break;
        case 'readConnectionIDS':
               $aResult['result'] = readConnectionIDS();
        break;
        default:
           $aResult['error'] = 'function not found '.$_POST['funcName'].'!';
           break;
    }

}
echo json_encode($aResult);


// create or clear connections file.
function initFile(){
    global $FILENAME;
    $file = fopen($FILENAME, "w") or die ("Unable to open connections file!");
    fclose($file);
}
function readConnections(){
    global $FILENAME;
    $file = fopen($FILENAME, "r+") or die ("Unable to open connections file!");
    
    fclose($file);
}
function readConnectionIDS(){
    global $FILENAME;
    $array = file($FILENAME);
    //return [1, 2, 3];
    //return json_encode($array);
    return $array;
}

function writeConnectionID($id){
    global $FILENAME;
    $file = fopen($FILENAME, "r+") or die ("Unable to open connections file!");
    fseek($file, filesize($FILENAME));
    fwrite($file, $id . PHP_EOL);
    fclose($file);
}
?>