function functionName( s ){
	$.ajax({
   url:"employee.csv",
   dataType:"text",
   success:function(data)
   {
    console.log("done")
    var yess="Y";
    var employee_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table table-bordered table-striped">';
    var pType;
    switch(s){
      case "S2S":
        pType=4;
        break;
      case "GRD":
        pType=5;
        break;
      case "GRP":
        pType=6;
        break;
      case "GMD":
        pType=7;
        break;
      case "PUT":
        pType=8;
        break;
      case "SFS":
        pType=9;
        break;
      default:
        pType=0;


    }
    for(var count = 0; count<employee_data.length; count++)
    {
     var cell_data = employee_data[count].split(",");
     if(cell_data[pType]==yess || count == 0)
      {  
       table_data += '<tr>';
       for(var cell_count=0; cell_count<cell_data.length; cell_count++)
       {
        if(count === 0)
        {
         table_data += '<th>'+cell_data[cell_count]+'</th>';
        }
        else
        {
                
         table_data += '<td>'+cell_data[cell_count]+'</td>';
          
        }
       }
       table_data += '</tr>';
      }
    }
    table_data += '</table>';
    $('#employee_table').html(table_data);
   }
  });	
}