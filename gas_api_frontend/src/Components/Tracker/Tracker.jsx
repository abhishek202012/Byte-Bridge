import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from './CustomTabPanel'; // Ensure the path is correct
import "./Tracker.css"

function Tracker() {
    const [value, setValue] = useState(0);
    const [chainId, setChainId] = useState('1'); // Default to Ethereum Mainnet

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                setChainId('1'); // Ethereum
                break;
            case 1:
                setChainId('137'); // Polygon
                break;
            case 2:
                setChainId('56'); // Binance
                break;
            case 3:
                setChainId('42161'); // Arbitrum
                break;
            default:
                setChainId('1');
        }
    };

    return (
        <>
            <div className='tracker'>
                <div className='block_chain_tracker'>
                    <h3>
                        Blockchain <span className="heading">Real-time Gas</span> fee Tracker
                    </h3>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Ethereum" {...a11yProps(0)} sx={{ color: 'white', margin: "0px 40px", fontSize: "21px" }} />
                            <Tab label="Polygon" {...a11yProps(1)} sx={{ color: 'white', margin: "0px 40px", fontSize: "21px" }} />
                            <Tab label="Binance" {...a11yProps(2)} sx={{ color: 'white', margin: "0px 40px", fontSize: "21px" }} />
                            <Tab label="Arbitrum" {...a11yProps(3)} sx={{ color: 'white', margin: "0px 40px", fontSize: "21px" }} />
                        </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0} chainId={chainId} />
                    <CustomTabPanel value={value} index={1} chainId={chainId} />
                    <CustomTabPanel value={value} index={2} chainId={chainId} />
                    <CustomTabPanel value={value} index={3} chainId={chainId} />
                </div>
            </div>

           
        </>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default Tracker;
