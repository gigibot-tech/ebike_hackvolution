var res = fetch()

import { fetchGet } from '../fetch/fetchData'
import { fetchGetWithQuery } from '../fetch/fetchData'

const fetchData = useCallback(async () => {
    const rsp = await fetchGetWithQuery('https://ebikepred.cognitiveservices.azure.com/luis/prediction/v3.0/apps/473772f7-9ffc-4ba1-81d7-03ab9868c297/slots/staging/predict?verbose=true&show-all-intents=true&log=true&subscription-key=61961a1cb3054d20b11d5daa96d68e79&query=switch','')
    const tmp = await rsp.json();
    setFoods(tmp.data)
    console.log(foods)
    //return tmp
})

fetchData