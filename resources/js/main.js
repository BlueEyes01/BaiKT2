function clicktb()
{
    console.log("click tb")
    console.log(this.innerHTML)
}

var dem =0;

function send() {
    var arr = document.getElementsByTagName("input");

    var tenXe = arr[0].value.trim();
    var hinhAnh = arr[1].value.trim();
    var giaTien = arr[2].value.trim();
    var nguoiLH = arr[3].value.trim();
    var sdtNLH = arr[4].value.trim();
    var email = arr[5].value.trim();

    if (tenXe == "" || giaTien == "" || nguoiLH == "" || sdtNLH == "" || email == "" )
    {
        alert("Nhập tất cả ô có dấu *");
       return;
    }

    if (isNaN(sdtNLH))
    {
        alert("SĐT không hợp lệ");
        return;
    }

    if(giaTien<0)
    {
        alert("Giá tiền không hợp lệ");
        return;
    }
    


    var reg = /^[a-zA-Z][a-zA-Z0-9\_]+@[a-zA-Z]+(\.[a-zA-Z]+){1,3}$/;
    if(!reg.test(email))
    {
        alert("Emal không hợp lệ");
        return;
    }

    var reg1 = /^(\+84)\d{9,}$/
    if(!reg1.test(sdtNLH))
    {
        alert("SĐT không hợp lệ");
        return;
    }


    var hangXe = document.getElementById("hangxe")

    var tb = "<tr onclick = 'clicktb()' id = 'tr"+dem+"'><td >"+dem+"</td>"+"<td> <img src = '"+hinhAnh+"' width = '200px'></td>"+"<td>"+tenXe+"</td>"+"<td>"+hangXe.value+"</td>"+"<td>"+giaTien+"</td>"+"<td>"+nguoiLH+"</td>"+"<td>"+sdtNLH+"</td>" +"<td>"+email+"</td></tr>";
    document.getElementById("table").insertAdjacentHTML("beforeend", tb)
    dem++;
}

function xoaxe()
{
    dem--;
    var b = document.getElementById("tr"+dem) 
    b.remove(); 
}

function xoa()
{
    xoaxe();
    
    var arr = document.getElementsByTagName("input");

    arr[0].value="";
    arr[1].value="";
    arr[2].value="";
    arr[3].value="";
    arr[4].value="";
    arr[5].value="";

    document.getElementById("hangxe").selectedIndex="Volvo";
    document.getElementById("mota").value="";

}
