import os from 'os';

const getServerInfo = (req, res) => {
    const response = [
        {
            name: 'arch',
            value: os.arch(),
        },
        {
            name: 'cpus',
            value: `${os.cpus().length} cpus ${os.cpus()[0].model}`,
        },
        {
            name: 'memory',
            value: `${Math.round(os.totalmem() / 1024 ** 3)} GB`,
        },
        {
            name: 'hostname',
            value: os.hostname(),
        },
        {
            name: 'platform',
            value: os.platform(),
        },
    ];

    res.json(response);
};

export default {getServerInfo};
