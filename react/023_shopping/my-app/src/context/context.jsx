import { createContext } from "react";

async function fetchAPI(){
    const res = await fetch('https://test.api.weniv.co.kr/mall')
    const result = await res.json()
    // console.log(result[0])

    return result
}
export const data = createContext(fetchAPI())