import fetch from 'node-fetch';
import Asset from '../../schema/asset.schema';

let api_url = 'https://api.coingecko.com/api/v3/';

const getCryptoValues = async (req, res) => {
    const assetId = req.query.id;

    await Asset.findOne({id: assetId})
        .then(data => {
            if (data != null) {
                res.status(200).json(data);
            } else {
                res.status(200).json({});
            }
        })
        .catch(error => {
            console.error('An error occured when fetching data from MongoDB', error);
            res.status(404).json({status: 404, message: "Couldn't fetch existing user"});
        });
};

const newCryptoAsset = async (req, res) => {
    const asset = req.body;

    let savedAsset;

    await Asset.findOne({id: asset.id})
        .then(data => {
            savedAsset = data;
        })
        .catch(error => {
            console.error('An error occured when fetching data from MongoDB', error);
            res.status(404).json({status: 404, message: "Couldn't fetch existing user"});
            return;
        });

    if (savedAsset != null) {
        res.status(409).json({status: 409, message: 'Asset already exist'});
        return;
    }

    let newAsset = new Asset({
        id: asset.id,
        name: asset.name,
        assetType: 'CRYPTO',
        amount: asset.amount,
        totalInvested: asset.totalInvested,
    });

    newAsset.save(err => {
        if (err) res.json({Error: err});
    });

    res.status(201).json({status: 201, message: 'OK'});
};

const updateCryptoAsset = async (req, res) => {
    const asset = req.body;

    await Asset.findOneAndUpdate(
        {id: asset.id},
        {totalInvested: asset.totalInvested, amount: asset.amount},
    )
        .then(data => {
            res.status(200).json({status: 200, message: 'OK'});
        })
        .catch(error => {
            console.error(error);
            res.status(404).json({
                status: 404,
                message: 'An error occured when updating record',
            });
        });
};

const getCyrptoAssetValues = async (req, res) => {
    let assets = [];

    await Asset.find({})
        .then(data => {
            assets = data;
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({
                status: 404,
                message: 'An error occured when getting all records for Documents',
            });
            return;
        });
    
    let query = "";

    assets.forEach(asset => {
        query = `${query}${asset.name}%2C`
    });

    const response = await fetch(`${api_url}simple/price?ids=${query}&vs_currencies=gbp`,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'Accept-Language': 'en',
        }
    });

    const data = await response.json();


    let newAssets = [];

    assets.forEach(asset => {
        const newAsset = {
            id: asset.id,
            name: asset.name,
            assetType: asset.assetType,
            amount: asset.amount,
            totalInvested: asset.totalInvested,
            price: data[asset.name.toLowerCase()].gbp,
            value: data[asset.name.toLowerCase()].gbp * asset.amount
        }
        newAssets.push(newAsset);
    });
    
    res.status(200).json(newAssets);
};

module.exports.getCryptoValues = getCryptoValues;
module.exports.newCryptoAsset = newCryptoAsset;
module.exports.updateCryptoAsset = updateCryptoAsset;
module.exports.getCyrptoAssetValues = getCyrptoAssetValues;
