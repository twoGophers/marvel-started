import React from 'react';
import './Test.scss';

const Test = (props) => {
    return (
        <div style={{'width' : '100%', 'border' : '1px solid black', 'backgroundColor': props.color}}>

            {/* Чтобы отобразит какой либо дочерний элемент */}
            {/* {props.children} */}

            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className : 'active'})
                })
            }

        </div>
    );
}

const Block = (props) => {
    return (
        <>
        
        <div>
            {props.left}
        </div>

        <div>
            {props.right}
        </div>

        </>
    )
}


function Test2 () {
    return(
        <>
            <Test color={'red'}>
                left = {
                    <Block color={'red'}>
                        <p>Hello</p>
                    </Block>  
                }
                          
                right = {
                    <Block color={'green'}>
                        <p>Are you drinking vodka?</p>
                    </Block>
                }

            </Test>
        </>
    )
}

export default Test2;