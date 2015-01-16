<?php
// open connection to MySQL server
            $connection = mysql_connect('localhost', 'root', '')
                    or die('Unable to connect!');


            // select database for use
            mysql_select_db('ers') or die('Unable to select database!');
$query = mysql_query ("SELECT * FROM rates"); 
/*
while ($row = mysql_fetch_array($query)) {
        $currency = $row['currency'];
        echo $currency. "<br/>";
		
		$split = explode(' ', $currency);
		echo "me".$split[0]. "<br/>";
	//	$q = mysql_query ("UPDATE rates SET country = '$split[0]' where currency = '$currency'"); 
    }
*/	
	$query2 = mysql_query ("SELECT * FROM currencies where currency_name = 'Euro'"); 

while ($row2 = mysql_fetch_array($query2)) {
        $currency_id = $row2['id'];
		 $currency = $row2['country_id'];
		 $name = $currency." Euro";
        echo $currency. "<br/>";
		
		$q2 = mysql_query ("INSERT INTO rates (currency,country,currency_id,rate_per_USD,rate_to_USD,date_created) VALUES ('$name','$currency','$currency_id','0.723928','1.381352','2014-04-18 22:37:54')"); 
    }
?>