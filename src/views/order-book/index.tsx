import { useState } from "react"
import Guidance from './guidance'
import { BackArrow, Profile } from '../../svg/icons'
import { KetabchehLogo } from '../../svg/ketabcheh-logo'
import IconButton from '../../components/common/icon-button/icon-button'
import Information from './information'
import GetNotified from './get-notified'
import PendingOrder from './pending-order'
import OrderResults from './order-results'
import OrderConfirmation from './order-confirmation'

function OrderBook() {

    const [process , setProcess] = useState([
        {
            passed : false,
            Component : Guidance,
            props : {},
            func : () => {
                setProcess(prev => {
                    const clone = [...prev]
                    clone[0] = {...clone[0],passed : true}
                    return clone
                })
            }
        },
        {
            passed : false,
            Component : Information,
            props : {},
            func : () => {
                setProcess(prev => {
                    const clone = [...prev]
                    clone[1] = {...clone[1],passed : true}
                    return clone
                })
            }
        },
        {
            passed : false,
            Component : GetNotified,
            props : {},
            func : () => {
                setProcess(prev => {
                    const clone = [...prev]
                    clone[2] = {...clone[2],passed : true}
                    return clone
                })
            }
        },
        {
            passed : false,
            Component : PendingOrder,
            props : {},
            func : () => {
                setProcess(prev => {
                    const clone = [...prev]
                    clone[3] = {...clone[3],passed : true}
                    return clone
                })
            }
        },
        {
            passed : false,
            Component : OrderResults,
            props : {},
            func : () => {
                setProcess(prev => {
                    const clone = [...prev]
                    clone[4] = {...clone[4],passed : true}
                    return clone
                })
            }
        },
        {
            passed : false,
            Component : OrderConfirmation,
            props : {},
            func : () => {
                return
            }
        },
    ])

    return (
        <div
        className='
        w-full
        min-h-[calc(100vh_-_56px)]
        flex
        flex-col
        p-3
        pb-0
        font-[IRANSans]
        '>
            <div
            className='
            relative
            flex
            items-center
            justify-center
            gap-4
            mb-4
            '>
                <IconButton
                Icon={BackArrow}
                />

                <div
                className="
                flex-shrink
                w-full
                flex
                justify-between
                ">
                    <div
                    className="
                    flex-shrink-0
                    flex
                    items-center
                    justify-center
                    gap-2
                    ">

                        <KetabchehLogo
                        className="
                        w-[39px]
                        "
                        />

                        <p
                        className="
                        text-[16px]
                        font-bold
                        font-[Kalameh]
                        text-primary
                        ">
                            کتابچه
                        </p>

                    </div>

                    <button
                    className="
                    flex-shrink-0
                    p-[9px]
                    rounded-[8px]
                    outline
                    outline-[1px]
                    outline-[#E1E3EA]
                    ">
                        <Profile
                        className="
                        w-[30px]
                        "
                        />
                    </button>

                </div>

                
            </div>

            {process.map(({Component,passed,func},idx,list) => {
                if(!list[idx - 1]?.passed && idx !== 0) return <></>
                return(
                    <div
                    key={idx}
                    className='
                    max-w-full
                    relative
                    flex
                    gap-2
                    '>
                        <div
                        className='
                        flex-shrink-0
                        items-center
                        flex
                        flex-col
                        w-fit
                        max-w-fit
                        overflow-hidden
                        min-h-full
                        '>
                            <span
                            className='
                            flex
                            items-center
                            justify-center
                            flex-shrink-0
                            bg-primary
                            w-[24px]
                            aspect-square
                            rounded-full
                            '
                            >
                                <span
                                className='
                                w-[12px]
                                aspect-square
                                bg-white
                                rounded-full
                                '
                                />
                            </span>
        
                            { passed ? <span
                            className='
                            flex-shrink
                            flex
                            w-[2px]
                            h-full
                            bg-primary
                            '
                            /> : <></>}
                        </div>
        
                        <Component
                        onSubmit={func}/>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderBook