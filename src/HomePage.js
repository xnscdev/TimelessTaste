import React from 'react';

export class HomePage extends React.Component {
    render() {
        return (
            <>
            <div className = "text-center">

                <h2 className = "text-8xl font-bold text-blue-900">Welcome</h2>

            </div>

            <div  className = "text-center">

                <h2 className = "text-4xl font-medium mt-5 text-blue-900">What would you like to eat today?</h2>
                <form>
                    <input type = "text" className='border border-3 mt-5'></input>
                    <input type = "submit"></input>
                </form>

            </div>


            </>
        );
    }
}