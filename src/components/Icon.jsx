import React, { useState } from 'react'

const Icon = ({ type, size }) => {

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
                margin: `${size === "large" ? "0 5px" : "0 1px"}`,
                width: `${size === "large" ? "20px" : "10px"}`,
                height: `${size === "large" ? "20px" : "10px"}`,
                background: `${typeColor}`,
                padding: "2px",
                borderRadius: "50%",
                fontSize: `${size === "large" ? "0.8rem" : "0.6rem"}`,
                textAlign: "center"
            }}
        >
            {typeText}
        </div >
    )
}

export default Icon
