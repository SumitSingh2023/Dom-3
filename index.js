let myForms=document.querySelector('form');
let input1=document.getElementById('task');
let input2=document.getElementById('priority')

let tbody=document.querySelector('tbody')

let alldata=[]

myForms.addEventListener('submit',function(e){
    e.preventDefault()
    let obj={}

    obj.task=input1.value
    obj.priority=input2.value
    alldata.push(obj)
    tbody.innerHTML=null
   
    alldata.map((ele)=>{

        let row=document.createElement('tr')
        let td1=document.createElement('td')
        let td2=document.createElement('td')
        let td3=document.createElement('td')

        td1.innerText=ele.task;
        td2.innerText=ele.priority;
        td3.innerText=ele.priority;

        if(td3.innerText=="High"){
            td3.style.backgroundColor="red"
            td3.style.color='red'
            
           }else{
            td3.style.backgroundColor="green"
            td3.style.color="green"
           }

        row.append(td1,td2,td3)
        tbody.append(row)



    })
    
})