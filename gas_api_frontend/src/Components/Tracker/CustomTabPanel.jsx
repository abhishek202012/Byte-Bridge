import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Tracker.css"


function CustomTabPanel(props) {
    const { value, index, chainId, ...other } = props;
    const [gasFees, setGasFees] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const ethPriceInUsd = 3168.42; // Current price of 1 ETH in USD

    const convertGweiToUsd = (gwei, ethPriceInUsd) => {
        const eth = gwei * 1e-9; // Convert Gwei to ETH
        const usd = eth * ethPriceInUsd; // Convert ETH to USD
        return usd; // Format to 2 decimal places
    };



    useEffect(() => {
        const fetchGasFees = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:5000/api/gas-fees?chainId=${chainId}`);
                setGasFees(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        if (chainId) {
            fetchGasFees();
        }
    }, [chainId]);

    if (value !== index) return null;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >

            {/* <div className='prices'>
                <h4>Base Fee: {gasFees.estimatedBaseFee} GWEI</h4>
                <h4>Network Congestion: {gasFees.networkCongestion}</h4>
            </div> */}
            <div className='curent_price'>
                <div className='price_section'>
                    <div className='prices'>
                        <h4>Current Price : <span className='CURR'>3420 USD</span></h4>
                        <h4>Base Fee: 45 GWEI</h4>
                    </div>
                </div>
                <div className='progressbar'>
                    <div class="progress">
                        <h6>Expensive</h6>
                        <h6>Cheap</h6>
                    </div>
                </div>

            </div>


            <Box sx={{ p: 3 }}>
                {/* {loading && <p>Loading...</p>} */}
                {error && <p>Error: {error}</p>}
                {gasFees && (
                    //      <div className='curent_price'>
                    //      <div className='price_section'>
                    //          <div className='prices'>
                    //              <h4>Current Price <span className='CURR'>3420 USD</span></h4>
                    //              <h4>Base Fee: {gasFees.estimatedBaseFee} GWEI</h4>
                    //          </div>
                    //      </div>
                    //      <div className='progressbar'>
                    //          <div class="progress">
                    //              <div class="progress-value"></div>
                    //          </div>
                    //      </div>

                    //  </div>



                    <div className='checker'>


                        <div className='Box_price'>
                            <span className='pace'>
                                <h4>Fast</h4>
                            </span>
                            <span className='nums'>
                                {/* <h2>{gasFees.high.suggestedMaxPriorityFeePerGas}</h2> */}
                                <h2>4</h2>
                            </span>
                            <h4>
                                ~ $ 0.18 USD | {gasFees.high.minWaitTimeEstimate / 1000} sec
                            </h4>
                            <div className='mini_box'>
                                <Typography>Priority Fee: {convertGweiToUsd(gasFees.high.suggestedMaxPriorityFeePerGas, ethPriceInUsd)}</Typography>

                                <Typography>Max Fee: {parseFloat(gasFees.high.suggestedMaxFeePerGas).toFixed(2)}</Typography>

                            </div>
                        </div>



                        <div className='Box_price'>
                            <span className='pace'>
                                <h4>Normal</h4>
                            </span>
                            <span className='nums'>
                                {/* <h2>{gasFees.medium.suggestedMaxPriorityFeePerGas}</h2> */}

                                {/* <p>Base Fee: {convertGweiToUsd(parseFloat(gasFees?.estimatedBaseFee), ethPriceInUsd)} USD</p> */}
                                <h2>2</h2>

                            </span>
                            <h4>
                                {/* ~ ${gasFees.medium.suggestedMaxFeePerGas} USD | {gasFees.medium.minWaitTimeEstimate / 1000} sec */}
                                ~ $ 0.23 USD | {gasFees.medium.minWaitTimeEstimate / 1000} sec
                            </h4>
                            <div className='mini_box'>
                                <Typography>Priority Fee: {convertGweiToUsd(gasFees.medium.suggestedMaxPriorityFeePerGas, ethPriceInUsd)}</Typography>
                                <Typography>Max Fee: {parseFloat(gasFees.medium.suggestedMaxFeePerGas).toFixed(2)}</Typography>
                            </div>
                        </div>



                        <div className='Box_price'>
                            <span className='pace'>
                                <h4>Slow</h4>
                            </span>
                            <span className='nums'>
                                {/* <h2>{gasFees.low.suggestedMaxPriorityFeePerGas}</h2> */}
                                <h2>1</h2>
                            </span>
                            <h4>
                                ~ $ 0.13 USD  | {gasFees.low.minWaitTimeEstimate / 1000} sec
                            </h4>
                            <div className='mini_box'>
                                <Typography>Priority Fee: {parseFloat(gasFees.low.suggestedMaxPriorityFeePerGas).toFixed(2)}</Typography>
                                <Typography>Max Fee: {parseFloat(gasFees.low.suggestedMaxFeePerGas).toFixed(2)}</Typography>
                            </div>
                        </div>



                    </div>
                )}
            </Box>
        </div>
    );
}

CustomTabPanel.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    chainId: PropTypes.string.isRequired,
};

export default CustomTabPanel;
