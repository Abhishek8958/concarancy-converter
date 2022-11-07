document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector("#container").addEventListener("submit",(event)=>{
        event.preventDefault();
        const {target:{from,To,ans}}=event;

        let myHeaders = new Headers();
        myHeaders.append("apikey", "h5fGH2p5rz9fLtCeyTNiEx9vsBp23OXl");
        const  requestOptions={
            method:"GET",
            headers: myHeaders,
        

        }


        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${To.value}&from=${from.value}&amount=${ans.value}`, requestOptions)
        .then(respons=>respons.json())
        .then((data)=>{
             console.log(data)
            let {date,info:{rate},query:{to},result}= data;
            document.querySelector("#data").textContent =`Answer:- ${result}`;
            document.querySelector(".data").textContent=`As per the Exchang rate:${rate} for ${date} => converted value  in ${to} is ${result}`;
            document.querySelector(".data").style.display="block";
            document.querySelector(".data1").style.display="block";
        })
        .catch(error=>console.log(error))
    })
});