import React from 'react'
import './ChartBox.scss'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

type Props = {
    color: string
    icon: string
    title: string
    dataKey: string
    number: number | string
    percentage: number
    chartData: object[]
}

const ChartBox = (props: Props) => {
    return (
        <div className='chartbox'>
            <div className='boxInfo'>
                <div className='title'>
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>11.238</h1>
                <Link to='\'>View all</Link>
            </div>
            <div className='chartInfo'>
                <div className='chart'>
                    <ResponsiveContainer width="90%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{background: 'transparent', border: 'none',}}
                                labelStyle={{display: 'none'}}
                                position={{x:10, y:60}} 
                            />
                            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='texts'>
                    <span className='percentage' style={{color: props.percentage<0 ? 'tomato' : 'limegreen'}}>{props.percentage}%</span>
                    <span className='duration'>this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox