

// import add from '../../Utils/calculate';
// import { add ,multiply,dividetheFirstnumberByTheSecond as divide} from '../../Utils/calculate';
// import './Watch.css'
// import * as math from './calculate';

// const Watch = () => {
//     const first = 55;
//     const second = 99;
//     const sum = math.add(first,second);
//     const mul = math.multiply(first,second);
//     const vaag = math.divide(first,second);
//     return (
//         <div>
            
//         </div>
//     );



const Watch = ({watch}) => {
    const {name,price} = watch;
    return (
        <div>

            <h2>Watch: {name}</h2>
            <p>Price: {price}</p>
        </div>
    );
};


export default Watch;