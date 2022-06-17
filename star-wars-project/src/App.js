import {useEffect, useState} from "react"
import {DefaultContext} from "./Context"

//импортируем стили
import "./App.css"

import {Header} from "./components/header"
import {Content} from "./components/content"
import {Footer} from "./components/footer"

export default function App() {
    const [fan, setFan] = useState("")
    const [themeColor, setColorTheme] = useState('#000000')

    const handleCreateFan = ({name}) => {
        setFan(name)
    }

    const invertColor = bg => {
        bg = parseInt(Number(bg.replace('#', '0x')), 10)
        bg = ~bg
        bg = bg >>> 0
        bg = bg & 0x00ffffff
        bg = '#' + bg.toString(16).padStart(6, "0")
        return bg
    }

    const changeTheme = color => {
        setColorTheme(color)
    }

    useEffect(() => {
        console.log(themeColor, invertColor(themeColor))
        document.documentElement.style.setProperty('--main-bg-color', themeColor)
        document.documentElement.style.setProperty('--main-color', invertColor(themeColor))
    }, [themeColor])

    return (
        <DefaultContext.Provider
            value={{handleCreateFan, themeColor, changeTheme}}
        >
            <Header fan={fan}/>
            <Content/>
            <Footer/>
        </DefaultContext.Provider>
    )
}
