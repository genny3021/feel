<?php
$product_ids = Db::getInstance()->getValue('SELECT `id_product` FROM `'._DB_PREFIX_.'cart_product` WHERE `id_cart` = "'.$id_cart.'"');	
	var_dump($product_ids);
foreach ( $product_ids as $product_id)	{
	$product_qty = Db::getInstance()->getValue('SELECT `quantity` FROM `'._DB_PREFIX_.'cart_product` WHERE `id_cart` = "'.$id_cart.' AND `id_product` = "'.$product_id.'"');
	$products .= '{
                           "product_id":"'. $product_id .'",
                           "product_qty":"'.$product_qty.'"
                      },';
	}
	?>