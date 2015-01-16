<html>
<body>
<div id="left">

  


<!-- all forms -->

 <form id="form1" name="form1" method="post" action="rest.php">
            <font color="#0000FF"> <?php echo "$success_msg  . <br/> "; ?> </font>
            <label>  <strong> <h1> Complaint </h1></strong>
            </label>
            <p> <em> All fields with <font  color="#ff000f">*</font> are compulsory</em></p>
			 <font color="#0000FF"> <?php echo "$error . <br/> "; ?> </font>
					
			<table cellpadding="0" cellspacing="0">
<tbody><tr>
<td><label>Full name<font  color="#DA3737">*</font></label></td>

<td><input type="text" name="lastname" value=""  size="40" title="Lastname" placeholder = "Lastname"></td>
<td><input type="text" name="firstname" placeholder = "Firstname" value="" size="40" title="Firstname"></td>
</tr>
<td><label>Gender<font  color="#DA3737">*</font></label></td>

<td><input type="radio" name="gender" value="male" id="gender_0" style="display:inline"/>  &nbsp; Male 
                &nbsp;<input type="radio" name="gender" value="female" id="gender_1" style="display:inline" /> &nbsp;
                Female &nbsp; 
				</td>
</tr>
<tr style ="height:15px"></tr>
<tr>
<td><label>Email<font  color="#DA3737">*</font></label></td>

<td><input type="text" name="your-email" placeholder = "Example: a@g.com" value="" size="40" title="Your Email" ></td>
</tr>
<tr>
<td><label>Office number</label></td>

<td><input type="text" name="office_no" value="" size="40" title="Office number" style =" display:inline" ></td>
</tr>
<tr>
<td><label>Mobile number</label></td>

<td><input type="text" name="mobile_no" value="" id="mobile_no" style ="display:inline" /></td>         
</tr>
<tr>
<td style=" width: 160px; "><label>Date of Birth</label></td>

<td><input type="text" name="dob" value="" size="40" title="Date of Birth" style ="display:inline"></td>
</tr>
<tr>
<td style=" width: 160px; "><label>Voter's card number</label></td>

<td><input type="text" name="vcard_no" value="" size="40" title="Voter's card num" style ="display:inline"></td>
</tr>
<tr>
<td><label>Complaint</label></td>
</tr>
<tr>
<td style=" vertical-align: middle; "><label>Complaint</label></td>
<td colspan="2"><textarea name="your-message" cols="40" rows="10" title="Your Message" style ="display:inline"></textarea></td>

</tr>
<tr style ="height:15px"></tr>
<tr>
<td></td>
<td>
<button class="button"  href="#" id ="formdd"> Submit </button>
            <input type="hidden" name="MM_insert" value="form1" id ="form1d"/>
</td>
</tr>
</tbody></table>
        </form>

</div>
<script src ="jquery-1.10.2.js"></script>
<!--<script type="text/javascript">
    
    $(document).ready(function(){
        $('#surname').change(function(){
            var sur = $("#surname").val();
            console.log(sur);
        });
        
        $("#form1d").change(function(){
            console.log("clicked");
        });
        $("#formdd").click(function(){
            alert("btnclicked");
            console.log("btnclicked");
            
        });
        $('#form1 input').blur(function()          //whenever you click off an input element
        {                   
            if( !$(this).val() ) {                      //if it is blank. 
                 alert('empty');    
            }
});
        
    });
    function form1 (){
       // check for compulsory fields
        if (( trim($_POST['title']) == "")
                || ( trim($_POST['surname']) == "")
                || ( trim($_POST['firstname']) == "")
                || ( trim($_POST['othernbames']) == "")
                || ( trim($_POST['phone_no']) == "")
                || ( trim($_POST['email']) == "")
                || ( trim($_POST['nationality_id']) == "")
        ) {
           $error = 'ERROR: Some fields are empty. Please fill the compulsory fields in the form';
          
          alert($error); 
console.log("error");          
        } 
    }
    
</script>-->
</body>
</html>

