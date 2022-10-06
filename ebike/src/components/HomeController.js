import React from "react"
import { useState, useEffect, useCallback } from "react";

import { fetchGet } from '../fetch/fetchData'
import { fetchGetWithQuery } from '../fetch/fetchData'


function HomeController() {
    let [custom,setCustom] = useState("")

    const fetchData = useCallback(async () => {
        console.log('fetching data....')
        const rsp2 = await fetchGetWithQuery('https://ebikepred.cognitiveservices.azure.com/luis/prediction/v3.0/apps/473772f7-9ffc-4ba1-81d7-03ab9868c297/slots/staging/predict?verbose=true&show-all-intents=true&log=true&subscription-key=61961a1cb3054d20b11d5daa96d68e79&query=switch','')
        const rsp = await fetchGetWithQuery('http://localhost:5000/api/v1/getAllItems/FoodItems/','')       
        const tmp = await rsp.json();
        //setCustom(tmp.data)
        console.log(tmp)
        //return tmp.data.prediction
    })
    
    //switch().topIntent

    //.intents.map intent,v  v.score

    useEffect(() => {
        fetchData()
    },[fetchData])       

    return(
    <div>
        <div>test</div>
    </div>
    )
}

export default HomeController;