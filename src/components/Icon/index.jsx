import React, { useState } from 'react'
import './Icon.css'

const Icon = ({ type, className }) => {

    const [typeText, setTypeText] = useState("")
    const [typeColor, setTypeColor] = useState("")

    useState(() => {
        if (type === "hair cut") {
            setTypeText("Cu")
            setTypeColor("#f4dfeb")
        }

        if (type === "protein treatment") {
            setTypeText("Pr")
            setTypeColor("#ddebf1")
        }

        if (type === "hair color") {
            setTypeText("HC")
            setTypeColor("#f4dfeb")
        }

        if (type === "deep conditioning") {
            setTypeText("DC")
            setTypeColor("#ddedea")
        }

        if (type === "clarifying") {
            setTypeText("C")
            setTypeColor("#fbe4e4")
        }

    }, [])

    return (
        <div
            style={{
                background: `${typeColor}`,
            }}

            className={
                className
                ? className
                : "icon-style"
            }

        >
            {typeText}
        </div >
    )
}

export default Icon
