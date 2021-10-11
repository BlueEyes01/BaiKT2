var xoatb=NaN;
var flat = false;
var sl = 0;
var xe=[];

function qlxe(tenXe, hinhAnh, hangXe, giaTien, nguoiLH, sdtNLH, email, moTa)
{
    this.tenXe = tenXe;
    this.hinhAnh  = hinhAnh ;
    this.hangXe = hangXe ;
    this.giaTien = giaTien ;
    this.nguoiLH = nguoiLH ;
    this.sdtNLH = sdtNLH ;
    this.email = email ;
    this.moTa = moTa ;
}

function xoaalltb()
{
    if (sl>0)
    {
         for(var i = 0;i < sl;i++)
        {
           var a = document.getElementById("tr"+i);
            a.remove();
        }
    }
    
}

function loadTB ()
{   
    for (var i = 0 ; i< sl ; i++)
    {
        var tb = "<tr onclick = 'clicktb(this)' id = 'tr"+i+"'><td>"+i+"</td>"+"<td> <img id = 'anh"+i+"' src = '"+xe[i].hinhAnh+"' width = '200px'></td>"+"<td>"+xe[i].tenXe+"</td>"+"<td>"+xe[i].hangXe+"</td>"+"<td>"+xe[i].giaTien+"</td>"+"<td>"+xe[i].nguoiLH+"</td>"+"<td>"+xe[i].sdtNLH+"</td>" +"<td>"+xe[i].email+"</td></tr>";
        document.getElementById("table").insertAdjacentHTML("beforeend", tb);
    }
}

function clicktb(x)
{
    var arr = document.getElementsByTagName("input");

    arr[0].value = xe[x.children[0].innerText].tenXe;
    arr[1].value = xe[x.children[0].innerText].hinhAnh;
    arr[2].value = xe[x.children[0].innerText].giaTien;
    arr[3].value = xe[x.children[0].innerText].nguoiLH;
    arr[4].value = xe[x.children[0].innerText].sdtNLH;
    arr[5].value = xe[x.children[0].innerText].email;
    document.getElementById("hangxe").value= x.children[3].innerText;
    document.getElementById("mota").value=xe[x.children[0].innerText].moTa;

    xoatb = x.children[0].innerText;

    flat = true;
}



function send() {
    var arr = document.getElementsByTagName("input");

    var tenXe = arr[0].value.trim();
    var hinhAnh = arr[1].value.trim();
    var giaTien = arr[2].value.trim();
    var nguoiLH = arr[3].value.trim();
    var sdtNLH = arr[4].value.trim();
    var email = arr[5].value.trim();

    var moTa = document.getElementById("mota").value;
    var hangXe = document.getElementById("hangxe").value;

    // if (tenXe == "" || giaTien == "" || nguoiLH == "" || sdtNLH == "" || email == "" )
    // {
    //     alert("Nhập tất cả ô có dấu *");
    //    return;
    // }

    // if (isNaN(sdtNLH))
    // {
    //     alert("SĐT không hợp lệ");
    //     return;
    // }

    // if(giaTien<0)
    // {
    //     alert("Giá tiền không hợp lệ");
    //     return;
    // }

    // var reg = /^[a-zA-Z][a-zA-Z0-9\_]+@[a-zA-Z]+(\.[a-zA-Z]+){1,3}$/;
    // if(!reg.test(email))
    // {
    //     alert("Emal không hợp lệ");
    //     return;
    // }

    // var reg1 = /^(\+84)\d{9,}$/
    // if(!reg1.test(sdtNLH))
    // {
    //     alert("SĐT không hợp lệ");
    //     return;
    // }

    xe[sl] = new  qlxe(tenXe, hinhAnh, hangXe, giaTien, nguoiLH, sdtNLH, email, moTa);
    
    xoaalltb();
    sl++; 
    loadTB();    
}

function xoaxe(a)
{ 
    xe.splice(a,1);
    
    console.log(xe)
    xoaalltb();
    sl--;
    loadTB();   
}

function xoa()
{
    if (flat==true)
    {
        xoaxe(xoatb);
        flat=false;
    }
 
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