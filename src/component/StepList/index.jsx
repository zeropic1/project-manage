import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
    Steps
} from 'antd'
const { Text } = Typography
const { Step } = Steps

function StepList(props) {
    const [current, setCurrent] = useState(0)

    const onChange = value => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    const isPic = value => {
        if (!value) {
            return false
        }
        console.log(value)

        if (value.startsWith('.') || value.startsWith('/') || value.startsWith('http') || value.startsWith('https')) {
            return true
        }
        return false
    }

    return (
        <div>
            <Steps current={current} onChange={onChange} direction="vertical" size="small">
                {props.stepList.map((item, index) => {
                    return <Step key={index} title={item.title || `Step${index + 1}`} subTitle={item.subTitle || ''} description={item.title ? item.description : item} />
                })}
            </Steps>
            {isPic(props.contentList[current]) ? <img src={props.contentList[current]} /> : <Text code copyable>{props.contentList[current]}</Text>}

        </div>
    )
}

StepList.propTypes = {
    stepList: PropTypes.array.isRequired,
    contentList: PropTypes.array.isRequired
}

export default StepList

