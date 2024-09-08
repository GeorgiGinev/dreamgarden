import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <div className="py-1" style={{
            height: 666,
            width: '100%',
            position: 'relative',
        }}>
            <Skeleton style={{
                height: 222,
            }} count={3} />
        </div>
    )
}

export default Loading;