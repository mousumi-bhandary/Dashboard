//frappe.ready(() => {
// window.addEventListener('DOMContentLoaded', event => {
//         // Simple-DataTables
//         // https://github.com/fiduswriter/Simple-DataTables/wiki
    
//         const datatablesSimple = document.getElementById('attendance_history');
//         if (datatablesSimple) {
//             new simpleDatatables.DataTable(datatablesSimple);
//         }
// });
    /*!
        * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
        * Copyright 2013-2022 Start Bootstrap
        * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
        */
        // 
    // Scripts
    // 
    
window.addEventListener('DOMContentLoaded', event => {
    
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            });
        }
});
const showHome=()=>{
        
    document.getElementById("home").style.display = "block";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
    };

const showLeaves=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "block";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
};

const showExpense=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "block";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
};   

const showTravel=()=>{
        
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "block";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstoDo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
};   


const showAnalytics=()=>{
        
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "block";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstoDo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
}; 

const showPayslips=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "block";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
        
};
    
const showTax=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "block";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
        
};



const showCoworker=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "block";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
};

const showChecklist=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "block";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
};

const showThingsToDo=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "block";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
};

const showAttendance=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "block";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "none";
};

const showCheckin=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "block";
    document.getElementById("asset_report").style.display = "none";
};

const showAsset=()=>{
       
    document.getElementById("home").style.display = "none";
    document.getElementById("leaves").style.display = "none";
    document.getElementById("expense").style.display = "none";
    document.getElementById("travel").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("payslips").style.display = "none";
    document.getElementById("tax").style.display = "none";
    document.getElementById("coworker").style.display = "none";
    document.getElementById("checklist").style.display = "none";
    document.getElementById("thingstodo").style.display = "none";
    document.getElementById("attendance_report").style.display = "none";
    document.getElementById("checkin_report").style.display = "none";
    document.getElementById("asset_report").style.display = "block";
};




 const showMore=()=>{
       
    document.getElementById("facebook").style.display = "block";
    document.getElementById("linkedin").style.display = "block";
    document.getElementById("youtube").style.display = "block";
    document.getElementById("instagram").style.display = "block";
    document.getElementById("website").style.display = "block";
    document.getElementById("twitter").style.display = "block";
    document.getElementById("github").style.display = "block";
    document.getElementById("slack").style.display = "block";
    document.getElementById("maps").style.display = "block";
    document.getElementById("meet").style.display = "block";
    document.getElementById("play_store").style.display = "block";
    document.getElementById("news").style.display = "block";
    document.getElementById("chat").style.display = "block";
    document.getElementById("cont").style.display = "block";
    document.getElementById("drive").style.display = "block";
    document.getElementById("calender").style.display = "block";
    document.getElementById("outlook").style.display = "block";
    document.getElementById("one_drive").style.display = "block";
    document.getElementById("word").style.display = "block";
    document.getElementById("excel").style.display = "block";
    document.getElementById("power_point").style.display = "block";
    document.getElementById("one_note").style.display = "block";
    document.getElementById("share_point").style.display = "block";
    document.getElementById("teams").style.display = "block";
    document.getElementById("bookings").style.display = "block";
    document.getElementById("yammer").style.display = "block";
    document.getElementById("power_automate").style.display = "block";
    document.getElementById("search").style.display = "block";
    document.getElementById("business_profile").style.display = "block";
    document.getElementById("gmail").style.display = "block";
    document.getElementById("translate").style.display = "block";
    document.getElementById("photos").style.display = "block";
    document.getElementById("duo").style.display = "block";
    document.getElementById("shopping").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("docs").style.display = "block";
    document.getElementById("sheet").style.display = "block";
    document.getElementById("slides").style.display = "block";
    document.getElementById("books").style.display = "block";
    document.getElementById("blooger").style.display = "block";
    document.getElementById("hangouts").style.display = "block";
    document.getElementById("keep").style.display = "block";
    document.getElementById("jamboard").style.display = "block";
    document.getElementById("classroom").style.display = "block";
    document.getElementById("earth").style.display = "block";
    document.getElementById("collections").style.display = "block";
    document.getElementById("art_culture").style.display = "block";
    document.getElementById("ads").style.display = "block";
    document.getElementById("podcasts").style.display = "block";
    document.getElementById("skype").style.display = "block";
    document.getElementById("goto_meeting").style.display = "block";
    document.getElementById("zoom").style.display = "block";
    document.getElementById("more").style.display = "none";
    document.getElementById("less").style.display = "block";
};

 const showLess=()=>{
       
    document.getElementById("facebook").style.display = "block";
    document.getElementById("linkedin").style.display = "block";
    document.getElementById("youtube").style.display = "block";
    document.getElementById("instagram").style.display = "block";
    document.getElementById("website").style.display = "block";
    document.getElementById("twitter").style.display = "block";
    document.getElementById("github").style.display = "block";
    document.getElementById("slack").style.display = "block";
    document.getElementById("maps").style.display = "block";
    document.getElementById("meet").style.display = "block";
    document.getElementById("play_store").style.display = "block";
    document.getElementById("news").style.display = "block";
    document.getElementById("chat").style.display = "none";
    document.getElementById("cont").style.display = "none";
    document.getElementById("drive").style.display = "none";
    document.getElementById("calender").style.display = "none";
    document.getElementById("outlook").style.display = "none";
    document.getElementById("one_drive").style.display = "none";
    document.getElementById("word").style.display = "none";
    document.getElementById("excel").style.display = "none";
    document.getElementById("power_point").style.display = "none";
    document.getElementById("one_note").style.display = "none";
    document.getElementById("share_point").style.display = "none";
    document.getElementById("teams").style.display = "none";
    document.getElementById("bookings").style.display = "none";
    document.getElementById("yammer").style.display = "none";
    document.getElementById("power_automate").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("business_profile").style.display = "none";
    document.getElementById("gmail").style.display = "none";
    document.getElementById("translate").style.display = "none";
    document.getElementById("photos").style.display = "none";
    document.getElementById("duo").style.display = "none";
    document.getElementById("shopping").style.display = "none";
    document.getElementById("finance").style.display = "none";
    document.getElementById("docs").style.display = "none";
    document.getElementById("sheet").style.display = "none";
    document.getElementById("slides").style.display = "none";
    document.getElementById("books").style.display = "none";
    document.getElementById("blooger").style.display = "none";
    document.getElementById("hangouts").style.display = "none";
    document.getElementById("keep").style.display = "none";
    document.getElementById("jamboard").style.display = "none";
    document.getElementById("classroom").style.display = "none";
    document.getElementById("earth").style.display = "none";
    document.getElementById("collections").style.display = "none";
    document.getElementById("art_culture").style.display = "none";
    document.getElementById("ads").style.display = "none";
    document.getElementById("podcasts").style.display = "none";
    document.getElementById("skype").style.display = "none";
    document.getElementById("goto_meeting").style.display = "none";
    document.getElementById("zoom").style.display = "none";
    document.getElementById("more").style.display = "block";
    document.getElementById("less").style.display = "none";
};

const onmouseover=()=>{
    document.getElementByClassName("sb-nav-link-icon").style.display = "block";
    document.getElementByClassName("right_nav").style.display = "none";
};
 
let count=0;
let watchId;
let geoLoc;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        Alert( "Geolocation is not supported by this browser.");
    }
}
    
function showPosition(position) {
    console.log(position);
    var latlon=new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    var url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]`;
    //console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    update_and_get_checkin_details(js.data[0].name,position);
        
});

function update_and_get_checkin_details(name,position){
    var Latlong=position.coords.latitude+','+position.coords.longitude;
    var url1=`/api/resource/Employee/${name}`;
    fetch(url1).then((r)=>r.json()).then((js)=>{//console.log(js.data);
    frappe.call({method :'gewin_payroll.api.getLocationAddress',
    //frappe.call('gewin_payroll.api.testfunction')
    args : {latlong : Latlong},
    callback :function(r) {
        //console.log(r);
        var log_type= ((document.getElementById("checkin").innerHTML=="Checkin") ? "IN" : "OUT");
        //console.log(log_type);
        let device_id=position.coords.latitude+"|"+ position.coords.longitude+"|"+ position.coords.accuracy + ":"+r.message+":none";
        var data= checkin_data(name,js.data.employee_name,log_type,device_id);
        //console.log(data);
        frappe.call({method:'erpnext.hr.doctype.employee_checkin.employee_checkin.add_log_based_on_employee_field',
            args : {employee_field_value:data.employee,
                    timestamp:data.time,
                    device_id:data.device_id,
                    log_type:data.log_type,
                    },
                    callback : (r)=>{//console.log(r);
                        get_checkin_and_display(name);
                    }
            });
       }
    });
});}
    
function checkin_data(employee,employee_name,log_type,device_id){
    alert(moment().format("yyyy-MM-DD HH:mm:ss"))
    let data={
        'employee':employee, 
        'employee_name' : employee_name, 
        'log_type' :log_type,
        'time':moment().format("yyyy-MM-DD HH:mm:ss"),
        'device_id' :device_id,
        'doctype': "Employee Checkin"
    };
        return data;
    } // end checkin_data
} // end show position
        
const  get_checkin_and_display= (name)=>{
        const date = moment().hour(0).minute(0).second(0).format('YYYY-MM-DD');
        const apiUrl = `/api/resource/Employee Checkin/?filters=${JSON.stringify([['time','>', date],['employee','=', name]])}&fields=${JSON.stringify(['*'])}&order_by=creation desc`;
                fetch( apiUrl).then((r)=>r.json()).then((data)=>{
                //console.log(data.data);
                    var el=document.getElementById("timeline");
                        el.innerHTML="";
                    var btn=document.getElementById("checkin");
                    var lastcheckin=document.getElementById("lastcheckin");
                    lastcheckin.style.fontSize='13px';
                    
                    if (data.data[0].log_type=="IN"){
                        btn.setAttribute('class','btn btn-danger');
                        btn.innerHTML="Checkout";
                        lastcheckin.innerHTML="Checkin at " + data.data[0].time + " " +data.data[0].device_id.split(":")[1];
                    }
                    if (data.data[0].log_type=="OUT"){
                        btn.setAttribute('class','btn btn-success');
                        btn.innerHTML="Checkin";
                        lastcheckin.innerHTML="Checkout at " + data.data[0].time + " " +data.data[0].device_id.split(":")[1];                                }
                    for (var i=0;i<data.data.length;i++){
                        //console.log(data.data[i]);
                        var str=data.data[i].device_id;
                        var li=displayCheckinItem(data.data[i].log_type,data.data[i].time,str.substr(0,str.lastIndexOf(":")-1));
                        el.appendChild(li);
                    }
    });
    
}; //end get_checkin_and_display
    
function displayCheckinItem(log_type,time,address){
        //console.log(address);
        var log_type_text="";var text_color="";
        if (log_type=="IN"){log_type_text="Checkin at";text_color="success"};
        if (log_type=="OUT"){log_type_text="Checkout at";text_color="danger"};
        var li=document.createElement("li");li.setAttribute('class','timeline-item mb-5');
        var im=document.createElement("span");im.innerHTML=`<i class='fas fa-arrow-circle-right text-${text_color} fa-sm fa-fw'></i>`;
        im.style.fontSize='13px';
        im.setAttribute('class','timeline-icon');
        
        var tm=document.createElement("p");tm.innerHTML=log_type_text + " " + time;tm.setAttribute('class',`text-${text_color} mb-2 fw-bold`);
        tm.style.fontSize='13px';
        
        var addr=document.createElement("p");addr.innerHTML=address;addr.setAttribute('class','text-muted');
        addr.style.fontSize='13px';
        
        li.appendChild(im);
        
        li.appendChild(tm);
        li.appendChild(addr);
        return li
} //end display checkin item
    
function success(position) {
    count+=1;
    //alert(count);
    if (count===2){
        // getLocation();
        var latlon=new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapholder=document.getElementById('mapholder');
        mapholder.style.height='250px';
        mapholder.style.width='100%';
    
        var myOptions={
        center:latlon,zoom:18,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
        var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
        //console.log(map);
        var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
        //console.log(marker);
        
        var Latlong=position.coords.latitude+','+position.coords.longitude;
        //alert(watchId);
        geoLoc.clearWatch(watchId);
    }    
}// end success
    
function error() {
      alert('Sorry, no position available.');
}
    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
};
    
function startWatch(){
        geoLoc=navigator.geolocation;
        watchId = geoLoc.watchPosition(success, error, options);
}

//frappe.ready(() => {

$(document).ready(() => {  
    
    //console.log(document.getElementsByTagName("nav")[0].innerHTML);
        
    var e=document.getElementsByTagName("nav")[0];
        
    e.parentNode.removeChild(e);
  
    
// Holiday List
    
    var url=`/api/resource/Holiday List/For the year 2022-23/?fields=${JSON.stringify(["holiday_date","description"])}`;
    // console.log("holiday list");
    // console.log(url);
    
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById('holiday');
    for (var i=0; i<js.data.holidays.length;i++){
        var item=js.data.holidays[i];
        var row = table.insertRow();
        var cell1=row.insertCell();
        cell1.innerHTML=moment(item.holiday_date).format('DD/MM/YYYY');
        cell1.style.fontSize='12px';
        
        var cell2=row.insertCell();
        cell2.innerHTML=item.description;
        cell2.style.fontSize='12px';
    }
});
    
// Leave Balance
    
var url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]`;
    
fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
get_checkin_and_display(js.data[0].name);});
       
url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]&fields=["company","name"]`;
console.log(frappe);
fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js.data[0].company);
        
frappe.call({
    method: "gewin_payroll.employee_leave_balance.execute",
        args: {
            filters: {company: js.data[0].company,
            employee: js.data[0].name,
            from_date: "2022-04-01",
            to_date : "2023-03-31",
            }
        },
        callback: function(res) {
            if(res) {
            //console.log(res);
            var table = document.getElementById('myleaves');  
                for (var i=0; i<res.message[1].length;i++){
                    var item=res.message[1][i];
                    var row = table.insertRow();
                    var cell1=row.insertCell();
                    cell1.innerHTML=item.leave_type;
                    cell1.style.fontSize='12px';
                    
                    var cell2=row.insertCell();
                    cell2.innerHTML=item.opening_balance;
                    cell2.style.fontSize='12px';
                    
                    var cell3=row.insertCell();
                    cell3.innerHTML=item.leaves_allocated;
                    cell3.style.fontSize='12px';
                    
                    var cell4=row.insertCell();
                    cell4.innerHTML=item.leaves_taken;
                    cell4.style.fontSize='12px';
                    
                    var cell5=row.insertCell();
                    cell5.innerHTML=item.leaves_expired;
                    cell5.style.fontSize='12px';
                    
                    var leave_balance=item.opening_balance + item.leaves_allocated -item.leaves_taken - item.leaves_expired;
                    var cell6=row.insertCell();
                    cell6.innerHTML=leave_balance;
                    cell6.style.fontSize='12px';
                    
                } // for loop
            } // if statement
        } //end callback
    });
    });

// Pay Slip

var urlsal=`api/resource/Salary Slip/?fields=["*"]`;
    
fetch(urlsal).then((r)=>r.json()).then((js)=>{
//console.log(js);
var table = document.getElementById('payslipslist');
for (var i=0; i<js.data.length;i++){
    var item=js.data[i];
    var row = table.insertRow();
    var cell1=row.insertCell();
    cell1.innerHTML=moment(item.start_date).format("YYYY");
    cell1.style.fontSize='12px';
    var cell2=row.insertCell();
    cell2.innerHTML=moment(item.end_date).format("MMMM");
    cell2.style.fontSize='12px';
    var cell3=row.insertCell();
    // cell3.innerHTML=item.name;
    const anch = document.createElement("a");
    anch.setAttribute("href","/app/print/Salary Slip/" + item.name);
    anch.setAttribute("target","_blank");
    anch.innerHTML=item.employee_name;
    cell3.appendChild(anch);
    cell3.style.fontSize='12px';
}
        
});
        
// Employee Profile
    
    var url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]&fields=["employee","employee_name","cell_number","prefered_email","image","gender","date_of_birth",
    "date_of_joining","department","designation","status","default_shift","blood_group"]`;
    // console.log(url);
    
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById('profile');
    var item=js.data[0];
    
    // document.getElementById("userimage").setAttribute("src",item.image);
    var EmployeeID_Profile=document.getElementById("empid");
    EmployeeID_Profile.style.fontSize="12px";
    EmployeeID_Profile.innerHTML=item.employee;
        
    var EmployeeName_Profile=document.getElementById("empname");
    EmployeeName_Profile.style.fontSize="12px";
    EmployeeName_Profile.innerHTML=item.employee_name;
        
    var MobileNo_Profile=document.getElementById("contact");
    MobileNo_Profile.style.fontSize="12px";
    MobileNo_Profile.innerHTML=item.cell_number;
        
    var Email_Profile=document.getElementById("email")
    Email_Profile.style.fontSize="12px";
    Email_Profile.innerHTML=item.prefered_email;
        
    var Gender_Profile=document.getElementById("gender")
    Gender_Profile.style.fontSize="12px";
    Gender_Profile.innerHTML=item.gender;
        
    var DOB_Profile=document.getElementById("dob")
    DOB_Profile.style.fontSize="12px";
    DOB_Profile.innerHTML=moment(item.date_of_birth).format('DD/MM/YYYY');
        
    var DOJ_Profile=document.getElementById("doj")
    DOJ_Profile.style.fontSize="12px";
    DOJ_Profile.innerHTML=moment(item.date_of_joining).format('DD/MM/YYYY');
        
    var Department_Profile=document.getElementById("depar")
    Department_Profile.style.fontSize="12px";
    Department_Profile.innerHTML=item.department;
        
    var Designation_Profile=document.getElementById("deg")
    Designation_Profile.style.fontSize="12px";
    Designation_Profile.innerHTML=item.designation;
        
    var Status_Profile=document.getElementById("status")
    Status_Profile.style.fontSize="12px";
    Status_Profile.innerHTML=item.status;
        
    var Shift_Profile=document.getElementById("shift")
    Shift_Profile.style.fontSize="12px";
    Shift_Profile.innerHTML=item.default_shift;
        
    var BloodGroup_Profile=document.getElementById("bloodgroup")
    BloodGroup_Profile.style.fontSize="12px";
    BloodGroup_Profile.innerHTML=item.blood_group;
    
    var PersonalEmail_Profile=document.getElementById("personal_email")
    PersonalEmail_Profile.style.fontSize="12px";
    PersonalEmail_Profile.innerHTML=item.personal_email;
    
    var EmergencyContact_Profile=document.getElementById("emergency_contact")
    EmergencyContact_Profile.style.fontSize="12px";
    EmergencyContact_Profile.innerHTML=item.emergency_phone_number;
    
    var PresentAddress_Profile=document.getElementById("present_address")
    PresentAddress_Profile.style.fontSize="12px";
    PresentAddress_Profile.innerHTML=item.present_address;
    
    var PermanentAddress_Profile=document.getElementById("permanent_address")
    PermanentAddress_Profile.style.fontSize="12px";
    PermanentAddress_Profile.innerHTML=item.permanent_address;
});
});

// Expense Claim

frappe.ready(()=>{
    var url=`/api/method/expense`;
 fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById("expense_claim") 
    for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        var row = table.insertRow();
        // console.log(item);
        
        var cell0=row.insertCell();
        cell0.innerHTML=item.name;
        cell0.style.fontSize='12px';
        
        var cell1=row.insertCell();
        cell1.innerHTML=item.employee_name;
        cell1.style.fontSize='12px';
        
        var cell2=row.insertCell();
        cell2.innerHTML=item.department;
        cell2.style.fontSize='12px';
        
        var cell3=row.insertCell();
        cell3.innerHTML=item.expense_type;
        cell3.style.fontSize='12px';
        
        var cell4=row.insertCell();
        cell4.innerHTML=moment(item.posting_date).format('DD/MM/YYYY');
        cell4.style.fontSize='12px';
        
        var cell5=row.insertCell();
        cell5.innerHTML=moment(item.expense_date).format('DD/MM/YYYY');
        cell5.style.fontSize='12px';
        
        var cell6=row.insertCell();
        cell6.innerHTML=item.total_claimed_amount;
        cell6.style.fontSize='12px';
        
        var cell7=row.insertCell();
        cell7.innerHTML=item.total_amount_reimbursed;
        cell7.style.fontSize='12px';
        
        var cell8=row.insertCell();
        cell8.innerHTML=item.expense_approver;
        cell8.style.fontSize='12px';
        
        var cell9=row.insertCell();
        cell9.innerHTML=item.mode_of_payment;
        cell9.style.fontSize='12px';
        
        var cell10=row.insertCell();
        cell10.innerHTML=item.status;
        cell10.style.fontSize='12px';
        
        if(item.status=="Rejected"){
            cell10.style.color='#ff531a';
        }
        if(item.status=="Paid"){
            cell10.style.color="#00cc00";
        } 
        if(item.status=="Draft"){
            cell10.style.color="#999966";
        }
        
        if(item.status=="Submitted")
        {
            cell10.style.color="#0039e6";
        }
        if(item.status=="Cancelled")
        {
            cell10.style.color="#ffe500";
        }
        if(item.status=="Unpaid")
        {
            cell10.style.color="#8600b3";
        }
    } 
        table.appendChild(tbody);
        if (table) {
            new simpleDatatables.DataTable(table);
        }
 }); 
});

// Advance Tabulation

frappe.ready(()=>{
    var url=`/api/method/advance`;
 fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById("my_advance") 
    for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        var row = table.insertRow();
        // console.log(item);
        
        var cell1=row.insertCell();
        cell1.innerHTML=item.employee_name;
        cell1.style.fontSize='12px';
        
        var cell2=row.insertCell();
        cell2.innerHTML=item.department;
        cell2.style.fontSize='12px';
        
        var cell3=row.insertCell();
        cell3.innerHTML=moment(item.posting_date).format('DD/MM/YYYY');
        cell3.style.fontSize='12px';
        
        var cell4=row.insertCell();
        cell4.innerHTML=item.purpose;
        cell4.style.fontSize='12px';
        
        var cell5=row.insertCell();
        cell5.innerHTML=item.advance_amount;
        cell5.style.fontSize='12px';
        
        var cell6=row.insertCell();
        cell6.innerHTML=item.paid_amount;
        cell6.style.fontSize='12px';
        
        var cell7=row.insertCell();
        cell7.innerHTML=item.pending_amount;
        cell7.style.fontSize='12px';
        
        var cell8=row.insertCell();
        cell8.innerHTML=item.claimed_amount;
        cell8.style.fontSize='12px';
        
        var cell9=row.insertCell();
        cell9.innerHTML=item.return_amount;
        cell9.style.fontSize='12px';
        
        var cell10=row.insertCell();
        cell10.innerHTML=(item.advance_amount-item.claimed_amount);
        cell10.style.fontSize='12px';
        
        var cell11=row.insertCell();
        cell11.innerHTML=item.status;
        cell11.style.fontSize='12px';
        
        var cell12=row.insertCell();
        cell12.innerHTML=item.mode_of_payment;
        cell12.style.fontSize='12px';
        
        if(item.status=="Unpaid"){
            cell11.style.color='#8600B3';
        }
        
        if(item.status=="Paid"){
            cell11.style.color="#00CC00";
        } 
        
        if(item.status=="Draft"){
            cell11.style.color="#999966";
        }
        
        if(item.status=="Claimed"){
            cell11.style.color="#bf4080";
        }
        
        if(item.status=="Cancelled"){
            cell11.style.color="#0099e6";
        }
        
        if(item.status=="Returned"){
            cell11.style.color="#ffaa00";
        }
        
        if(item.status=="Partly Claimed and Returned"){
            cell11.style.color="#669999";
        }
    } 
        table.appendChild(tbody);
        if (table) {
            new simpleDatatables.DataTable(table);
        }
 }); 
}); 

// Travel Request

frappe.ready(() => {
    var url=`/api/resource/Travel Request/?fields=${JSON.stringify(["travel_type","purpose_of_travel","status"])}`;
    // console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById('travel_request');
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
        var row = table.insertRow();
        var cell1=row.insertCell();
        cell1.innerHTML=item.travel_type;
        cell1.style.fontSize='12px';
        var cell2=row.insertCell();
        cell2.innerHTML=item.purpose_of_travel;
        cell2.style.fontSize='12px';
        var cell3=row.insertCell();
        cell3.innerHTML=item.status;
        cell3.style.fontSize='12px';
        
        if(item.status=="Rejected"){
            cell3.style.color='#ff531a';
        }
        if(item.status=="Approved"){
            cell3.style.color="#00cc00";
        } 
        if(item.status=="Open"){
            cell3.style.color="#0039e6";
        }
        if(item.status=="Cancelled"){
            cell3.style.color="#ffe500";
        }
    }
});
}); 

// Leave Status

frappe.ready(() => {
    var url=`/api/resource/Leave Application/?fields=${JSON.stringify(["posting_date","employee_name","description","leave_approver","from_date","to_date","leave_type","status"])}`;
    // console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById('leave_status');
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
        var row = table.insertRow();
        var cell1=row.insertCell();
        cell1.innerHTML=moment(item.posting_date).format('DD/MM/YYYY');
        cell1.style.fontSize='12px';
        var cell2=row.insertCell();
        cell2.innerHTML=item.employee_name;
        cell2.style.fontSize='12px';
        var cell3=row.insertCell();
        cell3.innerHTML=item.description;
        cell3.style.fontSize='12px';
        var cell4=row.insertCell();
        cell4.innerHTML=item.leave_approver;
        cell4.style.fontSize='12px';
        var cell5=row.insertCell();
        cell5.innerHTML=moment(item.from_date).format('DD/MM/YYYY');
        cell5.style.fontSize='12px';
        var cell6=row.insertCell();
        cell6.innerHTML=moment(item.to_date).format('DD/MM/YYYY');
        cell6.style.fontSize='12px';
        var cell7=row.insertCell();
        cell7.innerHTML=item.leave_type;
        cell7.style.fontSize='12px';
        var cell8=row.insertCell();
        cell8.innerHTML=item.status;
        cell8.style.fontSize='12px';
        
        if(item.status=="Rejected"){
            cell8.style.color='#ff531a';
        }
        if(item.status=="Approved"){
            cell8.style.color="#00cc00";
        } 
        if(item.status=="Open"){
            cell8.style.color="#0039e6";
        }
        if(item.status=="Cancelled"){
            cell8.style.color="#ffe500";
        }
    }
});

}); 

// New Joiners

frappe.ready(() => {
    var urloffer=`/api/resource/Job Offer/?fields=${JSON.stringify(["offer_date","applicant_name","designation"])}`;
    // console.log(urloffer);
    fetch(urloffer).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById('new_joinee');
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
        if (moment().diff(moment(item.offer_date),'days')<90){
        var row = table.insertRow();
        var cell1=row.insertCell();
        cell1.innerHTML=moment(item.offer_date).format('DD/MM/YYYY');
        cell1.style.fontSize='12px';
        
        var cell2=row.insertCell();
        cell2.innerHTML=item.applicant_name;
        cell2.style.fontSize='12px';
        
        var cell3=row.insertCell();
        cell3.innerHTML=item.designation;
        cell3.style.fontSize='12px';
        
        }
    }
    });
}); 

// Employee Info Right Corner

frappe.ready(() => {
 var url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]&fields=["image","first_name","department"]`;
    // console.log(url);
    
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var item=js.data[0];
    
    document.getElementById("nav_user").setAttribute("src",item.image);
    document.getElementById("nav_name").innerHTML=item.first_name;
    document.getElementById("dept").innerHTML=item.department;
});
        
});

// Side Bar

// var mini = true;

// function toggleSidebar() {
// if (mini) {
// console.log("opening sidebar");
// document.getElementById("layoutSidenav_nav").style.width = "250px";
// document.getElementById("layoutSidenav_content").style.marginLeft = "250px";
// this.mini = false;
// } else {
// console.log("closing sidebar");
// document.getElementById("layoutSidenav_nav").style.width = "60px";
// document.getElementById("layoutSidenav_content").style.marginLeft = "60px";
// this.mini = true;
// }
// }

// Co-worker Details Search

 frappe.ready(() => {
    var url=`/api/resource/Employee Shareable Details/?fields=${JSON.stringify(["employee","employee_name"])}`;
    // console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var dlist = document.getElementById('emp_lists');
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
        var el = document.createElement("option");
        el.setAttribute("values",item.employee);
        el.innerHTML = item.employee_name;
        dlist.appendChild(el);
    }
});
    const input = document.getElementById('search_emp');
    input.addEventListener('input',updateValue);
        
    function updateValue(e){
        var options = document.getElementById('emp_lists').options;
        var value = e.target.value;
        for( var i = 0; i < options.length; i ++){
            if (options[i].value === value){
                findEmployee(options[i].getAttribute('values'))
            }    // If Statement
        }   // For Loop
        
    }   // Function end here
    
    function findEmployee(eid){
        var url=`/api/resource/Employee Shareable Details/?filters=[["employee","=","${eid}"]]&&fields=${JSON.stringify(["employee","employee_name","date_of_birth","date_of_joining","department","designation"])}`;
        // console.log(url);
        fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
        var dlist = document.getElementById('emp_lists');
        var table = document.getElementById("coworker_profile");
        var item = js.data[0];
            
        //document.getElementById("couserimage").setAttribute("src",item.image);
        // document.getElementById("couserimage").innerHTML="<img src='"+ item.image+"' height='100px' width='100px'>";
        var EmployeeId_coworker=document.getElementById("coempid");
        EmployeeId_coworker.style.fontSize='12px';
        EmployeeId_coworker.innerHTML=item.employee;
        
        var EmployeeName_coworker=document.getElementById("coempname");
        EmployeeName_coworker.style.fontSize='12px';
        EmployeeName_coworker.innerHTML=item.employee_name;  
        
        // document.getElementById("coempname").innerHTML=item.employee_name;
        
        
        var DOB_coworker=document.getElementById("codob");
        DOB_coworker.style.fontSize='12px';
        DOB_coworker.innerHTML=moment(item.date_of_birth).format('DD/MM/YYYY'); 
        
        // document.getElementById("codob").innerHTML=moment(item.date_of_birth).format('DD/MM/YYYY');  
        
        var DOJ_coworker=document.getElementById("codoj");
        DOJ_coworker.style.fontSize='12px';
        DOJ_coworker.innerHTML=moment(item.date_of_joining).format('DD/MM/YYYY');
        
        // document.getElementById("codoj").innerHTML=moment(item.date_of_joining).format('DD/MM/YYYY');
        
        var Depertment_coworker=document.getElementById("codept");
        Depertment_coworker.style.fontSize='12px';
        Depertment_coworker.innerHTML=item.department; 
        
        // document.getElementById("codept").innerHTML=item.department;
        
        var Designation_coworker=document.getElementById("codeg");
        Designation_coworker.style.fontSize='12px';
        Designation_coworker.innerHTML=item.designation;  
        
        // document.getElementById("codeg").innerHTML=item.designation; 
    });
    }
});

// Check List Items

frappe.ready(() => {
var url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]&fields=["person_to_be_contacted","emergency_phone_number","cell_number","personal_email","prefered_email","permanent_address","current_address","passport_number","date_of_issue","valid_upto","place_of_issue","marital_status","blood_group","family_background","health_details"]`;
// console.log(url);

fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var item=js.data[0];
    // console.log(item);

if (item.emergency_phone_number === null){
    
    document.getElementById("emer_cont_num").checked = false;
} 
else {
    
    document.getElementById("emer_cont_num").checked = true;
    document.getElementById("emer_cont_num").disabled = true;
}

if (item.person_to_be_contacted === null){
    document.getElementById("emer_cont_name").checked = false;
    
} 
else {
    document.getElementById("emer_cont_name").checked = true;
    document.getElementById("emer_cont_name").disabled = true;
}

if (item.cell_number === null){
    document.getElementById("cont_num").checked = false;
    
} 
else {
    document.getElementById("cont_num").checked = true;
    document.getElementById("cont_num").disabled = true;
}

if (item.personal_email === null){
    document.getElementById("pers_email").checked = false;
    
} 
else {
    document.getElementById("pers_email").checked = true;
    document.getElementById("pers_email").disabled = true;
}

if (item.prefered_email === null){
    document.getElementById("prfrd_email").checked = false;
    doc
} 
else {
    document.getElementById("prfrd_email").checked = true;
    document.getElementById("prfrd_email").disabled = true;
}

if (item.permanent_address === null){
    document.getElementById("per_add").checked = false;
    
} 
else {
    document.getElementById("per_add").checked = true;
    document.getElementById("per_add").disabled = true;
}

if (item.current_address === null){
    document.getElementById("curr_add").checked = false;
    
}
else {
    document.getElementById("curr_add").checked = true;
    document.getElementById("curr_add").disabled = true;
}

if (item.passport_number === null){
    document.getElementById("pass_num").checked = false;
    
}
else {
    document.getElementById("pass_num").checked = true;
    document.getElementById("pass_num").disabled = true;
}

if (item.date_of_issue === null){
    document.getElementById("date_of_issue").checked = false;
    
}
else {
    document.getElementById("date_of_issue").checked = true;
    document.getElementById("date_of_issue").disabled = true;
}

if (item.valid_upto === null){
    document.getElementById("valid_upto").checked = false;
    
}
else {
    document.getElementById("valid_upto").checked = true;
    document.getElementById("valid_upto").disabled = true;
}

if (item.place_of_issue === null){
    document.getElementById("place_of_issue").checked = false;
    
}
else {
    document.getElementById("place_of_issue").checked = true;
    document.getElementById("place_of_issue").disabled = true;
}

if (item.marital_status === null){
    document.getElementById("mar_status").checked = false;
    
}
else {
    document.getElementById("mar_status").checked = true;
    document.getElementById("mar_status").disabled = true;
}

if (item.blood_group === null){
    document.getElementById("blood_group").checked = false;
    
}
else {
    document.getElementById("blood_group").checked = true;
    document.getElementById("blood_group").disabled = true;
}

if (item.family_background === null){
    document.getElementById("fam_back").checked = false;
    
}
else {
    document.getElementById("fam_back").checked = true;
    document.getElementById("fam_back").disabled = true;
}

if (item.health_details === null){
    document.getElementById("hlth_dtl").checked = false;
    
}
else {
    document.getElementById("hlth_dtl").checked = true;
    document.getElementById("hlth_dtl").disabled = true;
}

});
    
});

// Check List Dropdown
 
 frappe.ready(() => {
    var url=`/api/resource/Employee/?fields=${JSON.stringify(["employee","employee_name"])}`;
    // console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var dlist = document.getElementById('emp_list');
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
        var el = document.createElement("option");
        el.setAttribute("values",item.employee);
        el.innerHTML = item.employee_name;
        dlist.appendChild(el);
    }
});

    const input = document.getElementById('searchemp');
    input.addEventListener('input',updateVal);
        
    function updateVal(e){
        var options = document.getElementById('emp_list').options;
        var value = e.target.value;
        for( var i = 0; i < options.length; i ++){
            if (options[i].value === value){
                // alert(value);
                Employee(options[i].getAttribute('values'))
            }    // If Statement
        }   // For Loop
        
    }   // Function end here
    
    function Employee(eid){
        var url=`/api/resource/Employee/?filters=[["employee","=","${eid}"]]&&fields=${JSON.stringify(["employee_name","person_to_be_contacted","emergency_phone_number","cell_number","personal_email","prefered_email","permanent_address","current_address","passport_number","date_of_issue","valid_upto","place_of_issue","marital_status","blood_group","family_background","health_details"])}`;
        // console.log(url);
        fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
        var dlist = document.getElementById('emp_lists');
        var table = document.getElementById("emp_dtls");
        var item = js.data[0];
        document.getElementById("nm").innerHTML=item.employee_name;
        if (item.emergency_phone_number === null){
    
            document.getElementById("emer_cont_num").checked = false;
        } 
        else {
            document.getElementById("emer_cont_num").checked = true;
            document.getElementById("emer_cont_num").disabled = true;
        }
        if (item.person_to_be_contacted === null){
            document.getElementById("emer_cont_name").checked = false;
        } 
        else {
            document.getElementById("emer_cont_name").checked = true;
            document.getElementById("emer_cont_name").disabled = true;
        }
        if (item.cell_number === null){
            document.getElementById("cont_num").checked = false;
        } 
        else {
            document.getElementById("cont_num").checked = true;
            document.getElementById("cont_num").disabled = true;
        }
        if (item.personal_email === null){
            document.getElementById("pers_email").checked = false;
        } 
        else {
            document.getElementById("pers_email").checked = true;
            document.getElementById("pers_email").disabled = true;
        }
        if (item.prefered_email === null){
            document.getElementById("prfrd_email").checked = false;
            doc
        } 
        else {
            document.getElementById("prfrd_email").checked = true;
            document.getElementById("prfrd_email").disabled = true;
        }
        if (item.permanent_address === null){
            document.getElementById("per_add").checked = false;
        } 
        else {
            document.getElementById("per_add").checked = true;
            document.getElementById("per_add").disabled = true;
        }
        if (item.current_address === null){
            document.getElementById("curr_add").checked = false;
        }
        else {
            document.getElementById("curr_add").checked = true;
            document.getElementById("curr_add").disabled = true;
        }
        if (item.passport_number === null){
            document.getElementById("pass_num").checked = false;
        }
        else {
            document.getElementById("pass_num").checked = true;
            document.getElementById("pass_num").disabled = true;
        }
        if (item.date_of_issue === null){
            document.getElementById("date_of_issue").checked = false;
        }
        else {
            document.getElementById("date_of_issue").checked = true;
            document.getElementById("date_of_issue").disabled = true;
        }
        if (item.valid_upto === null){
            document.getElementById("valid_upto").checked = false;
        }
        else {
            document.getElementById("valid_upto").checked = true;
            document.getElementById("valid_upto").disabled = true;
        }
        if (item.place_of_issue === null){
            document.getElementById("place_of_issue").checked = false;
        }
        else {
            document.getElementById("place_of_issue").checked = true;
            document.getElementById("place_of_issue").disabled = true;
        }
        if (item.marital_status === null){
            document.getElementById("mar_status").checked = false;
        }
        else {
            document.getElementById("mar_status").checked = true;
            document.getElementById("mar_status").disabled = true;
        }
        if (item.blood_group === null){
            document.getElementById("blood_group").checked = false;
        }
        else {
            document.getElementById("blood_group").checked = true;
            document.getElementById("blood_group").disabled = true;
        }
        if (item.family_background === null){
            document.getElementById("fam_back").checked = false;
        }
        else {
            document.getElementById("fam_back").checked = true;
            document.getElementById("fam_back").disabled = true;
        }
        if (item.health_details === null){
            document.getElementById("hlth_dtl").checked = false;
        }
        else {
            document.getElementById("hlth_dtl").checked = true;
            document.getElementById("hlth_dtl").disabled = true;
        }
    });
    }
});

// To Do List - Leave Request
 
 frappe.ready(() => {
    var url=`/api/resource/Leave Application/?fields=${JSON.stringify(["status"])}`;
    // console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var count = 0;
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
            if (item.status === "Open"){
                count ++;
            }    // If Statement
        document.getElementById("status_one").innerHTML=count;
        if (count > 0){
            document.getElementById("status_one").style.color='#ff6666';
        }
        else{
            document.getElementById("status_one").style.color='#00ff00';
        }
    }
});
});

// To Do List - Travel Request
 
 frappe.ready(() => {
    var url=`/api/resource/Travel Request/?fields=${JSON.stringify(["status"])}`;
    // console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var count = 0;
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
            if (item.status === "Submitted"){
                count ++;
            }    // If Statement
            document.getElementById("status_two").innerHTML=count;
            if (count > 0){
                document.getElementById("status_two").style.color='#ff6666';
            }else{
                document.getElementById("status_two").style.color='#00ff00';
        }
    }
});
});

// To Do List - Expense Claim Request
 
 frappe.ready(() => {
    var url=`/api/resource/Expense Claim/?fields=${JSON.stringify(["status"])}`;
    // console.log(url);
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var count = 0;
    for (var i=0; i<js.data.length;i++){
        var item=js.data[i];
            if (item.status === "Draft"){
                count ++;
            }    // If Statement
        document.getElementById("status_three").innerHTML=count;
        if (count > 0){
            document.getElementById("status_three").style.color='#ff6666';
        }
        else{
            document.getElementById("status_three").style.color='#00ff00';
        }
    }
});
});

// Initial Letter of User Name If the Image Is Missing

frappe.ready(() => {
 var url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]&fields=["image","first_name"]`;
    // console.log(url);
    
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var item=js.data[0];
    //console.log(item);

    if (item.image){
        document.getElementById("userimage").setAttribute("src",item.image);
        document.getElementById("nav_user").setAttribute("src",item.image);}
        else 
        {
            var sn=item.first_name.substring(0,2).toUpperCase();
        document.getElementById("userimage").setAttribute("src",generated(sn));    
        document.getElementById("nav_user").setAttribute("src",generated(sn));
        }
    
    document.getElementById("nav_name").innerHTML=item.first_name;
});
 function generated(name) {
      let canvas = document.createElement('canvas');
      
      canvas.height = 180;
      canvas.width  = 180;
      
      let context = canvas.getContext('2d');
      
      //context.drawImage(this.poster, 0, 0)
      context.fillStyle = "#eef0f2";
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.font = "50px Arial";
      context.fillStyle="black";
      context.fillText(name, 50, 95);
      
      return canvas.toDataURL('image/jpeg');
    }    
}); 

// Tax Declarations

frappe.ready(()=>{
    var url=`/api/method/get_tax_declaration`;
 fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById("tax_declaration") 
    for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        var row = table.insertRow();
        // console.log(item);
        
        var cell1=row.insertCell();
        cell1.innerHTML=item.employee;
        cell1.style.fontSize='12px';
        
        var cell2=row.insertCell();
        cell2.innerHTML=item.employee_name;
        cell2.style.fontSize='12px';
        
        var cell3=row.insertCell();
        cell3.innerHTML=item.department;
        cell3.style.fontSize='12px';
        
        var cell4=row.insertCell();
        cell4.innerHTML=item.payroll_period;
        cell4.style.fontSize='12px';
        
        var cell5=row.insertCell();
        cell5.innerHTML=item.exemption_sub_category;
        cell5.style.fontSize='12px';
        
        var cell6=row.insertCell();
        cell6.innerHTML=item.max_amount;
        cell6.style.fontSize='12px';
        
        var cell7=row.insertCell();
        cell7.innerHTML=item.exemption_category;
        cell7.style.fontSize='12px';
        
        var cell8=row.insertCell();
        cell8.innerHTML=item.total_declared_amount;
        cell8.style.fontSize='12px';
        
        var cell9=row.insertCell();
        cell9.innerHTML=item.total_exemption_amount;
        cell9.style.fontSize='12px';
    } 
        table.appendChild(tbody);
        if (table) {
            new simpleDatatables.DataTable(table);
        }
 }); 
});

// 


// frappe.ready(()=>{

//     var url=`/api/method/fixed_expense_analytics`;
//     fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
//         var d=[["Expense Type","Amount"],];
//         for (var i=0; i<js.message.length;i++){
//         var item=js.message[i];
//         // console.log(item);
//         google.charts.load('current',{'packages':['corechart']});
//         d.push([item.expense_type,item.amount]);
//         google.charts.setOnLoadCallback(drawFunction);
//         function drawFunction(){
//             var data = google.visualization.arrayToDataTable(d);
//             var chart = new google.visualization.PieChart(document.getElementClassName('dwea'));
//             chart.draw(data,options);
//         }
//         }
//     });  
// });




// // Tabulation for Analytics

// frappe.ready(()=>{
//     var url=`/api/method/fixed_expense_analytics`;
//  fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
//     var table = document.getElementByClassName("dwea") 
//     for (var i=0; i<js.message.length;i++){
//         var item=js.message[i];
//         var row = table.insertRow();
//         // console.log(item);
        
//         var cell1=row.insertCell();
//         cell1.innerHTML=item.expense_type;
//         cell1.style.fontSize='12px';
        
//         var cell2=row.insertCell();
//         cell2.innerHTML=item.amount;
//         cell2.style.fontSize='12px';
//     } 
//         table.appendChild(tbody);
//         if (table) {
//             new simpleDatatables.DataTable(table);
//         }
//  }); 
// });

// Date Range for Expense Analytics

frappe.ready(() => {
     var fromDate;
        $('#fromDate').on('change',function(){
            fromDate=$(this).val();
            $('#toDate').prop('min',function(){
                return fromDate;
            })
        });
        
        var toDate;
        $('#toDate').on('change',function(){
            toDate=$(this).val();
            $('#fromDate').prop('max',function(){
                return toDate;
            })
        });
});

// Members Present in My Team Department Wise

frappe.ready(()=>{
    var url=`/api/resource/Employee/?filters=[["user_id","=","${frappe.user_id}"]]&fields=["department"]`;
    // console.log(url);
    
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);

    var dept=js.data[0].department;
    
    
        var url=`/api/method/team_member_attendance`;
        fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
        var table = document.getElementById("mpimt");
        for (var i=0; i<js.message.length; i++){
            var item=js.message[i];
            
            if(dept==item.Department){
                var row = table.insertRow();
                // console.log(item);
                
                var cell0=row.insertCell();
                cell0.innerHTML=item.Employee;
                cell0.style.fontSize='12px';
                
                var cell1=row.insertCell();
                cell1.innerHTML=item.EmployeeName;
                cell1.style.fontSize='12px';
               
                
                var cell2=row.insertCell();
                cell2.innerHTML=item.FirstIn;
                cell2.style.fontSize='12px';
                
                var cell3=row.insertCell();
                cell3.innerHTML=item.LastOut;
                cell3.style.fontSize='12px';
                
            }
        } 
 }); 
});
});

// Date Wise Expense Analytics

frappe.ready(() => {
    
   document.getElementById("toDate").addEventListener("change", function() {
    var input = this.value;
    // alert( $("#fromDate").val());
    // alert(document.getElementById("fromDate").value);
    
    frappe.call({
    method : 'expense_analytics',
    args : {"From_Date" : $("#fromDate").val(),"To_Date" : $('#toDate').val()},
    callback : function(r){//console.log(r.message);
    
    // Date Wise Expense Analytics Chart
    
        var js=r.message;
         var d=[["Expense Type","Amount"],];
        for (var i=0; i<js.length;i++){
        var item=js[i];
        // console.log(item);
        google.charts.load('current',{'packages':['corechart']});
        d.push([item.expense_type,item.amount]);
        google.charts.setOnLoadCallback(drawFunction);
        function drawFunction(){
            var data = google.visualization.arrayToDataTable(d);
            var chart = new google.visualization.PieChart(document.getElementById('box'));
            chart.draw(data,options);
        }//google charts
    }// for loop
    
    // Date Wise Expense Analytics Tabulation
    
            var table = document.getElementById("expense_type_wise") 
            for (var i=0; i<js.length;i++){
                var item=js[i];
                var row = table.insertRow();
                // console.log(item);
                
                var cell1=row.insertCell();
                cell1.innerHTML=item.expense_type;
                cell1.style.fontSize='12px';
                
                var cell2=row.insertCell();
                cell2.innerHTML=item.amount;
                cell2.style.fontSize='12px';
            } 
                table.appendChild(tbody);
                if (table) {
                    new simpleDatatables.DataTable(table);
                }
                
    }, //end callback
}); //frappe.call
}); //addeventlistner
}); //frappe.call

// Department Wise Employee Count Chart

frappe.ready(()=>{

    var url=`/api/method/department_wise_analytics`;
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
        var d=[["Department","No_of_Employee"],];
        for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        // console.log(item);
        google.charts.load('current',{'packages':['corechart']});
        d.push([item.Department,item.No_of_Employee]);
        google.charts.setOnLoadCallback(drawFunction);
        function drawFunction(){
            var data = google.visualization.arrayToDataTable(d);
            var chart = new google.visualization.PieChart(document.getElementById('dwra'));
            chart.draw(data,options);
        }
        }
    });  
});

// Department Wise Employee Count Tabulation

frappe.ready(()=>{
    var url=`/api/method/department_wise_analytics`;
 fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById("dept_wise_emp") 
    for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        var row = table.insertRow();
        // console.log(item);
        
        var cell1=row.insertCell();
        cell1.innerHTML=item.Department;
        cell1.style.fontSize='12px';
        
        var cell2=row.insertCell();
        cell2.innerHTML=item.No_of_Employee;
        cell2.style.fontSize='12px';
        ;
    } 
        table.appendChild(tbody);
        if (table) {
            new simpleDatatables.DataTable(table);
        }
 }); 
});

// Upcoming Birthday List

frappe.ready(()=>{
    var url=`/api/method/upcoming_birthday`;
 fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    for (var i=0; i<js.message.length;i++){
            var item=js.message[i];
            var gap=moment(item.date_of_birth).dayOfYear()-moment().dayOfYear();
            if (gap<-5){gap=gap+366;}
            js.message[i]["gap"]=gap;
        }
        js.message.sort(function(a,b){return a.gap-b.gap});
        //console.log(r.message);
        var table = document.getElementById('birthday');
        for (var i=0; i<js.message.length;i++){
            var item=js.message[i];
            var gap=moment(item.date_of_birth).dayOfYear()-moment().dayOfYear();
            
            if (gap<-5){gap=gap+366;}
            // if (gap>=-5 && gap <120){
                console.log("inside" + moment(item.date_of_birth).format('Do MMM'));
                var row = table.insertRow();
                var cell1=row.insertCell();
                cell1.style.fontSize='12px';
                cell1.innerHTML=moment(item.date_of_birth).format('DD/MM/YYYY');
                var cell2=row.insertCell();
                cell2.innerHTML=item.employee_name;
                cell2.style.fontSize='12px';
                var cell3=row.insertCell();
                cell3.innerHTML=item.department;
                cell3.style.fontSize='12px';
            //}//end if statement
        }//
 });
 
});

// Upcoming Work Anniversary List

frappe.ready(()=>{
    var url=`/api/method/upcoming_birthday`;
 fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    for (var i=0; i<js.message.length;i++){
            var item=js.message[i];
            var gap=moment(item.date_of_joining).dayOfYear()-moment().dayOfYear();
            if (gap<-5){gap=gap+366;}
            js.message[i]["gap"]=gap;
        }
        js.message.sort(function(a,b){return a.gap-b.gap});
      // console.log(r);
        var table = document.getElementById('anniversary');
        for (var i=0; i<js.message.length;i++){
            var item=js.message[i];
            var gap=moment(item.date_of_joining).dayOfYear()-moment().dayOfYear();
            
            if (gap<-5){gap=gap+366;}
            //if (gap>=-5 && gap <120){
                var row = table.insertRow();
                var cell1=row.insertCell();
                cell1.innerHTML=moment(item.date_of_joining).format('DD/MM/YYYY');
                cell1.style.fontSize='12px';
                var cell2=row.insertCell();
                cell2.innerHTML=item.employee_name;
                cell2.style.fontSize='12px';
                var cell3=row.insertCell();
                cell3.innerHTML=item.department;
                cell3.style.fontSize='12px';
          //  }//end if statement
        }// end for loop
 });
 
});

// Historical Attendance

frappe.ready(()=>{
    var url=`/api/method/historical_attendance`;
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
        var table = document.getElementById("attendance_history");
        var tbody=document.createElement("tbody");
           
    for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        //var row = tbody.insertRow();
        //console.log(item);
        var row = tbody.insertRow();
        var cell1=row.insertCell();
        cell1.innerHTML=moment(item.WorkDate).format("DD/MM/YYYY");
        cell1.style.fontSize='12px';
            
        var cell2=row.insertCell();
        cell2.innerHTML=item.Employee;
        cell2.style.fontSize='12px';
                
        var cell3=row.insertCell();
        cell3.innerHTML=item.EmployeeName;
        cell3.style.fontSize='12px';
                
        var cell4=row.insertCell();
        cell4.innerHTML=item.FirstIn;
        cell4.style.fontSize='12px';
                
        var cell5=row.insertCell();
        cell5.innerHTML=item.LastOut;
        cell5.style.fontSize='12px';
                
        var cell6=row.insertCell();
        cell6.innerHTML=item.LateIn;
        cell6.style.fontSize='12px';
                
        var cell7=row.insertCell();
        cell7.innerHTML=item.EarlyOut;
        cell7.style.fontSize='12px';
                
        var cell8=row.insertCell();
        cell8.innerHTML=item.Duration;
        cell8.style.fontSize='12px';
                
        var cell9=row.insertCell();
        cell9.innerHTML=item.Location;
        cell9.style.fontSize='12px';
        
        cell6.style.color="blue";
                
    }
        //const datatablesSimple = document.getElementById('attendance_history');
        table.appendChild(tbody);
    if (table) {
        new simpleDatatables.DataTable(table);
    }
});
});

// Checkin History

frappe.ready(()=>{
    var url=`/api/method/checkin_history`;
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById("checkin_history");
    var tbody=document.createElement("tbody");
    for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        var row = tbody.insertRow();
        var cell1=row.insertCell();
        cell1.innerHTML=item.employee;
        cell1.style.fontSize='12px';
        
        var cell2=row.insertCell();
        cell2.innerHTML=item.employee_name;
        cell2.style.fontSize='12px';
            
        var cell3=row.insertCell();
        cell3.innerHTML=moment(item.Date).format("DD/MM/YYYY");
        cell3.style.fontSize='12px';
        
        var cell4=row.insertCell();
        cell4.innerHTML=item.Time;
        cell4.style.fontSize='12px';
        
        var cell5=row.insertCell();
        cell5.innerHTML=item.log_type;
        cell5.style.fontSize='12px';
          
        var cell9=row.insertCell();
        cell9.innerHTML=item.Location;
        cell9.style.fontSize='12px';
        
        if(item.log_type=="IN"){
            cell5.style.color="#00cc00";
        } 
        if(item.log_type=="OUT"){
            cell5.style.color="red";
        }
    }
    table.appendChild(tbody);
    if (table) {
        new simpleDatatables.DataTable(table);
}
});
});

// Asset Assignment Details

frappe.ready(()=>{
    var url=`/api/method/asset_assignment_details`;
    fetch(url).then((r)=>r.json()).then((js)=>{//console.log(js);
    var table = document.getElementById("asset_details");
    
    for (var i=0; i<js.message.length;i++){
        var item=js.message[i];
        var row = table.insertRow();
        // console.log(item);
        var cell1=row.insertCell();
        cell1.innerHTML="<img src='"+item.image+"' height='70px;' width='60px;'>";
        var cell2=row.insertCell();
        cell2.innerHTML=item.employee;
        cell2.style.fontSize='12px';
        var cell3=row.insertCell();
        cell3.innerHTML=item.employee_name;
        cell3.style.fontSize='12px';
        var cell4=row.insertCell();
        cell4.innerHTML=item.department;
        cell4.style.fontSize='12px';
        var cell5=row.insertCell();
        cell5.innerHTML=item.item_name;
        cell5.style.fontSize='12px';
        var cell6=row.insertCell();
        cell6.innerHTML=item.item_code;
        cell6.style.fontSize='12px';
        var cell7=row.insertCell();
        cell7.innerHTML=item.asset_name;
        cell7.style.fontSize='12px';
        var cell8=row.insertCell();
        cell8.innerHTML=item.asset_category;
        cell8.style.fontSize='12px';
        var cell9=row.insertCell();
        cell9.innerHTML=item.policy_number;
        cell9.style.fontSize='12px';
        var cell10=row.insertCell();
        cell10.innerHTML=item.status;
        cell10.style.fontSize='12px';
        var cell11=row.insertCell();
        cell11.innerHTML=item.asset_owner;
        cell11.style.fontSize='12px';
        var cell12=row.insertCell();
        cell12.innerHTML=moment(item.assigned_on).format('DD/MM/YYYY');
        cell12.style.fontSize='12px';
        var cell13=row.insertCell();
        cell13.innerHTML=moment(item.assigned_till).format('DD/MM/YYYY');
        cell13.style.fontSize='12px';
        
        if(item.status=="Rejected"){
            cell10.style.color='#ff531a';
        }
        if(item.status=="Paid"){
            cell10.style.color="#00cc00";
        } 
        if(item.status=="Draft"){
            cell10.style.color="#999966";
        }
        if(item.status=="Submitted")
        {
            cell10.style.color="#999966";
        }
        if(item.status=="Cancelled")
        {
            cell10.style.color="#ffe500";
        }
    }
    
    table.appendChild(tbody);
    if (table) {
        new simpleDatatables.DataTable(table);
}
});
});
