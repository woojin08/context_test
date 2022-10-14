import React, { useContext } from 'react'
import { DarkTheme } from './App'

const TheDeepsub = () => {
    const { dark, setDark } = useContext(DarkTheme);
    console.log(dark)

    return (
        <>
            <div className='dark_btn'>
                <label htmlFor='btn' className={`Btn ${dark ? "on" : ""}`}>
                    dark
                </label>
                <button id="btn" onClick={
                    () => setDark(!dark)
                } >
                    mode</button>
            </div>

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit aliquid minus pariatur et maxime quibusdam commodi blanditiis ducimus maiores quae dolorum nemo dolore at suscipit consectetur quas quisquam, odit corporis quam. Aliquid quas esse officiis eum error odit quis tempora ratione doloribus, velit ipsam, veniam amet maiores fugit nemo libero. Quaerat dicta nulla accusantium eligendi tenetur dolorum quisquam earum eum laudantium pariatur tempore placeat fuga vero quas quod omnis dolorem sunt architecto, laboriosam vitae quidem minima ducimus quis a. Velit saepe suscipit deserunt nemo voluptatem quaerat nobis temporibus debitis, explicabo at inventore iure harum ipsam minus quae beatae minima.
            </div>
        </>

    )
}

export default TheDeepsub