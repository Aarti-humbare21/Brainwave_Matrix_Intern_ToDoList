function Add(){
            let time=document.getElementById("txttime").value;
            let text=document.getElementById("ttask").value; 
            let btn1=`<button onclick="complete(this)">Complete</button>`;
            let btn2=`<button onclick="deleteTask(this)" id="b1">Delete</button>`;
            let data=document.getElementById("tbldata").innerHTML;
            if (text.trim() !== "") {

               data+="<tr>";
                data+="<td>"+time+"</td>";
                data+="<td>"+text+"</td>";
                data+="<td>"+btn1+"</td>";
                data+="<td>"+btn2+"</td>";

                data+="</tr>";
                
                
             document.getElementById("tbldata").innerHTML=data;
             document.getElementById("ttask").value = '';
            } else {
                alert("Please enter a task!");
            }
       
        }

            function complete(button) {
            const row = button.closest('tr');
            row.style.backgroundColor = 'lightgreen';
            alert("Task completed!");
           }
            
            function deleteTask(button) {
            const row = button.closest('tr');
            row.remove();
           }
            
            
       