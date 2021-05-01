import { Button } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react'
import AssetTable from '../../components/AssetTable';
import useInterval from '../../components/useInterval';
import styles from './Home.styles'

const HomeComponent = () => {
    const classes = styles()
    const [totalValues, setTotalValues] = useState(0);
    const [assets, setAssets] = useState([]);

    const getCrypto = () => {
        axios.get('http://localhost:3000/api/assets/crypto').then((response) => {
            const data = response.data;
            let totalValue = 0;

            data.forEach(crypto => {
                totalValue += crypto.value;
            });

            console.log(totalValue);
            setAssets(data);
            setTotalValues(totalValue);
        })
    }

    useInterval(() => {
        getCrypto()
    }, 60000);

    useEffect(() => {
        getCrypto();
    }, [])

    return (
        
        <div className={classes.home}>
            <div>
                <h1 className={classes.price}>£{totalValues.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
            </div>
            <div>
                <AssetTable assets={assets}/>
            </div>
        </div>
    )
}

export default HomeComponent
