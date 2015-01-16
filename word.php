<table class='detail-view'>
    <thead>
    <th>S/No</th>
    <th>Lastname</th>
    <th>Firstname</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Phone Number</th>
    </thead>
    <tbody>
        <?php
        
        $n = 1;
        foreach($dataProvider->getData() as $emp)
{
            echo "<tr>";
    	echo "<td>".$n."</td>";
        echo "<td>".$emp['lastname']."</td>";
        echo "<td>".$emp['firstname']."</td>";
        echo "<td>".$emp['gender']."</td>";
        echo "<td>".$emp['email']."</td>";
        echo "<td>".$emp['phone']."</td>";
        echo "</tr>";
    $n++;

}
        ?>
    </tbody>
    
</table>