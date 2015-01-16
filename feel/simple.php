<?php
/**
 * PHPExcel
 *
 * Copyright (C) 2006 - 2013 PHPExcel
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category   PHPExcel
 * @package    PHPExcel
 * @copyright  Copyright (c) 2006 - 2013 PHPExcel (http://www.codeplex.com/PHPExcel)
 * @license    http://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt	LGPL
 * @version    1.7.9, 2013-06-02
 */

/** Error reporting */
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
date_default_timezone_set('Europe/London');

define('EOL',(PHP_SAPI == 'cli') ? PHP_EOL : '<br />');

/** Include PHPExcel */
require_once 'excel/PHPExcel.php';


// Create new PHPExcel object

$nn = new PHPExcel();

// Set document properties

$nn->getProperties()->setCreator("Genevieve Osuorji")
							 ->setLastModifiedBy("Genevieve Osuorji")
							 ->setTitle("PHPExcel Test Document")
							 ->setSubject("PHPExcel Test Document")
							 ->setDescription("Test document for PHPExcel, generated using PHP classes.")
							 ->setKeywords("office PHPExcel php")
							 ->setCategory("Test result file");


// Add some data
/*$nn->getActiveSheet()->getStyle('A20:Z20')->getFill()->applyFromArray(
    array(
        'type'       => PHPExcel_Style_Fill::FILL_SOLID,
        'startcolor' => array('rgb' => 'FFFFFF'),
    )
); */
$styleArray1 = array(

'font' => array(

'bold' => true,
)
);
//continuous assessment style
$cArray = array(

'font' => array(

'bold' => true,
'size'  => 25,
'name'  => 'Times'

)
);

//school name style
$nArray = array(

'font' => array(

'bold' => true,
'size'  => 35,
'name'  => 'Times'

)
);
//Class statistics header
$styleCell = array(

'font' => array(

'bold' => true,
'size'  => 14,
'name'  => 'Times'

)
);
//Class statistics detail values
$styleVal = array(

'font' => array(

'size'  => 12,
'name'  => 'Times'

)
);


//$objPHPExcel
$nn->getDefaultStyle()->getFont()
    ->setName('Times')
    ->setSize(12);



//*$nn->getActiveSheet()->getStyle('A11:ZZ11')->applyFromArray($styleArray);

//$nn->getActiveSheet()->getStyle('A1:ZZ1')->getBorders()->getBottom()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);


//$nn->getActiveSheet()->getStyle('A1:ZZ1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
//$nn->getActiveSheet()->getStyle('A2:ZZ2')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

//*$nn->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
$nn->getActiveSheet()->getColumnDimension('A')->setWidth(8);
$nn->getActiveSheet()->getColumnDimension('B')->setWidth(35);

/*$objDrawing = new PHPExcel_Worksheet_Drawing();
      $objDrawing->setWorksheet($objWorksheet);
      $objDrawing->setName("name");
      $objDrawing->setDescription("Description");
      $objDrawing->setPath('images/nemlogo.png');
      $objDrawing->setCoordinates('A1');
      $objDrawing->setOffsetX(1);
      $objDrawing->setOffsetY(5);

*/

//merge cells for images
//$nn->getActiveSheet()->mergeCells('A20:Z26');
$nn->getActiveSheet()->mergeCells('P1:Q5');

$objDrawing = new PHPExcel_Worksheet_Drawing();
$objDrawing->setName('SERMS_LOGO');
$objDrawing->setDescription('SERMS_LOGO');
$objDrawing->setPath('images/nemlogo.png');
$objDrawing->setCoordinates('P1');
$objDrawing->setOffsetX(1);
$objDrawing->setOffsetY(5);
$objDrawing->setWorksheet($nn->getActiveSheet());

$nn->getActiveSheet()->mergeCells('R1:AL3');
$nn->getActiveSheet()->setCellValue('R1' , 'DEOGRATIAS INTERNATIONAL SCHOOL');
$nn->getActiveSheet()->getStyle('R1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$nn->getActiveSheet()->getStyle('R1')->applyFromArray($nArray);

$nn->getActiveSheet()->mergeCells('R4:AL4');
$nn->getActiveSheet()->setCellValue('R4' , 'MOTTO: SHINING TO A GREATER FUTURE');
$nn->getActiveSheet()->getStyle('R4')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$nn->getActiveSheet()->getStyle('R4')->applyFromArray($styleCell);

$nn->getActiveSheet()->mergeCells('R5:AL6');
$nn->getActiveSheet()->setCellValue('R5' , 'CONTINUOUS ASSESSMENT');
$nn->getActiveSheet()->getStyle('R5')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$nn->getActiveSheet()->getStyle('R5')->applyFromArray($cArray);

$nn->getActiveSheet()->mergeCells('C5:G5');
$nn->getActiveSheet()->setCellValue('C5' , 'CLASS:');
$nn->getActiveSheet()->getStyle('C5')->applyFromArray($styleCell);
$nn->getActiveSheet()->mergeCells('H5:M5');
$nn->getActiveSheet()->getStyle('H5')->applyFromArray($styleVal);
$nn->getActiveSheet()->setCellValue('H5' , 'NURSERY TWO ORANGE ');

$nn->getActiveSheet()->mergeCells('C6:G6');
$nn->getActiveSheet()->setCellValue('C6' , 'TERM:');
$nn->getActiveSheet()->getStyle('C6')->applyFromArray($styleCell);
$nn->getActiveSheet()->mergeCells('H6:M6');
$nn->getActiveSheet()->getStyle('H6')->applyFromArray($styleVal);
$nn->getActiveSheet()->setCellValue('H6' , 'SECOND');

$nn->getActiveSheet()->mergeCells('C7:G7');
$nn->getActiveSheet()->setCellValue('C7' , 'SESSION: ');
$nn->getActiveSheet()->getStyle('C7')->applyFromArray($styleCell);
$nn->getActiveSheet()->mergeCells('H7:M7');
$nn->getActiveSheet()->getStyle('H7')->applyFromArray($styleVal);
$nn->getActiveSheet()->setCellValue('H7' , '2012/2013');

$nn->getActiveSheet()->mergeCells('C8:G8');
$nn->getActiveSheet()->setCellValue('C8' , 'CLASS TEACHER:');
$nn->getActiveSheet()->getStyle('C8')->applyFromArray($styleCell);
$nn->getActiveSheet()->mergeCells('H8:M8');
$nn->getActiveSheet()->getStyle('H8')->applyFromArray($styleVal);
$nn->getActiveSheet()->setCellValue('H8' , 'MISS MERCY');


$nn->getActiveSheet()->mergeCells('AS6:AU6');
$nn->getActiveSheet()->setCellValue('AS6' , 'NO PRESENT:');
$nn->getActiveSheet()->getStyle('AS6')->applyFromArray($styleCell);
$nn->getActiveSheet()->getStyle('AW6')->applyFromArray($styleVal);
$nn->getActiveSheet()->setCellValue('AW6' , '20');
$nn->getActiveSheet()->getStyle('AY6')->applyFromArray($styleCell);
$nn->getActiveSheet()->mergeCells('AY6:BA6');
$nn->getActiveSheet()->setCellValue('AY6' , 'SIGN DATE: ');
$nn->getActiveSheet()->getStyle('BB6')->applyFromArray($styleVal);
$nn->getActiveSheet()->mergeCells('BB6:BD6');
$nn->getActiveSheet()->setCellValue('BB6' , 'IUYFVGH');

$nn->getActiveSheet()->mergeCells('AS7:AU7');
$nn->getActiveSheet()->setCellValue('AS7' , 'NO ABSENT:');
$nn->getActiveSheet()->getStyle('AS7')->applyFromArray($styleCell);
$nn->getActiveSheet()->getStyle('AW7')->applyFromArray($styleVal);
$nn->getActiveSheet()->setCellValue('AW7' , '20');
$nn->getActiveSheet()->getStyle('AY7')->applyFromArray($styleCell);
$nn->getActiveSheet()->mergeCells('AY7:BA7');
$nn->getActiveSheet()->setCellValue('AY7' , 'HEAD TEACHER:');
$nn->getActiveSheet()->getStyle('BB7')->applyFromArray($styleVal);
$nn->getActiveSheet()->mergeCells('BB7:BD7');
$nn->getActiveSheet()->setCellValue('BB7' , 'N. MORAH');

$nn->getActiveSheet()->mergeCells('AS8:AU8');
$nn->getActiveSheet()->setCellValue('AS8' , 'NO PASSED:');
$nn->getActiveSheet()->getStyle('AS8')->applyFromArray($styleCell);
$nn->getActiveSheet()->getStyle('AW8')->applyFromArray($styleVal);
$nn->getActiveSheet()->setCellValue('AW8' , '20');
$nn->getActiveSheet()->getStyle('AY8')->applyFromArray($styleCell);
$nn->getActiveSheet()->mergeCells('AY8:BA8');
$nn->getActiveSheet()->setCellValue('AY8' , 'SIGN DATE: ');
$nn->getActiveSheet()->getStyle('BB8')->applyFromArray($styleVal);
$nn->getActiveSheet()->mergeCells('BB8:BD8');
$nn->getActiveSheet()->setCellValue('BB8' , 'SYEGFFGGF');


$subjects = array("SCIENCE", "MATHEMATICS", "ENGLISH", "READING","WRITING","PRIMARY SCIENCE", "HEALTH EDUCATION", "PHYSICAL EDUCATION","COMPUTER SCIENCE","AGRIC SCIENCE","ARTS","RHYME","GRANDTOTAL","AVERAGE" ,"POSITION", "REMARKS");
 $let = array("C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ",
"BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ",
"CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ");


 $n = 10;
 $v = 11;
 $x = 0;
 $c = 0;
 
 $nn->getActiveSheet()->getStyle('A'.$n.':ZZ'. $n)->applyFromArray($styleArray1);
$nn->getActiveSheet()->getStyle('A'.$v.':ZZ'.$v)->applyFromArray($styleArray1);
 
 
//echo $let[67] . "<br/>";
// merging header cells and writing to them
for ($x = 0, $s = 0; $x <= count($let), $s <= count($subjects);  $s++) {
//echo $y;
$c = 4 + $x;

if ($c > count($let)){
break;
}

else {

	if ($s == (count($subjects) - 4)){
	$nn->getActiveSheet()->mergeCells($let[$x]. $n .':'. $let[$x]. $v);
	$nn->getActiveSheet()->setCellValue($let[$x]. $n , $subjects[$s]);
	$nn->getActiveSheet()->getStyle($let[$x]. $n .':'. $let[$x]. $v)->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	$nn->getActiveSheet()->getStyle($let[$x]. $n)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$nn->getActiveSheet()->getStyle($let[$x]. $n)->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	$nn->getActiveSheet()->getColumnDimension($let[$x])->setWidth(17);
	$x++;
	}
	elseif ($s == (count($subjects) - 3)){
	$nn->getActiveSheet()->mergeCells($let[$x]. $n .':'. $let[$x]. $v);
	$nn->getActiveSheet()->setCellValue($let[$x]. $n , $subjects[$s]);
	$nn->getActiveSheet()->getStyle($let[$x]. $n . ':' .$let[$x]. $v)->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	$nn->getActiveSheet()->getStyle($let[$x]. $n)->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	$nn->getActiveSheet()->getColumnDimension($let[$x])->setWidth(15);
	$x++;
	}
	elseif ($s == (count($subjects) - 2)){
	$nn->getActiveSheet()->mergeCells($let[$x]. $n .':'. $let[$x]. $v);
	$nn->getActiveSheet()->setCellValue($let[$x]. $n , $subjects[$s]);
	$nn->getActiveSheet()->getStyle($let[$x]. $n .":". $let[$x]. $v)->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	$nn->getActiveSheet()->getStyle($let[$x]. $n)->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	$nn->getActiveSheet()->getColumnDimension($let[$x])->setWidth(15);
	$x++;
	}
	elseif ($s == (count($subjects) - 1)){ //the last item in the array
	$nn->getActiveSheet()->mergeCells($let[$x]. $n .':'. $let[$x]. $v);
	$nn->getActiveSheet()->setCellValue($let[$x]. $n , $subjects[$s]);
	$nn->getActiveSheet()->getStyle($let[$x]. $n .":" .$let[$x]. $v)->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	$nn->getActiveSheet()->getStyle($let[$x]. $n .":" .$let[$x]. $v)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	$nn->getActiveSheet()->getStyle($let[$x]. $n)->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	$nn->getActiveSheet()->getColumnDimension($let[$x])->setWidth(15);
	$x++;
	}
	
	elseif ($s < count($subjects)){
	$nn->getActiveSheet()->mergeCells($let[$x]. $n .':'.$let[$c]. $n);
	$nn->getActiveSheet()->setCellValue($let[$x]. $n , $subjects[$s]);
	$nn->getActiveSheet()->getStyle($let[$x]. $n )->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	$nn->getActiveSheet()->getColumnDimension($let[$x])->setWidth(5);
	$nn->getActiveSheet()->getColumnDimension($let[$x + 1])->setWidth(5);
	$nn->getActiveSheet()->getColumnDimension($let[$x + 2])->setWidth(5);
	$nn->getActiveSheet()->getColumnDimension($let[$x + 3])->setWidth(7);
	$x = $x + 5;
	}
	
	else {
	break;}
}

}
$nn->getActiveSheet()->getStyle('A'. $n .':'.$let[$x-1]. $n  )->getBorders()->getBottom()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
$nn->getActiveSheet()->getStyle('A'. $n .':'.$let[$x-1]. $n  )->getBorders()->getTop()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);

$nn->getActiveSheet()->getStyle('A'.$n .':'.$let[$x-1]. $n)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$nn->getActiveSheet()->getStyle('A'.$n .':'.$let[$x-1]. $v)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
 //$nn->getActiveSheet()->mergeCells('A7:DD');
 
//insert CA headers
$nn->getActiveSheet()
			->setCellValue('A'. $v, 'S/No')
			->setCellValue('B'. $v, 'PUPILS');
$nn->getActiveSheet()->getStyle('B'. $n . ':B'. $v)->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);

 $ny = 11;

 $ca = array("T1", "T2","T3","EX","Total");
for ($xy = 0, $sy = 0, $ss = 0; $xy <= count($let), $sy <= count($ca);  $xy++, $sy++, $ss++) {
	$nn->getActiveSheet()->getStyle($let[0]. $ny)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
	$nn->getActiveSheet()->getStyle($let[0]. $ny )->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	
	if ($sy == (count($ca) - 1)){ //if "total"
	$nn->getActiveSheet()->getStyle($let[$xy]. $ny)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
	$nn->getActiveSheet()->getStyle($let[$xy]. $ny )->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	}
 if ($sy == (count($ca))){ //if reaches end of array
	
$sy = 0; //reiterate array

	if ($ss < (count($subjects)*5 - 20)){ //to stop iteration from getting to grand total, position, remark etc
	 
		$nn->getActiveSheet()->setCellValue($let[$xy]. $ny , $ca[$sy]);
		$nn->getActiveSheet()->getStyle($let[$xy]. $ny)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
		$nn->getActiveSheet()->getStyle($let[$xy]. $ny )->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
	
		// echo $let[$xy]. $ny . "," . $ca[$sy] . "<br/>";


		}
		else {
		$nn->getActiveSheet()->getStyle($let[$xy]. $ny)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
		$nn->getActiveSheet()->getStyle($let[$xy]. $ny )->getBorders()->getLeft()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
		break;
		}

}
else {
if ($ss < (count($subjects) * 5)){
 
	$nn->getActiveSheet()->setCellValue($let[$xy]. $ny , $ca[$sy]);
	$nn->getActiveSheet()->getStyle($let[$xy]. $ny)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
	// echo $let[$xy]. $ny . "," . $ca[$sy] . "<br/>";


	}
	else {
	break;
	}


} 
}
 //$nn->getActiveSheet()->mergeCells('A7:DD');

//input student values

$letters = array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ",
"BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ",
"CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ");


$scores = $nn->LoadData('students.txt');
$k = 12;
$calc = 0;

foreach ($scores as $score){

if ( $k <= count($scores) + 12){

	for ($l = 0,$p = 0; $l <= count($letters), $p <= count($score) + 4; $l++, $p++){
		$val = $nn->getActiveSheet()->getCell($letters[$l].$v)->getValue();
		$vall = $nn->getActiveSheet()->getCell($letters[$l].$n)->getValue();
		$ave = $calc / (count($subjects) - 4);
		
		if ($vall == "GRANDTOTAL"){
			$nn->getActiveSheet()->setCellValue($letters[$l]. $k , $calc);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			
		}
		elseif ($vall == "AVERAGE"){
			$nn->getActiveSheet()->setCellValue($letters[$l]. $k , $ave);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getNumberFormat()->setFormatCode('###0.00');
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			
		}
		elseif ($vall == "POSITION"){
				if ($ave >= 90){
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "A+");}
				elseif ($ave >= 80){
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "A");}
				elseif ($ave >= 70){
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "B");}
				elseif ($ave >= 50){
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "C");}
				elseif ($ave >= 40){
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "P");}
				else{
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "F");}
			
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			
		}
		elseif ($vall == "REMARKS"){
				if ($ave >= 40){
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "Passed");}
				else {
				$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "Failed");}
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
			$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			break;
		}
		else {
		
		if ($val == "Total"){ //jump cell and calc total
		//echo $letters[$l - 1] . $k. $letters[$l - 2]  . $k. $letters[$l - 3]. $k . $letters[$l - 4] . $k;
		
		//echo "gee . <br/> ";
		$nn->getActiveSheet()->setCellValue($letters[$l]. $k , "=SUM(".$letters[$l - 1] . $k . "," .$letters[$l - 2] . $k . "," .$letters[$l - 3] . $k . "," .$letters[$l - 4] . $k .")" );
		$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
		$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
		$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
		
		$cal1 = $nn->getActiveSheet()->getCell($letters[$l - 1] . $k )->getValue();
		$cal2 = $nn->getActiveSheet()->getCell($letters[$l - 2] . $k )->getValue();
		$cal3 = $nn->getActiveSheet()->getCell($letters[$l - 3] . $k )->getValue();
		$cal4 = $nn->getActiveSheet()->getCell($letters[$l - 4] . $k )->getValue();
		$calc = $calc + $cal1 + $cal2 + $cal3 + $cal4;
		
					if ($p < 50){ $p = $p - 1; }
		}
	
		else {
		
		$nn->getActiveSheet()->setCellValue($letters[$l]. $k , $score[$p]);
		$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
		$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
		
		
			if ($p == 0){ //if S/No  column value is to b displayed. shade the right border
				$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
				$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			}
			if ($p == 1 ){ //if Pupil column value is to b displayed. shade the right border
				$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getBorders()->getRight()->setBorderStyle(PHPExcel_Style_Border::BORDER_MEDIUM);
				$nn->getActiveSheet()->getStyle($letters[$l]. $k)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
			}
			
		
		}
		
		}
		}
		//echo "<br/>";
		 $k++;
		 $calc = 0;
		 
}
else{break;} 

}



// Rename worksheet

$nn->getActiveSheet()->setTitle('Simple');


// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$nn->setActiveSheetIndex(0);



// Redirect output to a client’s web browser (Excel2007)
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="simple.xlsx"');
header('Cache-Control: max-age=0');

$objWriter = PHPExcel_IOFactory::createWriter($nn, 'Excel2007');
$objWriter->save('php://output');
exit;
