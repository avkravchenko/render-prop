import React, { useState } from "react";

const Wrapper = ({render}) => {
    const [count, setCount] = useState(0)

    const incCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
           {render(count, incCount)}
        </div>
    )
}

export default Wrapper;